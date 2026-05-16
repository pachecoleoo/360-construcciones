"use client";

import Footer from "@/components/footer/Footer";
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
      <Footer />
    </>
  );
}
