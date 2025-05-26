const express = require("express");
const router = express.Router();
const courseController = require("../controllers/courseController");

router.get("/courses", courseController.renderCoursesPage);

module.exports = router;