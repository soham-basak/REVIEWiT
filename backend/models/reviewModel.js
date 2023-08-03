import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
  user: {
    type: String,
    required: true,
  },
  reviewText: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
    min: 1,
    max: 10,
  },
});

const Review = mongoose.model("Review", reviewSchema);
export default Review;
