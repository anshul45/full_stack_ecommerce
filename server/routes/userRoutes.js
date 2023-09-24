import express from "express";
import { userLogin, userSignin } from "../controller/userController.js";

const userRoutes = express.Router();

userRoutes.get("/login", userLogin);

userRoutes.post("/signin", userSignin);

export default userRoute;
