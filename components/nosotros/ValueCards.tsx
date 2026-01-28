type Card = { title: string; desc: string };

export default function ValueCards({
  eyebrow,
  title,
  subtitle,
  cards,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  cards: Card[];
}) {
  return (
    <section className="py-16 md:py-20 bg-slate-50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold tracking-[0.25em] uppercase text-slate-500">
            {eyebrow}
          </p>
          <h2 className="mt-3 text-3xl md:text-4xl font-extrabold text-slate-900">
            {title}
          </h2>
          {subtitle && <p className="mt-3 text-slate-600">{subtitle}</p>}
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {cards.map((c) => (
            <div
              key={c.title}
              className="rounded-2xl border border-slate-200 bg-white p-6"
            >
              <h3 className="text-lg font-bold text-slate-900">{c.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
