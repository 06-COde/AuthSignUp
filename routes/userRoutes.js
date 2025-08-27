import express from "express";
import { authMiddleware } from "../middlewares/authmiddleware.js";
import { getUserProfile } from "../controllers/user.controller.js";

const router = express.Router();

router.get("/me", authMiddleware, getUserProfile);

export default router;
