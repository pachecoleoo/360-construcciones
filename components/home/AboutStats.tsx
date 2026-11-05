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

          <h2 className="ios-safe-title mx-auto mt-3 max-w-[1180px] font-heading text-[36px] font-black uppercase tracking-[0.01em] text-[#062a47] sm:text-[48px] md:text-[62px] lg:text-[76px] xl:text-[82px] text-center">
            {t("Trayectoria que nos respalda en cada proyecto")}
          </h2>

          <p className="mt-8 max-w-full text-[15px] leading-8 text-[#5f6f84] md:text-[17px] md:leading-9 text-center">
            {language === "es"
              ? "Una síntesis de escala, experiencia y capacidad de ejecución expresada en cifras que reflejan continuidad, volumen de obra y solidez técnica."
              : "A snapshot of scale, experience and delivery capacity, expressed through figures that reflect continuity, project volume and technical strength."}
          </p>
        </div>

        {/* STATS */}
        <div className="mt-14 grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-8 lg:mt-16 lg:grid-cols-4 lg:gap-x-5 ">
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
        group
        grid grid-cols-[110px_1fr] items-center
        py-6
        border-b border-[#d9dde2]
        last:border-none

        sm:grid-cols-[140px_1fr]

        md:block md:border-none md:py-0 md:px-2
      "
    >
      {/* NUMERO */}
      <div
        className="
          min-w-0 whitespace-nowrap font-heading font-black leading-none tracking-[-0.04em]
          text-[35px] min-[400px]:text-[40px] sm:text-[50px] md:text-[58px]
          lg:text-[48px] xl:text-[56px] 2xl:text-[62px]
          text-[#062a47]
        "
      >
        <Counter to={value} prefix={prefix} suffix={suffix} />
      </div>

      {/* TEXTO */}
      <p
        className="
          min-w-0 text-left font-body uppercase leading-[1.15] tracking-[0.01em]
          text-[19px] min-[400px]:text-[21px] text-[#062a47]
          sm:text-center sm:text-[19px] lg:text-[16px] xl:text-[18px]
        "
      >
        {label}
      </p>
    </div>
  );
}
