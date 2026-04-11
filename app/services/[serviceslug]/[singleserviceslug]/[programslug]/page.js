import CtaButton from "@/components/buttons/ctabuttonlink";
import classes from "./programId.module.css";
import { IoChevronBackOutline } from "react-icons/io5";
import RegisterComponent from "@/components/registerComponent/registerComponent";
import { revalidatePath } from "next/cache";
import EnrollNowIntroTop from "./EnrollNowIntroTop";
import EnrollFormSection from "./enrollFormSection";
import Link from "next/link";
export async function generateMetadata({ params }) {
  const res = await fetch(
    `https://www.coseng.co.uk/api/services/${params.serviceslug}`,
    { next: { revalidate: 3600 } }
  );
  const service = await res.json();
  if (!service || service.length <= 0) {
    notFound();
  }
  const singleservicelink = params.serviceslug + "/" + params.singleserviceslug;
  const singleService = service?.sections.filter(
    (currentSector) => currentSector.link === singleservicelink
  )[0];
  if (!singleService || singleService.length <= 0) {
    notFound();
  }
  const programSlug = params.programslug;
  const program = singleService.programs.find(
    (program) => program.slug === programSlug
  );

  if (!program) {
    notFound();
  }

  return {
    title: `${program.name} - Coseng`,
    description: `Explore our ${program.name} service/program. We are happy to get you started`,
  };
}

export default async function ProgramCheckoutPage({ params }) {
  const res = await fetch(
    `https://www.coseng.co.uk/api/services/${params.serviceslug}`,
    { next: { revalidate: 3600 } }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch the service data.");
  }

  const service = await res.json();

  if (!service || service.length <= 0) {
    throw new Error(
      "The program or resource you are looking for is not available."
    );
  }

  const singleservicelink = `${params.serviceslug}/${params.singleserviceslug}`;
  const singleService = service?.sections.find(
    (currentSector) => currentSector.link === singleservicelink
  );

  if (!singleService) {
    throw new Error(
      "The program or resource you are looking for is not available for this single service."
    );
  }

  const programSlug = params.programslug;

  const program = singleService.programs.find(
    (program) => program.slug === programSlug
  );

  if (!program) {
    throw new Error(
      "The program or resource you are looking for is not available. Gem"
    );
  }
  const singleServiceIndex =
    service.sections.findIndex(
      (service) => service.slug === params.singleserviceslug
    ) + (1).toString();
  const programIndex =
    singleService.programs.findIndex(
      (program) => program.slug === programSlug
    ) + 2?.toString();
  const programID = `${singleService.category}-${singleServiceIndex}${programIndex}`;
  return (
    <section>
      <div className={classes.wrapper}>
        <EnrollNowIntroTop
          caption={`${program?.cta} for the`}
          program={program?.name}
          programID={programID}
          service={
            program.category === "service"
              ? `- ${singleService.heading} Services`
              : ""
          }
        />
        <main className={classes.registerForm}>
          <div className={classes.backToServicesBtn}>
            <Link href={`/services/${params.serviceslug}/${params.singleserviceslug}`}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: "0.5rem",
                  alignItems: "center",
                  alignContent: "center",
                  // padding: "0.5rem 0.2rem",
                  width: "fit-content",
                }}
              >
                <p style={{ marginTop: "0.2rem" }}>
                  <IoChevronBackOutline />
                </p>
                <p>Back to services</p>
              </div>
            </Link>
          </div>
          <EnrollFormSection
            program={program}
            programID={programID}
            singleService={singleService}
          />
        </main>
      </div>
    </section>
  );
}