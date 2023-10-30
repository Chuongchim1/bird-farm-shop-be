import { Router } from "express";
import * as productManagerController from "../controllers/productManagerController";
import middlewareController from "../middleware/middlewareController";

const router = Router();

// ADD ProductManager
router.post("/", middlewareController.verifyTokenAndAdminAuth, productManagerController.addProductManager);

// GET ALL ProductManager
router.get("/", middlewareController.verifyTokenAndAdminAuth, productManagerController.getAllProductManager);

// GET AN ProductManager
router.get("/:id", middlewareController.verifyTokenAndAdminAuth, productManagerController.getProductManagerByID);

// UPDATE ProductManager
router.put("/:id", middlewareController.verifyTokenAndAdminAuth, productManagerController.updateProductManager);

// DELETE ProductManager
router.delete("/:id", middlewareController.verifyTokenAndAdminAuth, productManagerController.deleteProductManager);

export default router;
