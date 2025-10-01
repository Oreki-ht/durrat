const { createServer } = require('http');
const next = require('next');
const fs = require('fs');
const path = require('path');

const port = process.env.PORT || 3000;
// Force production mode to use .next
const app = next({ dev: false });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  // Same port writing code...
  try {
    const portFilePath = path.join(__dirname, 'port.txt');
    fs.writeFileSync(portFilePath, port.toString());
    console.log(`Port number ${port} written to ${portFilePath}`);
  } catch (err) {
    const errorFilePath = path.join(__dirname, 'error.log');
    try {
      fs.writeFileSync(errorFilePath, err.toString());
    } catch (e) {
      // Double failure, just log to console
      console.error('Error writing error log:', e);
    }
    console.error('Error writing port file:', err);
  }

  createServer((req, res) => {
    handle(req, res);
  }).listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});