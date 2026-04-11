import SideBar from "@/components/sideBar/sideBar";
import CentralTopPages from "../../components/centralTopPages/centralTopPages";
import EachService from "../../components/eachservice/eachservice";
import classes from "./page.module.css";
import { Suspense } from "react";
import Loading from "@/components/loading/loading";
import { revalidatePath } from "next/cache";

async function fetchServices() {
  const res = await fetch("https://www.coseng.co.uk/api/services");
  const services = await res.json();
  return services;
}
export async function metadata(params) {
  return {
    title: "Our Service Portfolio - Coseng",
    description:
      "COSENG delivers comprehensive and dynamic services specializing in information technology, web design, CPD-certified trainings in Data Analytics, Business Analytics, and Project Management. ",
  };
}
export default async function Services() {
  const services = await fetchServices();
  if (services.length < 0) {
    throw new Error("No Services Avaiable");
  }
  return (
    <main>
      <CentralTopPages
        image="/images/services/services.jpg"
        title="Our Services"
      />
      <SideBar>
        <Suspense
          fallback={
            <div style={{ marginTop: "30vh" }}>
              <Loading message="Loading..." />
            </div>
          }
        >
          <main className={classes.servicesList}>
            <EachService
              type="services"
              propertyArray={services}
              heading="Our Service Portfolio"
              content="COSENG delivers comprehensive and dynamic services specializing in information technology, web design, real estate management, and Biogas Solutions. Our CPD-certified training includes Data Analytics, Business Analytics, and Project Management. We empower individuals and businesses with innovative services to optimize operations, promote sustainability, and drive growth across diverse sectors. Explore our innovative solutions and unlock your potential with COSENG."
            />
          </main>
        </Suspense>
      </SideBar>
    </main>
  );
}
