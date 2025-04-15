const Portfolio = require('../models/Portfolio');

// Create Portfolio Project (Admin only)
const createPortfolioProject = async (req, res) => {
  const { title, description, tags, githubLink, liveLink } = req.body;

  try {
    // Create a new project from the request body
    const newProject = new Portfolio({ title, description, tags, githubLink, liveLink });

    // Save the new project to the database
    await newProject.save();
    res.status(201).json(newProject);  // Return the created project
  } catch (error) {
    res.status(400).json({ message: 'Error creating project', error });
  }
};

// Get all Portfolio Projects (Public API)
const getAllPortfolioProjects = async (req, res) => {
  try {
    // Fetch all portfolio projects from the database
    const projects = await Portfolio.find();

    // Return the list of projects
    res.json(projects);
  } catch (error) {
    res.status(400).json({ message: 'Error fetching projects', error });
  }
};

// Get a single Portfolio Project by ID (Public API)
const getPortfolioProjectById = async (req, res) => {
  try {
    // Find the project by ID
    const project = await Portfolio.findById(req.params.id);

    // If project not found, return an error
    if (!project) {
      return res.status(404).json({ message: 'Project not found' });
    }

    // Return the found project
    res.json(project);
  } catch (error) {
    res.status(400).json({ message: 'Error fetching project', error });
  }
};

// Update a Portfolio Project (Admin only)
const updatePortfolioProject = async (req, res) => {
  const { title, description, tags, githubLink, liveLink } = req.body;

  try {
    // Find and update the project by ID
    const updatedProject = await Portfolio.findByIdAndUpdate(
      req.params.id,
      { title, description, tags, githubLink, liveLink },
      { new: true }  // Return the updated document
    );

    // If project not found, return an error
    if (!updatedProject) {
      return res.status(404).json({ message: 'Project not found' });
    }

    // Return the updated project
    res.json(updatedProject);
  } catch (error) {
    res.status(400).json({ message: 'Error updating project', error });
  }
};

// Delete a Portfolio Project (Admin only)
const deletePortfolioProject = async (req, res) => {
  try {
    // Find and delete the project by ID
    const deletedProject = await Portfolio.findByIdAndDelete(req.params.id);

    // If project not found, return an error
    if (!deletedProject) {
      return res.status(404).json({ message: 'Project not found' });
    }

    // Return a success message
    res.json({ message: 'Project deleted' });
  } catch (error) {
    res.status(400).json({ message: 'Error deleting project', error });
  }
};

module.exports = {
  createPortfolioProject,
  getAllPortfolioProjects,
  getPortfolioProjectById,
  updatePortfolioProject,
  deletePortfolioProject,
};
