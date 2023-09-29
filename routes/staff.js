import express from "express";
import { getAllStaff } from "../controllers/staffController.js";
import { createStaffMiddleware } from "../utilitils/multer.js";

// init router
const router = express.Router();

// student router
router.get('/staff', getAllStaff)
router.post('/staff',createStaffMiddleware, getAllStaff)

// router export
export default router;