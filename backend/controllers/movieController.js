import asyncHandler from "express-async-handler";
import Movie from "../models/movieModel.js";

// @desc    Get all movies
// route GET /api/movies
// access public

const getMovies = asyncHandler(async (req, res) => {
  const movies = await Movie.find();
  res.status(200).json(movies);
});

// @desc    Get one movies
// route GET /api/movies/:id
// access public

const getOneMovie = asyncHandler(async (req, res) => {
  const movie = await Movie.findById(req.params.id).populate("reviews");
  res.status(200).json(movie);
});

export { getMovies, getOneMovie };
