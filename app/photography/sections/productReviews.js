"use client";
import classes from "./productReviews.module.css";
import { FaQuoteRight } from "react-icons/fa";
import { useEffect, useState } from "react";

export default function ProductReviews({ initialReviews = [] }) {
  const defaultArticles = [
    {
      name: "Jane D.",
      review:
        "COSENG captured every beautiful moment of our wedding. The photos are absolutely stunning, and I couldn’t be happier with the service. Highly recommend!",
    },
    {
      name: "Mark T.",
      review:
        "The videography team did an amazing job at our corporate event. The highlights video was professional and perfectly captured the spirit of the day. Great job!",
    },
    {
      name: "Samantha R.",
      review:
        "We loved the live streaming option! Our family abroad could join our celebration in real-time. COSENG made it easy and seamless.",
    },
    {
      name: "Peter K.",
      review:
        "COSENG’s photographers are top-notch! They captured beautiful, candid moments at our family reunion, and the photos are memories we’ll cherish forever.",
    },
    {
      name: "Olivia W.",
      review:
        "Their team was so professional and attentive to detail. Our corporate headshots turned out perfectly. Highly recommend them for any event!",
    },
  ];

  const articles = initialReviews.length > 0
    ? initialReviews.map(r => ({
        name: r.name || "Anonymous",
        review: r.feedback || r.review || "",
      }))
    : defaultArticles;

  const productReviews = {
    caption: "Authentic Feedback",
    heading: "Real Experiences, Honest Reviews",
    articles: articles,
  };
  const [reviews, setReviews] = useState(1);
  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    function resizeWindowFunction() {
      if (window.outerWidth <= 799) {
        setReviews(1);
      } else {
        setReviews(3);
      }
    }

    if (typeof window !== "undefined") {
      window.addEventListener("resize", resizeWindowFunction);
      resizeWindowFunction(); // Set initial state based on window size
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("resize", resizeWindowFunction);
      }
    };
  }, []);

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setStartIndex(
        (prevIndex) => (prevIndex + 1) % productReviews.articles.length
      );
    }, 5000);

    return () => clearTimeout(timeOut);
  }, [startIndex, productReviews.articles.length]);

  const endIndex = (startIndex + reviews) % productReviews.articles.length;
  const displayedReviews =
    endIndex > startIndex
      ? productReviews.articles.slice(startIndex, endIndex)
      : [
          ...productReviews.articles.slice(startIndex),
          ...productReviews.articles.slice(0, endIndex),
        ];

  return (
    <div className={classes.productReviews}>
      <div className={classes.header}>
        <p>{productReviews.caption}</p>
        <h1>{productReviews.heading}</h1>
      </div>
      <ul className={classes.productReviewsContent}>
        {displayedReviews.map((article) => (
          <li
            key={article.name}
            className={
              displayedReviews.includes(article)
                ? classes.partOfActive
                : classes.notPartOfActive
            }
          >
            <div>
              <h3 className={classes.reviewStar}>★★★★★</h3>
              <p>{article.review}</p>
            </div>
            <div className={classes.reviewMarker}>
              <p>{article.name}</p>
              <h1>
                <FaQuoteRight />
              </h1>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
