"use client";

import { useEffect, useRef, useState } from "react";
import classes from "./reviews.module.css";

function useCountUp(target, duration = 1800, decimals = 0, startOnVisible = true) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const hasRun = useRef(false);

  useEffect(() => {
    if (!startOnVisible) return;

    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasRun.current) {
          hasRun.current = true;
          const start = performance.now();

          const tick = (now) => {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            // ease-out cubic
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = parseFloat((eased * target).toFixed(decimals));
            setCount(current);
            if (progress < 1) requestAnimationFrame(tick);
          };

          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [target, duration, decimals, startOnVisible]);

  return { count, ref };
}

export default function StatsStrip({ totalReviews, avgRating }) {
  const clientCount = totalReviews > 0 ? totalReviews : 100;

  const { count: clients, ref: r1 } = useCountUp(clientCount, 1200, 0);
  const { count: rating, ref: r2 } = useCountUp(parseFloat(avgRating) || 5.0, 1100, 1);
  const { count: stars, ref: r3 } = useCountUp(5, 1000, 0);

  return (
    <div className={classes.statStrip}>
      <div className={classes.statInner}>
        <div className={classes.statItem} ref={r1}>
          <span className={classes.statNum}>
            {clients}{totalReviews > 0 ? "+" : "+"}
          </span>
          <span className={classes.statLabel}>Happy Clients</span>
        </div>

        <div className={classes.statItem} ref={r2}>
          <span className={classes.statNum}>{rating.toFixed(1)}</span>
          <span className={classes.statLabel}>Average Rating</span>
        </div>

        <div className={classes.statItem} ref={r3}>
          <span className={classes.statNum}>{stars}★</span>
          <span className={classes.statLabel}>Consistent Service</span>
        </div>
      </div>
    </div>
  );
}
