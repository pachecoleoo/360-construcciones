import Image from "next/image";
import Link from "next/link";

type Props = {
  eyebrow: string;
  title: string;
  description: string;
  bullets?: string[];
  imageSrc: string;
  reverse?: boolean;
  cta?: { href: string; label: string };
};

export default function StorySection({
  eyebrow,
  title,
  description,
  bullets = [],
  imageSrc,
  reverse = false,
  cta,
}: Props) {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div
        className={[
          "mx-auto max-w-7xl px-6 grid gap-12 items-center",
          "lg:grid-cols-2",
          reverse ? "lg:[&>*:first-child]:order-2" : "",
        ].join(" ")}
      >
        {/* TEXTO */}
        <div>
          <p className="text-xs font-semibold tracking-[0.25em] uppercase text-slate-500">
            {eyebrow}
          </p>

          <h2 className="mt-3 text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight">
            {title}
          </h2>

          <p className="mt-4 text-slate-600 leading-relaxed max-w-2xl">
            {description}
          </p>

          {bullets.length > 0 && (
            <ul className="mt-6 grid gap-3">
              {bullets.map((b) => (
                <li key={b} className="flex gap-3 text-slate-700">
                  <span className="mt-2 h-2 w-2 rounded-full bg-[#062a47]" />
                  <span className="leading-relaxed">{b}</span>
                </li>
              ))}
            </ul>
          )}

          {cta && (
            <div className="mt-8">
              <Link
                href={cta.href}
                className="inline-flex rounded-xl bg-[#062a47] px-6 py-3 text-sm font-semibold text-white hover:bg-[#05233b] transition"
              >
                {cta.label}
              </Link>
            </div>
          )}
        </div>

        {/* IMAGEN */}
        <div className="relative">
          <div className="absolute -inset-4 rounded-[28px] bg-slate-100" />
          <div className="relative overflow-hidden rounded-[24px] border border-slate-200 bg-white">
            <div className="relative h-[320px] md:h-[420px] w-full">
              <Image
                src={imageSrc}
                alt={title}
                fill
                className="object-cover"
                priority={false}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
