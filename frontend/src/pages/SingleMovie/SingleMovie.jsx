import React from "react";
import "./SingleMovie.css";
import Reviews from "../../components/Reviews/Reviews";

const SingleMovie = () => {
  return (
    <>
      <div className="single-movie-card">
        <div className="single-movie-container">
          <div class="product-details">
            <h1>MOVIE NAME</h1>
            <span class="hint-star star">
              4<i class="fa fa-star" aria-hidden="true"></i>
            </span>

            <p class="movie-desc">
              " Let's spread the joy , here is Christmas , the most awaited day
              of the year.Christmas Tree is what one need the most. Here is the
              correct tree which will enhance your Christmas.
            </p>

            <div class="control">
              <button class="btn">
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
            <img
              src="https://images.unsplash.com/photo-1616530940355-351fabd9524b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80"
              alt=""
            />
          </div>
        </div>
      </div>
      <Reviews />
    </>
  );
};

export default SingleMovie;
