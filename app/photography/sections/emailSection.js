import Link from "next/link";
import classes from "./emailSection.module.css";

export default function EmailSection() {
  const emailSection = {
    caption: "Ready to Capture Unforgettable Moments?",
    heading:
      "Let COSENG Limited Transform Your Special Event Into a Beautifully Documented Memory. Reach Out Today to Learn More About Our Photography and Videography Services.",
  };

  return (
    <div className={classes.emailSection}>
      <div className={classes.header}>
        <p>{emailSection.caption}</p>
        <h1>{emailSection.heading}</h1>
      </div>
      <div style={{ margin: "0 auto", marginTop: "1rem" }}>
        <Link href="mailto:contacts@coseng.co.uk" className={classes.ctaBtn}>
          EMAIL US
        </Link>
      </div>
    </div>
  );
}
