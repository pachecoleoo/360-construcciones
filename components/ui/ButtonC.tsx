import React from "react";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "cta" | "secondary";
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
  variant = "cta",
  icon,
  className,
  target,
  rel,
}: ButtonProps) {
  const isCTA = variant === "cta";

  return (
    <a
      href={href}
      target={target}
      rel={rel}
      className={cx(
        "group relative inline-flex items-center justify-center gap-3",
        "rounded-full px-7 py-3",
        "text-xs uppercase tracking-[0.18em] font-semibold",
        "border transition-all duration-300",
        isCTA
          ? "bg-[#062a47] border-white/35 text-white"
          : "bg-transparent border-white/45 text-white",
        "hover:shadow-[0_16px_35px_rgba(0,0,0,0.22)]",
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#081835]",
        className,
      )}
    >
      {/* invert hover */}
      <span
        aria-hidden="true"
        className={cx(
          "absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300",
          "bg-white",
        )}
      />
      <span
        className={cx(
          "relative z-10 transition-colors duration-300",
          "group-hover:text-[#081835]",
        )}
      >
        {children}
      </span>

      {icon && (
        <span
          aria-hidden="true"
          className="relative z-10 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-[#081835]"
        >
          {icon}
        </span>
      )}
    </a>
  );
}
