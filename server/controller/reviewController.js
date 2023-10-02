export const getAllReviews = async (req, res) => {
  const review = await review.find({ productId: req.body.productId });
};
export const postReview = (req, res) => {
  res.send("It's working");
};
export const editReview = (req, res) => {
  res.send("It's working");
};
