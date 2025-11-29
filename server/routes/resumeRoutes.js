import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const router = express.Router();

// Get current directory (ES modules)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// @route   GET /api/resume/download
// @desc    Download resume securely
// @access  Public (but controlled through API)
router.get('/download', (req, res) => {
  try {
    const uploadsDir = path.join(__dirname, '../uploads');
    
    // Try to find the resume file (supports multiple possible names)
    const possibleNames = ['M-Usman_Resume.pdf', 'resume.pdf', 'Muhammad_Usman_Resume.pdf'];
    let resumePath = null;
    
    for (const fileName of possibleNames) {
      const filePath = path.join(uploadsDir, fileName);
      if (fs.existsSync(filePath)) {
        resumePath = filePath;
        break;
      }
    }
    
    // If no file found, try to find any PDF file in uploads folder
    if (!resumePath) {
      const files = fs.readdirSync(uploadsDir);
      const pdfFile = files.find(file => file.toLowerCase().endsWith('.pdf'));
      if (pdfFile) {
        resumePath = path.join(uploadsDir, pdfFile);
      }
    }
    
    // Check if file exists
    if (!resumePath || !fs.existsSync(resumePath)) {
      console.error('Resume file not found in uploads folder');
      return res.status(404).json({
        success: false,
        message: 'Resume not found. Please ensure resume.pdf is in server/uploads folder.'
      });
    }

    // Set headers for download
    const filename = 'Muhammad_Usman_Resume.pdf';
    res.setHeader('Content-Disposition', `attachment; filename="${filename}"`);
    res.setHeader('Content-Type', 'application/pdf');
    
    // Send the file
    res.sendFile(resumePath);
  } catch (error) {
    console.error('Error downloading resume:', error);
    res.status(500).json({
      success: false,
      message: 'Error downloading resume',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
});

export default router;

