const express = require("express");
const router = express.Router();
const Course = require("../models/course");
const {
  getAllCourses,
  getCourseById,
  createCourse,
  updateCourse,
  deleteCourse,
} = require("../controllers/courseControllers");

router.get("/", getAllCourses);

router.get("/:id", getCourseById);

router.post("/", createCourse);
router.put("/:id", updateCourse);
router.delete("/:id", deleteCourse);

module.exports = router;
