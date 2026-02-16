import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import LogoBar from "@/components/LogoBar";
import PainSolutionSection from "@/components/PainSolutionSection";
import InstructorSection from "@/components/InstructorSection";
import CurriculumSection from "@/components/CurriculumSection";
import FeaturedReview from "@/components/FeaturedReview";
import PricingSection from "@/components/PricingSection";
import ReviewsSection from "@/components/ReviewsSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <LogoBar />
      <PainSolutionSection />
      <InstructorSection />
      <CurriculumSection />
      <FeaturedReview />
      <PricingSection />
      <ReviewsSection />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default Index;
