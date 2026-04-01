"use client";

import Image from "next/image";
import HeroBackground from "@/components/HeroBackground";
import Footer from "@/components/footer/Footer";
import { useReveal } from "@/components/hooks/useReveal";
import NosotrosSlogansSection from "@/components/nosotros/NosotrosSlogansSection";
import NewsletterCTA from "@/components/NewsletterCTA";
import Button from "@/components/ui/Button";

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
        eyebrow=""
        title={`Seguimos construyendo`}
        highlight={[" construyendo"]}
        subtitle="Arquitectura e ingeniería con planificación."
        imageSrc="/images/original/frameGatica4.jpg"
        align="left"
      />
      <main>
        {" "}
        <div id="primera-seccion">
          {" "}
          <NosotrosSlogansSection />{" "}
        </div>
        {/* =========================
            SECTION 1 — BLANCA
        ========================== */}
        <section data-section="01" className="relative bg-white py-24">
          {/* NUMERO DE SECCIÓN */}
          <div
            className={`
  pointer-events-none
  absolute
  left-[-10px] md:left-[-20px] lg:left-[-40px]
  top-16
  font-heading font-black
  text-[140px] md:text-[180px]
  leading-none
  text-[#002B49]/15
  select-none
  transition-all duration-1000 ease-out
  ${s1.visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-6"}
`}
          >
            01
          </div>

          <div className="mx-auto max-w-7xl px-8 md:px-16 lg:px-24">
            <div
              ref={s1.ref as any}
              className={`transition-opacity ease-out ${s1.fadeClass}`}
              style={s1.fadeStyle}
            >
              <div className="grid lg:grid-cols-12 gap-12 items-center">
                {/* TEXTO */}
                <div
                  className={`
          lg:col-span-8 text-center lg:text-left
          transition-all ease-out delay-200 duration-700
          ${s1.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}
        `}
                >
                  <h2 className="mt-4 font-heading font-black uppercase text-5xl md:text-6xl text-[#002B49] leading-[1.05]">
                    Somos 360
                  </h2>

                  <p className="mt-8 font-body text-[#081835]/80 text-xl leading-relaxed max-w-2xl mx-auto lg:mx-0">
                    Integramos arquitectura e ingeniería en un flujo claro y
                    medible. Desde la planificación hasta la entrega final,
                    cuidamos cada decisión técnica y cada detalle constructivo.
                  </p>
                </div>

                {/* LOGO */}
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
        <section
          id="vision"
          data-section="02"
          className="relative overflow-hidden bg-[#002B49] text-white"
        >
          <div
            className={`
    pointer-events-none
    absolute
    left-[-10px] sm:left-auto sm:right-[-10px] md:right-[-20px] lg:right-[-40px]
    top-16 md:top-16
    z-10
    font-heading font-black mt-55 md:mt-0
    text-[110px] sm:text-[120px] md:text-[180px]
    leading-none
    text-white/10
    select-none
    transition-all duration-1000 ease-out
    ${
      s2.visible
        ? "opacity-100 translate-x-0"
        : "opacity-0 -translate-x-6 sm:translate-x-6"
    }
  `}
          >
            02
          </div>

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
            <div className="grid min-h-[64vh] lg:grid-cols-12 md:min-h-[70vh]">
              {/* IMAGEN */}
              <div
                className={`
          relative overflow-hidden group h-[40vh] sm:h-[45vh] lg:h-auto
          lg:col-span-3 transition-[filter] ease-out
          ${s2.visible ? "blur-0" : "blur-md"}
        `}
                style={{ transitionDuration: `${IMG_FOCUS_MS}ms` }}
              >
                <Image
                  src="/images/original/obreros.JPG"
                  alt="Visión"
                  fill
                  className="
            object-cover
            object-[center_25%]
            md:object-center
            will-change-transform
            transition-transform duration-700 ease-out
            group-hover:scale-105
          "
                />

                <div className="absolute inset-0 bg-black/45 mix-blend-multiply" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
              </div>

              {/* TEXTO */}
              <div
                className={`
    lg:col-span-9 flex items-center px-8 sm:px-8 md:px-16 py-14 sm:py-14 md:py-16
    transition-all ease-out delay-300 duration-700
    ${s2.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}
  `}
              >
                <div className="max-w-3xl ml-10 sm:ml-0">
                  <h2 className="mt-4 font-heading font-black uppercase text-5xl md:text-6xl leading-[1.05]">
                    Visión
                  </h2>

                  <p className="mt-8 font-body text-white/85 text-base md:text-xl leading-relaxed">
                    Queremos ser el faro de innovación en ingeniería y
                    construcción del sur de la región. Estamos construyendo
                    nuestro liderazgo sobre la base de la más{" "}
                    <strong className="font-semibold text-white">
                      sólida confianza de nuestros clientes, el talento de
                      nuestros equipos y de un resultado excepcional
                    </strong>{" "}
                    en cada uno de nuestros proyectos y desarrollos.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* =========================
            SECTION 3 — CELESTE
        ========================== */}
        <section
          id="mision"
          data-section="03"
          className="relative bg-[#C9D8E2] overflow-hidden"
        >
          {" "}
          <div
            className={`
    pointer-events-none
    absolute
    left-[-10px] md:left-[-20px] lg:left-[-40px]
  top-16 md:top-12
    z-10
    font-heading font-black
    text-[110px] md:text-[150px] lg:text-[180px]
    leading-none
    text-[#002B49]/15
    select-none
    transition-all duration-1000 ease-out
    ${s3.visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-6"}
  `}
          >
            03
          </div>
          <div
            ref={s3.ref as any}
            className={`transition-opacity ease-out ${s3.fadeClass}`}
            style={s3.fadeStyle}
          >
            <div className="grid lg:grid-cols-12 min-h-[64vh] md:min-h-[70vh]">
              {/* TEXTO */}
              <div
                className={`
    lg:col-span-9 flex items-center px-8 md:px-16 py-14 md:py-16
    transition-all ease-out delay-300 duration-700
    ${s3.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}
  `}
              >
                <div className="max-w-3xl ml-10 md:ml-30">
                  {/* <p className="font-body text-xs tracking-[0.28em] uppercase text-[#002B49]/60">
                    Declaración
                  </p> */}

                  <h2 className="mt-4 font-heading font-black uppercase text-5xl md:text-6xl text-[#002B49] leading-[1.05]">
                    Misión
                  </h2>

                  <p className=" mt-8 font-body text-[#002B49]/85 text-base md:text-xl leading-relaxed">
                    <strong className="font-semibold  text-[#002B49]">
                      Crear, ejecutar y gestionar soluciones innovadoras
                    </strong>{" "}
                    para resolver proyectos de ingeniería, construcción y
                    montajes industriales, honrando los compromisos asumidos y
                    las relaciones a largo plazo con nuestros clientes.
                  </p>
                </div>
              </div>

              {/* IMAGEN FULL HEIGHT DERECHA (blur lento) */}
              <div
                className={`
    relative overflow-hidden
    h-[34vh] sm:h-[42vh] lg:h-auto
    lg:col-span-3
    transition-[filter] ease-out
    ${s3.visible ? "blur-0" : "blur-md"}
  `}
                style={{ transitionDuration: `${IMG_FOCUS_MS}ms` }}
              >
                <Image
                  src="/images/original/equipo3.JPG"
                  alt="Misión"
                  fill
                  className="
      object-cover
      object-center
      md:object-center
      will-change-transform
      transition-transform duration-700 ease-out
      lg:group-hover:scale-105
    "
                />

                <div className="absolute inset-0 bg-black/45 mix-blend-multiply" />

                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </section>
        <NewsletterCTA
          withEmail
          onSubmit={(email) => console.log("signup:", email)}
        />{" "}
      </main>{" "}
      <Footer />
    </>
  );
}
