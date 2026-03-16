export default function LocationSection() {
  const address = "Salta 256, Neuquén Capital, Argentina";

  return (
    <section
      id="ubicacion"
      className="relative overflow-hidden bg-[#09131d] text-white"
    >
      {/* overlays de ambiente */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.06),transparent_32%)]" />
      <div className="absolute inset-x-0 top-0 h-px bg-white/10" />
      <div className="absolute inset-y-0 left-[8%] hidden w-px bg-white/6 lg:block" />
      <div className="absolute inset-y-0 right-[8%] hidden w-px bg-white/6 lg:block" />

      <div className="relative mx-auto grid max-w-7xl gap-14 px-6 py-24 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        {/* TEXTO */}
        <div className="max-w-xl">
          <span className="text-[11px] font-medium uppercase tracking-[0.32em] text-white/55">
            Ubicación
          </span>

          <h2 className="mt-4 font-heading text-4xl font-black uppercase leading-[0.95] text-white md:text-6xl">
            Nuestra
            <br />
            oficina
          </h2>

          <p className="mt-6 max-w-md text-sm leading-relaxed text-white/72 md:text-base">
            Coordinamos reuniones técnicas, planificación de obra y seguimiento
            de proyectos desde nuestra sede en Neuquén Capital.
          </p>

          {/* bloque dirección */}
          <div className="mt-10 rounded-[28px] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm">
            <div className="flex items-start justify-between gap-6">
              <div>
                <p className="text-[11px] uppercase tracking-[0.28em] text-white/45">
                  Dirección
                </p>
                <p className="mt-3 text-lg font-medium leading-snug text-white md:text-xl">
                  {address}
                </p>
              </div>

              <div className="hidden h-10 w-10 shrink-0 rounded-full border border-white/10 bg-white/[0.05] lg:flex lg:items-center lg:justify-center">
                <span className="text-sm text-white/70">↗</span>
              </div>
            </div>

            <div className="mt-6 h-px w-full bg-white/10" />

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="https://maps.google.com/?q=Salta+256+Neuquén"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center rounded-full border border-white/14 bg-white/8 px-5 py-3 text-xs font-medium uppercase tracking-[0.16em] text-white transition hover:bg-white/12"
              >
                Cómo llegar
              </a>

              <a
                href="/contacto"
                className="inline-flex items-center rounded-full border border-white/10 px-5 py-3 text-xs font-medium uppercase tracking-[0.16em] text-white/78 transition hover:border-white/20 hover:text-white"
              >
                Coordinar reunión
              </a>
            </div>
          </div>
        </div>

        {/* MAPA / STREET VIEW */}
        <div className="relative">
          <div className="pointer-events-none absolute -inset-4 rounded-[34px] border border-white/8" />

          <div className="relative overflow-hidden rounded-[30px] border border-white/10 bg-black shadow-[0_30px_80px_rgba(0,0,0,0.35)]">
            <div className="absolute inset-x-0 top-0 z-10 h-16 bg-gradient-to-b from-black/35 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 z-10 h-20 bg-gradient-to-t from-black/40 to-transparent" />

            <div className="aspect-[4/3] w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!4v1769981291374!6m8!1m7!1sZoQ3gW5TbVU0YpVnSuIihw!2m2!1d-38.95225935308583!2d-68.06626726662016!3f280.6842718309308!4f3.241860353552511!5f0.546861300257367"
                className="h-full w-full grayscale contrast-110 brightness-[0.88]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
                style={{ border: 0 }}
              />
            </div>

            <div className="absolute left-5 top-5 z-20 rounded-full border border-white/12 bg-black/35 px-4 py-2 backdrop-blur-md">
              <p className="text-[10px] uppercase tracking-[0.24em] text-white/72">
                Neuquén Capital
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
