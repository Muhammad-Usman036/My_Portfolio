import express from 'express';
import Project from '../models/Project.js';

const router = express.Router();

// @route   GET /api/projects
// @desc    Get all projects
// @access  Public
router.get('/', async (req, res) => {
  try {
    const { featured, category } = req.query;
    let query = {};

    if (featured === 'true') {
      query.featured = true;
    }

    if (category) {
      query.category = category;
    }

    const projects = await Project.find(query).sort({ createdAt: -1 });
    
    res.json({
      success: true,
      count: projects.length,
      data: projects,
    });
  } catch (error) {
    console.error('Get projects error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error',
    });
  }
});

// @route   GET /api/projects/:id
// @desc    Get single project
// @access  Public
router.get('/:id', async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    
    if (!project) {
      return res.status(404).json({
        success: false,
        message: 'Project not found',
      });
    }

    res.json({
      success: true,
      data: project,
    });
  } catch (error) {
    console.error('Get project error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error',
    });
  }
});

// @route   POST /api/projects
// @desc    Create new project (for admin)
// @access  Private (should add auth later)
router.post('/', async (req, res) => {
  try {
    const project = new Project(req.body);
    await project.save();

    res.status(201).json({
      success: true,
      data: project,
    });
  } catch (error) {
    console.error('Create project error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error',
    });
  }
});

export default router;



