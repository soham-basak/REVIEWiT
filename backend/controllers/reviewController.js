import asyncHandler from "express-async-handler";
import Movie from "../models/movieModel.js";
import Review from "../models/reviewModel.js";

// @desc    Create movie review
// route    POST /api/movies/review/:id
// access   private

const createReview = asyncHandler(async (req, res) => {
  const movieId = req.params.id;
  const { user, reviewText, rating } = req.body;

  try {
    const movie = await Movie.findById(movieId);

    if (!movie) {
      return res.status(404).json({
        message: "Movie not found",
      });
    }

    const newReview = new Review({
      user,
      reviewText,
      rating,
    });

    movie.reviews.push(newReview);

    await movie.save();
    res.status(201).json(newReview);
  } catch (error) {
    res.status(404);
    throw new Error("Server error : " + error.message);
  }
});

// @desc    Get movie review
// route    GET /api/movies/review/:id
// access   private

const getReview = asyncHandler(async (req, res) => {
  const movieId = req.params.id;
  try {
    const movie = await Movie.findById(movieId).populate("reviews");

    if (!movie) {
      return res.status(404).json({
        message: "Movie not found",
      });
    }

    res.status(200).json(movie.reviews);
  } catch (error) {
    res.status(404);
    throw new Error("Server error : " + error.message);
  }
});

export { createReview, getReview };
