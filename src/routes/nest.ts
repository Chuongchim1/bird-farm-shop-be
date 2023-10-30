import { Router } from "express";
import * as nestController from "../controllers/nestController";
import middlewareController from "../middleware/middlewareController";

const router = Router();

// ADD Nest
router.post("/", middlewareController.verifyTokenAndAdminAuth, nestController.addNest);

// GET ALL Nest
router.get("/", nestController.getAllNest);

// GET AN Nest
router.get("/:id", nestController.getNestByID);

// UPDATE Nest
router.put("/:id", middlewareController.verifyTokenAndAdminAuth, nestController.updateNest);

// DELETE Nest
router.delete("/:id", middlewareController.verifyTokenAndAdminAuth, nestController.deleteNest);

export default router;
