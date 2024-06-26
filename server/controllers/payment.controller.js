import { instance } from "../index.js";
import crypto from "crypto";

export const checkout = async (req, res) => {
  const options = {
    amount: Number(req.body.amount * 100), // amount in the smallest currency unit
    currency: "INR",
  };
  const order = await instance.orders.create(options);
  console.log(order);
  res.status(200).json({
    success: true,
    order,
  });
};

export const paymentVerification = async (req, res) => {
  const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
    req.body;

  const body = razorpay_order_id + "|" + razorpay_payment_id;

  const expectedSignature = crypto
    .createHmac("sha256", process.env.RAZORPAY_API_SECRET)
    .update(body.toString())
    .digest("hex");
  // console.log(razorpay_signature);
  // console.log(expectedSignature);
  // res.status(200).json({ success: true });
  res.redirect("/success");

  // const isAuthentic = expectedSignature === razorpay_signature;

  // if (isAuthentic) {
  //   res.status(200).json({ success: true });
  // } else {
  //   res.status(400).json({ success: false });
  // }
};

export const getKeyId = async (req, res) => {
  res.json({
    success: true,
    key_id: process.env.RAZORPAY_API_KEY,
  });
};
