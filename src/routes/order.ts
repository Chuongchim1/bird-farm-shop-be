import { Router } from "express";
import * as orderController from "../controllers/orderController";
import middlewareController from "../middleware/middlewareController";

const router = Router();

// ADD Order
router.post("/", middlewareController.verifyToken, orderController.addOrder);

// GET ALL Order
router.get("/", middlewareController.verifyTokenAndAdminAuth, orderController.getAllOrder);

// GET AN Order
router.get("/:id", middlewareController.verifyTokenAndAdminAuth, orderController.getOrderByID);

// UPDATE Order
router.put("/:id", middlewareController.verifyTokenAndAdminAuth, orderController.updateOrder);

// DELETE Order
router.delete("/:id", middlewareController.verifyTokenAndAdminAuth, orderController.deleteOrder);

export default router;
