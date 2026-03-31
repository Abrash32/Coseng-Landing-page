import classes from "./bookNowIntroTop.module.css";

export default function BookNowIntroTop() {
  return (
    <section className={classes.intro}>
      <div className={classes.content}>
        <section className={classes.sections}>
          <p>Book Your Session Anytime</p>
          <h1 className={classes.intotext}>
            Book Your Photography Session with COSENG Limited
          </h1>
        </section>
      </div>
    </section>
  );
}