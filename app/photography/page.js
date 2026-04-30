import BookNowIntroTop from "./bookNowIntroTop";
import BookContactSection from "./contactSection";
import About from "./sections/about";
import Engagements from "./sections/engagements";
import MoreOnProduct from "./sections/moreOnProduct";
import ProductReviews from "./sections/productReviews";
import EmailSection from "./sections/emailSection";
import LocationDropBy from "./sections/locationDropBy";
import Navbar from "@/components/homepage/homePageIntro/Navbar";
import { getFromDatabase } from "@/lib/getFromDatabase";

export default async function PhotographyPage() {
  let reviews = [];
  try {
    reviews = await getFromDatabase("reviews", {}, { sort: { createdAt: -1 }, limit: 10 });
  } catch (error) {
    console.error("Failed to fetch photography reviews:", error);
  }

  return (
    <section>
      <Navbar />
      <BookNowIntroTop />
      <About />
      <Engagements />
      <MoreOnProduct />
      <ProductReviews initialReviews={reviews} />
      <EmailSection />
      <LocationDropBy />
      <BookContactSection />
    </section>
  );
}