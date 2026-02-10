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

export function BrandButtonB({
  href,
  children,
  variant = "outline",
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
        "font-sans text-xs uppercase tracking-[0.18em] font-semibold",
        "transition-all duration-300 overflow-hidden",
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#081835]",
        solid
          ? "bg-white text-[#081835] border-white/35"
          : "bg-transparent text-white border-white/35",
        className,
      )}
    >
      {/* Borde interno */}
      <span
        aria-hidden="true"
        className={cx(
          "pointer-events-none absolute inset-[3px] border",
          solid ? "border-[#081835]/15" : "border-white/20",
        )}
      />

      {/* Micro líneas técnicas (sutil) */}
      <span
        aria-hidden="true"
        className={cx(
          "pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500",
          "bg-[linear-gradient(to_right,rgba(255,255,255,0.14)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.14)_1px,transparent_1px)]",
          "bg-[size:22px_22px]",
        )}
      />

      {/* Hover fill cuando es outline */}
      {!solid && (
        <span
          aria-hidden="true"
          className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
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
