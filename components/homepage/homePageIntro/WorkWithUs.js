import classes from "./WorkWithUs.module.css";

export default function WorkWithUs() {
  return (
    <section className={classes.cta}>
      <div className={classes.ctaInner}>
        <div className={classes.ctaText}>
          <p className={classes.ctaTag}>Ready to Take the Next Step?</p>
          <h2 className={classes.ctaTitle}>
            Discover how COSENG Limited can support your{" "}
            <em>business and projects.</em>
          </h2>
        </div>
        <div className={classes.ctaAction}>
          <a href="mailto:info@coseng.co.uk" className={classes.btnPrimary}>
            Work With Us
          </a>
          <span className={classes.ctaEmail}>
            or email us at{" "}
            <a href="mailto:info@coseng.co.uk">info@coseng.co.uk</a>
          </span>
        </div>
      </div>
    </section>
  );
}