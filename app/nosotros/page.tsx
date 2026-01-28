"use client";

import Image from "next/image";
import HeroBackground from "@/components/HeroBackground";
import Footer from "@/components/footer/Footer";
import { useReveal } from "@/components/hooks/useReveal";

export default function NosotrosPage() {
  // Fade de cada section (suave)
  const s1 = useReveal({ duration: 900 });
  const s2 = useReveal({ duration: 1100 });
  const s3 = useReveal({ duration: 1000 });

  // Duración del enfoque (más lento que el fade)
  const IMG_FOCUS_MS = 2500; // <-- ajustá a gusto (2000-3000ms va lindo)

  return (
    <>
      <HeroBackground
        eyebrow="Nosotros"
        title="Construimos con método, calidad y compromiso."
        subtitle="Arquitectura e ingeniería con planificación, control técnico y ejecución enfocada en detalle y eficiencia."
        imageSrc="/images/edificio.jpg"
        align="left"
      />

      <main>
        {/* =========================
            SECTION 1 — BLANCA
        ========================== */}
        <section className="bg-white py-24">
          <div className="mx-auto max-w-7xl px-8 md:px-16 lg:px-24">
            <div
              ref={s1.ref as any}
              className={`transition-opacity ease-out ${s1.fadeClass}`}
              style={s1.fadeStyle}
            >
              <div className="grid lg:grid-cols-12 gap-12 items-center">
                {/* TEXTO */}
                <div className="lg:col-span-8 text-center lg:text-left">
                  <p className="font-body text-xs tracking-[0.28em] uppercase text-[#002B49]/60">
                    360 Construcciones
                  </p>

                  <h2 className="mt-4 font-heading font-black uppercase text-5xl md:text-6xl text-[#002B49] leading-[1.05]">
                    Nosotros
                  </h2>

                  <p className="mt-8 font-body text-[#081835]/80 text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
                    Integramos arquitectura e ingeniería en un flujo claro y
                    medible. Desde la planificación hasta la entrega final,
                    cuidamos cada decisión técnica y cada detalle constructivo.
                  </p>
                </div>

                {/* LOGO (si querés también blur leve, te lo dejo aplicado) */}
                <div
                  className={`
                    lg:col-span-4 flex justify-center lg:justify-end
                    transition-[filter] ease-out
                    ${s1.visible ? "blur-0" : "blur-sm"}
                  `}
                  style={{ transitionDuration: `${IMG_FOCUS_MS}ms` }}
                >
                  <Image
                    src="/brand/360azul.png"
                    alt="360 Construcciones"
                    width={260}
                    height={260}
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================
            SECTION 2 — AZUL MARCA
        ========================== */}
        <section className="relative bg-[#002B49] text-white overflow-hidden">
          {/* Blueprint lines tipo plano */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-[0.10]"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgba(255,255,255,0.22) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.22) 1px, transparent 1px)",
              backgroundSize: "92px 92px",
            }}
          />

          <div
            ref={s2.ref as any}
            className={`transition-opacity ease-out ${s2.fadeClass}`}
            style={s2.fadeStyle}
          >
            <div className="grid lg:grid-cols-12 min-h-[64vh] md:min-h-[70vh]">
              {/* IMAGEN FULL HEIGHT IZQUIERDA (blur lento) */}
              <div
                className={`
                  lg:col-span-3 relative
                  transition-[filter] ease-out
                  ${s2.visible ? "blur-0" : "blur-md"}
                `}
                style={{ transitionDuration: `${IMG_FOCUS_MS}ms` }}
              >
                <Image
                  src="/images/original/obreros.JPG"
                  alt="Visión"
                  fill
                  className="object-cover saturate-0 contrast-110"
                />

                {/* Overlay negro para unificar */}
                <div className="absolute inset-0 bg-black/45 mix-blend-multiply" />
                {/* Vignette suave */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
              </div>

              {/* TEXTO */}
              <div className="lg:col-span-9 flex items-center px-8 md:px-16 py-14 md:py-16">
                <div className="max-w-3xl">
                  <p className="font-body text-xs tracking-[0.28em] uppercase text-white/60">
                    Declaración
                  </p>

                  <h2 className="mt-4 font-heading font-black uppercase text-5xl md:text-6xl leading-[1.05]">
                    Visión
                  </h2>

                  <p className="mt-8 font-body text-white/85 text-lg leading-relaxed">
                    Ser referentes por la excelencia técnica y la transparencia.
                    Cada obra debe reflejar calidad, durabilidad y una ejecución
                    impecable.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================
            SECTION 3 — CELESTE
        ========================== */}
        <section className="bg-[#C9D8E2] overflow-hidden">
          <div
            ref={s3.ref as any}
            className={`transition-opacity ease-out ${s3.fadeClass}`}
            style={s3.fadeStyle}
          >
            <div className="grid lg:grid-cols-12 min-h-[64vh] md:min-h-[70vh]">
              {/* TEXTO */}
              <div className="lg:col-span-9 flex items-center px-8 md:px-16 py-14 md:py-16">
                <div className="max-w-3xl">
                  <p className="font-body text-xs tracking-[0.28em] uppercase text-[#002B49]/60">
                    Declaración
                  </p>

                  <h2 className="mt-4 font-heading font-black uppercase text-5xl md:text-6xl text-[#002B49] leading-[1.05]">
                    Misión
                  </h2>

                  <p className="mt-8 font-body text-[#002B49]/85 text-lg leading-relaxed">
                    Entregar obras eficientes, confiables y técnicamente
                    sólidas, respetando plazos y presupuesto, garantizando
                    claridad en cada etapa del proceso.
                  </p>
                </div>
              </div>

              {/* IMAGEN FULL HEIGHT DERECHA (blur lento) */}
              <div
                className={`
                  lg:col-span-3 relative
                  transition-[filter] ease-out
                  ${s3.visible ? "blur-0" : "blur-md"}
                `}
                style={{ transitionDuration: `${IMG_FOCUS_MS}ms` }}
              >
                <Image
                  src="/images/original/grua.JPG"
                  alt="Misión"
                  fill
                  className="object-cover saturate-70 contrast-80"
                />

                {/* Overlay negro */}
                <div className="absolute inset-0 bg-black/45 mix-blend-multiply" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
              </div>
            </div>
          </div>

          <Footer />
        </section>
      </main>
    </>
  );
}
