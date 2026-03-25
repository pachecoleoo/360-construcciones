import Image from "next/image";

type Amenity = {
  icon: string;
  label: string;
  description?: string;
};

type ProjectAmenitiesProps = {
  eyebrow?: string;
  title: string;
  items: Amenity[];
};

export default function ProjectAmenities({
  eyebrow = "Amenities",
  title,
  items,
}: ProjectAmenitiesProps) {
  if (!items?.length) return null;

  return (
    <section className="bg-white py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* HEADER */}
        <div className="mb-12">
          <p className="text-[11px] font-bold uppercase tracking-[0.24em] text-[#062a47]/55">
            {eyebrow}
          </p>

          <h3 className="mt-3 text-3xl font-black uppercase text-[#062a47] md:text-5xl">
            {title}
          </h3>
        </div>

        {/* GRID */}
        <div className="grid gap-y-10 gap-x-8 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, index) => (
            <div
              key={index}
              className="group flex items-start gap-5 border-t border-[#e2e6ea] pt-6 transition-all duration-300"
            >
              {/* ICONO */}
              <div className="relative h-[42px] w-[42px] flex-shrink-0">
                <Image
                  src={item.icon}
                  alt={item.label}
                  fill
                  className="object-contain opacity-80 transition-all duration-300 group-hover:opacity-100 group-hover:scale-105"
                />
              </div>

              {/* TEXTO */}
              <div>
                <p className="text-[13px] font-semibold uppercase tracking-[0.14em] text-[#062a47]">
                  {item.label}
                </p>

                {item.description && (
                  <p className="mt-2 text-[14px] leading-7 text-[#5f6f84]">
                    {item.description}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
