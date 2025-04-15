const express = require('express');
const Portfolio = require('../models/Portfolio');
const protectAdmin = require('../middleware/authMiddleware');
const router = express.Router();

// Create Portfolio Project
router.post('/', protectAdmin, async (req, res) => {
  const { title, description, tags, githubLink, liveLink } = req.body;

  try {
    const newProject = new Portfolio({ title, description, tags, githubLink, liveLink });
    await newProject.save();
    res.status(201).json(newProject);
  } catch (error) {
    res.status(400).json({ message: 'Error creating project' });
  }
});

// Get all Portfolio Projects (Public API)
router.get('/', async (req, res) => {
  try {
    const projects = await Portfolio.find();
    res.json(projects);
  } catch (error) {
    res.status(400).json({ message: 'Error fetching projects' });
  }
});

// Update Portfolio Project (Admin only)
router.put('/:id', protectAdmin, async (req, res) => {
  const { title, description, tags, githubLink, liveLink } = req.body;
  try {
    const updatedProject = await Portfolio.findByIdAndUpdate(
      req.params.id,
      { title, description, tags, githubLink, liveLink },
      { new: true }
    );
    res.json(updatedProject);
  } catch (error) {
    res.status(400).json({ message: 'Error updating project' });
  }
});

// Delete Portfolio Project (Admin only)
router.delete('/:id', protectAdmin, async (req, res) => {
  try {
    await Portfolio.findByIdAndDelete(req.params.id);
    res.json({ message: 'Project deleted' });
  } catch (error) {
    res.status(400).json({ message: 'Error deleting project' });
  }
});

module.exports = router;
