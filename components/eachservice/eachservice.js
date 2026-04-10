"use client";
import classes from "./eachservice.module.css";
import CtaButton from "@/components/buttons/ctabuttonlink";
import ContactSectionAllPages from "@/app/contact/contactSection";
import Link from "next/link";

export default function EachService({ type, propertyArray, heading, content }) {
  return (
    <section className={classes.ourTeam}>
      {/* <h2>{heading}</h2> */}
      <p style={{ marginBottom: "1rem" }}>{content}</p>
      <main className={classes.centralServices}>
        <ul className={classes.ourServices}>
          {propertyArray.map((prop, index) => (
            <li key={prop.heading} className={`${classes.eachService}`}>
              <section
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                }}
              >
                <Link href={prop.link}>
                  <section className={classes.topProgram}>
                    <h3>{prop.heading}</h3>
                  </section>
                </Link>
                <section className={classes.bottomProgram}>
                  <p>{prop.content}</p>
                </section>
              </section>
              <div style={{ margin: "1.5rem", marginLeft: "auto" }}>
                <CtaButton type="link" design="plain" action={prop.link}>
                  Learn more
                </CtaButton>
              </div>
            </li>
          ))}
        </ul>
        <ContactSectionAllPages message="We are happy to get you started with our services" />
      </main>
    </section>
  );
}
