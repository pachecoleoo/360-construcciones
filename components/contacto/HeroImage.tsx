import Image from "next/image";
import { BrandButtonC } from "../ui/BrandButtonC";

export default function HeroImage() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* IMAGEN FONDO */}
      <Image
        src="/images/original/grua2.jpg" // ← poné tu imagen acá
        alt="360 Construcciones - Contacto"
        fill
        priority
        className="object-cover"
      />

      {/* Overlay oscuro */}
      <div className="absolute inset-0 bg-black/45" />

      {/* Contenido */}
      <div className="relative z-10 flex h-full items-center justify-center px-6">
        <div className="text-center max-w-3xl">
          {/* TÍTULO */}
          <h1
            className="
    text-white
    font-extra font-black
    uppercase tracking-[0.02em]
    text-6xl md:text-7xl
    leading-[1.05]
  "
          >
            Contactanos <span className="text-brand-blue">AHORA</span>
          </h1>

          {/* BOTONES */}
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <BrandButtonC href="/contacto" variant="outline">
              Envíanos un email
            </BrandButtonC>

            <BrandButtonC href="/proyectos" variant="outline">
              Contactate con un asesor
            </BrandButtonC>
          </div>
        </div>
      </div>
    </section>
  );
}
