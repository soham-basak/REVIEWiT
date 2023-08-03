import express from "express";
const router = express.Router();
import { getMovies, getOneMovie } from "../controllers/movieController.js";

router.get("/", getMovies);
router.get("/:id", getOneMovie);

export default router;
