import classes from "./enrollFormSection.module.css";
// import ContactComponentPhotography from "../components/contactComponent/contact";
import { FaLocationPin, FaRegClock } from "react-icons/fa6";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import RegisterComponent from "@/components/registerComponent/registerComponent";
import CtaButton from "@/components/buttons/ctabuttonlink";
import SingleHeadedLists from "@/components/headedLists/singleHeadedLists";
import { VscFileSubmodule } from "react-icons/vsc";
import { BiSolidBookContent } from "react-icons/bi";
import { ImSortNumbericDesc } from "react-icons/im";
import { IoPricetagsOutline } from "react-icons/io5";
export default function EnrollFormSection({
  program,
  singleService,
  programID,
}) {
  return (
    <main className={classes.ContactSectionMain}>
      <div className={classes.contactLeft}>
        <div>
          <h2>We are happy to get you started</h2>
          {program.description && <p>{program.description}</p>}
        </div>
        {program?.promotion && (
          <h4 style={{ color: "green" }}>{program.promotion}</h4>
        )}

        {programID && (
          <section className={classes.photoBookingIcons}>
            <h1 aria-label="Location Icon">
              <ImSortNumbericDesc />
            </h1>
            <div>
              <h3>Program ID</h3>
              <p>{programID}</p>
            </div>
          </section>
        )}
        {program?.amount && (
          <section className={classes.photoBookingIcons}>
            <h1 aria-label="Location Icon">
              <IoPricetagsOutline />
            </h1>
            <div>
              <h3>Price</h3>
              <p>{program.amount}</p>
            </div>
          </section>
        )}

        {program?.duration && (
          <section className={classes.photoBookingIcons}>
            <h1 aria-label="Phone Icon">
              <FaRegClock />
            </h1>
            <div>
              <h3>Duration</h3>
              <p>{program.duration}</p>
            </div>
          </section>
        )}
        {program?.highlights && (
          <section className={classes.photoBookingIcons}>
            <h1 aria-label="Phone Icon">
              <BiSolidBookContent />
            </h1>
            <div>
              <h3>Program Outline</h3>
              <SingleHeadedLists
                type="highlights"
                lists={program?.highlights}
              />
            </div>
          </section>
        )}
        {program.modules?.length > 0 && (
          <section className={classes.photoBookingIcons}>
            <h1 aria-label="Email Icon">
              <VscFileSubmodule />
            </h1>
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
                  ))}{" "}
                </div>
              </details>
            )}
          </section>
        )}
      </div>

      <div className={classes.contactRight}>
        {/* <ContactComponentPhotography caption="Book Your Session" /> */}
        <RegisterComponent
          programID={programID}
          programDescription={program.description}
          programTitle={program.name}
          programPrice={program.amount}
          programServiceName={singleService.heading}
          programCategory={program.category}
          programDuration={program.duration}
          collection={`${program.category}-${singleService.slug}`}
          caption={`${program.cta} for the ${program.name} ${
            program.category === "service"
              ? `- ${singleService.heading} Services`
              : ""
          }`}
          cta={program.cta}
        />
      </div>
    </main>
  );
}
