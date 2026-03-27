import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StatsBar from "@/components/StatsBar";
import WhySection from "@/components/WhySection";
import PathwaySection from "@/components/PathwaySection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <HeroSection />
    <StatsBar />
    <WhySection />
    <PathwaySection />
    <CTASection />
    <Footer />
  </div>
);

export default Index;
