# 🚀 Custom Server Builder

A lightweight HTTP server built using **core Node.js modules**—no frameworks required.  
This project demonstrates routing, different response types, query handling, and proper status codes.

---

## 💡 Project Goals

- Create an HTTP server using Node.js `http` module
- Serve HTML, JSON, and plain text responses
- Handle query parameters dynamically
- Return proper status codes: 200, 404, 500

---

## 🛠️ Technologies

- **Node.js** (core)
- **http module** – Server creation
- **fs module** – Read and serve HTML files
- **querystring module** – Parse query parameters
- **nodemon** – Auto server reload during development

---

## 📂 Project Structure


project-folder/
│
├── index.js # Server code
├── index.html # Home page
├── about.html # About page
├── contact.html # Contact page
├── 404.html # Error page
└── README.md # Project documentation


---

## 🔗 Routes

| Route              | Response Type           | Description                       |
|-------------------|-----------------------|-----------------------------------|
| `/`               | HTML                  | Home page                          |
| `/about`          | HTML                  | About page                         |
| `/contact`        | HTML                  | Contact page                       |
| `/api`            | JSON                  | Returns JSON data                  |
| `/text`           | Plain Text            | Simple text response               |
| `/user?name=XYZ`  | Plain Text            | Personalized message using query  |

---

## ⚡ Features

✅ **HTML Response:** Serves `.html` files using `fs.readFile`  
✅ **JSON Response:** Sends JSON at `/api`  
✅ **Plain Text Response:** Serves plain text at `/text`  
✅ **Query Parameters:** Dynamic responses with `/user?name=XYZ`  
✅ **Status Codes:**  
- `200` – Success  
- `404` – Page not found  
- `500` – Server error  

---

## ▶️ Run Project

1. **Install Node.js**  
2. **Install nodemon (optional but recommended):**  
   ```bash
   npm install -g nodemon

Start the server:

nodemon index.js

Open in browser:

http://localhost:8000

🎯 Learning Outcomes

Core Node.js modules & server creation

Routing without frameworks

Handling HTTP requests & query parameters

Serving HTML, JSON, and plain text

Error handling & status codes

👨‍💻 Author

Jinal Jain (NodeJS Developer)
