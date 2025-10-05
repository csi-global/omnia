import AboutSection from "@/components/AboutSection";
import HeroSlider from "@/components/HeroSlider";
import ManagedServicesCarousel from "@/components/ManagedServicesCarousel";
import MarqueeSection from "@/components/MarqueeSection";
import ServicesSection from "@/components/ServicesSection";

export default function Home() {
  return (
    <div>
      <HeroSlider />
      <AboutSection />
      <ServicesSection />
      <ManagedServicesCarousel />
      <MarqueeSection />
    </div>
  );
}
