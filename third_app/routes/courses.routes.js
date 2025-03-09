import { Router } from "express";
import { validateAddCourse } from "../validator/course.validator.js";
import {
  getAllCourses,
  handelAddCourse,
  handelChangeCourseById,
  handleDeleteCourse,
  handleGetCourseById,
} from "../controllers/courses.controller.js";
const router = new Router();

router
  .route("/api/courses")
  .get(getAllCourses)
  .post(validateAddCourse, handelAddCourse);

router
  .route("/api/courses/:course_id")
  .get(handleGetCourseById)
  .delete(handleDeleteCourse)
  .patch(handelChangeCourseById);

export { router as CoursesRouter };
