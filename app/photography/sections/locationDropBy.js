import Link from "next/link";
import classes from "./locationDropBy.module.css";

export default function LocationDropBySection() {
  const emailSection = {
    caption: "Discover Photography Adventures",
    heading:
      "Capture Moments That Matter in Stunning Locations with Our Expert Team",
  };

  return (
    <section className={classes.locationBg}>
      <div className={classes.emailSection}>
        <div className={classes.header}>
          <p>{emailSection.caption}</p>
          <h1>{emailSection.heading}</h1>
        </div>
        <div style={{ margin: "0 auto", marginTop: "1rem" }}>
          <Link
            href="https://maps.app.goo.gl/kiAWhx6RMZmYJvDn9"
            target="_blank"
            className={classes.ctaBtn}
          >
            VISIT US FOR A SESSION
          </Link>
        </div>
      </div>
    </section>
  );
}
