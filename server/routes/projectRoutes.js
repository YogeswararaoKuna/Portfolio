// routes/projectRoutes.js
const router = require("express").Router();
const Project = require("../models/Project");

// GET all projects
router.get("/", async (req, res) => {
  const projects = await Project.find();
  res.json(projects);
});

// ADD project
router.post("/", async (req, res) => {
  const newProject = new Project(req.body);
  await newProject.save();
  res.json(newProject);
});

// DELETE project
router.delete("/:id", async (req, res) => {
  await Project.findByIdAndDelete(req.params.id);
  res.send("Deleted");
});

module.exports = router;