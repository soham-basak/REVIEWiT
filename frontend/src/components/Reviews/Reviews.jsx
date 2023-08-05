import React from "react";
import "./Reviews.css";
import Review from "../Review/Review";

const Reviews = ({ reviews }) => {
  return (
    <>
      {Array.isArray(reviews) && reviews.length > 0 ? (
        <div className="reviews-conatiner">
          {reviews.map((review) => (
            <Review key={review._id} review={review} />
          ))}
        </div>
      ) : (
        <p>No reviews</p>
      )}
    </>
  );
};

export default Reviews;
