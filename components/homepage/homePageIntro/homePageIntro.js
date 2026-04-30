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
    primary: { label: "Explore Services", href: "/TechConsult" },
    outline: { label: "Get In Touch", href: "/contact" },
    image: "/images/homepage/software.png",
  },
  {
    // counter: "02 / 04",
    tag: "Project Excellence",
    title: <>Engineering & <span>Project</span> Management</>,
    sub: "From planning to delivery — we bring structure, discipline and technical expertise to help organizations execute complex projects successfully.",
    primary: { label: "Learn More", href: "/engineering" },
    outline: { label: "Contact Us", href: "/contact" },
    image: "/images/homepage/project.jpg",
 
  },
  {
    // counter: "03 / 04",
    tag: "Real Estate & Assets",
    title: <>Property & <span>Asset</span> Management</>,
    sub: "Short and long-term lettings, real estate investment mentorship, and property acquisition guidance for the UK market.",
    // primary: { label: "View Properties", href: "/property" },
    outline: { label: "Enquire Now", href: "/contact" },
     image: "/images/homepage/assets.jpg",
  },
 
  {
    // counter: "04 / 04",
    tag: "Capture Every Moment",
    title: <>Comrade <span>Photography</span> Services</>,
    sub: "Professional photography tailored to your needs — portraits, events, corporate headshots, product photography and drone shots.",
    primary: { label: "Book a Session", href: "/photography" },
    // outline: { label: "View Gallery", href: "#services" },
    image: "/images/homepage/photography.jpg",
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
          background: "#4F772D",
          transition: "width 0.01s linear",
        }}
      >

      </div>

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
        {slide.primary && (
          <Link href={slide.primary.href} className={classes.btnPrimary}>
            {slide.primary.label}
          </Link>
        )}
        {slide.outline && (
          <Link href={slide.outline.href} className={classes.btnOutline}>
            {slide.outline.label}
          </Link>
        )}
      </div>

      {/* Slide Navigation Arrows */}
      <div className={classes.slideNav}>
        <button
          className={classes.navArrow}
          onClick={() =>
            setCurrentIndex((prev) =>
              prev === 0 ? slides.length - 1 : prev - 1
            )
          }
          aria-label="Previous slide"
        >
          ‹
        </button>
        <button
          className={classes.navArrow}
          onClick={() =>
            setCurrentIndex((prev) =>
              prev === slides.length - 1 ? 0 : prev + 1
            )
          }
          aria-label="Next slide"
        >
          ›
        </button>
      </div>

    </section>
  );
}