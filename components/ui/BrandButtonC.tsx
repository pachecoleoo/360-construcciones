import React from "react";

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: "solid" | "outline";
  className?: string;
  target?: React.HTMLAttributeAnchorTarget;
  rel?: string;
};

function cx(...c: Array<string | false | null | undefined>) {
  return c.filter(Boolean).join(" ");
}

export function BrandButtonC({
  href,
  children,
  variant = "solid",
  className,
  target,
  rel,
}: Props) {
  const solid = variant === "solid";

  return (
    <a
      href={href}
      target={target}
      rel={rel}
      className={cx(
        "group relative inline-flex items-center justify-center",
        "rounded-none border px-7 py-3",

        // "font-body text-xs uppercase tracking-[0.18em] font-semibold",

        // Ultra Compressed (hero / 360 gigante
        // " font-ultra font-[950] tracking-tight  text-xxl  ",

        // Extra Compressed (subtítulos)
        // " font-extra font-extrabold text-xxl  ",

        // Black Condensed (títulos principales)
        // "font-heading font-black text-xxl  ",

        // Condensed (texto normal)
        "font-body font-normal  text-xxl  ",

        "transition-transform duration-200",
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#081835]",
        solid
          ? "bg-white text-[#081835] border-white/35"
          : "bg-transparent text-white border-white/40",
        className,
      )}
    >
      {/* Placa offset */}
      <span
        aria-hidden="true"
        className={cx(
          "absolute inset-0 -z-10 translate-x-2 translate-y-2",
          "transition-transform duration-200 group-hover:translate-x-0 group-hover:translate-y-0",
          solid ? "bg-[#062a47]" : "bg-white/25",
        )}
      />

      {/* Hover invert para outline */}
      {!solid && (
        <span
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-200"
        />
      )}

      <span
        className={cx("relative z-10", !solid && "group-hover:text-[#081835]")}
      >
        {children}
      </span>
    </a>
  );
}
