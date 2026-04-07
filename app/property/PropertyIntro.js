import classes from "./PropertyIntro.module.css";

export default function PropertyIntro() {
  return (
    <section className={classes.intro}>
      <div className={classes.content}>
        <h1 className={classes.title}>
          COSENG Property <em>&amp; Asset Management</em>
        </h1>
        <p className={classes.desc}>
          Guiding you through the UK real estate market with ease. We specialize in short and long-term lettings, property acquisition strategy, and exclusive real estate investment mentorship. Whether you want to build an investment portfolio or ensure your assets are meticulously managed, our dedicated team is here to help you maximize your real estate value.
        </p>
      </div>
    </section>
  );
}
