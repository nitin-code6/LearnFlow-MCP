const express = require('express');
const router = express.Router();
const courseController = require('../controllers/course.controller');
const { authenticate, authorize } = require('../middleware/auth.middleware');

router.get('/', courseController.getAllCourses);
router.get('/:id', courseController.getCourseById);

router.post('/', authenticate, authorize(['INSTRUCTOR', 'ADMIN']), courseController.createCourse);
router.put('/:id', authenticate, authorize(['INSTRUCTOR', 'ADMIN']), courseController.updateCourse);
router.delete('/:id', authenticate, authorize(['INSTRUCTOR', 'ADMIN']), courseController.deleteCourse);

router.post('/:id/enroll', authenticate, authorize(['STUDENT']), courseController.enrollInCourse);

module.exports = router;
