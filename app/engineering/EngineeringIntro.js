import classes from "./EngineeringIntro.module.css";

export default function EngineeringIntro() {
  return (
    <section className={classes.intro}>
      <div className={classes.content}>
        {/* <p className={classes.tag}>Division 02</p> */}
        <h1 className={classes.title}>
          COSENG Biogas <em>&amp; Engineering</em>
        </h1>
        <p className={classes.desc}>
          COSENG Limited provides professional engineering solutions across
          environmental engineering, renewable energy, biogas systems, and
          sustainable development. With expertise spanning academic research,
          industry practice, and international projects, we deliver tailored
          engineering services that solve real-world problems and promote
          sustainable growth.
        </p>
      </div>
    </section>
  );
}