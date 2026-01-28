export type ProyectoFuturo = {
  id: string;
  title: string;
  description: string;
  badge: string;
};

export default function ProyectoFuturoCard({ p }: { p: ProyectoFuturo }) {
  return (
    <article className="rounded-3xl border border-slate-200 overflow-hidden bg-white shadow-sm hover:shadow-md transition">
      <div className="relative h-48 bg-slate-200">
        {/* Placeholder blueprint */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.12]">
          <div className="absolute inset-0 [background-image:linear-gradient(to_right,rgba(0,0,0,.18)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,.18)_1px,transparent_1px)] [background-size:32px_32px]" />
        </div>

        <div className="absolute left-5 top-5 rounded-full bg-white/90 px-3 py-1 text-[11px] font-bold tracking-widest uppercase text-[#062a47] backdrop-blur">
          {p.badge}
        </div>
      </div>

      <div className="p-6">
        <h4 className="text-lg font-bold text-slate-900">{p.title}</h4>
        <p className="mt-2 text-sm text-slate-600">{p.description}</p>

        <div className="mt-5 h-px w-full bg-slate-200" />

        <div className="mt-4 flex items-center justify-between">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#3b2358]">
            En desarrollo
          </span>
          <span className="text-xs text-slate-500 hover:text-slate-700 transition">
            Ver detalles →
          </span>
        </div>
      </div>
    </article>
  );
}
