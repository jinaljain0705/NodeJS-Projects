## Custom Server Builder

### 📌 Project Overview

Custom Server Builder is a Node.js project that demonstrates how to create a custom HTTP server using the built-in http module without any frameworks like Express.js.
The server handles multiple routes, sends different response types, manages query parameters, and returns proper status codes. Tailwind CSS is used to create modern, responsive HTML pages.

## 💡 Features

✅ Create a Node.js HTTP server without Express.

✅ Handle multiple routes:

```
/ → Home
/about → About
/contact → Contact
/json → JSON Response
/user?name=YourName → User page with query parameters
```

✅ Return different response types:

```
HTML pages
JSON response
```

✅ Proper HTTP status codes:

```
200 → Success
404 → Not Found
```

✅ Responsive Tailwind CSS pages.

✅ Auto-selects a free port if default port is busy.

## 🛠️ Installation & Setup

Clone the repository:

```
git clone https://github.com/your-username/custom-server-builder.git
cd custom-server-builder
```

Install Node.js (if not already installed):

Download Node.js

Run the server:

```
node server.js
```

Access the server in your browser:

```
http://localhost:3002
```

If port 3000 is busy, it will automatically pick a free port and show it in the console.

## 🧩 Routes & Output

### Route	Response Type	Description

| Route                 | Response Type | Description                         |
| --------------------- | ------------- | ----------------------------------- |
| `/`                   | HTML          | Home page with welcome message      |
| `/about`              | HTML          | About page with project description |
| `/contact`            | HTML          | Contact page with email & phone     |
| `/json`               | JSON          | Returns a JSON response             |
| `/user?name=YourName` | HTML          | Shows user-specific greeting        |
| Any other route       | HTML          | 404 Page Not Found                  |


## 🎨 Tailwind Styling

Modern responsive design

Centered content on all pages

Color-coded pages for better distinction

Navbar with hover effects for navigation

## ⚡ Usage Example

Access user page with query parameters:

```
http://localhost:3000/user?name=Rahul
```

JSON page:

```
http://localhost:3000/json
```

404 page example:

```
http://localhost:3000/unknown
```

## 📂 Project Structure

```
CustomServerBuilder/
│
├─ server.js          # Main server file
├─ README.md          # Project documentation
└─ package.json       # Node project file (optional)
```

## 📌 Notes

No external Node packages are required — only Node.js built-in modules (http & url).

The server automatically resolves port conflicts.

## 👨‍💻 Author

Jinal Jain – NodeJS Developer
