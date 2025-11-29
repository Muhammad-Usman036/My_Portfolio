import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import contactRoutes from './routes/contactRoutes.js';
import projectRoutes from './routes/projectRoutes.js';
import resumeRoutes from './routes/resumeRoutes.js';

// Load environment variables
dotenv.config();

// Connect to database
connectDB();

const app = express();

// Middleware
// CORS configuration - allow requests from frontend
const allowedOrigins = [
  'http://localhost:8080',
  'http://localhost:3000',
  process.env.FRONTEND_URL, // Your Vercel/deployed frontend URL
].filter(Boolean); // Remove undefined values

app.use(cors({
  origin: process.env.NODE_ENV === 'production' 
    ? allowedOrigins 
    : true, // Allow all origins in development
  credentials: true,
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Root route
app.get('/', (req, res) => {
  res.json({ 
    success: true, 
    message: 'MERN Portfolio Backend API is running!',
    endpoints: {
      health: '/api/health',
      contact: '/api/contact',
      projects: '/api/projects',
      resume: '/api/resume/download'
    }
  });
});

// Routes
app.use('/api/contact', contactRoutes);
app.use('/api/projects', projectRoutes);
app.use('/api/resume', resumeRoutes);

// Health check route
app.get('/api/health', (req, res) => {
  res.json({ success: true, message: 'Server is running' });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    message: 'Something went wrong!',
    error: process.env.NODE_ENV === 'development' ? err.message : undefined,
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


