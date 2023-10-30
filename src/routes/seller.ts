import { Router } from "express";
import * as sellerController from "../controllers/sellerController";
import middlewareController from "../middleware/middlewareController";

const router = Router();

// ADD Seller
router.post("/", middlewareController.verifyTokenAndAdminAuth, sellerController.addSeller);

// GET ALL Seller
router.get("/", middlewareController.verifyTokenAndAdminAuth, sellerController.getAllSeller);

// GET AN Seller
router.get("/:id", middlewareController.verifyTokenAndAdminAuth, sellerController.getSellerByID);

// UPDATE Seller
router.put("/:id", middlewareController.verifyTokenAndAdminAuth, sellerController.updateSeller);

// DELETE Seller
router.delete("/:id", middlewareController.verifyTokenAndAdminAuth, sellerController.deleteSeller);

export default router;

