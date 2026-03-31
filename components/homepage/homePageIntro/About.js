import classes from "./About.module.css";
import Image from "next/image";

export default function About() {
  return (
    <section className={classes.about}>
      <div className={classes.aboutLeft}>
        <p className={classes.sectionTag}>Who We Are</p>
        <h2 className={classes.sectionTitle}>
          Your Partner for <em>Growth</em> and Innovation
        </h2>
        <p className={classes.aboutText}>
          At COSENG Limited, we deliver data analytics, software development,
          training, and photography services — built around innovation and your
          success. Founded in the UK, we work with businesses and individuals
          across Nigeria and the United Kingdom to help them grow, learn, and
          thrive.
        </p>
        <a href="mailto:contact@coseng.co.uk" className={classes.btnPrimary}>
          Contact Us Today
        </a>

        {/* Stats */}
        <div className={classes.stats}>
          <div className={classes.stat}>
            <div className={classes.statNum}>4+</div>
            <div className={classes.statLabel}>Core Services</div>
          </div>
          <div className={classes.stat}>
            <div className={classes.statNum}>100+</div>
            <div className={classes.statLabel}>Clients Served</div>
          </div>
          <div className={classes.stat}>
            <div className={classes.statNum}>12mo</div>
            <div className={classes.statLabel}>Fellowship Track</div>
          </div>
          <div className={classes.stat}>
            <div className={classes.statNum}>UK</div>
            <div className={classes.statLabel}>Headquarters</div>
          </div>
        </div>
      </div>

      <div className={classes.aboutRight}>
        <div className={classes.imgTop}>
          <Image
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80"
            alt="Our team"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className={classes.imgBottom}>
          <Image
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80"
            alt="Data analytics"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className={classes.badge}>
          <strong>5★</strong>
          <span>Client Rated</span>
        </div>
      </div>
    </section>
  );
}