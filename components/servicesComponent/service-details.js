"use client";
import EachService from "@/components/eachservice/eachservice";

export default function ServiceDetailsPage({
  heading,
  content,
  sections,
  slug,
}) {
  const propertyArray =
    sections?.map((section) => ({
      heading: section.heading,
      content: section.content,
      link: `/services/${section.link}`,
    })) || [];

  return (
    <EachService
      type="services"
      propertyArray={propertyArray}
      heading={heading}
      content={content}
    />
  );
}
