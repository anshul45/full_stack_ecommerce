import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import userRoutes from "./routes/userRoutes.js";

const app = express();
dotenv.config();
app.use(bodyParser.json());

app.use("/api/v1/users", userRoutes);

app.listen(process.env.PORT, () =>
  console.log("Listening on port : " + process.env.PORT)
);
