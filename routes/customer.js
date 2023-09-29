import express from "express";
import multer from "multer";
import { createCustomer } from "../controllers/customerController.js";
import { createCustomerMiddleware } from "../utilitils/multer.js";

// init router
const router = express.Router();




// router
router.post('/customer',createCustomerMiddleware, createCustomer)




// export router
export default router;