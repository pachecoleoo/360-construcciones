"use client";

import { useEffect, useRef, useState } from "react";

type ProjectContactFormProps = {
  eyebrow?: string;
  title: string;
  intro?: string;
};

type FormValues = {
  nombre: string;
  apellido: string;
  email: string;
  telefono: string;
  mensaje: string;
};

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
      { threshold: 0.18 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return { ref, visible };
}

export default function ProjectContactForm({
  eyebrow = "",
  title,
  intro = "Dejanos tus datos y te contactaremos para brindarte más información sobre el desarrollo.",
}: ProjectContactFormProps) {
  const { ref, visible } = useInViewOnce<HTMLElement>();

  const [values, setValues] = useState<FormValues>({
    nombre: "",
    apellido: "",
    email: "",
    telefono: "",
    mensaje: "",
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const subject = encodeURIComponent("Consulta sobre el desarrollo");
    const body = encodeURIComponent(
      `Nombre: ${values.nombre}
Apellido: ${values.apellido}
Email: ${values.email}
Teléfono: ${values.telefono}

Mensaje:
${values.mensaje}`,
    );

    window.location.href = `mailto:tuemail@dominio.com?subject=${subject}&body=${body}`;
  }

  return (
    <section
      id="contacto"
      ref={ref}
      className="border-y border-[#0808086c] bg-[#C9D8E2] py-14 md:py-16"
    >
      <div className="mx-auto max-w-[1280px] px-6 md:px-10">
        {/* HEADER */}
        <div className="relative mb-12 md:mb-14">
          {" "}
          {/* NÚMERO 06 */}
          <div
            className={cx(
              "pointer-events-none absolute right-0 top-10 md:top-16 select-none",
              "font-heading font-black leading-none",
              "text-[120px] md:text-[180px]",
              "text-[#ffffff]",
              "transition-all duration-1000 ease-out ",
              visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0",
            )}
          >
            06
          </div>
          {/* CONTENIDO */}
          <div className="relative z-10 max-w-3xl pr-6 md:pr-20">
            <p
              className={cx(
                "text-[11px] uppercase tracking-[0.28em] text-[#7a8a97]",
                "transition-all duration-700 ease-out",
                visible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-4 opacity-0",
              )}
            >
              {}
            </p>

            <div className="overflow-hidden">
              <h2
                className={cx(
                  "mt-2 text-[34px] md:text-[54px]",
                  "leading-[0.95] tracking-tight text-[#062a47]",
                  "font-heading font-black uppercase",
                  "transition-all duration-700 delay-100 ease-out",
                  visible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-[110%] opacity-0",
                )}
              >
                {title}
              </h2>
            </div>

            <div className="mt-3 h-[2px] w-16 overflow-hidden">
              <div
                className={cx(
                  "h-full bg-[#062a47] transition-all duration-[1100ms] delay-200 ease-out",
                  visible ? "w-full" : "w-0",
                )}
              />
            </div>

            <p
              className={cx(
                "mt-6 max-w-[760px] text-[15px] leading-8 text-[#5f6f84] md:text-base",
                "transition-all duration-700 delay-200 ease-out",
                visible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-5 opacity-0",
              )}
            >
              {intro}
            </p>
          </div>
        </div>

        {/* FORM */}
        <div
          className={cx(
            "transition-all duration-1000 delay-300 ease-out",
            visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0",
          )}
        >
          <form
            onSubmit={handleSubmit}
            className="grid gap-x-8 gap-y-8 md:grid-cols-2"
          >
            <Field
              label="Nombre"
              name="nombre"
              value={values.nombre}
              onChange={handleChange}
              required
            />

            <Field
              label="Apellido"
              name="apellido"
              value={values.apellido}
              onChange={handleChange}
              required
            />

            <Field
              label="E-mail"
              name="email"
              type="email"
              value={values.email}
              onChange={handleChange}
              required
            />

            <Field
              label="Teléfono"
              name="telefono"
              type="tel"
              value={values.telefono}
              onChange={handleChange}
              required
            />

            <div className="md:col-span-2">
              <label className="block">
                <span className="mb-3 block text-[13px] uppercase tracking-[0.16em] text-[#062a47]/75">
                  Mensaje
                </span>

                <textarea
                  name="mensaje"
                  value={values.mensaje}
                  onChange={handleChange}
                  rows={2}
                  className={cx(
                    "w-full resize-none bg-transparent px-0 pb-3 pt-2",
                    "border-0 border-b border-[#062a47]/45",
                    "text-[15px] leading-7 text-[#22384f]",
                    "outline-none transition-all duration-300",
                    "focus:border-[#062a47] focus:ring-0",
                    "placeholder:text-[#8c9aa6]",
                  )}
                  placeholder="Escribinos tu consulta"
                />
              </label>
            </div>

            <div className="md:col-span-2 flex justify-start md:justify-end pt-4">
              <button
                type="submit"
                className={cx(
                  "inline-flex items-center justify-center",
                  "min-w-[180px] border border-[#062a47] bg-[#062a47] px-8 py-4",
                  "text-[11px] font-semibold uppercase tracking-[0.22em] text-white",
                  "transition-all duration-300",
                  "hover:bg-transparent hover:text-[#062a47]",
                  "active:scale-[0.98]",
                )}
              >
                Enviar
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

type FieldProps = {
  label: string;
  name: string;
  value: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
  type?: string;
  required?: boolean;
};

function Field({
  label,
  name,
  value,
  onChange,
  type = "text",
  required = false,
}: FieldProps) {
  return (
    <label className="block">
      <span className="mb-1 block text-[13px] uppercase tracking-[0.16em] text-[#062a47]/75">
        {label}
        {required && <span className="ml-1 text-[#8fae6a]">*</span>}
      </span>

      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className={cx(
          "w-full bg-transparent px-0 pb-3 pt-2",
          "border-0 border-b border-[#062a47]/45",
          "text-[15px] text-[#22384f]",
          "outline-none transition-all duration-300",
          "focus:border-[#062a47] focus:ring-0",
          "placeholder:text-[#8c9aa6]",
        )}
      />
    </label>
  );
}
