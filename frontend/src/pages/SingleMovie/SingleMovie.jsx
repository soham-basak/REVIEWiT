import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
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
  const [reviews, setReviews] = useState([]);
  const [submittingReview, setSubmittingReview] = useState(false);

  useEffect(() => {
    const fetchMovieData = async () => {
      try {
        const res = await axios.get(`/api/movies/${id}`);
        setMovie(res.data);
        setReviews(res.data.reviews || []);
      } catch (error) {
        console.error("Error getting movie data", error);
      }
    };
    fetchMovieData();
  }, [id, submittingReview]);

  const handleNewReview = (newReview) => {
    setReviews([...reviews, newReview]);
    setSubmittingReview(true);
  };

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

            {userInfo ? (
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
            ) : (
              <div class="control">
                <button class="btn">
                  <span class="price">
                    <i class="fa fa-lock"></i>
                  </span>
                  <span class="shopping-cart">
                    <i class="fa fa-user" aria-hidden="true"></i>
                  </span>
                  <span class="buy">
                    <Link className="link" to="/login">
                      LOGIN
                    </Link>
                  </span>
                </button>
              </div>
            )}
          </div>

          <div class="movie-image">
            <img src={movie.image_url} alt="" />
          </div>
        </div>
      </div>
      {isShown && (
        <ReviewForm
          movieId={id}
          onReviewSubmit={(newReview) => handleNewReview(newReview)}
        />
      )}
      <Reviews reviews={movie.reviews} />
      <Footer />
    </>
  );
};

export default SingleMovie;
