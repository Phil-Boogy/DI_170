import { Router } from "express";
import { authenticateToken } from "../middleware/authMiddleware.js";
import * as userController from "../controllers/userController.js";

const router = Router();

router.post("/register", userController.registerUser);
router.post("/login", userController.loginUser);
router.post("/logout", userController.logoutUser);
router.post("/refresh", userController.refreshUserToken);

router.get("/profile", authenticateToken, userController.getProfile);

export default router;