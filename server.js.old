const { createServer } = require('http');
const { parse } = require('url');
const next = require('next');
const fs = require('fs');
const path = require('path');

// Prevent uncaught exceptions from crashing the process
process.on('uncaughtException', (err) => {
  console.error('UNCAUGHT EXCEPTION:', err);
  fs.appendFileSync('uncaught-exceptions.log', `${new Date().toISOString()}: ${err.stack}\n`);
});

process.on('unhandledRejection', (reason, promise) => {
  console.error('UNHANDLED REJECTION:', reason);
  fs.appendFileSync('unhandled-rejections.log', `${new Date().toISOString()}: ${reason}\n`);
});

// Check available memory periodically to help diagnose issues
setInterval(() => {
  const used = process.memoryUsage();
  console.log(`Memory usage: rss=${Math.round(used.rss / 1024 / 1024)}MB heap=${Math.round(used.heapTotal / 1024 / 1024)}MB`);
}, 60000);

// Log system info
try {
  console.log('===== SERVER STARTUP INFO =====');
  console.log('Current directory:', process.cwd());
  console.log('NODE_ENV:', process.env.NODE_ENV);
  console.log('PORT:', process.env.PORT);
  console.log('.next exists?', fs.existsSync(path.join(process.cwd(), '.next')));
  
  // Try to write diagnostic info to a JSON file
  const sysInfo = {
    cwd: process.cwd(),
    env: process.env.NODE_ENV,
    port: process.env.PORT,
    nextExists: fs.existsSync(path.join(process.cwd(), '.next')),
    dirContents: fs.readdirSync(process.cwd())
  };
  fs.writeFileSync('debug-info.json', JSON.stringify(sysInfo, null, 2));
  console.log('Debug info written to debug-info.json');
} catch (err) {
  console.error('Error writing debug info:', err);
}

// Set safe defaults for production
const port = process.env.PORT || 3000;
const app = next({ dev: false });
const handle = app.getRequestHandler();

// Create a health check endpoint to verify the server is alive
const healthCheck = (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify({ status: 'ok', uptime: process.uptime() }));
};

// Create a request logger for monitoring
const requestCounter = { count: 0, lastReset: Date.now() };
setInterval(() => {
  const now = Date.now();
  const rps = requestCounter.count / ((now - requestCounter.lastReset) / 1000);
  console.log(`Request rate: ${rps.toFixed(2)} requests/sec (${requestCounter.count} requests in ${((now - requestCounter.lastReset) / 1000).toFixed(1)}s)`);
  requestCounter.count = 0;
  requestCounter.lastReset = now;
}, 60000);

// Start app preparation
console.log('Starting Next.js app preparation...');
app.prepare()
  .then(() => {
    console.log('App preparation successful!');
    
    // Write port to files
    try {
      fs.writeFileSync('port.txt', port.toString());
      console.log(`Port number ${port} written to port.txt`);
    } catch (err) {
      console.error('Error writing port file:', err);
    }

    // Create HTTP server with proper error handling
    const server = createServer((req, res) => {
      // Track requests
      requestCounter.count++;
      
      const parsedUrl = parse(req.url, true);
      const { pathname } = parsedUrl;
      
      // Log only certain requests to avoid excessive logging
      if (!pathname.includes('_next/static/')) {
        console.log(`${new Date().toISOString()} - ${req.method} ${pathname}`);
      }
      
      // Health check endpoint
      if (pathname === '/health') {
        return healthCheck(req, res);
      }
      
      // Handle all other requests with Next.js
      try {
        handle(req, res, parsedUrl);
      } catch (err) {
        console.error('Error handling request:', err);
        res.statusCode = 500;
        res.end('Internal Server Error');
      }
    }).listen(port, (err) => {
      if (err) throw err;
      console.log(`> Server ready on http://localhost:${port}`);
    });
    
    // Handle server-level errors
    server.on('error', (err) => {
      console.error('SERVER ERROR:', err);
      fs.appendFileSync('server-errors.log', `${new Date().toISOString()}: ${err.stack}\n`);
    });
    
  })
  .catch(err => {
    console.error('ERROR PREPARING APP:');
    console.error(err);
    
    // Write error to file for debugging
    try {
      fs.writeFileSync('next-error.log', JSON.stringify(err, Object.getOwnPropertyNames(err), 2));
      console.log('Error details written to next-error.log');
    } catch (e) {
      console.error('Could not write error log:', e);
    }
    
    // Exit with error code so PM2 knows to restart
    process.exit(1);
  });