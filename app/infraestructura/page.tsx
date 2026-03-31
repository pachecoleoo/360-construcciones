import HeroBackground from "@/components/HeroBackground";
import Footer from "@/components/footer/Footer";
import { useReveal } from "@/components/hooks/useReveal";
import NewsletterCTA from "@/components/NewsletterCTA";
import Button from "@/components/ui/Button";

export default function Infraestructura() {
  return (
    <>
      <HeroBackground
        eyebrow=""
        title={"Infraestructura &\n movimiento de suelo"}
        highlight={[" Infraestructura"]}
        subtitle="Ejecución técnica con precisión y control de obra."
        imageSrc="/images/infra.JPG"
        align="left"
      />
      <main></main>
      <NewsletterCTA />
      <Footer />
    </>
  );
}
