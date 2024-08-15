import { Router } from "express";

import {
  loginFunction,
  addAdmin,
  getAllAdmin,
  deleteUserById,
} from "../controllers/adminController.js";
import {
  availableBookings,
  availableDoctors,
  availableUsers,
} from "../controllers/adminController.js";
import { approveDoctorById } from "../controllers/adminController.js";
import { deleteDoctorById, } from "../controllers/adminController.js";

const router = Router();

router.post("/:id/add", addAdmin);
router.post("/login", loginFunction);
router.get("/:id/allUsers", availableUsers);
router.get("/:id/allDoctors", availableDoctors);
router.get("/:id/allBookings", availableBookings);
router.get("/:id/allAdmins", getAllAdmin);
router.post("/:id/approveDoctor", approveDoctorById);
router.post("/:id/deleteDoctor", deleteDoctorById);
router.post("/:id/deleteUser", deleteUserById);
router.post("/forgetPassword",)
export { router as AdminRouter };
