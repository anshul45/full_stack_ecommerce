import express from "express";
import { userLogIn, userSignUp } from "../controller/authController.js";
const authRoutes = express.Router();

authRoutes.post("/login", userLogIn);
authRoutes.post("/signup", userSignUp);

export default authRoutes;
