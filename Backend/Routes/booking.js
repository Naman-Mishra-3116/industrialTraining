import { Router } from "express";
import { authenticate } from "../auth/verifyToken.js";
import { getCheckoutSession } from "../controllers/bookingController.js";

const router = Router();

router.post("/checkout-session/:doctorId", authenticate, getCheckoutSession);

export { router as PaymentRouter };
