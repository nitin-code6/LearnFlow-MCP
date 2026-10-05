const express = require('express');
const router = express.Router();
const lessonController = require('../controllers/lesson.controller');
const { authenticate, authorize } = require('../middleware/auth.middleware');

router.put('/:id', authenticate, authorize(['INSTRUCTOR', 'ADMIN']), lessonController.updateLesson);
router.delete('/:id', authenticate, authorize(['INSTRUCTOR', 'ADMIN']), lessonController.deleteLesson);
router.post('/:id/complete', authenticate, authorize(['STUDENT']), lessonController.markComplete);

module.exports = router;
