import asyncHandler from "express-async-handler";
import Movie from "../models/movieModel.js";

// @desc    Get all movies
// route GET /api/movies
// access public

const getMovies = asyncHandler(async (req, res) => {
  try {
    const movies = await Movie.find();
    res.status(200).json(movies);
  } catch (error) {
    res.status(404);
    throw new Error("Server error : " + error.message);
  }
});

// @desc    Get one movie
// route GET /api/movies/:id
// access public

const getOneMovie = asyncHandler(async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id).populate("reviews");
    res.status(200).json(movie);
  } catch (error) {
    res.status(404);
    throw new Error("Server error : " + error.message);
  }
});

export { getMovies, getOneMovie };
