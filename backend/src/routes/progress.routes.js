const express = require('express');
const router = express.Router();
const progressController = require('../controllers/progress.controller');
const { authenticate, authorize } = require('../middleware/auth.middleware');

router.get('/', authenticate, authorize(['STUDENT']), progressController.getMyProgress);

module.exports = router;
