"use client";

import HeroBackground from "@/components/HeroBackground";
import Footer from "@/components/footer/Footer";
import NosotrosSlogansSection from "@/components/nosotros/NosotrosSlogansSection";
import NewsletterCTA from "@/components/NewsletterCTA";
import NosotrosIntroSection from "@/components/nosotros/NostrosIntroSection";
import NosotrosVisionSection from "@/components/nosotros/NosotrosVisionSection";
import NosotrosMisionSection from "@/components/nosotros/NosotrosMisionSection";

export default function NosotrosPage() {
  return (
    <>
      <HeroBackground
        eyebrow=""
        title="Seguimos construyendo"
        highlight={[" construyendo"]}
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

        <NewsletterCTA
          withEmail
          onSubmit={(email) => console.log("signup:", email)}
        />
      </main>

      <Footer />
    </>
  );
}
