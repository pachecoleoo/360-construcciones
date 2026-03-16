"use client";

// import Image from "next/image";
// import HeroBackground from "@/components/HeroBackground";
// import Tipografias from "@/components/TypographyDebugSection";
import Footer from "@/components/footer/Footer";
import NewsletterCTA from "@/components/NewsletterCTA";
import ContactFormSection from "@/components/contacto/ContactFormSection";
import LocationSection from "@/components/contacto/LocationSection";
import SocialSection from "@/components/contacto/SocialSection";
import HeroImagen from "@/components/contacto/HeroImage";
export default function NosotrosPage() {
  return (
    <>
      <HeroImagen />
      <ContactFormSection />
      <LocationSection />
      <SocialSection />
      <NewsletterCTA />
      <Footer />
    </>
  );
}
