"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import classes from "./homePageIntro.module.css";

const slides = [
  {
    // counter: "01 / 04",
    tag: "Technology & Data",
    title: <>Tech <span>Consulting</span> Services</>,
    sub: "Web development, software solutions, data analytics consulting and training — we help businesses harness the power of technology.",
    primary: { label: "Explore Services", href: "#services" },
    outline: { label: "Get In Touch", href: "#cta" },
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fHRlY2h8ZW58MHx8MHx8fDA%3D",
  },
  {
    // counter: "02 / 04",
    tag: "Project Excellence",
    title: <>Engineering & <span>Project</span> Management</>,
    sub: "From planning to delivery — we bring structure, discipline and technical expertise to help organizations execute complex projects successfully.",
    primary: { label: "Learn More", href: "/engineering" },
    outline: { label: "Contact Us", href: "#cta" },
    image: "https://plus.unsplash.com/premium_photo-1681691912442-68c4179c530c?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
 
  },
  {
    // counter: "03 / 04",
    tag: "Real Estate & Assets",
    title: <>Property & <span>Asset</span> Management</>,
    sub: "Short and long-term lettings, real estate investment mentorship, and property acquisition guidance for the UK market.",
    primary: { label: "View Properties", href: "#services" },
    outline: { label: "Enquire Now", href: "#cta" },
     image: "https://images.unsplash.com/photo-1580785692886-839ae39fc37c?q=80&w=1173&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
 
  {
    // counter: "04 / 04",
    tag: "Capture Every Moment",
    title: <>Comrade <span>Photography</span> Services</>,
    sub: "Professional photography tailored to your needs — portraits, events, corporate headshots, product photography and drone shots.",
    primary: { label: "Book a Session", href: "/photography" },
    outline: { label: "View Gallery", href: "#services" },
    image: "https://images.unsplash.com/photo-1486916856992-e4db22c8df33?q=80&w=1974&auto=format&fit=crop",
  },
];

export default function HomePageIntro() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progressWidth, setProgressWidth] = useState(0);
  const DURATION = 7000;

  useEffect(() => {
    let startTime = Date.now();
    const deviceWidth = window.innerWidth;
    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const width = (elapsed / DURATION) * deviceWidth;
      if (elapsed < DURATION) {
        setProgressWidth(width);
      } else {
        setProgressWidth(deviceWidth);
        startTime = Date.now();
      }
    }, 10);
    return () => clearInterval(interval);
  }, [currentIndex]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === slides.length - 1 ? 0 : prev + 1
      );
    }, DURATION);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const slide = slides[currentIndex];

  return (
    <section className={classes.hero}>
      <div
  className={classes.heroBg}
  style={{ backgroundImage: `url(${slide.image})` }}
></div>
      <div className={classes.heroGrid}></div>
      <div className={classes.heroGlow}></div>

      {/* Progress bar */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          height: "2px",
          width: `${progressWidth}px`,
          background: "#c9a84c",
          transition: "width 0.01s linear",
        }}
      ></div>

      {/* Slide dots */}
      <div className={classes.slideDots}>
        {slides.map((_, i) => (
          <div
            key={i}
            className={
              i === currentIndex
                ? `${classes.dot} ${classes.dotActive}`
                : classes.dot
            }
            onClick={() => setCurrentIndex(i)}
            style={{ cursor: "pointer" }}
          ></div>
        ))}
      </div>

      {/* Content */}
      <div className={classes.slideCounter}>{slide.counter}</div>
      <span className={classes.heroTag}>{slide.tag}</span>
      <h1 className={classes.heroTitle}>{slide.title}</h1>
      <p className={classes.heroSub}>{slide.sub}</p>
      <div className={classes.heroActions}>
        <Link href={slide.primary.href} className={classes.btnPrimary}>
          {slide.primary.label}
        </Link>
        <Link href={slide.outline.href} className={classes.btnOutline}>
          {slide.outline.label}
        </Link>
      </div>
    </section>
  );
}