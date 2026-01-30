"use client";

import Image from "next/image";
import HeroBackground from "@/components/HeroBackground";
import Footer from "@/components/footer/Footer";
import { useReveal } from "@/components/hooks/useReveal";
import PartnersMarquee from "@/components/PartnersMarquee";
import NewsletterCTA from "@/components/NewsletterCTA";

export default function NosotrosPage() {
  return (
    <>
      <HeroBackground
        eyebrow="Contacto"
        title="Construimos con método, calidad y compromiso."
        subtitle="Arquitectura e ingeniería con planificación, control técnico y ejecución enfocada en detalle y eficiencia."
        imageSrc="/images/original/frameGatica.jpg"
        align="left"
      />
      <NewsletterCTA />
      <Footer />
    </>
  );
}
