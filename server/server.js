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

// // Middleware
// // CORS configuration - allow requests from frontend
// const allowedOrigins = [
//   'http://localhost:8080',
//   'http://localhost:3000',
//   process.env.FRONTEND_URL, // Your Vercel/deployed frontend URL
// ].filter(Boolean); // Remove undefined values

// app.use(cors({
//   origin: process.env.NODE_ENV === 'production' 
//     ? allowedOrigins 
//     : true, // Allow all origins in development
//   credentials: true,
// }));
// Middleware
// CORS configuration - allow requests from frontend
const allowedOrigins = [
  'http://localhost:8080',
  'http://localhost:3000',
  process.env.FRONTEND_URL, // Your Vercel/deployed frontend URL
  'https://my-portfolio-ebon-psi-63.vercel.app', // Add your Vercel URL directly as backup
].filter(Boolean); // Remove undefined values

// Normalize origins (remove trailing slashes for comparison)
const normalizedOrigins = allowedOrigins.map(origin => origin.replace(/\/$/, ''));

// Log for debugging
console.log('Allowed CORS origins:', normalizedOrigins);
console.log('NODE_ENV:', process.env.NODE_ENV);
console.log('FRONTEND_URL:', process.env.FRONTEND_URL);

app.use(cors({
  origin: function (origin, callback) {
    // Allow requests with no origin (like mobile apps or curl requests)
    if (!origin) return callback(null, true);
    
    // In development, allow all origins
    if (process.env.NODE_ENV !== 'production') {
      return callback(null, true);
    }
    
    // Normalize origin (remove trailing slash)
    const normalizedOrigin = origin.replace(/\/$/, '');
    
    // Check if origin matches any allowed origin
    if (normalizedOrigins.includes(normalizedOrigin)) {
      callback(null, true);
    } else {
      console.log('CORS blocked origin:', origin);
      console.log('Normalized origin:', normalizedOrigin);
      console.log('Allowed origins:', normalizedOrigins);
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
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


