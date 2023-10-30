import { Router } from "express";
import * as foodController from "../controllers/foodController";
import middlewareController from "../middleware/middlewareController";

const router = Router();

// ADD Food
router.post("/", middlewareController.verifyTokenAndAdminAuth, foodController.addFood);

// GET ALL Food
router.get("/", foodController.getAllFood);

// GET AN Food
router.get("/:id", foodController.getFoodByID);

// UPDATE Food
router.put("/:id", middlewareController.verifyTokenAndAdminAuth, foodController.updateFood);

// DELETE Food
router.delete("/:id", middlewareController.verifyTokenAndAdminAuth, foodController.deleteFood);

export default router;
