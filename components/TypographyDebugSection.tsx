export default function TypographyDebugSection() {
  return (
    <section className="bg-white py-24 px-8">
      <div className="max-w-6xl mx-auto space-y-20">
        {/* TITLE */}
        <h2 className="text-3xl font-bold mb-12 tracking-tight">
          Test de Tipografías — 360 Construcciones
        </h2>

        {/* CONDENSED */}
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.3em] text-gray-500">
            Condensed (font-body)
          </p>

          <h3 className="font-body font-normal text-5xl">360 CONSTRUCCIONES</h3>

          <p className="font-body text-lg">
            ABCDEFGHIJKLMNÑOPQRSTUVWXYZ 1234567890
          </p>
        </div>

        {/* BLACK CONDENSED */}
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.3em] text-gray-500">
            Black Condensed (font-heading)
          </p>

          <h3 className="font-heading font-black text-5xl">
            360 CONSTRUCCIONES
          </h3>

          <p className="font-heading font-black text-lg">
            ABCDEFGHIJKLMNÑOPQRSTUVWXYZ 1234567890
          </p>
        </div>

        {/* EXTRA COMPRESSED */}
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.3em] text-gray-500">
            Extra Compressed (font-extra)
          </p>

          <h3 className="font-extra font-extrabold text-5xl">
            360 CONSTRUCCIONES
          </h3>

          <p className="font-extra font-extrabold text-lg">
            ABCDEFGHIJKLMNÑOPQRSTUVWXYZ 1234567890
          </p>
        </div>

        {/* ULTRA COMPRESSED */}
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.3em] text-gray-500">
            Ultra Compressed (font-ultra)
          </p>

          <h3 className="font-ultra font-black text-5xl tracking-tight">
            360 CONSTRUCCIONES
          </h3>

          <p className="font-ultra font-black text-lg tracking-tight">
            ABCDEFGHIJKLMNÑOPQRSTUVWXYZ 1234567890
          </p>
        </div>
      </div>
    </section>
  );
}
