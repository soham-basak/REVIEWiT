import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import "./SingleMovie.css";
import Reviews from "../../components/Reviews/Reviews";
import Footer from "../../components/Footer/Footer";
import ReviewForm from "../../components/ReviewForm/ReviewForm";

const SingleMovie = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState("");
  const { userInfo } = useSelector((state) => state.auth);
  const [isShown, setIsShown] = useState(false);

  useEffect(() => {
    const fetchMovieData = async () => {
      try {
        const res = await axios.get(`/api/movies/${id}`);
        setMovie(res.data);
      } catch (error) {
        console.error("Error getting movie data", error);
      }
    };
    fetchMovieData();
  }, [id]);

  const handleClick = (event) => {
    setIsShown((current) => !current);
  };
  return (
    <>
      <div className="single-movie-card">
        <div className="single-movie-container">
          <div class="product-details">
            <h1>{movie.name}</h1>
            <span class="hint-star star">
              {movie.rating}
              <i class="fa fa-star" aria-hidden="true"></i>
            </span>

            <p class="movie-desc">{movie.description}</p>

            <div class="control">
              <button class="btn" onClick={handleClick}>
                <span class="price">
                  <i class="fa fa-film"></i>
                </span>
                <span class="shopping-cart">
                  <i class="fa fa-star" aria-hidden="true"></i>
                </span>
                <span class="buy">REVIEW IT</span>
              </button>
            </div>
          </div>

          <div class="movie-image">
            <img src={movie.image_url} alt="" />
          </div>
        </div>
      </div>
      {isShown && <ReviewForm />}
      <Reviews reviews={movie.reviews} />
      <Footer />
    </>
  );
};

export default SingleMovie;
