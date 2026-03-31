import React from "react";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "glass" | "ghost";
  icon?: React.ReactNode;
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
  variant = "glass",
  icon,
  className,
  target,
  rel,
}: ButtonProps) {
  const isGlass = variant === "glass";

  return (
    <a
      href={href}
      target={target}
      rel={rel}
      className={cx(
        "group relative inline-flex w-full items-center justify-center overflow-hidden",
        "min-h-[42px] px-4 md:px-5",
        "rounded-full border backdrop-blur-md",
        "text-center uppercase",
        "text-[9px] sm:text-[10px] md:text-[11px]",
        "leading-none tracking-[0.12em] md:tracking-[0.14em]",
        "font-medium",
        "transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40 hover:-translate-y-[3px]",
        isGlass
          ? "border-white/18 bg-white/[0.07] text-white shadow-[0_8px_24px_rgba(0,0,0,0.22),inset_0_1px_0_rgba(255,255,255,0.14)] hover:bg-white/[0.10] hover:border-white/26 hover:-translate-y-[3px]"
          : "border-white/12 bg-transparent text-white/82 hover:bg-white/[0.05] hover:text-white hover:border-white/20",
        className,
      )}
    >
      {/* brillo superior suave */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/12 to-transparent"
      />

      {/* línea inferior mínima */}
      <span
        aria-hidden="true"
        className="absolute bottom-0 left-1/2 h-px w-0 -translate-x-1/2 bg-white/35 transition-all duration-500 group-hover:w-[58%]"
      />

      <span className="relative z-10 flex items-center justify-center gap-2 px-1">
        <span className="block">{children}</span>

        {icon && (
          <span
            aria-hidden="true"
            className="transition-transform duration-500 group-hover:translate-x-[2px]"
          >
            {icon}
          </span>
        )}
      </span>
    </a>
  );
}
