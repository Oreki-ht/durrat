const { createServer } = require('http');
const next = require('next');
const fs = require('fs');
const path = require('path');

const port = process.env.PORT || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  // Create a file to store the port number
  if (!dev) {
    try {
      const portFilePath = path.join(__dirname, 'public', 'port.txt');
      fs.writeFileSync(portFilePath, port.toString());
      console.log(`Port number ${port} written to ${portFilePath}`);
    } catch (err) {
      console.error('Error writing port file:', err);
    }
  }

  createServer((req, res) => {
    handle(req, res);
  }).listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});