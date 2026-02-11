"use client";

import Image from "next/image";
import HeroBackground from "@/components/HeroBackground";
import Footer from "@/components/footer/Footer";
import { useReveal } from "@/components/hooks/useReveal";
import NewsletterCTA from "@/components/NewsletterCTA";
import ContactFormSection from "@/components/contacto/ContactFormSection";
import LocationSection from "@/components/contacto/LocationSection";
import SocialSection from "@/components/contacto/SocialSection";
import Tipografias from "@/components/TypographyDebugSection";
import HeroImagen from "@/components/contacto/HeroImage";
export default function NosotrosPage() {
  return (
    <>
      <HeroImagen />
      {/* <Tipografias /> */}
      <ContactFormSection />
      <LocationSection />
      <SocialSection />
      <NewsletterCTA />
      <Footer />
    </>
  );
}
