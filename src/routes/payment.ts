import { Router } from "express";
import * as paymentController from "../controllers/paymentController";
import middlewareController from "../middleware/middlewareController";

const router = Router();

// ADD Payment
router.post("/", paymentController.addPayment);

// GET ALL Payment
router.get("/", paymentController.getAllPayment);

// GET AN Payment
router.get("/:id", paymentController.getPaymentByID);

// UPDATE Payment
router.put("/:id", paymentController.updatePayment);

// DELETE Payment
router.delete("/:id", paymentController.deletePayment);

export default router;
