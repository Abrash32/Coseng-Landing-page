import Link from "next/link";
import classes from "./introTop.module.css";

export default function IntroTop() {
  return (
    <div className={classes.intro}>
      <div className={classes.content}>
        <section className={classes.sections}>
          <h1 className={classes.intotext}>
            Capture Your Special Moments with COSENG Limited{" "}
          </h1>
          <div className={classes.subsection}>
            <p>
              Discover the art of storytelling through our lens, where every
              shot reflects the beauty and emotion of your events.
            </p>

            <div>
              <h5>Professional, Artistic, and Unforgettable</h5>
              <p style={{ color: "yellow" }}>★★★★★</p>
            </div>
            <div className={classes.introTopBtn}>
              <Link href="/photography/book" className={classes.ctaBtn}>
                BOOK US TODAY
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
