import HeroVideo from "@/components/home/HeroVideo";
import AboutStats from "@/components/home/AboutStats";
// import ServicesSection from "@/components/home/ServicesSection";
import SectionOne from "@/components/home/SectionOne";
import SectionTwo from "@/components/home/SectionTwo";
import SectionWhoWeAre from "@/components/home/SectionWhoWeAre";
import Footer from "@/components/footer/Footer";
import ConstruyendoBanner from "@/components/ConstruyendoBanner";

export default function HomePage() {
  return (
    <>
      <HeroVideo />
      <SectionWhoWeAre />
      <SectionTwo />
      <SectionOne />
      <AboutStats />
      <ConstruyendoBanner />
      <Footer />
    </>
  );
}
