"use client";
import { useState } from "react";
import classes from "./PropertyServices.module.css";
import Link from "next/link";

const services = [
  {
    id: 1,
    title: "Short & Long-Term Lettings",
    short: "Comprehensive letting management for maximum rental yield.",
    desc: "From finding the right tenants to handling the day-to-day administration, our letting services ensure your property is occupied and well-maintained. We handle short-term vacation rentals as well as reliable long-term residential leases.",
    icon: "🏠",
    bullets: [
      "Tenant Sourcing & Vetting",
      "Lease Agreement Management",
      "Rent Collection",
      "Maintenance Call-outs",
      "Compliance & Legal Support",
    ],
  },
  {
    id: 2,
    title: "Real Estate Mentorship",
    short: "Learn how to actively invest and build wealth in the UK Property Market.",
    desc: "Our exclusive 1-on-1 mentorship programs equip you with the knowledge to make profitable investments. Learn the secrets of property flipping, buy-to-lets, bridging loans, and portfolio scaling from industry experts.",
    icon: "📈",
    bullets: [
      "Market Analysis & Forecasting",
      "Buy-to-Let Optimization Strategies",
      "Property Flipping Masterclasses",
      "Mortgage & Financing Guidance",
      "Portfolio Diversification",
    ],
  },
  {
    id: 3,
    title: "Property Acquisition",
    short: "Strategic sourcing to find undervalued and high-yield properties.",
    desc: "Finding the right asset is the most important step in real estate investing. We act on your behalf to strategically source, negotiate, and acquire residential and commercial properties that promise excellent return on investment.",
    icon: "🗝️",
    bullets: [
      "Targeted Property Search",
      "Yield Projections & Valuations",
      "Auction Bidding Assistance",
      "Off-Market Deals Access",
      "Negotiations & Closing",
    ],
  },
  {
    id: 4,
    title: "Facility & Asset Management",
    short: "Preserving and enhancing the physical value of your properties over time.",
    desc: "Proper facility management reduces operational expenses and minimizes asset depreciation. We offer end-to-end commercial and residential facility management to assure safety, comfort, and sustained value across your entire portfolio.",
    icon: "🏗️",
    bullets: [
      "Preventative Maintenance Scheduling",
      "Contractor Management",
      "Energy Efficiency Audits",
      "Health & Safety Compliance",
      "Asset Value Tracking",
    ],
  },
];

export default function PropertyServices() {
  const [active, setActive] = useState(null);

  return (
    <section className={classes.services}>
      <div className={classes.header}>
        <p className={classes.tag}>What We Offer</p>
        <h2 className={classes.title}>
          Property <em>Services</em>
        </h2>
        <p className={classes.sub}>
          Click any service to view more details
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
                <Link
                  href="/contact"
                  className={classes.enquireBtn}
                >
                  Enquire Now
                </Link>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
