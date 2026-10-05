const express = require('express');
const router = express.Router();
const adminController = require('../controllers/admin.controller');
const { authenticate, authorize } = require('../middleware/auth.middleware');

router.get('/users', authenticate, authorize(['ADMIN']), adminController.getAllUsers);
router.get('/stats', authenticate, authorize(['ADMIN']), adminController.getStats);

module.exports = router;
