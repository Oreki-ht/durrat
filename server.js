const { createServer } = require('http');
const next = require('next');
const fs = require('fs');
const path = require('path');

const port = process.env.PORT || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  // Force-write the port file to the application root directory
  try {
    const portFilePath = path.join(__dirname, 'port.txt');
    fs.writeFileSync(portFilePath, port.toString());
    console.log(`Port number ${port} written to ${portFilePath}`);
  } catch (err) {
    // If writing the port fails, write the error to a log file we can see
    const errorFilePath = path.join(__dirname, 'error.log');
    fs.writeFileSync(errorFilePath, err.toString());
    console.error('Error writing port file:', err);
  }

  createServer((req, res) => {
    handle(req, res);
  }).listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});