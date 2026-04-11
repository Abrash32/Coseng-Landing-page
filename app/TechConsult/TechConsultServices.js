"use client";
import { useState } from "react";
import Link from "next/link";
import classes from "./TechConsultServices.module.css";

const services = [
  {
    id: 1,
    title: "Data Analytics Training",
    short: "Comprehensive data analytics training for modern businesses.",
    desc: "Our Data Analytics Training programs provide in-depth knowledge and hands-on experience with the latest tools and techniques. Participants will learn to extract insights from complex datasets, create compelling visualizations, and make data-driven decisions that drive business growth.",
    icon: "📊",
    bullets: [
      "Excel for Data Analysis",
      "Power BI Dashboard Creation",
      "Python for Data Science",
      "SQL for Database Management",
      "Data Visualization Techniques",
    ],
  },
  {
    id: 2,
    title: "Software Development",
    short: "Custom software and mobile applications built from the ground up.",
    desc: "Our software development services deliver custom solutions tailored to your business needs. We design, construct, and optimize applications that provide seamless user experiences and drive operational efficiency.",
    icon: "💻",
    bullets: [
      "Custom Web Applications",
      "Mobile App Development",
      "Cloud Solutions",
      "API Integration",
      "UI/UX Design",
    ],
  },
  {
    id: 3,
    title: "Project Management",
    short: "Strategic project management for successful delivery.",
    desc: "Our project management services ensure your initiatives are delivered on time, within budget, and to the highest quality standards. We provide comprehensive oversight from conception to completion, leveraging industry best practices and proven methodologies.",
    icon: "📊",
    bullets: [
      "Project Planning & Scheduling",
      "Risk Management",
      "Resource Allocation",
      "Agile & Scrum Methodologies",
      "Stakeholder Communication",
    ],
  },
  {
    id: 4,
    title: "Business Analytics Consulting",
    short: "Transforming data into actionable insights.",
    desc: "Our business analytics consulting services help organizations leverage their data assets to drive strategic decision-making. We provide expert guidance on data strategy, implementation, and utilization to maximize the value of your analytics investments.",
    icon: "",
    bullets: [
      "Data Strategy Development",
      "Data Governance & Quality",
      "Predictive Analytics",
      "Customer Segmentation",
      "Performance Measurement",
    ],
  },
];

export default function TechConsultServices() {
  const [active, setActive] = useState(null);

  return (
    <section className={classes.services}>
      <div className={classes.header}>
        <p className={classes.tag}>What We Offer</p>
        <h2 className={classes.title}>
          Our Tech Consulting <em>Services</em>
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
                
{service.id === 1 ? (
  <Link
    className={classes.enquireBtn}
    href="/services/training-services/data-analysis-training"
    style={{ display: "inline-block", textAlign: "center", textDecoration: "none" }}
  >
    Learn More
  </Link>
) : (
  <Link
    className={classes.enquireBtn}
    href="/contact"
    style={{ display: "inline-block", textAlign: "center", textDecoration: "none" }}
  >
    Enquire Now
  </Link>
)}

                
             
                            </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}