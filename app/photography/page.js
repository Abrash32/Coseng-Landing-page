import BookNowIntroTop from "./bookNowIntroTop";
import BookContactSection from "./contactSection";
import About from "./sections/about";
import Engagements from "./sections/engagements";
import MoreOnProduct from "./sections/moreOnProduct";
import ProductReviews from "./sections/productReviews";
import EmailSection from "./sections/emailSection";
import LocationDropBy from "./sections/locationDropBy";
import Navbar from "@/components/homepage/homePageIntro/Navbar";

export default function PhotographyPage() {
  return (
    <section>
      <Navbar />
      <BookNowIntroTop />
      <About />
      <Engagements />
      <MoreOnProduct />
      <ProductReviews />
      <EmailSection />
      <LocationDropBy />
      <BookContactSection />
    </section>
  );
}