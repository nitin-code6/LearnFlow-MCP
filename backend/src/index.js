const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
const authRoutes = require('./routes/auth.routes');
const courseRoutes = require('./routes/course.routes');
const lessonRoutes = require('./routes/lesson.routes');
const progressRoutes = require('./routes/progress.routes');
const adminRoutes = require('./routes/admin.routes');
const courseController = require('./controllers/course.controller');
const lessonController = require('./controllers/lesson.controller');
const { authenticate, authorize } = require('./middleware/auth.middleware');

app.use('/api/auth', authRoutes);
app.use('/api/courses', courseRoutes);
app.use('/api/lessons', lessonRoutes);
app.use('/api/my-progress', progressRoutes);
app.use('/api/admin', adminRoutes);

// Additional routes requested in root level for specific functionalities
app.get('/api/my-courses', authenticate, courseController.getMyCourses);
app.get('/api/courses/:id/lessons', authenticate, lessonController.getCourseLessons);
app.post('/api/courses/:id/lessons', authenticate, authorize(['INSTRUCTOR', 'ADMIN']), lessonController.createLesson);

// Basic route
app.get('/api', (req, res) => {
  res.json({ message: 'Welcome to LearnFlow-MCP Backend API' });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
