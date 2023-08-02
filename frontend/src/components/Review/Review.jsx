import React from "react";
import "./Review.css";

const Review = () => {
  return (
    <div className="review-box">
      <div class="content">
        <ul class="team">
          <li class="member">
            <div class="description">
              <h3>Chris Coyier</h3>
              <p>
                Chris is a front-end developer and designer. He writes a bunch
                of HTML, CSS, and JavaScript and shakes the pom-poms for
                CodePen.
                <br />
                <a>
                  4<i class="fa fa-star" aria-hidden="true"></i>
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
