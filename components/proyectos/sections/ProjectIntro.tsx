import Button from "@/components/ui/Button";
type ProjectIntroProps = {
  eyebrow?: string;
  title: string;
  paragraphs: string[];
};

export default function ProjectIntro({
  eyebrow = "Descripción general",
  title,
  paragraphs,
}: ProjectIntroProps) {
  return (
    <section
      id="proyecto"
      className="relative border-b border-slate-200 py-20 md:py-24"
    >
      <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="max-w-3xl">
          <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-[#062a47]/60">
            {eyebrow}
          </p>

          <h2 className="mt-4 text-3xl font-black uppercase leading-tight text-[#062a47] md:text-5xl">
            {title}
          </h2>

          <div className="mt-5 h-[2px] w-20 bg-[#062a47]" />

          <div className="mt-8 space-y-5">
            {paragraphs.map((paragraph, index) => (
              <p
                key={index}
                className="max-w-2xl text-[15px] leading-8 text-slate-600 md:text-base"
              >
                {paragraph}
              </p>
            ))}{" "}
            <Button
              href="/brochures/belgrano531.pdf"
              variant="dark"
              target="_blank"
              rel="noopener noreferrer"
            >
              Brochure
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
