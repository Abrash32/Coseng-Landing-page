"use client";
import { useState } from "react";
import Link from "next/link";
import classes from "./SolutionsSection.module.css";

export default function SolutionsClient({ initialSolutions }) {
  const [active, setActive] = useState(initialSolutions[0]);

  return (
    <section id="solutions-section" className={classes.solutionsSection}>
      <div className={classes.solutionsContainer}>

        {/* Header */}
        <div className={classes.solutionsHeader}>
          <p className={classes.solutionsLabel}>COSENG SOLUTIONS</p>
          <h2 className={classes.solutionsTitle}>
            Integrated Expertise Across <em>Four Core Pillars</em>
          </h2>
          <p className={classes.solutionsDescription}>
            Multidisciplinary consultancy services designed to drive innovation and growth.
          </p>
        </div>

        {/* 4 clickable cards */}
        <div className={classes.solutionsGrid}>
          {initialSolutions.map((item) => (
            <div
              key={item.id}
              onClick={() => setActive(item)}
              className={`${classes.solutionCard} ${
                active.id === item.id ? classes.active : ""
              }`}
              style={{
                "--card-color": item.color,
                "--card-dim": item.dimColor,
              }}
            >
              <h3 className={classes.solutionCardTitle}>{item.title}</h3>
              <p className={classes.solutionCardShort}>{item.short}</p>
              {item.id === "photography" ? (
                <Link href="/photography" className={classes.cardHint} onClick={(e) => e.stopPropagation()}>
                  Click to explore →
                </Link>
              ) : item.id === "engineering" ? (
                <Link href="/engineering" className={classes.cardHint} onClick={(e) => e.stopPropagation()}>
                  Click to explore →
                </Link>)
                 : item.id === "tech" ? (
                <Link href="/TechConsult" className={classes.cardHint} onClick={(e) => e.stopPropagation()}>
                  Click to explore →
                </Link>
              ) : (
                <div className={classes.cardHint}>Click to explore →</div>
              )}
            </div>
          ))}
        </div>

        {/* Panel */}
        <div
          className={classes.panel}
          key={active.id}
          style={{
            "--card-color": active.color,
            "--card-dim": active.dimColor,
            backgroundImage: `url(${active.bgImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
          }}
        >
          {/* Panel Hero */}
          <div className={classes.panelHero}>
            <div className={classes.heroLeft}>
              <div
                className={classes.heroTag}
                style={{
                  color: active.color,
                  borderColor: active.color,
                  background: active.dimColor,
                }}
              >
                {active.icon} {active.division}
              </div>
              <h2 className={classes.heroTitle}>
                {active.heroTitle}
                <br />
                <em style={{ color: active.color }}>{active.heroTitleEm}</em>
              </h2>
              <p className={classes.heroDesc}>{active.desc}</p>
            </div>

            <div className={classes.heroRight}>
              <div className={classes.statBlock}>
                {active.stats.map((stat, i) => (
                  <div key={i} className={classes.stat}>
                    <div className={classes.statNum} style={{ color: active.color }}>
                      {stat.num}
                    </div>
                    <div className={classes.statLabel}>{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Service Cards Grid */}
          <div className={classes.servicesGrid}>
            {active.cards.map((card, i) => (
              <div
                key={i}
                className={classes.svcCard}
                style={{ animationDelay: `${i * 0.05 + 0.05}s` }}
              >
                <span className={classes.svcIcon}>{card.icon}</span>
                <div className={classes.svcTitle}>{card.title}</div>
                <div className={classes.svcDesc}>{card.desc}</div>
                <div className={classes.svcArrow}>↗</div>
              </div>
            ))}
          </div>

          {/* CTA button — only shows if solution has a cta */}
          {active.cta && (
            <div className={classes.panelCta}>
              <Link href={active.cta.href} className={classes.btnPrimary}>
                {active.cta.label}
              </Link>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
