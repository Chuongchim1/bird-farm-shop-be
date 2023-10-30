import { Router } from "express";
import * as invoiceController from "../controllers/invoiceController";
import middlewareController from "../middleware/middlewareController";

const router = Router();

// ADD Invoice
router.post("/", middlewareController.verifyTokenAndAdminAuth, invoiceController.addInvoice);

// GET ALL Invoice
router.get("/", middlewareController.verifyTokenAndAdminAuth, invoiceController.getAllInvoice);

// GET AN Invoice
router.get("/:id", middlewareController.verifyTokenAndAdminAuth, invoiceController.getInvoiceByID);

// UPDATE Invoice
router.put("/:id", middlewareController.verifyTokenAndAdminAuth, invoiceController.updateInvoice);

// DELETE Invoice
router.delete("/:id", middlewareController.verifyTokenAndAdminAuth, invoiceController.deleteInvoice);

export default router;
