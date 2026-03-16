import React from "react";

type ButtonProps = {
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

export function ButtonC({
  href,
  children,
  variant = "solid",
  icon,
  className,
  target,
  rel,
}: ButtonProps) {
  const isSolid = variant === "solid";

  return (
    <a
      href={href}
      target={target}
      rel={rel}
      className={cx(
        "group relative inline-flex items-center justify-center overflow-hidden",
        "min-h-[54px] px-6 md:px-8",
        "rounded-none",
        "transition-all duration-500 ease-out",
        "uppercase text-[11px] md:text-[12px] tracking-[0.16em] font-medium",
        "border",
        isSolid
          ? "border-white/20 bg-[#0b1f33]/70 text-white"
          : "border-white/25 bg-transparent text-white/90",
        "hover:border-white/40 hover:text-white",
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent",
        className,
      )}
    >
      {/* fondo hover deslizante */}
      <span
        aria-hidden="true"
        className={cx(
          "absolute inset-0 origin-left scale-x-0 transition-transform duration-500 ease-out group-hover:scale-x-100",
          isSolid ? "bg-white/10" : "bg-white/8",
        )}
      />

      {/* línea izquierda técnica */}
      <span
        aria-hidden="true"
        className="absolute left-0 top-0 h-full w-[2px] bg-white/60 transition-all duration-500 group-hover:w-[6px]"
      />

      {/* línea superior fina */}
      <span
        aria-hidden="true"
        className="absolute left-0 top-0 h-px w-full bg-white/20"
      />

      <span className="relative z-10 flex items-center gap-3">
        <span>{children}</span>

        {icon && (
          <span
            aria-hidden="true"
            className="transition-transform duration-500 group-hover:translate-x-1"
          >
            {icon}
          </span>
        )}
      </span>
    </a>
  );
}
