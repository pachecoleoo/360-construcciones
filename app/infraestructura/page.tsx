import HeroBackground from "@/components/HeroBackground";
import Infraestructuraysuelo from "@/components/infraestructura/Infraestructuraysuelo";
import Footer from "@/components/footer/Footer";
import ConstruyendoBanner from "@/components/ConstruyendoBanner";

export default function InfraestructuraPage() {
  return (
    <>
      <HeroBackground
        eyebrow=""
        title={"Infraestructura &\n movimiento de suelo"}
        highlight={["Infraestructura"]}
        subtitle="Ejecución técnica con precisión y control de obra."
        imageSrc="/images/infra.JPG"
        align="left"
      />

      <main>
        <Infraestructuraysuelo />
        <ConstruyendoBanner />
      </main>

      <Footer />
    </>
  );
}
