const http = require('http');
const fs = require('fs');
const path = require('path');
const { networkInterfaces } = require('os');

const PORT = 3000;

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon'
};

// Get local network IPv4 addresses
const nets = networkInterfaces();
const localIps = [];
for (const name of Object.keys(nets)) {
  for (const net of nets[name]) {
    if (net.family === 'IPv4' && !net.internal) {
      localIps.push(net.address);
    }
  }
}

const server = http.createServer((req, res) => {
  console.log(`${req.method} ${req.url}`);

  const parsedUrl = new URL(req.url, `http://${req.headers.host || 'localhost'}`);
  const pathname = parsedUrl.pathname;

  // 1. API: GET /api/data?class=xxx
  if (req.method === 'GET' && pathname === '/api/data') {
    const classId = parsedUrl.searchParams.get('class') || '1-5';
    const dataPath = path.join(__dirname, `data_${classId}.json`);

    fs.readFile(dataPath, 'utf-8', (err, content) => {
      res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
      if (err) {
        // File doesn't exist yet, return empty database structure
        res.end(JSON.stringify({ countries: [], groups: [] }));
      } else {
        res.end(content);
      }
    });
    return;
  }

  // 2. API: POST /api/save
  if (req.method === 'POST' && pathname === '/api/save') {
    let body = '';
    req.on('data', chunk => {
      body += chunk;
    });
    req.on('end', () => {
      try {
        const parsed = JSON.parse(body);
        const classId = parsed.classId;
        if (!classId) {
          res.writeHead(400, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ error: 'Missing classId' }));
          return;
        }
        const dataPath = path.join(__dirname, `data_${classId}.json`);
        fs.writeFile(dataPath, body, 'utf-8', err => {
          if (err) {
            res.writeHead(500, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ error: 'Failed to write file' }));
          } else {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ success: true }));
          }
        });
      } catch (e) {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Invalid JSON' }));
      }
    });
    return;
  }

  // 3. Static Files handling
  let filePath = req.url === '/' ? '/index.html' : pathname;
  filePath = path.join(__dirname, filePath);

  // Safe path normalization check to prevent directory traversal
  if (!filePath.startsWith(__dirname)) {
    res.statusCode = 403;
    res.end('Access Denied');
    return;
  }

  const extname = String(path.extname(filePath)).toLowerCase();
  const contentType = MIME_TYPES[extname] || 'application/octet-stream';

  fs.readFile(filePath, (error, content) => {
    if (error) {
      if (error.code === 'ENOENT') {
        res.statusCode = 404;
        res.end('File Not Found');
      } else {
        res.statusCode = 500;
        res.end(`Server Error: ${error.code}`);
      }
    } else {
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content);
    }
  });
});

server.listen(PORT, '0.0.0.0', () => {
  console.log(`==========================================================`);
  console.log(`서버가 시작되었습니다!`);
  console.log(`같은 교실(Wi-Fi)의 친구들이 접속할 수 있도록 아래 주소를 공유해 주세요:`);
  console.log(`👉 http://localhost:${PORT}`);
  localIps.forEach(ip => {
    console.log(`👉 http://${ip}:${PORT}`);
  });
  console.log(`==========================================================`);
});
