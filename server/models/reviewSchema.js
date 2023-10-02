import mongoose from "mongoose";

const reviewSchema = mongoose.Schema({
  productId: {
    type: String,
    required: true,
  },
  userId: { type: String, required: true },
  username: {
    type: String,
    required: true,
  },
  stars: {
    type: Number,
    default: 0,
  },
  title: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
});

export default mongoose.model("Reviews", reviewSchema);
