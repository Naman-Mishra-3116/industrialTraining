import { Router } from "express";

import {
  loginFunction,
  addAdmin,
  getAllAdmin,
} from "../controllers/adminController.js";
import {
  availableBookings,
  availableDoctors,
  availableUsers,
} from "../controllers/adminController.js";

const router = Router();

router.post("/:id/add", addAdmin);
router.post("/login", loginFunction);
router.get("/:id/allUsers", availableUsers);
router.get("/:id/allDoctors", availableDoctors);
router.get("/:id/allBookings", availableBookings);
router.get("/:id/allAdmins", getAllAdmin);

export { router as AdminRouter };
