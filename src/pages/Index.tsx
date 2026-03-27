import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import WhySection from "@/components/WhySection";
import PathwaySection from "@/components/PathwaySection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen">
    <Navbar />
    <HeroSection />
    <WhySection />
    <PathwaySection />
    <CTASection />
    <Footer />
  </div>
);

export default Index;
