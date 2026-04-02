# 📝 Modern Todo App

A sleek, responsive, and lightweight Todo application built with **Node.js**, **Express**, and **EJS**. This project features a custom-crafted UI using **pure CSS3**, moving away from heavy frameworks for a faster, more maintainable experience.

![UI Preview](https://img.shields.io/badge/UI-Modern_CSS3-purple)
![Backend](https://img.shields.io/badge/Backend-Node.js-green)
![Status](https://img.shields.io/badge/Status-Complete-blue)

## ✨ Features

- **Full CRUD Functionality**: Create, Read, Update, and Delete tasks seamlessly.
- **Modern UI**: A clean, gradient-based design with smooth hover transitions and professional typography.
- **Fully Responsive**: Works perfectly on mobile, tablet, and desktop screens.
- **No Dependencies**: Uses standard CSS3 (no Tailwind/Bootstrap) for lightning-fast styling.
- **In-Memory Storage**: Instant updates without the need for a complex database setup.

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher recommended)
- npm (Node Package Manager)

### Installation

1. **Clone the repository**
   ```bash
   git clone [https://github.com/your-username/your-repo-name.git](https://github.com/your-username/your-repo-name.git)
   cd your-repo-name
Install dependencies

Bash
npm install
Set up the directory structure
Ensure your project folder looks like this:

Plaintext
├── public/
│   └── style.css
├── views/
│   ├── index.ejs
│   └── edit.ejs
├── server.js
└── package.json
Run the application

Bash
node server.js
Open your browser
Navigate to http://localhost:8020

🛠️ Tech Stack
Frontend: EJS (Embedded JavaScript templates), CSS3 (Custom Variables & Flexbox)

Backend: Node.js, Express.js

Middleware: Built-in Express URL encoding for form handling

🎨 Customization
The styling is managed via CSS Variables located in public/style.css. You can easily change the theme by updating the :root values:

CSS
:root {
  --primary-gradient: linear-gradient(135deg, #YOUR_COLOR, #YOUR_COLOR);
  --purple-focus: #YOUR_ACCENT_COLOR;
}
