import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import Razorpay from "razorpay";
import PaymentRoutes from "./routes/payment.route.js";

// Load environment variables from .env file
dotenv.config();

const app = express();
const port = process.env.PORT;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());


app.use("/api/v1",PaymentRoutes)

//Instantiate the Razorpay Instance
 export const instance = new Razorpay({
  key_id: process.env.RAZORPAY_API_KEY,
  key_secret: process.env.RAZORPAY_API_SECRET,
});

app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
