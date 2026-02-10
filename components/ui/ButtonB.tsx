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

export function ButtonB({
  href,
  children,
  variant = "solid",
  icon,
  className,
  target,
  rel,
}: ButtonProps) {
  const solid = variant === "solid";

  return (
    <a
      href={href}
      target={target}
      rel={rel}
      className={cx(
        "group relative inline-flex items-center justify-center gap-3",
        "rounded-full px-7 py-3",
        "text-xs uppercase tracking-[0.18em] font-semibold",
        "transition-all duration-300 overflow-hidden",
        solid
          ? "text-[#081835] bg-white border border-white/60"
          : "text-white bg-transparent border border-white/40",
        "hover:shadow-[0_14px_30px_rgba(0,0,0,0.18)]",
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#081835]",
        className,
      )}
    >
      {/* borde interno técnico */}
      <span
        aria-hidden="true"
        className={cx(
          "pointer-events-none absolute inset-[3px] rounded-full",
          solid ? "border border-[#081835]/15" : "border border-white/20",
        )}
      />

      {/* overlay grid sutil */}
      <span
        aria-hidden="true"
        className={cx(
          "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500",
          "bg-[linear-gradient(to_right,rgba(255,255,255,0.14)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.14)_1px,transparent_1px)]",
          "bg-[size:18px_18px]",
        )}
      />

      {/* hover fill si es outline */}
      {!solid && (
        <span
          aria-hidden="true"
          className={cx(
            "absolute inset-0 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300",
            "bg-white",
          )}
        />
      )}

      <span
        className={cx(
          "relative z-10 transition-colors duration-300",
          solid ? "text-[#081835]" : "group-hover:text-[#081835]",
        )}
      >
        {children}
      </span>

      {icon && (
        <span
          aria-hidden="true"
          className={cx(
            "relative z-10 transition-transform duration-300 group-hover:translate-x-1",
            solid ? "text-[#081835]" : "group-hover:text-[#081835]",
          )}
        >
          {icon}
        </span>
      )}
    </a>
  );
}
