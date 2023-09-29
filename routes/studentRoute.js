import express from "express";
import { creaeStudent, deletedStudent, getAllStudent } from "../controllers/studentController.js";
import { createStudentMiddleware } from "../utilitils/multer.js";


// init router
const router = express.Router();

// student router
router.get('/student', getAllStudent);
router.post('/student', createStudentMiddleware, creaeStudent);
router.delete('/student', deletedStudent);

// router export
export default router;