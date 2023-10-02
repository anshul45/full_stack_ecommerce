import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import { db } from "./db/connect.js";
import authRoutes from "./routes/authRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import reviewRoutes from "./routes/reviewRoutes.js";

const app = express();

dotenv.config();
app.use(bodyParser.json());

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/products", productRoutes);
app.use("/api/v1/reviews", reviewRoutes);

app.listen(process.env.PORT, () => {
  console.log("Listening on port : " + process.env.PORT), db();
});
