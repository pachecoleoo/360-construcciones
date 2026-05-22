"use client";

import type { ReactNode } from "react";
import { useEffect, useRef, useState } from "react";

function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

function useInViewOnce<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return { ref, visible };
}

function WhatsAppIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M20 12.05C20 16.47 16.42 20.05 12 20.05C10.59 20.05 9.27 19.68 8.12 19.03L4 20.05L5.08 16.08C4.39 14.89 4 13.51 4 12.05C4 7.63 7.58 4.05 12 4.05C16.42 4.05 20 7.63 20 12.05Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M9.35 9.45C9.55 9.02 9.74 9 9.94 9H10.36C10.47 9 10.64 9.04 10.73 9.23C10.85 9.48 11.13 10.17 11.17 10.26C11.22 10.36 11.25 10.48 11.17 10.61C11.1 10.74 11.06 10.8 10.96 10.92C10.87 11.02 10.78 11.14 10.7 11.22C10.61 11.31 10.52 11.41 10.64 11.62C10.76 11.83 11.16 12.49 11.77 13.03C12.55 13.72 13.21 13.94 13.44 14.04C13.67 14.13 13.8 14.12 13.89 14.02C13.99 13.91 14.31 13.54 14.44 13.36C14.57 13.17 14.7 13.2 14.87 13.26C15.04 13.32 15.94 13.76 16.13 13.85C16.32 13.95 16.44 13.99 16.49 14.08C16.54 14.17 16.54 14.61 16.34 15C16.14 15.38 15.16 15.88 14.76 15.92C14.37 15.95 13.88 15.97 12.12 15.23C10.01 14.35 8.63 11.98 8.52 11.83C8.41 11.68 7.66 10.68 7.66 9.65C7.66 8.63 8.19 8.13 8.39 7.92C8.6 7.71 8.84 7.67 8.99 7.67C9.14 7.67 9.26 7.68 9.35 7.69"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function InstagramIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <rect
        x="4"
        y="4"
        width="16"
        height="16"
        rx="4"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <circle cx="12" cy="12" r="3.6" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" />
    </svg>
  );
}

function LinkedInIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <rect
        x="4"
        y="4"
        width="16"
        height="16"
        rx="2.5"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M8.4 10.2V15.8"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <circle cx="8.4" cy="8.3" r="0.8" fill="currentColor" />
      <path
        d="M11.3 15.8V12.7C11.3 11.65 11.96 10.95 12.93 10.95C13.9 10.95 14.5 11.6 14.5 12.67V15.8"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.3 11.25V10.2"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function Card({
  title,
  desc,
  href,
  label,
  icon,
  accentClass,
  hoverBorderClass,
  visible,
  delayClass,
}: {
  title: string;
  desc: string;
  href: string;
  label: string;
  icon: ReactNode;
  accentClass: string;
  hoverBorderClass: string;
  visible: boolean;
  delayClass: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={cx(
        `
          group relative block overflow-hidden
          border border-[#d9dde2] bg-white
          px-6 py-6
          shadow-[0_14px_34px_rgba(6,42,71,0.06)]
          transition-all duration-300
          hover:-translate-y-[2px]
          hover:shadow-[0_22px_50px_rgba(6,42,71,0.10)]
          ${hoverBorderClass}
        `,
        "transition-all duration-1000 ease-out",
        delayClass,
        visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0",
      )}
    >
      <div
        className={`absolute left-0 top-0 h-[3px] w-0 transition-all duration-500 group-hover:w-full ${accentClass}`}
      />

      <div className="mb-6 flex items-center justify-end">
        <div
          className={cx(
            "-mb-12 flex h-12 w-12 items-center justify-center border text-white transition-all duration-300 group-hover:scale-105",
            accentClass,
            accentClass === "bg-[#25D366]"
              ? "border-[#25D366]"
              : "border-[#062a47] bg-[#062a47]",
          )}
        >
          {icon}
        </div>
      </div>

      <div>
        <h3 className="font-heading text-[30px] font-black uppercase leading-none text-[#062a47] md:text-[34px]">
          {title}
        </h3>

        <p className="mt-4 max-w-[30ch] text-[14px] leading-7 text-[#5f6f84] md:text-[15px]">
          {desc}
        </p>
      </div>

      <div className="mt-6 flex items-center justify-between border-t border-[#d9dde2] pt-4">
        <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-[#062a47]">
          {label}
        </span>

        <span className="text-[#062a47] transition-transform duration-300 group-hover:translate-x-1">
          →
        </span>
      </div>
    </a>
  );
}

