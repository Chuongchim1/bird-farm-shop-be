import { Router } from "express";
import * as typeOfBirdController from "../controllers/typeOfBirdController";
import middlewareController from "../middleware/middlewareController";

const router = Router();

// ADD TypeOfBird
router.post("/", middlewareController.verifyTokenAndAdminAuth, typeOfBirdController.addTypeOfBird);

// GET ALL TypeOfBird
router.get("/", middlewareController.verifyTokenAndAdminAuth, typeOfBirdController.getAllTypeOfBird);

// GET AN TypeOfBird
router.get("/:id", middlewareController.verifyTokenAndAdminAuth, typeOfBirdController.getTypeOfBirdByID);

// UPDATE TypeOfBird
router.put("/:id", middlewareController.verifyTokenAndAdminAuth, typeOfBirdController.updateTypeOfBird);

// DELETE TypeOfBird
router.delete("/:id", middlewareController.verifyTokenAndAdminAuth, typeOfBirdController.deleteTypeOfBird);

export default router;
