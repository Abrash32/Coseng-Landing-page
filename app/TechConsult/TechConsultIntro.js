import classes from "./TechConsultIntro.module.css";

export default function TechConsultIntro() {
  return (
    <section className={classes.intro}>
      <div className={classes.overlay} />
      <div className={classes.content}>
        {/* Left Column — Heading */}
        <div className={classes.left}>
          <p className={classes.tag}>Tech Consulting &amp; Training</p>
          <h1 className={classes.title}>
            COSENG Tech <br />
            Consulting <em>&amp; Training</em>
          </h1>
          <span className={classes.accentBar} />
        </div>

        {/* Right Column — Description */}
        <div className={classes.right}>
          <p className={classes.desc}>
            At COSENG, we simplify technology to help you grow.
            We specialize in <strong>Data Analytics Training</strong>, teaching
            you how to turn raw numbers into clear, actionable decisions.
          </p>
          <p className={classes.desc}>
            Beyond data, we build the robust <strong>Software &amp; Web
            Applications</strong> your business needs to function smoothly —
            all backed by <strong>Strategic Project Management</strong> to
            ensure your goals are met on time.
          </p>
          <p className={classes.mission}>
            Our mission is to empower you with the right tools and skills to
            thrive in a digital world.
          </p>
        </div>
      </div>
    </section>
  );
}