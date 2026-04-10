import { Suspense } from "react";
import { revalidatePath } from "next/cache";
import ServiceDetailsPage from "@/components/servicesComponent/service-details";
import Loading from "@/components/loading/loading";
import { notFound } from "next/navigation";
export async function generateMetadata({ params }) {
  const res = await fetch(
    `https://www.coseng.co.uk/api/services/${params.serviceslug}`
  );
  const service = await res.json();
  if (!service) {
    notFound();
  }
  return {
    title: `${service.heading} - Coseng`,
    description: `Explore our ${service.heading} We are happy to get you started`,
  };
}
async function GetSingleServiceDetail({ params }) {
  const res = await fetch(
    `https://www.coseng.co.uk/api/services/${params.serviceslug}`
  );
  const service = await res.json();
  if (!service) {
    throw new Error(
      "The page or resource you are looking for is not available."
    );
  }
  revalidatePath("/services", "layout");
  return <ServiceDetailsPage {...service} key={service.slug} />;
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
