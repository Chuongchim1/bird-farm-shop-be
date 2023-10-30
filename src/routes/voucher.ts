import { Request, Response, Router } from "express";
import * as voucherController from "../controllers/voucherController";
import middlewareController from "../middleware/middlewareController";

const router = Router();

// ADD Voucher
router.post("/", middlewareController.verifyTokenAndAdminAuth, voucherController.addVoucher);

// GET ALL Voucher
router.get("/", middlewareController.verifyTokenAndAdminAuth, voucherController.getAllVoucher);

// GET AN Voucher
router.get("/:id", middlewareController.verifyTokenAndAdminAuth, voucherController.getVoucherByID);

// UPDATE Voucher
router.put("/:id", middlewareController.verifyTokenAndAdminAuth, voucherController.updateVoucher);

// DELETE Voucher
router.delete("/:id", middlewareController.verifyTokenAndAdminAuth, voucherController.deleteVoucher);

export default router;
