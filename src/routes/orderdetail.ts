import { Router } from "express";
import * as orderDetailController from "../controllers/orderDetailController";
import middlewareController from "../middleware/middlewareController";

const router = Router();

// ADD OrderDetail
router.post("/", orderDetailController.addOrderDetail);

// GET ALL OrderDetail
router.get("/", orderDetailController.getAllOrderDetail);

// GET AN OrderDetail
router.get("/:id", middlewareController.verifyTokenAndAdminAuth, orderDetailController.getOrderDetailByID);

// UPDATE OrderDetail
router.put("/:id", middlewareController.verifyTokenAndAdminAuth, orderDetailController.updateOrderDetail);

// DELETE OrderDetail
router.delete("/:id", middlewareController.verifyTokenAndAdminAuth, orderDetailController.deleteOrderDetail);

export default router;
