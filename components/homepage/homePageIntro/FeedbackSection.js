"use client";

import { useActionState, useState } from "react";
import { submitReviewForm } from "@/lib/submissionForms/submitReviewForm";
import classes from "./Reviews.module.css";

export default function FeedbackSection() {
  const [state, formAction, isPending] = useActionState(submitReviewForm, {
    status: "idle",
    message: "",
  });

  const [rating, setRating] = useState(5);
  const [hoverRating, setHoverRating] = useState(0);

  return (
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
          <div className={classes.successMsg}>✓ {state.message}</div>
        )}
        {state.status === "failed" && (
          <div className={`${classes.successMsg} ${classes.errorMsg}`}>
            × {state.message}
          </div>
        )}

        <form action={formAction} className={classes.feedbackForm}>
          <select 
            name="rating" 
            className={classes.input} 
            required 
            defaultValue="5"
            style={{ cursor: 'pointer', appearance: 'none', backgroundImage: 'url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%234f772d%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E")', backgroundRepeat: 'no-repeat', backgroundPosition: 'right 1rem top 50%', backgroundSize: '0.65rem auto' }}
          >
            <option value="5">★★★★★ - Excellent</option>
            <option value="4">★★★★☆ - Very Good</option>
            <option value="3">★★★☆☆ - Average</option>
            <option value="2">★★☆☆☆ - Poor</option>
            <option value="1">★☆☆☆☆ - Terrible</option>
          </select>

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
  );
}
