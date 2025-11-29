import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    default: '',
  },
  technologies: [{
    type: String,
    trim: true,
  }],
  githubUrl: {
    type: String,
    default: '',
  },
  liveUrl: {
    type: String,
    default: '',
  },
  featured: {
    type: Boolean,
    default: false,
  },
  category: {
    type: String,
    enum: ['web', 'mobile', 'fullstack', 'data', 'other'],
    default: 'web',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model('Project', projectSchema);



