const http = require('http');
const fs = require('fs');
const url = require('url');
const querystring = require('querystring');

// Define server port
const PORT = 8000;

const serveHTML = (res, path, statusCode = 200) => {
    fs.readFile(path, (err, data) => {
        if (err) {
            res.writeHead(500, { 'Content-Type': 'text/html' });
            res.end('<h1>500 - Server Error</h1>');
        } else {
            res.writeHead(statusCode, { 'Content-Type': 'text/html' });
            res.end(data);
        }
    });
};

// Create server
const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url);
    const pathname = parsedUrl.pathname;
    const query = querystring.parse(parsedUrl.query);

    // Routing
    if (pathname === '/') {
        serveHTML(res, './index.html');
    } else if (pathname === '/about') {
        serveHTML(res, './about.html');
    } else if (pathname === '/contact') {
        serveHTML(res, './contact.html');
    } else if (pathname === '/api') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ message: 'Hello from API', status: 'success' }));
    } else if (pathname === '/text') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('This is plain text response.');
    } else if (pathname === '/user' && query.name) {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(`Hello, ${query.name}!`);
    } else {
        serveHTML(res, './404.html', 404);
    }
});

// Start server
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
