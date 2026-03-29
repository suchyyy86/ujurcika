import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import IntroSection from "@/components/IntroSection";
import MenuSection from "@/components/MenuSection";
import StorySection from "@/components/StorySection";
import SpacesSection from "@/components/SpacesSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <IntroSection />
      <MenuSection />
      <StorySection />
      <SpacesSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
