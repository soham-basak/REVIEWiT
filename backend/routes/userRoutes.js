import express from "express";
const router = express.Router();
import {
  registerUser,
  loginUser,
  logOutUser,
} from "../controllers/userController.js";

router.post("/", registerUser);
router.post("/auth", loginUser);
router.post("/logout", logOutUser);

export default router;
