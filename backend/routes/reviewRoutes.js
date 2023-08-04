import express from "express";
const router = express.Router();
import { createReview, getReview } from "../controllers/reviewController.js";

router.post("/:id/review", createReview);
router.get("/:id", getReview);

export default router;
