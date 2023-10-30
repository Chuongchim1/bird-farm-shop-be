import { Router } from "express";
import * as customerController from "../controllers/customerController";
import middlewareController from "../middleware/middlewareController";

const router = Router();

// ADD CUSTOMER
router.post("/", middlewareController.verifyTokenAndAdminAuth, customerController.addCustomer);

// GET ALL CUSTOMER
router.get("/", middlewareController.verifyTokenAndAdminAuth, customerController.getAllCustomer);

// GET AN CUSTOMER
router.get("/:id", customerController.getCustomerByID);

// UPDATE CUSTOMER
router.put("/:id", customerController.updateCustomer);

// DELETE CUSTOMER
router.delete("/:id", middlewareController.verifyTokenAndAdminAuth, customerController.deleteCustomer);

export default router;
