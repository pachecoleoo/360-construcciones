export default function LocationSection() {
  const address = "Salta 256, Neuquén Capital, Argentina";

  return (
    <section id="ubicacion" className="bg-slate-50">
      <div className="mx-auto max-w-7xl px-6 py-20 grid lg:grid-cols-2 gap-14 items-center">
        {/* TEXTO */}
        <div>
          <span className="text-xs tracking-widest font-semibold text-[#062a47] uppercase">
            Ubicación
          </span>

          <h2 className="mt-3 font-heading font-black uppercase text-4xl md:text-5xl text-slate-900 leading-tight">
            Nuestra oficina
          </h2>

          <p className="mt-5 text-slate-600 max-w-md">
            Coordinamos reuniones técnicas y planificación de obra en nuestra
            sede.
          </p>

          <div className="mt-8 rounded-2xl border bg-white p-5">
            <p className="text-xs uppercase tracking-wide text-slate-500">
              Dirección
            </p>
            <p className="font-semibold text-slate-900 mt-1">{address}</p>
          </div>

          <a
            href="https://maps.google.com/?q=Salta+256+Neuquén"
            target="_blank"
            className="mt-6 inline-block rounded-2xl bg-[#062a47] text-white px-6 py-3 text-sm font-semibold hover:opacity-95 transition"
          >
            Cómo llegar →
          </a>
        </div>

        {/* STREET VIEW (TU iframe) */}
        <div className="rounded-3xl overflow-hidden border shadow-xl">
          <div className="aspect-[4/3] w-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!4v1769981291374!6m8!1m7!1sZoQ3gW5TbVU0YpVnSuIihw!2m2!1d-38.95225935308583!2d-68.06626726662016!3f280.6842718309308!4f3.241860353552511!5f0.546861300257367"
              className="w-full h-full grayscale contrast-110"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
              style={{ border: 0 }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
