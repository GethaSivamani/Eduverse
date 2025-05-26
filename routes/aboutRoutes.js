const express = require('express');
const router = express.Router();
const { getAboutPage } = require('../controllers/aboutController');

// Route for About page
router.get('/about', getAboutPage);

module.exports = router;