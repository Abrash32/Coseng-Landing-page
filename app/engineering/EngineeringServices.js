"use client";
import { useState } from "react";
import classes from "./EngineeringServices.module.css";

const services = [
  {
    id: 1,
    title: "Environmental Engineering Services",
    short: "Robust, compliant, and sustainable environmental solutions.",
    desc: "Our Environmental Engineering services offer robust, compliant, and sustainable solutions that support organizations in meeting regulatory and operational requirements. We integrate scientific knowledge, engineering principles, and global best practices to ensure environmental protection and long-term sustainability.",
    icon: "🌍",
    bullets: [
      "Environmental Impact Assessments",
      "Regulatory Compliance & Advisory",
      "Waste Management Solutions",
      "Pollution Control & Remediation",
      "Sustainability Planning",
    ],
  },
  {
    id: 2,
    title: "Renewable Energy & Biogas Engineering",
    short: "Clean, efficient, and affordable energy systems.",
    desc: "COSENG specializes in cutting-edge renewable energy and biogas solutions, built on years of applied research and successful community-based projects. We design, construct, and optimize renewable energy systems that provide clean, efficient, and affordable power.",
    icon: "☀️",
    bullets: [
      "Biogas Plant Design & Installation",
      "Solar Energy Systems",
      "Wind Energy Integration",
      "Hybrid Energy Configurations",
      "Renewable Energy Consultation",
    ],
  },
  {
    id: 3,
    title: "Engineering Consultation",
    short: "Expert guidance on infrastructure and engineering strategy.",
    desc: "Our engineering consultants bring deep expertise across infrastructure planning, feasibility studies, and project supervision. We work with governments, NGOs, and private organizations to deliver actionable insights and technical solutions tailored to your specific context.",
    icon: "🧑‍🔬",
    bullets: [
      "Feasibility Studies",
      "Infrastructure Planning",
      "Technical Advisory",
      "Project Supervision",
      "International Engineering Projects",
    ],
  },
  {
    id: 4,
    title: "Biogas Systems",
    short: "Converting organic waste into clean, usable energy.",
    desc: "We design, install, and manage biogas plants that convert organic waste into clean, usable energy. Our biogas systems are tailored to the specific needs of communities, farms, and industrial clients — delivering reliable energy while reducing environmental impact.",
    icon: "🔥",
    bullets: [
      "Biogas Plant Design",
      "Installation & Commissioning",
      "Operations & Maintenance",
      "Community Biogas Projects",
      "Industrial Biogas Solutions",
    ],
  },
];

export default function EngineeringServices() {
  const [active, setActive] = useState(null);

  return (
    <section className={classes.services}>
      <div className={classes.header}>
        <p className={classes.tag}>What We Offer</p>
        <h2 className={classes.title}>
          Our Engineering <em>Services</em>
        </h2>
        <p className={classes.sub}>
          Click any service to learn more
        </p>
      </div>

      <div className={classes.grid}>
        {services.map((service) => (
          <div
            key={service.id}
            className={`${classes.card} ${
              active?.id === service.id ? classes.active : ""
            }`}
            onClick={() =>
              setActive(active?.id === service.id ? null : service)
            }
          >
            <div className={classes.cardTop}>
              <span className={classes.icon}>{service.icon}</span>
              <h3 className={classes.cardTitle}>{service.title}</h3>
              <p className={classes.cardShort}>{service.short}</p>
              <div className={classes.cardHint}>
                {active?.id === service.id ? "Click to close ↑" : "Click to learn more →"}
              </div>
            </div>

            {active?.id === service.id && (
              <div className={classes.cardExpanded}>
                <p className={classes.cardDesc}>{service.desc}</p>
                <ul className={classes.bullets}>
                  {service.bullets.map((bullet, i) => (
                    <li key={i}>{bullet}</li>
                  ))}
                </ul>
                <button
                  className={classes.enquireBtn}
                  onClick={() => window.location.href = "mailto:info@coseng.co.uk"}
                >
                  Enquire Now
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}