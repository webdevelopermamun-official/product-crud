import express from "express";
import { CreatelUsers, getAllUsers, registerUser } from "../controllers/userController.js";
import { ageChack } from "../middlewares/userAgeCheckerMiddlewr.js";
import { createUserMiddleware } from "../utilitils/multer.js";


// init router
const router = express.Router();

//create route
router.get("/user", getAllUsers);
router.post("/user",createUserMiddleware, ageChack, CreatelUsers);  
router.post("/register", registerUser);  


//export router
export default router;