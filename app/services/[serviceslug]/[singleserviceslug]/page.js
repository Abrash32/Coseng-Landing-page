import classes from "./singleServicesPage.module.css";
import { revalidatePath } from "next/cache";
import SideBar from "@/components/sideBar/sideBar";
import HeadedLists from "@/components/headedLists/headedLists";
import SingleHeadedLists from "@/components/headedLists/singleHeadedLists";
import { notFound } from "next/navigation";
import ProgramPricing from "@/components/programPricing/programPricing";
import { IoChevronBackOutline } from "react-icons/io5";
import Link from "next/link";

export async function generateMetadata({ params }) {
  const { serviceslug, singleserviceslug } = await params;
  const res = await fetch(
    `https://www.coseng.co.uk/api/services/${serviceslug}`,
    { next: { revalidate: 3600 } }
  );
  const service = await res.json();
  if (!service || service.length <= 0) {
    notFound();
  }
  const singleservicelink = serviceslug + "/" + singleserviceslug; // fixed
  const singleService = service?.sections.filter(
    (currentSector) => currentSector.link === singleservicelink
  )[0];
  if (!singleService || singleService.length <= 0) {
    notFound();
  }
  return {
    title: `${singleService.heading} - Coseng`,
    description: `Explore our ${service.heading} portfolio. We are happy to get you started`,
  };
}

async function GetSingleServiceDetail({ params }) {
  const { serviceslug, singleserviceslug } = await params;
  const res = await fetch(
    `https://www.coseng.co.uk/api/services/${serviceslug}`,
    { next: { revalidate: 3600 } }
  );
  const service = await res.json();
  if (!service || service.length <= 0) {
    throw new Error(
      "The page or resource you are looking for is not available."
    );
  }
  const singleservicelink = serviceslug + "/" + singleserviceslug; 

  const singleService = service?.sections.filter(
    (currentSector) => currentSector.link === singleservicelink
  )[0];

  if (!singleService || singleService.length <= 0) {
    throw new Error(
      "The page or resource you are looking for is not available."
    );
  }
 
  return (
    <main key={singleService.link} className={classes.singleServicePage}>
      <Link href="/TechConsult">
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "0.5rem",
            alignItems: "center",
            alignContent: "center",
          }}
        >
          <p style={{ marginTop: "0.2rem" }}>
            <IoChevronBackOutline />
          </p>
          <p>Back to services</p>
        </div>
      </Link>
      <section className={classes.singleServiceTop}>
        <h2>{singleService.heading}</h2>
        <div className={classes.textContent}>
          <p>{singleService.content}</p>
          
          {singleService.levels?.length > 0 && (
            <div className={classes.levelsGrid}>
              {singleService.levels.map((level) => (
                <div key={level} className={classes.levelBadge}>
                  {level}
                </div>
              ))}
            </div>
          )}
          
          {singleService.content2 && <p>{singleService.content2}</p>}
          {singleService.content3 && <p>{singleService.content3}</p>}
        </div>
      </section>

      <ProgramPricing
        singleService={singleService}
        serviceName={singleService.heading}
      />
      {singleService.reasons?.length > 0 && (
        <section className={classes.whyUsSection}>
          <h3 className={classes.whyUsTitle}>{singleService.whyus}</h3>
          <div className={classes.whyUsContentWrapper}>
            <div className={classes.whyUsImageWrapper}>
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop" 
                alt="Why Choose Us" 
              />
            </div>
            <ul className={classes.whyUsList}>
              {singleService.reasons.map((reason) => {
                const [title, desc] = reason.split(":");
                return (
                  <li key={title} className={classes.whyUsListItem}>
                    <div>
                      <h4>{title}</h4>
                      <p>{desc}</p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>
      )}
    </main>
  );
}

export default async function Service({ params }) {
  return (
    <GetSingleServiceDetail params={params} />
  );
}