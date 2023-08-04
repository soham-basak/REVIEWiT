import express from "express";
const router = express.Router();
import {
  registerUser,
  loginUser,
  logOutUser,
<<<<<<< HEAD
  getUserProfile,
  updateUserProfile,
} from "../controllers/userController.js";
import { protect } from "../middleware/authMiddleware.js";
=======
} from "../controllers/userController.js";
>>>>>>> 368fba6ed5bf5c6ec49788745135a177d169a9f6

router.post("/", registerUser);
router.post("/auth", loginUser);
router.post("/logout", logOutUser);
<<<<<<< HEAD
router.get("/profile", protect, getUserProfile);
router.put("/profile", protect, updateUserProfile);
=======
>>>>>>> 368fba6ed5bf5c6ec49788745135a177d169a9f6

export default router;
