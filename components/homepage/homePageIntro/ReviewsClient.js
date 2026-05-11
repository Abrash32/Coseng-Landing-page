"use client";

import { useState } from "react";
import classes from "./Reviews.module.css";
import FeedbackSection from "./FeedbackSection";

export default function ReviewsClient({ initialReviews }) {
  const [modalReview, setModalReview] = useState(null);

  return (
    <section id="reviews" className={classes.reviews}>
      <div className={classes.reviewsHeader}>
        <p className={classes.sectionTag}>Client Reviews</p>
        <h2 className={classes.sectionTitle}>
          What Our <em>Clients</em> Say
        </h2>
        <p className={classes.sectionSub}>
          Click any card to read the full review
        </p>
      </div>

      <div className={classes.reviewsGrid}>
        {initialReviews.map((review, index) => (
          <div
            key={review._id || index}
            className={classes.reviewCard}
            onClick={() => setModalReview(review)}
            role="button"
            tabIndex={0}
            onKeyDown={(event) => event.key === "Enter" && setModalReview(review)}
          >
            <div className={classes.stars}>{"★".repeat(review.stars || 5)}</div>
            <p className={classes.reviewText}>
              &ldquo;{review.feedback.substring(0, 100)}...&rdquo;
            </p>
            <div className={classes.reviewAuthor}>
              <div className={classes.authorAvatar}>{review.name.charAt(0)}</div>
              <div>
                <strong>{review.name}</strong>
                <span>{review.role || review.company}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <FeedbackSection />

      {modalReview && (
        <div
          className={classes.overlay}
          onClick={(event) =>
            event.target === event.currentTarget && setModalReview(null)
          }
        >
          <div className={classes.modal}>
            <button
              className={classes.closeBtn}
              onClick={() => setModalReview(null)}
              aria-label="Close review"
            >
              ×
            </button>
            <div className={classes.modalStars}>
              {"★".repeat(modalReview.stars || 5)}
            </div>
            <blockquote className={classes.modalQuote}>
              &ldquo;{modalReview.feedback}&rdquo;
            </blockquote>
            <div className={classes.modalAuthor}>
              <div className={classes.authorAvatar}>
                {modalReview.name.charAt(0)}
              </div>
              <div>
                <strong>{modalReview.name}</strong>
                <span>{modalReview.role || modalReview.company}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
