import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import authRoutes from "./routes/authRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import { db } from "./db/connect.js";

const app = express();

dotenv.config();
app.use(bodyParser.json());

app.use("/api/v1/users", authRoutes);
app.use("/api/v1/products", productRoutes);

app.listen(process.env.PORT, () => {
  console.log("Listening on port : " + process.env.PORT), db();
});
