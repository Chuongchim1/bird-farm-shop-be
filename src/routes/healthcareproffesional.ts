import { Router } from "express";
import * as healthCareProfessionalController from "../controllers/healthCareProffessionalController";
import middlewareController from "../middleware/middlewareController";

const router = Router();

// ADD HealthCareProfessional
router.post("/", middlewareController.verifyTokenAndAdminAuth, healthCareProfessionalController.addHealthCareProfessional);

// GET ALL HealthCareProfessional
router.get("/", healthCareProfessionalController.getAllHealthCareProfessional);

// GET AN HealthCareProfessional
router.get("/:id", healthCareProfessionalController.getHealthCareProfessionalByID);

// UPDATE HealthCareProfessional
router.put("/:id", middlewareController.verifyTokenAndAdminAuth, healthCareProfessionalController.updateHealthCareProfessional);

// DELETE HealthCareProfessional
router.delete("/:id", middlewareController.verifyTokenAndAdminAuth, healthCareProfessionalController.deleteHealthCareProfessional);

export default router;
