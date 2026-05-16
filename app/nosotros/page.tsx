"use client";

import HeroBackground from "@/components/HeroBackground";
import Footer from "@/components/footer/Footer";
import NosotrosSlogansSection from "@/components/nosotros/NosotrosSlogansSection";
import NosotrosIntroSection from "@/components/nosotros/NostrosIntroSection";
import NosotrosVisionSection from "@/components/nosotros/NosotrosVisionSection";
import NosotrosMisionSection from "@/components/nosotros/NosotrosMisionSection";
import ConstruyendoBanner from "@/components/ConstruyendoBanner";

export default function NosotrosPage() {
  return (
    <>
      <HeroBackground
        eyebrow=""
        title="Seguimos construyendo"
        // highlight={[" construyendo"]}
        subtitle="Arquitectura e ingeniería con planificación."
        imageSrc="/images/original/frameGatica4.jpg"
        align="left"
      />

      <main>
        <div id="primera-seccion">
          <NosotrosSlogansSection />
        </div>

        <NosotrosIntroSection />
        <NosotrosVisionSection />
        <NosotrosMisionSection />
        <ConstruyendoBanner />
      </main>

      <Footer />
    </>
  );
}
