import { Router } from "express";
import { authenticate } from "../auth/verifyToken.js";
import { loginFunction } from "../controllers/adminController.js";

const router = Router();

router.post("/add", authenticate);
router.post("/login", loginFunction);

export { router as AdminRouter };
