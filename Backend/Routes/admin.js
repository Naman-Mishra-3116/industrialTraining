import { Router } from "express";
import { authenticate } from "../auth/verifyToken.js";
import { loginFunction } from "../controllers/adminController.js";
import {
  availableBookings,
  availableDoctors,
  availableUsers,
} from "../controllers/adminController.js";

const router = Router();

router.post("/add", authenticate);
router.post("/login", loginFunction);
router.get("/:id/allUsers", availableUsers);
router.get("/:id/allDoctors", availableDoctors);
router.get("/:id/allBookings", availableBookings);

export { router as AdminRouter };
