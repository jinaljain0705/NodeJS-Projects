const http = require("http");
const url = require("url");

const PORT = 3002;

const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);
    const pathname = parsedUrl.pathname;

    // Tailwind CSS CDN
    const tailwindCDN = `<link href="https://cdn.jsdelivr.net/npm/tailwindcss@3.3.3/dist/tailwind.min.css" rel="stylesheet">`;

    const navbar = `
        <nav class="mb-6 flex gap-4">
            <a href="/" class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Home</a>
            <a href="/about" class="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600">About</a>
            <a href="/contact" class="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">Contact</a>
            <a href="/json" class="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600">JSON</a>
            <a href="/user?name=Rahul" class="px-4 py-2 bg-pink-500 text-white rounded hover:bg-pink-600">User</a>
        </nav>
    `;

    if (pathname === "/") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(`
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <title>Home</title>
                ${tailwindCDN}
            </head>
            <body class="bg-gray-100 text-gray-800 flex flex-col items-center justify-center min-h-screen font-sans">
                <h1 class="text-5xl font-bold mb-4">Welcome to Home Page</h1>
                <p class="text-lg mb-6">This is a modern Tailwind-styled page.</p>
                ${navbar}
            </body>
            </html>
        `);
    } else if (pathname === "/about") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(`
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <title>About</title>
                ${tailwindCDN}
            </head>
            <body class="bg-yellow-50 text-gray-900 flex flex-col items-center justify-center min-h-screen font-sans">
                <h1 class="text-5xl font-bold mb-4">About Us</h1>
                <p class="text-lg mb-6 max-w-xl text-center">We are creating a Node.js server using only the HTTP module. This page is styled using Tailwind CSS for a modern look.</p>
                ${navbar}
            </body>
            </html>
        `);
    } else if (pathname === "/contact") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(`
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <title>Contact</title>
                ${tailwindCDN}
            </head>
            <body class="bg-purple-50 text-gray-900 flex flex-col items-center justify-center min-h-screen font-sans">
                <h1 class="text-5xl font-bold mb-4">Contact Us</h1>
                <p class="text-lg mb-6">Email: example@example.com | Phone: +91 12345 67890</p>
                ${navbar}
            </body>
            </html>
        `);
    } else if (pathname === "/json") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(`
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <title>JSON Response</title>
                ${tailwindCDN}
            </head>
            <body class="bg-indigo-50 text-gray-900 flex flex-col items-center justify-center min-h-screen font-sans">
                <h1 class="text-4xl font-bold mb-4">JSON Response</h1>
                <pre class="bg-white p-6 rounded shadow-lg text-left max-w-xl w-full">
${JSON.stringify({ message: "This is a JSON response" }, null, 2)}
                </pre>
                ${navbar}
            </body>
            </html>
        `);
    } else if (pathname === "/user") {
        const name = parsedUrl.query.name || "Guest";
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(`
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <title>User Page</title>
                ${tailwindCDN}
            </head>
            <body class="bg-pink-50 text-gray-900 flex flex-col items-center justify-center min-h-screen font-sans">
                <h1 class="text-4xl font-bold mb-4">Hello, ${name}!</h1>
                <p class="text-lg mb-6">Welcome to the User page with query parameters.</p>
                ${navbar}
            </body>
            </html>
        `);
    } else {
        res.writeHead(404, { "Content-Type": "text/html" });
        res.end(`
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <title>404 Not Found</title>
                ${tailwindCDN}
            </head>
            <body class="bg-red-50 text-red-700 flex flex-col items-center justify-center min-h-screen font-sans">
                <h1 class="text-5xl font-bold mb-4">404 - Page Not Found</h1>
                ${navbar}
            </body>
            </html>
        `);
    }
});

server.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
