import React from "react";
import "./ReviewForm.css";
import { useSelector } from "react-redux";
import { useState } from "react";
import { usePostReviewMutation } from "../../slices/movieApiSlice";

const ReviewForm = ({ movieId, onReviewSubmit }) => {
  const { userInfo } = useSelector((state) => state.auth);
  const [reviewText, setReviewText] = useState("");
  const [rating, setRating] = useState("");
  const [postReview] = usePostReviewMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const reviewData = {
        user: userInfo.name,
        reviewText: reviewText,
        rating: rating,
      };

      const res = await postReview({ id: movieId, data: reviewData }).unwrap();
      setReviewText("");
      setRating("");
      onReviewSubmit(res.data);
    } catch (error) {
      console.error("Error creating review", error);
    }
  };

  return (
    <div>
      <div className="review-form-container">
        <div className="container__item">
          <form className="form" onSubmit={handleSubmit}>
            <input
              type="number"
              className="form__field__one"
              placeholder="Rating"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
            />
            <input
              type="text"
              className="form__field"
              placeholder="Write Your Review"
              value={reviewText}
              onChange={(e) => setReviewText(e.target.value)}
            />
            <button
              type="submit"
              className="btn btn--primary btn--inside uppercase"
            >
              POST
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ReviewForm;
