import Button from "@/components/ui/Button";
type DataItem = {
  label: string;
  value: string;
};

type ProjectIntroWithDataProps = {
  eyebrow?: string;
  title: string;
  paragraphs: string[];
  dataTitle?: string;
  items: DataItem[];
};

export default function ProjectIntroWithData({
  eyebrow = "Descripción general",
  title,
  paragraphs,
  dataTitle = "Información",
  items,
}: ProjectIntroWithDataProps) {
  return (
    <section
      id="proyecto"
      className="relative border-b border-[#d9dde2] bg-[#f4f5f6] py-20 md:py-24"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          {/* IZQUIERDA */}
          <div className="max-w-3xl">
            <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-[#062a47]/55">
              {eyebrow}
            </p>

            <h2 className="mt-4 text-4xl font-black uppercase leading-[0.96] text-[#062a47] md:text-5xl lg:text-[64px]">
              {title}
            </h2>

            <div className="mt-6 h-[1px] w-20 bg-[#062a47]" />

            <div className="mt-8 space-y-6">
              {paragraphs.map((paragraph, index) => (
                <p
                  key={index}
                  className="max-w-2xl text-[15px] leading-8 text-[#5f6f84] md:text-base"
                >
                  {paragraph}
                </p>
              ))}
            </div>
            <br />
            <Button
              href="/brochures/belgrano531.pdf"
              variant="dark"
              target="_blank"
              rel="noopener noreferrer"
            >
              Brochure
            </Button>
          </div>

          {/* DERECHA — FICHA TÉCNICA ESTILO FOOTER */}
          <aside>
            {" "}
            <div className="border-t border-[#cfd5dc] pt-4 lg:border-t-0 lg:pt-0">
              <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-[#062a47]/55">
                {dataTitle}
              </p>

              <div className="mt-6 border-t border-[#cfd5dc]">
                {items.map((item, index) => (
                  <div
                    key={`${item.label}-${index}`}
                    className="grid grid-cols-[110px_1fr] gap-6 border-b border-[#cfd5dc] py-5 transition-colors duration-300 hover:bg-white/55 md:grid-cols-[130px_1fr] hover:shadow-[8px_8px_0px_rgba(6,42,71,0.04),16px_16px_0px_rgba(6,42,71,0.02)]"
                  >
                    <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#062a47]/55">
                      {item.label}
                    </span>

                    <div>
                      <p className="text-[15px] leading-8 text-[#22384f]">
                        {item.value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
