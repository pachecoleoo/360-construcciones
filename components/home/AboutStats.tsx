import Counter from "./Contador";

export default function AboutStats() {
  return (
    <section className="relative py-24 px-6 bg-[#062a47] overflow-hidden">
      {/* Blueprint grid sutil */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.10]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.14) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.14) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
        }}
      />

      {/* Glow suave superior */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-28 left-1/2 h-80 w-[42rem] -translate-x-1/2 rounded-full bg-white/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-6xl text-center">
        {/* Texto */}
        <h2 className="text-white text-3xl md:text-4xl font-bold">
          Construimos proyectos que dejan huella
        </h2>

        <p className="mt-4 text-white/80 max-w-3xl mx-auto text-lg leading-relaxed">
          En 360 Construcciones desarrollamos obras de alto impacto combinando
          arquitectura, ingeniería y gestión integral. Acompañamos cada proyecto
          desde la idea hasta la entrega final, con foco en calidad, eficiencia
          y resultados.
        </p>

        {/* Métricas */}
        <div className="mt-16 rounded-3xl border border-white/12 bg-white/5 backdrop-blur-xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 p-10 md:p-12 text-left">
            <div>
              <Counter to={50} />
              <p className="mt-2 text-white/70 text-sm">
                Desarrollos entregados
              </p>
            </div>

            <div>
              <Counter to={250} suffix="k" />
              <p className="mt-2 text-white/70 text-sm">Metros de obra</p>
            </div>

            <div>
              <Counter to={1500} />
              <p className="mt-2 text-white/70 text-sm">Departamentos</p>
            </div>

            <div>
              <Counter to={30} />
              <p className="mt-2 text-white/70 text-sm">Años de experiencia</p>
            </div>
          </div>

          {/* Línea tipo placa */}
          <div className="h-px w-full bg-gradient-to-r from-transparent via-white/15 to-transparent" />
          <div className="px-10 py-6 text-white/60 text-sm flex items-center justify-center gap-2">
            <span>Planificación</span>
            <span className="opacity-50">•</span>
            <span>Ejecución</span>
            <span className="opacity-50">•</span>
            <span>Entrega</span>
          </div>
        </div>
      </div>
    </section>
  );
}
