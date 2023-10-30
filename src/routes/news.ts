import { Router } from "express";
import * as newsController from "../controllers/newsController";
import middlewareController from "../middleware/middlewareController";

const router = Router();

// ADD News
router.post("/", middlewareController.verifyTokenAndAdminAuth, newsController.addNews);

// GET ALL News
router.get("/", newsController.getAllNews);

// GET AN News
router.get("/:id", newsController.getNewsByID);

// UPDATE News
router.put("/:id", middlewareController.verifyTokenAndAdminAuth, newsController.updateNews);

// DELETE News
router.delete("/:id", middlewareController.verifyTokenAndAdminAuth, newsController.deleteNews);

export default router;
