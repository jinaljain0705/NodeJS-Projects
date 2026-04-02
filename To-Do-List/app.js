const express = require("express");
const app = express();
const PORT = 8020;

app.use(express.urlencoded({ extended: true }));

// Ensure your 'style.css' is inside a folder named 'public'
app.use(express.static("public"));

app.set("view engine", "ejs");

// In-memory storage
let tasks = [];

// --- Routes ---

// 1. Home Page - Show all tasks
app.get("/", (req, res) => {
  res.render("index", { tasks });
});

// 2. Add Task
app.post("/add", (req, res) => {
  const { title, description } = req.body;
  if (title && description) {
    tasks.push({ id: Date.now(), title, description });
  }
  res.redirect("/");
});

// 3. Edit Page - Show form for a specific task
app.get("/edit/:id", (req, res) => {
  const task = tasks.find((t) => t.id == req.params.id);
  if (!task) return res.redirect("/");
  res.render("edit", { task });
});

// 4. Update Task - Handle the edit form submission
app.post("/edit/:id", (req, res) => {
  const { title, description } = req.body;
  const taskId = Number(req.params.id); 
  
  tasks = tasks.map((t) =>
    t.id === taskId ? { ...t, title, description } : t
  );
  res.redirect("/");
});

// 5. Delete Task
app.post("/delete/:id", (req, res) => {
  tasks = tasks.filter((t) => t.id != req.params.id);
  res.redirect("/");
});

// Start server
app.listen(PORT, () =>
  console.log(`🚀 Server running on http://localhost:${PORT}`)
);
