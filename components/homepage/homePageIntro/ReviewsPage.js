"use client";
import { useState } from "react";
import classes from "./Reviews.module.css";

const reviews = [
  {
    name: "Sarah Johnson",
    role: "Business Owner",
    feedback: "Amazing service! The team at COSENG delivered exactly what we needed. Their data analytics training transformed how our team works with data.",
    stars: 5,
  },
  {
    name: "David Smith",
    role: "Project Manager",
    feedback: "Very professional and fast delivery. COSENG's project management expertise helped us deliver on time and within budget. Highly recommend.",
    stars: 5,
  },
  {
    name: "Amina Yusuf",
    role: "Entrepreneur",
    feedback: "Great experience overall. The photography services were outstanding — every shot was exactly what we envisioned for our brand campaign.",
    stars: 5,
  },
  {
    name: "James Okafor",
    role: "Tech Lead",
    feedback: "COSENG's software development team built our web application from scratch. Clean code, great communication, and delivered ahead of schedule.",
    stars: 5,
  },
  {
    name: "Emily Clarke",
    role: "Property Investor",
    feedback: "Their property advisory services gave me the confidence to make my first UK real estate investment. The mentorship was invaluable.",
    stars: 5,
  },
  {
    name: "Richard D.",
    role: "Corporate Client",
    feedback: "Working with COSENG on various projects was a pleasure. Their attention to detail really made a difference to the final outcome.",
    stars: 5,
  },
];

export default function Reviews() {
  const [modalReview, setModalReview] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    message: "",
  });

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Submitted:", formData);
    setSubmitted(true);
    setFormData({ name: "", company: "", message: "" });
    setTimeout(() => setSubmitted(false), 4000);
  }

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
        {reviews.map((review, index) => (
          <div
            key={index}
            className={classes.reviewCard}
            onClick={() => setModalReview(review)}
          >
            <div className={classes.stars}>{"★".repeat(review.stars)}</div>
            <p className={classes.reviewText}>
              &ldquo;{review.feedback.substring(0, 100)}...&rdquo;
            </p>
            <div className={classes.reviewAuthor}>
              <div className={classes.authorAvatar}>
                {review.name.charAt(0)}
              </div>
              <div>
                <strong>{review.name}</strong>
                <span>{review.role}</span>
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
          {submitted && (
            <div className={classes.successMsg}>
              ✓ Thank you for your feedback!
            </div>
          )}
          <form onSubmit={handleSubmit} className={classes.feedbackForm}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className={classes.input}
            />
            <input
              type="text"
              name="company"
              placeholder="Company (Optional)"
              value={formData.company}
              onChange={handleChange}
              className={classes.input}
            />
            <textarea
              name="message"
              placeholder="Your Feedback"
              value={formData.message}
              onChange={handleChange}
              required
              className={classes.textarea}
            />
            <button type="submit" className={classes.submitBtn}>
              Submit Feedback
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
              {"★".repeat(modalReview.stars)}
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
                <span>{modalReview.role}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}