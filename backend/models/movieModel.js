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

const movieSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  image_url: {
    type: String,
    required: true,
  },
  reviews: [reviewSchema],
});

const Movie = mongoose.model("Movie", movieSchema);

export default Movie;
