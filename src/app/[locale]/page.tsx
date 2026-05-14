import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import FeaturesSection from "@/components/FeaturesSection";
import ServicesSection from "@/components/ServicesSection";
import CTASection from "@/components/CTASection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import QuoteSection from "@/components/QuoteSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
      <FeaturesSection />
      <ServicesSection />
      <CTASection />
      <WhyChooseUsSection />
      <QuoteSection />
      <Footer />
    </main>
  );
}
