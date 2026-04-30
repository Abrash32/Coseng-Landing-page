import { getFromDatabase } from "@/lib/getFromDatabase";
import SolutionsClient from "./SolutionsClient";

export default async function CosengSolutionsSection() {
  let services = [];
  try {
    services = await getFromDatabase("services");
  } catch (error) {
    console.error("Failed to fetch services for solutions section:", error);
  }

  // Find specific service categories to populate cards
  const techService = services.find(s => s.slug === "software-technology-services");
  const engineeringService = services.find(s => s.slug === "energy-support-services");
  const propertyService = services.find(s => s.slug === "asset-and-facility-management");
  // Photography isn't in the main services yet, keep static or add later

  const solutions = [
    {
      id: "tech",
      title: "Tech Consulting",
      short: "Strategic digital and data-driven transformation.",
      bgImage: "/images/homepage/data.jpg",
      color: "#2a7de1",
      dimColor: "rgba(42,125,225,0.12)",
      icon: "💻",
      heroTitle: "COSENG",
      heroTitleEm: "Tech Consult",
      desc: techService?.content || "Empowering businesses through cutting-edge technology, digital transformation, and strategic IT guidance tailored for growth.",
      stats: [
        { num: techService?.sections?.length || "4", label: "Services" },
        { num: "IT", label: "Focus" },
        { num: "360°", label: "Support" },
        { num: "∞", label: "Scalable" },
      ],
      cards: techService?.sections?.slice(0, 4).map(sect => ({
        icon: sect.heading.includes("Data") ? "📊" : sect.heading.includes("Software") ? "⚙️" : "📋",
        title: sect.heading,
        desc: sect.content.substring(0, 120) + "..."
      })) || [],
      cta: null,
    },
    {
      id: "engineering",
      title: "Engineering",
      short: "Precision-driven engineering consultancy.",
      color: "#2cb87a",
      dimColor: "rgba(44,184,122,0.12)",
      bgImage: "/images/homepage/biogas.jpg",
      icon: "🌿",
      heroTitle: "COSENG Biogas",
      heroTitleEm: "& Engineering",
      desc: engineeringService?.content || "Pioneering sustainable energy solutions and environmental engineering for a cleaner, more resilient future.",
      stats: [
        { num: engineeringService?.sections?.length || "4", label: "Services" },
        { num: "♻️", label: "Green" },
        { num: "0", label: "Emissions" },
        { num: "↑", label: "Efficiency" },
      ],
      cards: engineeringService?.sections?.slice(0, 4).map(sect => ({
        icon: sect.heading.includes("Biogas") ? "🔥" : "🌍",
        title: sect.heading,
        desc: sect.content.substring(0, 120) + "..."
      })) || [],
    },
    {
      id: "properties",
      title: "Properties",
      short: "Strategic property investment solutions.",
      color: "#0a70ecff",
      dimColor: "rgba(232,162,52,0.12)",
      bgImage: "/images/homepage/project.jpg",
      icon: "🏢",
      heroTitle: "COSENG",
      heroTitleEm: "Properties",
      desc: propertyService?.content || "Strategic real estate management and property development that builds lasting value across residential and commercial portfolios.",
      stats: [
        { num: propertyService?.sections?.length || "3", label: "Services" },
        { num: "🏗️", label: "Development" },
        { num: "+", label: "Value" },
        { num: "✓", label: "Managed" },
      ],
      cards: propertyService?.sections?.slice(0, 3).map(sect => ({
        icon: sect.heading.includes("Maintenance") ? "🔧" : "🏘️",
        title: sect.heading,
        desc: sect.content.substring(0, 120) + "..."
      })) || [],
      cta: null,
    },
    {
      id: "photography",
      title: "Photography",
      short: "Premium corporate visual storytelling.",
      color: "#b44fe8",
      dimColor: "rgba(180,79,232,0.12)",
      bgImage: "/images/homepage/photography.jpg",
      icon: "📷",
      heroTitle: "COSENG",
      heroTitleEm: "Photography",
      desc: "Visual storytelling crafted with artistry and precision — from live event coverage to polished creative media productions.",
      stats: [
        { num: "3", label: "Services" },
        { num: "🎞️", label: "Creative" },
        { num: "4K", label: "Quality" },
        { num: "✦", label: "Premium" },
      ],
      cards: [
        { icon: "🎥", title: "Coverage Services", desc: "Professional photography and videography coverage for events, corporate functions, weddings, and commercial shoots." },
        { icon: "🖥️", title: "Editing Services", desc: "Expert post-production — photo retouching, colour grading, video editing, and delivery-ready final outputs." },
        { icon: "🎨", title: "Creative Media Solutions", desc: "Brand storytelling through visual content strategy, motion graphics, and multimedia production." },
      ],
    },
  ];

  return <SolutionsClient initialSolutions={solutions} />;
}
