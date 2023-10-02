import Review from "../models/reviewSchema.js";

export const getAllReviews = async (req, res) => {
  const product = req.body.productId;

  if (product) {
    const review = await Review.find({ productId: req.body.productId });
    res.status(200).send(review);
  } else {
    res.status(404).send("No Review found");
  }
};

export const postReview = async (req, res) => {
  const user = req.user;
  const addReview = new Review({
    ...req.body,
    userId: user._id,
    username: user.name,
  });
  await addReview.save();
  res.status(200).send("Review added successfully");
};
export const editReview = async (req, res) => {
  const reviewId = req.headers.review_id;
  const user = req.user._id;
  const foundReview = await Review.findOne({ _id: reviewId });
  if (foundReview.userId == user) {
    await Review.findOneAndUpdate(
      { _id: reviewId },
      { ...req.body },
      {
        new: true,
      }
    );

    res.status(200).send("Review updated successfully");
  } else {
    res.status(403).send("You are not authonticated");
  }
};
