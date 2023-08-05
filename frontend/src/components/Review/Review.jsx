import React from "react";
import "./Review.css";

const Review = ({ review }) => {
  return (
    <div className="review-box">
      <div class="content">
        <ul class="team">
          <li class="member">
            <div class="description">
              <h3>{review.user}</h3>
              <p>
                {review.reviewText}
                <br />
                <a>
                  {review.rating}
                  <i class="fa fa-star" aria-hidden="true"></i>
                </a>
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Review;