export default function SocialSection({
  id = "redes",
  title = "Redes y contacto directo",
  subtitle = "Escribinos por el canal que te resulte más cómodo para consultas, coordinación o seguimiento comercial.",
  whatsappNumber = "5490000000000",
  instagramUrl = "https://www.instagram.com/360construcciones/",
  linkedinUrl = "https://www.linkedin.com/company/360-construcciones/posts/?feedView=all",
}: {
  id?: string;
  title?: string;
  subtitle?: string;
  whatsappNumber?: string;
  instagramUrl?: string;
  linkedinUrl?: string;
}) {
  const { ref, visible } = useInViewOnce<HTMLElement>();

  const waUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    "Hola! Quisiera consultar por un proyecto.",
  )}`;

  return (
    <section
      ref={ref}
      id={id}
      className="relative overflow-hidden border-t border-[#d9dde2] bg-[#f4f5f6]"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(6,42,71,0.14) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(6,42,71,0.14) 1px, transparent 1px)
          `,
          backgroundSize: "76px 76px",
        }}
      />

      <div
        aria-hidden="true"
        className={cx(
          "pointer-events-none absolute right-4 top-24 font-heading text-[88px] font-black leading-none tracking-[-0.04em] text-[#062a47]/[0.08] sm:right-8 sm:text-[120px] md:right-12 md:top-8 md:text-[180px]",
          "transition-all duration-1000 ease-out",
          visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0",
        )}
      >
        03
      </div>

      <div className="relative mx-auto max-w-[1380px] px-6 py-20 md:px-10 md:py-24">
        <div className="max-w-3xl">
          <p
            className={cx(
              "text-[11px] uppercase tracking-[0.28em] text-[#7a8a97]",
              "transition-all duration-700 ease-out",
              visible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0",
            )}
          >
            Comunicación
          </p>

          <div className="overflow-hidden">
            <h2
              className={cx(
                "mt-4 font-heading text-[42px] font-black uppercase leading-[0.92] tracking-[0.01em] text-[#062a47] sm:text-[56px] md:text-[74px] lg:text-[88px]",
                "transition-all duration-700 delay-100 ease-out",
                visible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-[110%] opacity-0",
              )}
            >
              {title}
            </h2>
          </div>
          <div className="mt-3 h-[2px] w-20 overflow-hidden">
            <div
              className={cx(
                "h-full bg-[#062a47] transition-all duration-[1100ms] delay-200 ease-out",
                visible ? "w-full" : "w-0",
              )}
            />
          </div>
          <p
            className={cx(
              "mt-6 max-w-[42rem] text-[15px] leading-8 text-[#5f6f84] md:text-[17px] md:leading-9",
              "transition-all duration-700 delay-200 ease-out",
              visible ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0",
            )}
          >
            {subtitle}
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          <Card
            title="WhatsApp"
            desc="Respuesta ágil para coordinar una visita, solicitar presupuesto o iniciar una consulta técnica."
            href={waUrl}
            label="Abrir chat"
            accentClass="bg-[#062a47]"
            hoverBorderClass="hover:border-[#062a47]/25"
            icon={<WhatsAppIcon className="h-[30px] w-[30px]" />}
            visible={visible}
            delayClass="delay-300"
          />

          <Card
            title="Instagram"
            desc="Seguinos para conocer avances de obra, novedades y contenido vinculado a nuestros desarrollos."
            href={instagramUrl}
            label="Ver perfil"
            accentClass="bg-[#062a47]"
            hoverBorderClass="hover:border-[#062a47]/25"
            icon={<InstagramIcon className="h-[30px] w-[30px]" />}
            visible={visible}
            delayClass="delay-400"
          />

          <Card
            title="LinkedIn"
            desc="Conocé el perfil institucional de la empresa, su enfoque profesional y su trayectoria."
            href={linkedinUrl}
            label="Ver LinkedIn"
            accentClass="bg-[#062a47]"
            hoverBorderClass="hover:border-[#062a47]/25"
            icon={<LinkedInIcon className="h-[30px] w-[30px]" />}
            visible={visible}
            delayClass="delay-500"
          />
        </div>
      </div>
    </section>
  );
}
