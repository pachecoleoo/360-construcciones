function Card({
  title,
  desc,
  href,
  label,
  accent,
}: {
  title: string;
  desc: string;
  href: string;
  label: string;
  accent: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_20px_60px_rgba(2,6,23,0.06)] transition hover:-translate-y-0.5 hover:border-slate-300"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-base font-black uppercase tracking-[0.02em] text-slate-900">
            {title}
          </h3>
          <p className="mt-2 text-sm text-slate-600 leading-relaxed">{desc}</p>
        </div>

        <span
          className="inline-flex h-10 w-10 items-center justify-center rounded-2xl text-white transition group-hover:opacity-95"
          style={{ backgroundColor: accent }}
          aria-hidden="true"
        >
          ↗
        </span>
      </div>

      <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-slate-900">
        {label}
        <span className="transition group-hover:translate-x-0.5">→</span>
      </div>
    </a>
  );
}

export default function SocialSection({
  id = "redes",
  title = "Redes y contacto directo",
  subtitle = "Escribinos por el canal que te quede más cómodo.",
  accent = "#062a47",
  whatsappNumber = "5490000000000", // <-- sin + ni espacios
  instagramUrl = "https://instagram.com/tuusuario", // <-- cambiá
  linkedinUrl = "https://linkedin.com/company/tuempresa", // <-- cambiá
}: {
  id?: string;
  title?: string;
  subtitle?: string;
  accent?: string;
  whatsappNumber?: string;
  instagramUrl?: string;
  linkedinUrl?: string;
}) {
  const waUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    "Hola! Quisiera consultar por un proyecto.",
  )}`;

  return (
    <section id={id} className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold tracking-wide text-slate-700">
            <span
              className="h-2 w-2 rounded-full"
              style={{ backgroundColor: accent }}
            />
            COMUNICACIÓN
          </div>

          <h2 className="mt-4 font-heading font-black uppercase tracking-[0.02em] text-3xl md:text-5xl text-slate-900 leading-[1.05]">
            {title}
          </h2>

          <p className="mt-4 text-slate-600 text-base md:text-lg">{subtitle}</p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          <Card
            title="WhatsApp"
            desc="Respuesta rápida para coordinar una visita, presupuesto o consulta técnica."
            href={waUrl}
            label="Abrir chat"
            accent={accent}
          />
          <Card
            title="Instagram"
            desc="Seguinos para ver avances, obra y novedades de proyectos."
            href={instagramUrl}
            label="Ver perfil"
            accent={accent}
          />
          <Card
            title="LinkedIn"
            desc="Perfil profesional: empresa, equipo, enfoque técnico y trayectoria."
            href={linkedinUrl}
            label="Ver LinkedIn"
            accent={accent}
          />
        </div>

        <div className="mt-8 rounded-3xl border border-slate-200 bg-slate-50 p-6">
          <p className="text-sm text-slate-700">
            Si querés, también armo una versión con íconos SVG inline
            (currentColor) para que en hover cambien igual que tus botones del
            home.
          </p>
        </div>
      </div>
    </section>
  );
}
