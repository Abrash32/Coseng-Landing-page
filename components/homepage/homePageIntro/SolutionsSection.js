"use client";
import { useState } from "react";
import Link from "next/link";
import classes from "./SolutionsSection.module.css";

const solutions = [
  {
    id: "tech",
    title: "Tech Consulting",
    short: "Strategic digital and data-driven transformation.",
    bgImage: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1600&q=80",
    color: "#2a7de1",
    dimColor: "rgba(42,125,225,0.12)",
    icon: "💻",
    heroTitle: "COSENG",
    heroTitleEm: "Tech Consult",
    desc: "Empowering businesses through cutting-edge technology, digital transformation, and strategic IT guidance tailored for growth.",
    stats: [
      { num: "4", label: "Services" },
      { num: "IT", label: "Focus" },
      { num: "360°", label: "Support" },
      { num: "∞", label: "Scalable" },
    ],
    cards: [
      { icon: "📊", title: "Data Analytics Training", desc: "Comprehensive data analytics training covering Excel, Power BI, Python, and SQL — equipping your team with skills employers actually want." },
      { icon: "⚙️", title: "Software Development", desc: "Custom software and mobile applications built from the ground up — scalable, secure, and aligned to your business logic." },
      { icon: "📋", title: "Project Management Training", desc: "Agile, PMP, and Prince2-aligned training to help your teams deliver projects on time and on budget." },
      { icon: "📊", title: "Business Analytics", desc: "Data-driven insights and dashboards that turn raw numbers into strategic decisions." },
    ],
    cta: null,
  },
  {
    id: "engineering",
    title: "Engineering",
    short: "Precision-driven engineering consultancy.",
    color: "#2cb87a",
    dimColor: "rgba(44,184,122,0.12)",
    bgImage: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1600&q=80",
    icon: "🌿",
    heroTitle: "COSENG Biogas",
    heroTitleEm: "& Engineering",
    desc: "Pioneering sustainable energy solutions and environmental engineering for a cleaner, more resilient future.",
    stats: [
      { num: "4", label: "Services" },
      { num: "♻️", label: "Green" },
      { num: "0", label: "Emissions" },
      { num: "↑", label: "Efficiency" },
    ],
    cards: [
      { icon: "🔥", title: "Biogas Systems", desc: "Design, installation, and management of biogas plants that convert organic waste into clean, usable energy." },
      { icon: "☀️", title: "Renewable Energy Solutions", desc: "Comprehensive renewable energy systems including solar, wind integration, and hybrid configurations." },
      { icon: "🌍", title: "Environmental Engineering", desc: "Assessments, compliance, and engineering solutions that protect ecosystems while meeting regulatory standards." },
      { icon: "🧑‍🔬", title: "Engineering Consultation", desc: "Expert guidance on infrastructure planning, feasibility studies, and sustainable engineering strategy." },
    ],
    // cta: null,
  },
  {
    id: "properties",
    title: "Properties",
    short: "Strategic property investment solutions.",
    color: "#e8a234",
    dimColor: "rgba(232,162,52,0.12)",
    bgImage: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1600&q=80",
    icon: "🏢",
    heroTitle: "COSENG",
    heroTitleEm: "Properties",
    desc: "Strategic real estate management and property development that builds lasting value across residential and commercial portfolios.",
    stats: [
      { num: "3", label: "Services" },
      { num: "🏗️", label: "Development" },
      { num: "+", label: "Value" },
      { num: "✓", label: "Managed" },
    ],
    cards: [
      { icon: "🏘️", title: "Real Estate Management", desc: "End-to-end property management including tenant relations, maintenance oversight, and portfolio performance reporting." },
      { icon: "🏗️", title: "Property Development", desc: "From land acquisition to project completion — we deliver residential and commercial developments built to last." },
      { icon: "🔧", title: "Facility Management", desc: "Operational management of buildings and facilities including maintenance, safety compliance, and space optimisation." },
    ],
    cta: null,
  },
  {
    id: "photography",
    title: "Photography",
    short: "Premium corporate visual storytelling.",
    color: "#b44fe8",
    dimColor: "rgba(180,79,232,0.12)",
    bgImage: "https://images.unsplash.com/photo-1486916856992-e4db22c8df33?w=1600&q=80",
    icon: "📷",
    heroTitle: "COSENG",
    heroTitleEm: "Photography",
    desc: "Visual storytelling crafted with artistry and precision — from live event coverage to polished creative media productions.",
    stats: [
      { num: "3", label: "Services" },
      { num: "🎞️", label: "Creative" },
      { num: "4K", label: "Quality" },
      { num: "✦", label: "Premium" },
    ],
    cards: [
      { icon: "🎥", title: "Coverage Services", desc: "Professional photography and videography coverage for events, corporate functions, weddings, and commercial shoots." },
      { icon: "🖥️", title: "Editing Services", desc: "Expert post-production — photo retouching, colour grading, video editing, and delivery-ready final outputs." },
      { icon: "🎨", title: "Creative Media Solutions", desc: "Brand storytelling through visual content strategy, motion graphics, and multimedia production." },
    ],
    // cta: { label: "Book a Session →", href: "/photography" },
  },
];

export default function CosengSolutionsSection() {
  const [active, setActive] = useState(solutions[0]);

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
          {solutions.map((item) => (
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