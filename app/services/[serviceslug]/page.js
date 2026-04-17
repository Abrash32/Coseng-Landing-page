import ServiceDetailsPage from "@/components/servicesComponent/service-details";
import { notFound } from "next/navigation";
import { getOneFromDatabase } from "@/lib/getFromDatabase";

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }) {
  const { serviceslug } = await params;
  const service = await getOneFromDatabase("services", { slug: serviceslug });
  
  if (!service) {
    return {
      title: "Service Not Found - Coseng",
    };
  }
  
  return {
    title: `${service.heading || service.name} - Coseng`,
    description: service.content || service.description,
  };
}

async function GetSingleServiceDetail({ params }) {
  const { serviceslug } = await params;
  const service = await getOneFromDatabase("services", { slug: serviceslug });
  
  if (!service) {
    notFound();
  }
  
  return <ServiceDetailsPage {...service} key={service.slug} />;
}

export default async function Service({ params }) {
  return (
    <GetSingleServiceDetail params={params} />
  );
}
