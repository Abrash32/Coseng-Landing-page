import { DM_Sans } from "next/font/google";
import classes from "./reviews.module.css";

import { getFromDatabase } from "@/lib/getFromDatabase";
import FeedbackSection from "@/components/homepage/homePageIntro/FeedbackSection";

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
  title: "Reviews - COSENG Limited",
  description: "Read what COSENG clients say about their experience.",
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
    date: review.createdAt ? new Date(review.createdAt).toLocaleDateString("en-US", { year: 'numeric', month: 'short', day: 'numeric' }) : "Recent",
    initials: review.name ? review.name.substring(0, 2).toUpperCase() : "AN",
  }));

  // Fallback to empty array if no reviews found yet, or keep old reviews if preferred? We will just show what's in DB.
  
  return (
    <main className={`${classes.page} ${dmSans.variable}`}>
      <section className={classes.panel}>
        <div className={classes.gridOverlay} />

        <header className={classes.header}>
          <p>Testimonials</p>
          <h1>What people say</h1>
          <span>
            Discover what our satisfied customers have to say about their
            experiences with our products and services.
          </span>
        </header>

        <div className={classes.cards}>
          {formattedReviews.map((review, index) => (
            <article className={classes.card} key={index}>
              <div className={`${classes.avatar} ${classes[`avatar${index % 4}`]}`}>
                {review.initials}
              </div>

              <h2>{review.name}</h2>
              <p className={classes.role}>{review.role}</p>
              <Stars rating={review.rating} />
              <blockquote>{review.quote}</blockquote>
              <time>{review.date}</time>
            </article>
          ))}
        </div>
        
        <div style={{ marginTop: '5rem', position: 'relative', zIndex: 1, maxWidth: '1000px', margin: '5rem auto 0' }}>
          <FeedbackSection />
        </div>
      </section>
    </main>
  );
}
