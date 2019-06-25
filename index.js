const express = require("express");

const app = express();

app.use(express.json());

app.use((req, res, next) => {
  console.count();
  next();
});

const projects = [];

function CheckProjectExists(req, res, next) {
  const project = projects[req.params.id];

  if (!project) {
    return res.status(400).json({ error: "Project does not exist" });
  }

  return next();
}

app.get("/projects", (req, res) => {
  return res.json(projects);
});

app.get("/projects/:id", CheckProjectExists, (req, res) => {
  const project = projects[req.params.id];

  return res.json(project);
});

app.post("/projects", (req, res) => {
  const { id, title, tasks } = req.body;
  var i = projects.length;

  const project = {
    id: i++,
    title,
    tasks: []
  };

  projects.push(project);

  return res.json(projects);
});

app.post("/projects/:id/tasks", CheckProjectExists, (req, res) => {
  const project = projects[req.params.id];
  const { tasks } = req.body;

  project.tasks = tasks.split(", ");

  return res.json(project);
});

app.put("/projects/:id", CheckProjectExists, (req, res) => {
  const project = projects[req.params.id];
  const { title } = req.body;

  project.title = title;
  return res.json(project);
});

app.delete("/projects/:id", CheckProjectExists, (req, res) => {
  const project = projects[req.params.id];

  projects.splice(project, 1);

  return res.json(projects);
});

app.listen(3000);
