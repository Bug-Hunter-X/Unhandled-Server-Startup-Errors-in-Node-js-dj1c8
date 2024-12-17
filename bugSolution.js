const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World!');
});

const port = 3000;

server.on('error', (err) => {
  console.error('Server error:', err);
  if (err.code === 'EADDRINUSE') {
    console.error('Port already in use. Please choose a different port.');
  }
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});