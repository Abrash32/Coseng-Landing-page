import classes from "./TechConsultIntro.module.css";

export default function TechConsultIntro() {
  return (
    <section className={classes.intro}>
      <div className={classes.content}>
        <p className={classes.tag}>Division 01</p>
        <h1 className={classes.title}>
          COSENG Tech Consulting <em>&amp; Training</em>
        </h1>
        <p className={classes.desc}>
          At COSENG, we simplify technology to help you grow.
           We specialize in Data Analytics Training, teaching you how to turn raw numbers into clear, actionable decisions. 
           Beyond data, we build the robust Software and Web Applications your business needs to function smoothly, 
           all backed by Strategic Project Management to ensure your goals are met on time. 
          Our mission is to empower you with the right tools and skills to thrive in a digital world.
          
        </p>
      </div>
    </section>
  );
}