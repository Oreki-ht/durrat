const { createServer } = require('http');
const next = require('next');
const fs = require('fs');
const path = require('path');

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

const port = process.env.PORT || 3000;
// Force production mode to use .next
const app = next({ dev: false });
const handle = app.getRequestHandler();

// Start app preparation - this could fail if .next doesn't exist
console.log('Starting Next.js app preparation...');
app.prepare()
  .then(() => {
    console.log('App preparation successful!');
    // Write port to a file in multiple locations for visibility
    try {
      const locations = [
        path.join(process.cwd(), 'port.txt'),
        path.join(process.cwd(), 'public', 'port.txt')
      ];
      
      locations.forEach(location => {
        try {
          fs.writeFileSync(location, port.toString());
          console.log(`Port number ${port} written to ${location}`);
        } catch (e) {
          console.error(`Failed to write port to ${location}:`, e);
        }
      });
    } catch (err) {
      console.error('Error writing port files:', err);
    }

    // Start the HTTP server
    createServer((req, res) => {
      console.log(`Received request: ${req.method} ${req.url}`);
      handle(req, res);
    }).listen(port, (err) => {
      if (err) throw err;
      console.log(`> Ready on http://localhost:${port}`);
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
  });