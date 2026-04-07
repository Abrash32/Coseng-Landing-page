import classes from "./ContactIntro.module.css";

export default function ContactIntro() {
  return (
    <section className={classes.intro}>
      <div className={classes.content}>
        <p className={classes.tag}>Get In Touch</p>
        <h1 className={classes.title}>
          Let&apos;s <em>Work Together</em>
        </h1>
        <p className={classes.desc}>
          Whether you have a project in mind, need more information about our
          services, or just want to say hello — we&apos;d love to hear from you.
          Our team is ready to help.
        </p>
      </div>
    </section>
  );
}