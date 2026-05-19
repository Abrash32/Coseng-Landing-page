import { DM_Sans } from "next/font/google";
import classes from "./reviews.module.css";

import { getFromDatabase } from "@/lib/getFromDatabase";
import FeedbackSection from "@/components/homepage/homePageIntro/FeedbackSection";
import StatsStrip from "./StatsStrip";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--reviews-font",
});

function StarIcon() {
  return (
    <svg className={classes.star} viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 2.7l2.9 5.88 6.49.94-4.7 4.58 1.11 6.46L12 17.51l-5.8 3.05 1.11-6.46-4.7-4.58 6.49-.94L12 2.7z" />
    </svg>
  );
}

function Stars({ rating }) {
  return (
    <div className={classes.stars} aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: rating }).map((_, index) => (
        <StarIcon key={index} />
      ))}
    </div>
  );
}

export const metadata = {
  title: "Client Reviews – COSENG Limited",
  description:
    "Read authentic reviews from satisfied COSENG clients. Discover what people say about our engineering, photography, and professional services.",
};

export default async function ReviewsPage() {
  let fetchedReviews = [];
  try {
    fetchedReviews = await getFromDatabase("reviews", {}, { sort: { createdAt: -1 } });
  } catch (error) {
    console.error("Failed to fetch reviews:", error);
  }

  const formattedReviews = fetchedReviews.map((review) => ({
    name: review.name || "Anonymous",
    role: review.role || review.company || "Client",
    rating: parseInt(review.stars || review.rating) || 5,
    quote: review.feedback || review.review || "",
    date: review.createdAt
      ? new Date(review.createdAt).toLocaleDateString("en-US", {
          year: "numeric",
          month: "short",
          day: "numeric",
        })
      : "Recent",
    initials: review.name ? review.name.substring(0, 2).toUpperCase() : "AN",
  }));

  const totalReviews = formattedReviews.length;
  const avgRating =
    totalReviews > 0
      ? (
          formattedReviews.reduce((sum, r) => sum + r.rating, 0) / totalReviews
        ).toFixed(1)
      : "5.0";

  return (
    <main className={`${classes.page} ${dmSans.variable}`}>

      {/* ── HERO ── */}
      <section className={classes.heroBand}>
        <div className={classes.heroInner}>
          <span className={classes.eyebrow}>Testimonials</span>
          <h1 className={classes.heroTitle}>
            What our clients <em>say</em>
          </h1>
          <span className={classes.heroSub}>
            Discover what our satisfied customers have to say about their
            experiences with COSENG&apos;s products and services.
          </span>
        </div>
      </section>

      {/* ── STAT STRIP ── */}
      <StatsStrip totalReviews={totalReviews} avgRating={avgRating} />

      {/* ── CARDS ── */}
      <section className={classes.cardsBand}>
        <span className={classes.bandLabel}>Reviews</span>
        <h2 className={classes.bandTitle}>Voices from our community</h2>

        {formattedReviews.length === 0 ? (
          <div className={classes.emptyState}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M21 12c0 4.418-4.03 8-9 8a9.77 9.77 0 01-4-.82L3 20l1.09-3.27A7.93 7.93 0 013 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            <p>No reviews yet — be the first to share your experience!</p>
          </div>
        ) : (
          <div className={classes.cards}>
            {formattedReviews.map((review, index) => (
              <article className={classes.card} key={index}>
                <div className={classes.cardTop}>
                  <div className={`${classes.avatar} ${classes[`avatar${index % 4}`]}`}>
                    {review.initials}
                  </div>
                  <div className={classes.cardMeta}>
                    <h2>{review.name}</h2>
                    <p className={classes.role}>{review.role}</p>
                  </div>
                </div>

                <Stars rating={review.rating} />
                <blockquote>{review.quote}</blockquote>
                <time>{review.date}</time>
              </article>
            ))}
          </div>
        )}
      </section>

      {/* ── FEEDBACK FORM ── */}
      <section className={classes.feedbackBand}>
        <div className={classes.feedbackInner}>
          <FeedbackSection />
        </div>
      </section>
    </main>
  );
}
