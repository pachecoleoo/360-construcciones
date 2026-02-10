import React from "react";

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: "solid" | "outline";
  icon?: React.ReactNode;
  className?: string;
  target?: React.HTMLAttributeAnchorTarget;
  rel?: string;
};

function cx(...c: Array<string | false | null | undefined>) {
  return c.filter(Boolean).join(" ");
}

export function BrandButtonA({
  href,
  children,
  variant = "solid",
  icon,
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
        "group inline-flex items-stretch overflow-hidden",
        "rounded-none border transition-all duration-300",
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#081835]",
        solid ? "border-white/25" : "border-white/35",
        className,
      )}
    >
      {/* Bloque lateral (sello) */}
      <span
        aria-hidden="true"
        className={cx(
          "grid place-items-center px-4",
          "border-r transition-colors duration-300",
          solid
            ? "bg-white text-[#081835] border-white/20"
            : "bg-transparent text-white border-white/25 group-hover:bg-white group-hover:text-[#081835]",
        )}
      >
        <span className="text-sm font-black tracking-[0.12em]">↗</span>
      </span>

      {/* Cuerpo */}
      <span
        className={cx(
          "relative inline-flex items-center gap-3 px-6 py-3",
          "font-sans text-xs uppercase tracking-[0.18em] font-semibold",
          "transition-colors duration-300",
          solid
            ? "bg-[#062a47] text-white group-hover:bg-white group-hover:text-[#081835]"
            : "bg-transparent text-white group-hover:bg-white group-hover:text-[#081835]",
        )}
      >
        {children}
        {icon ? (
          <span className="transition-transform duration-300 group-hover:translate-x-1">
            {icon}
          </span>
        ) : null}
      </span>
    </a>
  );
}
