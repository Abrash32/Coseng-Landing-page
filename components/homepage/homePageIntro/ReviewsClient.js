"use client";
import { useState, useActionState } from "react";
import classes from "./Reviews.module.css";
import { submitReviewForm } from "@/lib/submissionForms/submitReviewForm";

export default function ReviewsClient({ initialReviews }) {
  const [modalReview, setModalReview] = useState(null);
  
  const [state, formAction, isPending] = useActionState(submitReviewForm, {
    status: "idle",
    message: "",
  });

  return (
    <section className={classes.reviews}>

      {/* Header */}
      <div className={classes.reviewsHeader}>
        <p className={classes.sectionTag}>Client Reviews</p>
        <h2 className={classes.sectionTitle}>
          What Our <em>Clients</em> Say
        </h2>
        <p className={classes.sectionSub}>
          Click any card to read the full review
        </p>
      </div>

      {/* Reviews Grid */}
      <div className={classes.reviewsGrid}>
        {initialReviews.map((review, index) => (
          <div
            key={review._id || index}
            className={classes.reviewCard}
            onClick={() => setModalReview(review)}
          >
            <div className={classes.stars}>{"★".repeat(review.stars || 5)}</div>
            <p className={classes.reviewText}>
              &ldquo;{review.feedback.substring(0, 100)}...&rdquo;
            </p>
            <div className={classes.reviewAuthor}>
              <div className={classes.authorAvatar}>
                {review.name.charAt(0)}
              </div>
              <div>
                <strong>{review.name}</strong>
                <span>{review.role || review.company}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Feedback Form */}
      <div className={classes.feedbackSection}>
        <div className={classes.feedbackLeft}>
          <p className={classes.sectionTag}>Share Your Experience</p>
          <h3 className={classes.feedbackTitle}>
            Leave Us <em>Your Feedback</em>
          </h3>
          <p className={classes.feedbackDesc}>
            We value every client&apos;s experience. Let us know how we did and
            help others make informed decisions.
          </p>
        </div>

        <div className={classes.feedbackRight}>
          {state.status === "successful" && (
            <div className={classes.successMsg}>
              ✓ {state.message}
            </div>
          )}
          {state.status === "failed" && (
            <div className={`${classes.successMsg} ${classes.errorMsg}`} style={{ backgroundColor: '#fee2e2', color: '#991b1b', border: '1px solid #fecaca' }}>
              ✕ {state.message}
            </div>
          )}
          
          <form action={formAction} className={classes.feedbackForm}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className={classes.input}
            />
            <input
              type="text"
              name="company"
              placeholder="Company (Optional)"
              className={classes.input}
            />
            <textarea
              name="message"
              placeholder="Your Feedback"
              required
              className={classes.textarea}
            />
            <button type="submit" className={classes.submitBtn} disabled={isPending}>
              {isPending ? "Submitting..." : "Submit Feedback"}
            </button>
          </form>
        </div>
      </div>

      {/* Modal */}
      {modalReview && (
        <div
          className={classes.overlay}
          onClick={(e) =>
            e.target === e.currentTarget && setModalReview(null)
          }
        >
          <div className={classes.modal}>
            <button
              className={classes.closeBtn}
              onClick={() => setModalReview(null)}
            >
              ✕
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
