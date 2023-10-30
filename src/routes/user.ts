import { Router } from "express";
import * as userController from "../controllers/userController";
import middlewareController from "../middleware/middlewareController";

const router = Router();

// ADD User
router.post("/", middlewareController.verifyTokenAndAdminAuth, userController.addUser);

// GET ALL User
router.get("/", middlewareController.verifyToken, userController.getAllUsers);

// GET AN User
router.get("/:id", middlewareController.verifyTokenAndAdminAuth, userController.getUserByID);

// UPDATE User
router.put("/:id", middlewareController.verifyTokenAndAdminAuth, userController.updateUser);

// DELETE User
router.delete("/:id", middlewareController.verifyTokenAndAdminAuth, userController.deleteUser);

export default router;
