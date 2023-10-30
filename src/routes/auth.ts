import { Router } from 'express';
import authController from '../controllers/authController';

const router = Router();

// Register
router.post("/register", authController.registerUrl);

// Login
router.post("/login", authController.loginUser);

export default router;
