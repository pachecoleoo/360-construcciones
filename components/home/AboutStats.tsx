import Image from "next/image";
import Counter from "./Contador";

export default function AboutStats() {
  return (
    <section className="relative py-14 px-6 overflow-hidden bg-[#002849]">
      {/* ✅ Fondo con imagen (oscura) */}
      <div aria-hidden="true" className="absolute inset-0">
        <Image
          src="/images/edificio.jpg" // 👈 tu imagen acá
          alt=""
          fill
          priority={false}
          className="object-cover"
        />
        {/* Oscurecer + tono marca */}
        <div className="absolute inset-0 bg-[#002849]/70" />
        {/* Baja brillo / sube contraste (opcional, le da “cinematográfico”) */}
        <div className="absolute inset-0 brightness-[0.90] contrast-[1.08]" />
      </div>

      {/* ✅ Blueprint grid arriba del fondo (muy sutil) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.12) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.12) 1px, transparent 1px)
          `,
          backgroundSize: "72px 72px",
        }}
      />

      {/* Línea superior tipo plano */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-0 h-px w-full bg-white/10"
      />

      {/* ✅ Contenido arriba de todo */}
      <div className="relative z-10 mx-auto max-w-6xl text-center font-body">
        <p className="text-[#C9D8E2] text-xs tracking-[0.35em] uppercase font-medium">
          360 Construcciones
        </p>

        <h2 className="mt-5 text-white text-4xl md:text-6xl font-heading font-black uppercase tracking-[0.02em] leading-[1.05]">
          Construimos proyectos
          <span className="block text-[#B7C9D6]">que dejan huella</span>
        </h2>

        <p className="mt-7 text-[#C9D8E2] max-w-3xl mx-auto text-sm md:text-base leading-relaxed font-body">
          Desarrollamos obras de alto impacto combinando arquitectura,
          ingeniería y gestión integral. Acompañamos cada proyecto desde la
          planificación hasta la entrega final, con foco en calidad y
          eficiencia.
        </p>

        {/* ✅ Placa sólida por encima (como querés) */}
        <div className="mt-16 mx-auto max-w-5xl border border-white/12 bg-[#081835]/85">
          <div className="px-8 py-5 flex items-center justify-between border-b border-white/10">
            <span className="text-[#C9D8E2] text-xs tracking-[0.22em] uppercase">
              Indicadores
            </span>
            <span className="text-white/60 text-xs tracking-[0.22em] uppercase">
              Planificación · Ejecución · Entrega
            </span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 px-8 py-10 text-left">
            <Stat>
              <Counter to={50} prefix="+" />
              <p className="mt-2 text-[#C9D8E2] text-xs tracking-widest uppercase">
                Desarrollos
              </p>
            </Stat>

            <Stat>
              <Counter to={250} suffix="k" prefix="+" />
              <p className="mt-2 text-[#C9D8E2] text-xs tracking-widest uppercase">
                M² de obra
              </p>
            </Stat>

            <Stat>
              <Counter to={1500} prefix="+" />
              <p className="mt-2 text-[#C9D8E2] text-xs tracking-widest uppercase">
                Unidades
              </p>
            </Stat>

            <Stat>
              <Counter to={30} prefix="+" />
              <p className="mt-2 text-[#C9D8E2] text-xs tracking-widest uppercase">
                Años
              </p>
            </Stat>
          </div>

          <div className="h-px w-full bg-white/10" />

          <div className="px-8 py-5 flex flex-col md:flex-row items-center justify-between gap-3">
            <span className="text-white/55 text-xs">
              Arquitectura + Ingeniería + Gestión integral
            </span>
            <span className="text-[#C9D8E2] text-xs tracking-[0.22em] uppercase">
              Calidad · Seguridad · Cumplimiento
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative">
      <span
        aria-hidden="true"
        className="absolute -left-4 top-2 hidden md:block h-10 w-px bg-white/12"
      />
      {children}
    </div>
  );
}
