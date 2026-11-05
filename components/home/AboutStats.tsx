"use client";

import Counter from "./Contador";
import { useLanguage } from "@/context/LanguageContext";

const STATS: Array<{ value: number; prefix?: string; suffix?: string; label: string }> = [
  {
    value: 250,
    prefix: "+",
    label: "Empleados",
  },
  {
    value: 204000,
    prefix: "+",
    label: "M² Proyectados ",
  },
  {
    value: 90534,
    prefix: "+",
    label: "M² en proceso",
  },
  {
    value: 18,
    label: "Obras terminadas",
  },
];

export default function AboutStats() {
  const { language, t } = useLanguage();
  return (
    <section className="relative overflow-hidden border-y border-[#d9dde2] bg-[#f4f5f6] py-20 md:py-24 lg:py-28">
      {/* blueprint grid muy sutil */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(6,42,71,0.14) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(6,42,71,0.14) 1px, transparent 1px)
          `,
          backgroundSize: "76px 76px",
        }}
      />

      <div className="relative mx-auto max-w-[1380px] px-6 md:px-10">
        {/* CABECERA */}
        <div className="">
          <p className="text-[11px] uppercase tracking-[0.28em] text-[#7a8a97] text-center">
            {t("Indicadores")}
          </p>

          <h2 className="ios-safe-title mx-auto mt-3 max-w-[1200px] font-heading text-[34px] font-black uppercase tracking-[0.01em] text-[#062a47] sm:text-[48px] md:text-[64px] lg:text-[72px] xl:text-[80px] text-center">
            {t("Trayectoria que nos respalda en cada proyecto")}
          </h2>

          <p className="mt-8 max-w-full text-[15px] leading-8 text-[#5f6f84] md:text-[17px] md:leading-9 text-center">
            {language === "es"
              ? "Una síntesis de escala, experiencia y capacidad de ejecución expresada en cifras que reflejan continuidad, volumen de obra y solidez técnica."
              : "A snapshot of scale, experience and delivery capacity, expressed through figures that reflect continuity, project volume and technical strength."}
          </p>
        </div>

        {/* STATS */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 sm:gap-x-8 lg:mt-20 lg:grid-cols-4 lg:gap-x-6 ">
          {STATS.map((item) => (
            <StatBlock
              key={item.label}
              value={item.value}
              prefix={item.prefix}
              suffix={item.suffix}
              label={t(item.label)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function StatBlock({
  value,
  prefix,
  suffix,
  label,
}: {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
}) {
  return (
    <div
      className="
        flex min-w-0 items-center gap-5 border-b border-[#d9dde2] py-7
        last:border-none
        sm:flex-col sm:justify-center sm:gap-3 sm:border-none sm:py-6
        lg:py-0
      "
    >
      {/* El número toma solo su ancho: la etiqueta nunca se superpone. */}
      <div
        className="
          shrink-0 whitespace-nowrap font-heading font-black leading-none
          tracking-[-0.035em] text-[#062a47]
          text-[37px] min-[400px]:text-[42px]
          sm:text-[52px] md:text-[58px] lg:text-[49px] xl:text-[58px]
        "
      >
        <Counter to={value} prefix={prefix} suffix={suffix} />
      </div>

      <p
        className="
          min-w-0 flex-1 text-left font-body uppercase leading-[1.2]
          text-[18px] min-[400px]:text-[21px] text-[#062a47]
          sm:flex-none sm:text-center sm:text-[19px]
          lg:text-[17px] xl:text-[18px]
        "
      >
        {label}
      </p>
    </div>
  );
}
