import React from "react";
import "./ReviewForm.css";

const ReviewForm = () => {
  return (
    <div>
      <div className="review-form-container">
        <div className="container__item">
          <form className="form">
            <input
              type="email"
              className="form__field__one"
              placeholder="Rating"
            />
            <input
              type="email"
              className="form__field"
              placeholder="Write Your Review"
            />
            <button
              type="button"
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
