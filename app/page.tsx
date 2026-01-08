import HeroVideo from "@/components/home/HeroVideo";
import AboutStats from "@/components/home/AboutStats";
// import ServicesSection from "@/components/home/ServicesSection";
import SectionOne from "@/components/home/SectionOne";
import SectionTwo from "@/components/home/SectionTwo";
import SectionWhoWeAre from "@/components/home/SectionWhoWeAre";

export default function HomePage() {
  return (
    <>
      <HeroVideo />
      <SectionWhoWeAre />
      <SectionOne />
      <SectionTwo />
      <AboutStats />
    </>
  );
}
