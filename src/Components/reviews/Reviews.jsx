import React from "react";
import "./reviews.css";

const Reviews = ({ reviews }) => {
  return (
    <div className="reviews-section">
      <h2>Reviews & Complaints</h2>
      {reviews.length === 0 ? (
        <p>No reviews or complaints yet!</p>
      ) : (
        reviews.map((review) => (
          <div key={review.id} className="review-item">
            <p>
              <strong>Type:</strong> {review.type}
            </p>
            <p>
              <strong>Message:</strong> {review.message}
            </p>
          </div>
        ))
      )}
    </div>
  );
};

export default Reviews;
