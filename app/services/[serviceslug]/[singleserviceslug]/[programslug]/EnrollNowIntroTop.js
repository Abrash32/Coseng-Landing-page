import classes from "./EnrollNowIntroTop.module.css";

export default function EnrollNowIntroTop({ caption, program, service }) {
  const title = program + " " + service;
  return (
    <section className={classes.intro}>
      <div className={classes.content}>
        <section className={classes.sections}>
          <p>{caption || "Join our happy clients"}</p>
          <h1 className={classes.intotext}>{title || "Enroll Now"}</h1>
        </section>
      </div>
    </section>
  );
}
