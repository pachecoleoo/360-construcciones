type ProjectLocationMapProps = {
  eyebrow?: string;
  title: string;
  description: string;
  address: string;
  mapQuery: string;
};

export default function ProjectLocationMap({
  eyebrow = "Ubicación",
  title,
  description,
  address,
  mapQuery,
}: ProjectLocationMapProps) {
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(mapQuery)}&output=embed`;
  const mapsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(mapQuery)}`;

  return (
    <section className="border-t border-[#d9dde2] bg-white py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-[#062a47]/55">
            {eyebrow}
          </p>

          <h3 className="mt-3 text-3xl font-black uppercase leading-[1] text-[#062a47] md:text-5xl">
            {title}
          </h3>

          <div className="mt-6 h-[1px] w-20 bg-[#062a47]" />

          <p className="mt-8 text-[15px] leading-8 text-[#5f6f84] md:text-base">
            {description}
          </p>
        </div>

        <div className="mt-10 border-t border-[#d9dde2]">
          <div className="grid gap-4 border-b border-[#d9dde2] py-5 md:grid-cols-[140px_1fr] md:gap-6">
            <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#062a47]/55">
              Dirección
            </span>

            <p className="text-[15px] leading-8 text-[#22384f]">{address}</p>
          </div>
        </div>

        <div className="mt-10 overflow-hidden border border-[#d9dde2] bg-[#f4f5f6]">
          <iframe
            src="https://www.google.com/maps?q=-38.950629,-68.0665189&z=17&output=embed"
            className="w-full h-[520px] grayscale contrast-95"
            loading="lazy"
          />
        </div>

        <div className="mt-5">
          <a
            href={mapsLink}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.18em] text-[#062a47] transition hover:opacity-70"
          >
            Ver en Google Maps
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
