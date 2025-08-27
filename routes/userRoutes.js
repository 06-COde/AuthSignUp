import express from "express";
import { authMiddleware } from "../middlewares/authmiddleware.js";
import { getAllUser } from "../controllers/user.controller.js";

const router = express.Router();

router.get("/me", getAllUser);

export default router;
