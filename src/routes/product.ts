import { Router } from "express";
import * as productController from "../controllers/productController";
import middlewareController from "../middleware/middlewareController";

const router = Router();

// ADD Product
router.post("/", middlewareController.verifyTokenAndAdminAuth, productController.addProduct);

// GET ALL Product
router.get("/", productController.getAllProduct);

// GET AN Product
router.get("/:id", productController.getProductByID);

// UPDATE Product
router.put("/:id", middlewareController.verifyTokenAndAdminAuth, productController.updateProduct);

// DELETE Product
router.delete("/:id", middlewareController.verifyTokenAndAdminAuth, productController.deleteProduct);

export default router;
