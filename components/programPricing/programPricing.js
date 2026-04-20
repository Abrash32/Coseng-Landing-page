// "use client";
import CtaButton from "../buttons/ctabuttonlink";
import SingleHeadedLists from "../headedLists/singleHeadedLists";
import classes from "./programPricing.module.css";
import slugify from "slugify";

export default async function ProgramPricing({ singleService, serviceName }) {
  return (
    <>
      {singleService.programs?.length > 0 && (
        <article
          className={`${classes.servicePrograms} ${
            singleService.programs?.length <= 1 ? classes.singleProgram : ""
          }`}
        >
          {singleService.programs.map((program) => (
            <div key={program.name} className={`${classes.program}`}>
              <section className={classes.topProgram}>
                <h2>{program.name}</h2>
                {program.description && <p>{program.description}</p>}
              </section>
              <section className={classes.bottomProgram}>
                <SingleHeadedLists
                  lists={program.highlights}
                  type="highlights"
                />
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.5rem",
                    // marginTop: "1rem",
                  }}
                >
                  {program.duration && (
                    <p>
                      Duration:
                      <span style={{ fontWeight: "bold" }}>
                        {" "}
                        {program.duration}
                      </span>
                    </p>
                  )}
                  {program.amount && (
                    <p>
                      Price:{" "}
                      <span style={{ fontWeight: "bold" }}>
                        {program.amount}
                      </span>
                    </p>
                  )}
                </div>
                {program.promotion && (
                  <h4 style={{ color: "green" }}>{program.promotion}</h4>
                )}
              </section>
              <div
                style={{
                  margin: "1rem",
                  marginTop: "1.5rem",
                }}
              >
                <CtaButton
                  type="link"
                  width="100%"
                  design="raised"
                  action={`${singleService.slug}/${program.slug || slugify(program.name, { lower: true })}`}
                >
                  {program.cta}
                </CtaButton>
              </div>
              {program.modules?.length > 0 && (
                <details>
                  <summary>View Program Modules</summary>
                  <div
                    style={{ padding: "1rem" }}
                    className={classes.programModules}
                  >
                    <h3>Program Modules</h3>
                    {program.modules.map((module, index) => (
                      <div key={index}>
                        <h4 style={{ marginTop: "0.5rem" }}>
                          {index + 1 + "." + " " + module.title}
                        </h4>
                        <SingleHeadedLists
                          type="highlights"
                          lists={module.highlights}
                        />
                      </div>
                    ))}
                    <div style={{ marginTop: "1rem" }}>
                      <CtaButton
                        type="link"
                        width="100%"
                        design="raised"
                        action={`/${singleService.link}/${program.slug || slugify(program.name, { lower: true })}`}
                      >
                        {program.cta}
                      </CtaButton>
                    </div>
                  </div>
                </details>
              )}
            </div>
          ))}
        </article>
      )}
    </>
  );
}
