import classes from "./centralTopPages.module.css";
export default function CentralTopPages({ image, title, caption }) {
  return (
    <section
      className={classes.intro}
      style={{
        backgroundImage: `url(${image || "/images/aboutus/aboutus.jpg"})`,
      }}
    >
      <div className={classes.content}>
        <section className={classes.sections}>
          <p>{caption || "Explore our"}</p>
          <h1 className={classes.intotext}>{title || ""}</h1>
        </section>
      </div>
    </section>
  );
}
