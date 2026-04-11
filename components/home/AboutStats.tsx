import Counter from "./Contador";

const STATS = [
  {
    value: 30,
    prefix: "+",
    label: "Años de trayectoria",
  },
  {
    value: 50,
    prefix: "+",
    label: "Desarrollos",
  },
  {
    value: 250,
    prefix: "+",
    suffix: "k",
    label: "M² de obra",
  },
  {
    value: 1500,
    prefix: "+",
    label: "Unidades",
  },
];

export default function AboutStats() {
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
            Indicadores
          </p>

          <h2 className="mt-3 w-full font-heading text-[42px] font-black uppercase leading-[0.9] tracking-[0.01em] text-[#062a47] sm:text-[56px] md:text-[74px] lg:text-[88px] xl:text-[98px] text-center">
            Trayectoria que nos respalda en cada proyecto
          </h2>

          <p className="mt-8 max-w-full text-[15px] leading-8 text-[#5f6f84] md:text-[17px] md:leading-9 text-center">
            Una síntesis de escala, experiencia y capacidad de ejecución
            expresada en cifras que reflejan continuidad, volumen de obra y
            solidez técnica.
          </p>
        </div>

        {/* STATS */}
        <div className="mt-16 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-10 lg:mt-20 lg:grid-cols-4 lg:gap-x-12 ">
          {STATS.map((item) => (
            <StatBlock
              key={item.label}
              value={item.value}
              prefix={item.prefix}
              suffix={item.suffix}
              label={item.label}
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
        flex items-center justify-between 
        py-6
        border-b border-[#d9dde2] 
        last:border-none

        md:block md:border-none md:py-0 md:px-20
      "
    >
      {/* NUMERO */}
      <div className="font-heading text-[44px] font-black leading-[0.9] tracking-[-0.03em] text-[#062a47] sm:text-[72px] md:text-[88px] lg:text-[96px] xl:text-[108px]">
        <Counter to={value} prefix={prefix} suffix={suffix} />
      </div>

      {/* TEXTO */}
      <p
        className="
          ml-20              /* 👈 esto es CLAVE (lo separa del número) */
          -mb-2              /* 👈 esto es CLAVE (lo separa del número) */
          text-left         /* 👈 ya no a la derecha */
          flex-1            /* 👈 ocupa el espacio sin irse al borde */
          text-[30px]       /* 👈 más grande */
          font-body uppercase leading-[1.25] tracking-[0.02em] text-[#062a47]

          md:mt-4 md:max-w-[14ch] md:text-[17px] md:text-center md:ml-0
        "
      >
        {label}
      </p>
    </div>
  );
}
