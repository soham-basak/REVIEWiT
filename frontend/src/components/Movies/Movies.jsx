import React from "react";
import Movie from "../Movie/Movie";
import "./Movies.css";

const Movies = ({ movies }) => {
  return (
    <>
      <div className="movie-container">
        {movies.map((movie) => (
          <Movie key={movie._id} movie={movie} />
        ))}
      </div>
    </>
  );
};

export default Movies;
