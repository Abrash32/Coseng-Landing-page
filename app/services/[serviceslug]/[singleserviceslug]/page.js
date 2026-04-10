import { Suspense } from "react";
import classes from "./singleServicesPage.module.css";
import { revalidatePath } from "next/cache";
import Loading from "@/components/loading/loading";
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
    `https://www.coseng.co.uk/api/services/${serviceslug}`
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
    `https://www.coseng.co.uk/api/services/${serviceslug}`
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
      <Link href=".">
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
        <p>{singleService.content}</p>
        {singleService.levels && (
          <SingleHeadedLists lists={singleService.levels} type="highlights" />
        )}
        {singleService.content2 && <p>{singleService.content2}</p>}
        {singleService.content3 && <p>{singleService.content3}</p>}
      </section>

      <ProgramPricing
        singleService={singleService}
        serviceName={singleService.heading}
      />
      {singleService.reasons?.length && (
        <div>
          <h3>{singleService.whyus}</h3>
          <HeadedLists lists={singleService.reasons} />
        </div>
      )}
    </main>
  );
}

export default async function Service({ params }) {
  return (
    <Suspense
      fallback={
        <div style={{ marginTop: "30vh" }}>
          <Loading message="Loading..." />
        </div>
      }
    >
      <GetSingleServiceDetail params={params} />
    </Suspense>
  );
}