"use client";
import { useEffect } from "react";
import classes from "./ServicesModal.module.css";

const tabData = {
  tech: {
    color: "#2a7de1",
    dimColor: "rgba(42,125,225,0.12)",
    icon: "💻",
    division: "Division 01",
    title: "COSENG",
    titleEm: "Tech Consult",
    desc: "Empowering businesses through cutting-edge technology, digital transformation, and strategic IT guidance tailored for growth.",
    stats: [
      { num: "6", label: "Services" },
      { num: "IT", label: "Focus" },
      { num: "360°", label: "Support" },
      { num: "∞", label: "Scalable" },
    ],
    cards: [
      { num: "01 / 06", icon: "🎓", title: "IT Training", desc: "Structured programmes to upskill teams on modern tools, platforms, and best practices in information technology." },
      { num: "02 / 06", icon: "⚙️", title: "Software Development", desc: "Custom software built from the ground up — scalable, secure, and aligned to your business logic." },
      { num: "03 / 06", icon: "📱", title: "App Development", desc: "iOS, Android, and cross-platform mobile applications designed for usability and performance." },
      { num: "04 / 06", icon: "📋", title: "Project Management Training", desc: "Agile, PMP, and Prince2-aligned training to help your teams deliver projects on time and on budget." },
      { num: "05 / 06", icon: "📊", title: "Business Analytics", desc: "Data-driven insights and dashboards that turn raw numbers into strategic decisions." },
      { num: "06 / 06", icon: "🤝", title: "Consultation", desc: "Expert advisory on IT strategy, digital transformation, and technology roadmaps." },
    ],
  },
  engineering: {
    color: "#4f772d",
    dimColor: "rgba(44,184,122,0.12)",
    icon: "🌿",
    division: "Division 02",
    title: "COSENG Biogas",
    titleEm: "& Engineering",
    desc: "Pioneering sustainable energy solutions and environmental engineering for a cleaner, more resilient future.",
    stats: [
      { num: "4", label: "Services" },
      { num: "♻️", label: "Green" },
      { num: "0", label: "Emissions" },
      { num: "↑", label: "Efficiency" },
    ],
    cards: [
      { num: "01 / 04", icon: "🔥", title: "Biogas Systems", desc: "Design, installation, and management of biogas plants that convert organic waste into clean, usable energy." },
      { num: "02 / 04", icon: "☀️", title: "Renewable Energy Solutions", desc: "Comprehensive renewable energy systems including solar, wind integration, and hybrid configurations." },
      { num: "03 / 04", icon: "🌍", title: "Environmental Engineering", desc: "Assessments, compliance, and engineering solutions that protect ecosystems while meeting regulatory standards." },
      { num: "04 / 04", icon: "🧑‍🔬", title: "Engineering Consultation", desc: "Expert guidance on infrastructure planning, feasibility studies, and sustainable engineering strategy." },
    ],
  },
  properties: {
    color: "#e8a234",
    dimColor: "rgba(232,162,52,0.12)",
    icon: "🏢",
    division: "Division 03",
    title: "COSENG",
    titleEm: "Properties",
    desc: "Strategic real estate management and property development that builds lasting value across residential and commercial portfolios.",
    stats: [
      { num: "3", label: "Services" },
      { num: "🏗️", label: "Development" },
      { num: "+", label: "Value" },
      { num: "✓", label: "Managed" },
    ],
    cards: [
      { num: "01 / 03", icon: "🏘️", title: "Real Estate Management", desc: "End-to-end property management including tenant relations, maintenance oversight, and portfolio performance reporting." },
      { num: "02 / 03", icon: "🏗️", title: "Property Development", desc: "From land acquisition to project completion — we deliver residential and commercial developments built to last." },
      { num: "03 / 03", icon: "🔧", title: "Facility Management", desc: "Operational management of buildings and facilities including maintenance, safety compliance, and space optimisation." },
    ],
  },
  photography: {
    color: "#b44fe8",
    dimColor: "rgba(180,79,232,0.12)",
    icon: "📷",
    division: "Division 04",
    title: "COSENG",
    titleEm: "Photography",
    desc: "Visual storytelling crafted with artistry and precision — from live event coverage to polished creative media productions.",
    stats: [
      { num: "3", label: "Services" },
      { num: "🎞️", label: "Creative" },
      { num: "4K", label: "Quality" },
      { num: "✦", label: "Premium" },
    ],
    cards: [
      { num: "01 / 03", icon: "🎥", title: "Coverage Services", desc: "Professional photography and videography coverage for events, corporate functions, weddings, and commercial shoots." },
      { num: "02 / 03", icon: "🖥️", title: "Editing Services", desc: "Expert post-production — photo retouching, colour grading, video editing, and delivery-ready final outputs." },
      { num: "03 / 03", icon: "🎨", title: "Creative Media Solutions", desc: "Brand storytelling through visual content strategy, motion graphics, and multimedia production." },
    ],
  },
};

export default function ServicesModal({ activeTab, onClose }) {
  const data = tabData[activeTab];

  // Close on Escape key
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  if (!data) return null;

  return (
    <div
      className={classes.overlay}
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className={classes.modal}>

        {/* Header */}
        <div className={classes.modalHeader}>
          <div className={classes.brand}>
            <div className={classes.brandEyebrow}>Corporate Services</div>
            <div className={classes.brandName}>
              COSENG{" "}
              <span style={{ color: data.color }}>Solutions</span>
            </div>
          </div>
          <button className={classes.closeBtn} onClick={onClose}>✕</button>
        </div>

        {/* Body */}
        <div className={classes.modalBody}>

          {/* Panel Hero */}
          <div className={classes.panelHero}>
            <div className={classes.heroLeft}>
              <div
                className={classes.heroTag}
                style={{
                  color: data.color,
                  borderColor: data.color,
                  background: data.dimColor,
                }}
              >
                {data.icon} {data.division}
              </div>
              <h2 className={classes.heroTitle}>
                {data.title}
                <br />
                <em style={{ color: data.color }}>{data.titleEm}</em>
              </h2>
              <p className={classes.heroDesc}>{data.desc}</p>
            </div>

            <div className={classes.heroRight}>
              <div className={classes.statBlock}>
                {data.stats.map((stat, i) => (
                  <div key={i} className={classes.stat}>
                    <div
                      className={classes.statNum}
                      style={{ color: data.color }}
                    >
                      {stat.num}
                    </div>
                    <div className={classes.statLabel}>{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Service Cards */}
          <div className={classes.servicesGrid}>
            {data.cards.map((card, i) => (
              <div
                key={i}
                className={classes.svcCard}
                style={{
                  "--card-color": data.color,
                  "--card-dim": data.dimColor,
                  animationDelay: `${i * 0.05 + 0.05}s`,
                }}
              >
                <div
                  className={classes.svcNumber}
                  style={{ color: data.color }}
                >
                  {card.num}
                </div>
                <span className={classes.svcIcon}>{card.icon}</span>
                <div className={classes.svcTitle}>{card.title}</div>
                <div className={classes.svcDesc}>{card.desc}</div>
                <div className={classes.svcArrow}>↗</div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}