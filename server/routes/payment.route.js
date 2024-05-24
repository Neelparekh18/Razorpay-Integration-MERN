import express from "express";
import {
  checkout,
  getKeyId,
  paymentVerification,
} from "../controllers/payment.controller.js";

const router = express.Router();

router.route("/checkout").post(checkout);
router.route("/payment-verification").post(paymentVerification);
router.route("/get-key-id").get(getKeyId);

export default router;
