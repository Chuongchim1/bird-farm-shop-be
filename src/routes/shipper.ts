import { Router } from "express";
import * as shipperController from "../controllers/shipperController";
import middlewareController from "../middleware/middlewareController";

const router = Router();

// ADD Shipper
router.post("/", middlewareController.verifyTokenAndAdminAuth, shipperController.addShipper);

// GET ALL Shipper
router.get("/", middlewareController.verifyTokenAndAdminAuth, shipperController.getAllShipper);

// GET AN Shipper
router.get("/:id", middlewareController.verifyTokenAndAdminAuth, shipperController.getShipperByID);

// UPDATE Shipper
router.put("/:id", middlewareController.verifyTokenAndAdminAuth, shipperController.updateShipper);

// DELETE Shipper
router.delete("/:id", middlewareController.verifyTokenAndAdminAuth, shipperController.deleteShipper);

export default router;
