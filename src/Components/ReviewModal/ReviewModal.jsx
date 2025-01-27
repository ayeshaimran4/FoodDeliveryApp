import React, { useState } from "react";
import axios from "axios";
 import "./reviewModal.css";

const ReviewModal = ({ closeModal }) => {
  const [formData, setFormData] = useState({ type: "Review", message: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/reviews", formData);
      alert("Your review/complaint has been submitted!");
      closeModal(); // Close modal after submission
    } catch (error) {
      console.error("Error submitting review:", error);
      alert("Failed to submit. Please try again.");
    }
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Submit Review or Complaint</h2>
        <form onSubmit={handleSubmit}>
          <select
            value={formData.type}
            onChange={(e) => setFormData({ ...formData, type: e.target.value })}
          >
            <option value="Review">Review</option>
            <option value="Complaint">Complaint</option>
          </select>

          {/* Textarea for Message */}
          <textarea
            placeholder="Write your review or complaint here..."
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
            required
          ></textarea>

          {/* Submit Button */}
          <button type="submit" className="btn-submit">Submit</button>
        </form>

        {/* Close Modal */}
        <button onClick={closeModal} className="btn-close">Close</button>
      </div>
    </div>
  );
};

export default ReviewModal;
