// import Navbar from "@/components/homepage/homePageIntro/Navbar";
import HomePageIntro from "@/components/homepage/homePageIntro/homePageIntro";
import About from "@/components/homepage/homePageIntro/About";
import WorkWithUs from "@/components/homepage/homePageIntro/WorkWithUs";
import CosengSolutionSection from "@/components/homepage/homePageIntro/SolutionsSection";
import ReviewsPage from "@/components/homepage/homePageIntro/ReviewsPage";

export default function Home() {
  return (
    <main>
      {/* <Navbar /> */}
      <HomePageIntro />
      <CosengSolutionSection />
      <About />
      <ReviewsPage />
      <WorkWithUs />
      
    </main>
  );
}