import express from "express"
import { placeOrder } from "../controllers/orderController.js"
import verifyToken from "../middleware/authMiddleware.js";
const router=express.Router()
router.post("/placeOrder",verifyToken,placeOrder);

export default router;
