import express from "express";
const reviewRoutes = express.Router();
import {
  getAllReviews,
  postReview,
  editReview,
} from "../controller/reviewController.js";
import { verifyUser } from "../middleware/userMiddleware.js";
reviewRoutes.get("/", getAllReviews);
reviewRoutes.post("/add", verifyUser, postReview);
reviewRoutes.put("/edit", verifyUser, editReview);

export default reviewRoutes;
