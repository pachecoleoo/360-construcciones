"use client";
import { useLanguage } from "@/context/LanguageContext";
import { useEffect, useMemo, useRef, useState } from "react";

type ContactFormValues = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

type Errors = {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
};
const CONTACT_CONTENT = {
  es: {
    eyebrow: "Contacto",
    title: "Invertí en real estate",
    description:
      "Coordinamos asesoramiento inicial, evaluación técnica y seguimiento comercial para proyectos de arquitectura, infraestructura y desarrollo urbano.",

    contactInformation: "Información de contacto",
    openingHours: "Horarios de atención",
    openingHoursValue: "Lun a Vie · 09:00 – 18:00",
    responseTime: "Tiempo de respuesta",
    responseTimeValue: "24–48 hs hábiles",
    directContact: "Contacto directo",

    formEyebrow: "Consulta técnica",
    formTitle: "Te asesoramos",
    formDescription:
      "Completá el formulario y te contactaremos para avanzar con una propuesta acorde al alcance de tu proyecto.",

    labels: {
      name: "Nombre",
      email: "Email",
      phone: "Teléfono",
      subject: "Asunto",
      message: "Mensaje",
    },

    placeholders: {
      name: "Tu nombre",
      email: "tu@email.com",
      phone: "Opcional",
      subject: "Motivo de consulta",
      message: "Contanos brevemente sobre tu proyecto, necesidad o consulta.",
    },

    errors: {
      name: "Ingresá tu nombre.",
      email: "Ingresá tu email.",
      invalidEmail: "Ingresá un email válido.",
      subject: "Indicá el asunto.",
      message: "Escribí tu mensaje.",
      shortMessage: "El mensaje debe tener al menos 10 caracteres.",
    },

    mail: {
      name: "Nombre",
      email: "Email",
      phone: "Teléfono",
    },

    formNotice:
      "Al enviar este formulario, la consulta se abrirá en tu cliente de correo con los datos completados.",
    send: "Enviar consulta",
    sending: "Enviando...",
  },

  en: {
    eyebrow: "Contact",
    title: "Invest in real estate",
    description:
      "We provide initial guidance, technical assessment and commercial support for architecture, infrastructure and urban development projects.",

    contactInformation: "Contact information",
    openingHours: "Opening hours",
    openingHoursValue: "Mon to Fri · 09:00 – 18:00",
    responseTime: "Response time",
    responseTimeValue: "24–48 business hours",
    directContact: "Direct contact",

    formEyebrow: "Technical inquiry",
    formTitle: "Let’s discuss your project",
    formDescription:
      "Complete the form and we will contact you with a proposal tailored to the scope of your project.",

    labels: {
      name: "Name",
      email: "Email",
      phone: "Phone",
      subject: "Subject",
      message: "Message",
    },

    placeholders: {
      name: "Your name",
      email: "your@email.com",
      phone: "Optional",
      subject: "Reason for your inquiry",
      message: "Tell us briefly about your project, requirements or inquiry.",
    },

    errors: {
      name: "Enter your name.",
      email: "Enter your email address.",
      invalidEmail: "Enter a valid email address.",
      subject: "Enter a subject.",
      message: "Write your message.",
      shortMessage: "The message must contain at least 10 characters.",
    },

    mail: {
      name: "Name",
      email: "Email",
      phone: "Phone",
    },

    formNotice:
      "When you submit this form, your email application will open with the completed information.",
    send: "Send inquiry",
    sending: "Sending...",
  },
};
function cx(...c: Array<string | false | null | undefined>) {
  return c.filter(Boolean).join(" ");
}

function validateEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
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

export default function ContactFormSection() {
  const { language } = useLanguage();
  const text = CONTACT_CONTENT[language];

  const { ref, visible } = useInViewOnce<HTMLElement>();

  const [values, setValues] = useState<ContactFormValues>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);
  const [status, setStatus] = useState<"idle" | "loading">("idle");

  const validate = () => {
    const e: Errors = {};

    if (!values.name.trim()) {
      e.name = text.errors.name;
    }

    if (!values.email.trim()) {
      e.email = text.errors.email;
    } else if (!validateEmail(values.email)) {
      e.email = text.errors.invalidEmail;
    }

    if (!values.subject.trim()) {
      e.subject = text.errors.subject;
    }

    if (!values.message.trim()) {
      e.message = text.errors.message;
    } else if (values.message.trim().length < 10) {
      e.message = text.errors.shortMessage;
    }

    return e;
  };
  const mailtoHref = useMemo(() => {
    const to = "contacto@360construcciones.com";
    const subject = encodeURIComponent(values.subject);

    const body = encodeURIComponent(
      [
        `${text.mail.name}: ${values.name}`,
        `${text.mail.email}: ${values.email}`,
        `${text.mail.phone}: ${values.phone || "-"}`,
        "",
        values.message,
      ].join("\n"),
    );

    return `mailto:${to}?subject=${subject}&body=${body}`;
  }, [values, text]);

  const onChange =
    (key: keyof ContactFormValues) =>
    (
      e:
        | React.ChangeEvent<HTMLInputElement>
        | React.ChangeEvent<HTMLTextAreaElement>,
    ) => {
      setValues((v) => ({ ...v, [key]: e.target.value }));
    };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const validation = validate();
    setErrors(validation);
    setSubmitted(true);

    if (Object.keys(validation).length !== 0) return;

    setStatus("loading");
    window.location.href = mailtoHref;
  };

  const inputClass = (error?: boolean) =>
    cx(
      "w-full border bg-white px-4 py-3.5 text-[14px] text-[#062a47] outline-none transition-all duration-300",
      "placeholder:text-[#7a8a97]",
      error
        ? "border-red-300 bg-red-50 focus:border-red-400"
        : "border-[#d9dde2] hover:border-[#b8c6d1] focus:border-[#062a47]",
    );

  return (
    <section
      ref={ref}
      id="primera-seccion"
      className="relative overflow-hidden border-t border-[#d9dde2] bg-[#f4f5f6] text-[#062a47]"
    >
      {/* blueprint grid */}
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

      {/* número de sección */}
      <div
        aria-hidden="true"
        className={cx(
          "pointer-events-none absolute right-4 top-20 font-heading text-[88px] font-black leading-none tracking-[-0.04em] text-[#062a47]/[0.08] sm:right-8 sm:text-[120px] md:right-12 md:top-8 md:text-[180px]",
          "transition-all duration-1000 ease-out",
          visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0",
        )}
      >
        01
      </div>

      <div className="relative mx-auto max-w-[1380px] px-6 py-16 md:px-10 md:py-24">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          {/* COLUMNA IZQUIERDA */}
          <div
            id="email"
            className={cx(
              "max-w-xl",
              "transition-all duration-1000 ease-out",
              visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0",
            )}
          >
            <p
              className={cx(
                "text-[11px] uppercase tracking-[0.28em] text-[#7a8a97]",
                "transition-all duration-700 ease-out",
                visible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-4 opacity-0",
              )}
            >
              {text.eyebrow}
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
                {text.title}{" "}
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
                "mt-6 max-w-[34rem] text-[15px] leading-8 text-[#5f6f84] md:text-[17px] md:leading-9",
                "transition-all duration-700 delay-200 ease-out",
                visible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-5 opacity-0",
              )}
            >
              {text.description}
            </p>

            {/* INFORMACIÓN DE CONTACTO */}
            <div
              className={cx(
                "relative mt-10 overflow-hidden border-y border-[#cfd5dc]",
                "transition-all duration-1000 delay-300 ease-out",
                visible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0",
              )}
            >
              {/* Número decorativo */}

              {/* Encabezado */}
              <div className="relative flex items-center justify-between py-5">
                <p className="text-[10px] uppercase tracking-[0.28em] text-[#7a8a97]">
                  {text.contactInformation}{" "}
                </p>
              </div>

              {/* Horarios */}
              <div
                className="
      group relative grid grid-cols-[36px_1fr] gap-4
      border-t border-[#cfd5dc] py-5
      transition-all duration-300
      hover:bg-white/65 hover:px-4
      sm:grid-cols-[42px_1fr] sm:gap-5
    "
              >
                <span className="pt-1 text-[10px] font-semibold tracking-[0.16em] text-[#062a47]/50">
                  01
                </span>

                <div className="transition-transform duration-300 group-hover:translate-x-1">
                  <p className="text-[9px] uppercase tracking-[0.25em] text-[#7a8a97]">
                    {text.openingHours}{" "}
                  </p>

                  <p className="mt-2 font-heading text-[19px] font-black uppercase leading-tight text-[#062a47] sm:text-[21px]">
                    {text.openingHoursValue}{" "}
                  </p>
                </div>
              </div>

              {/* Tiempo de respuesta */}
              <div
                className="
      group relative grid grid-cols-[36px_1fr] gap-4
      border-t border-[#cfd5dc] py-5
      transition-all duration-300
      hover:bg-white/65 hover:px-4
      sm:grid-cols-[42px_1fr] sm:gap-5
    "
              >
                <span className="pt-1 text-[10px] font-semibold tracking-[0.16em] text-[#062a47]/50">
                  02
                </span>

                <div className="transition-transform duration-300 group-hover:translate-x-1">
                  <p className="text-[9px] uppercase tracking-[0.25em] text-[#7a8a97]">
                    {text.responseTime}{" "}
                  </p>

                  <p className="mt-2 font-heading text-[19px] font-black uppercase leading-tight text-[#062a47] sm:text-[21px]">
                    {text.responseTimeValue}{" "}
                  </p>
                </div>
              </div>

              {/* WhatsApp */}
              <a
                href="https://wa.me/5490000000000"
                target="_blank"
                rel="noopener noreferrer"
                className="
      group relative grid grid-cols-[36px_1fr_auto] items-center gap-4
      border-t border-[#cfd5dc] py-5
      transition-all duration-300
      hover:bg-[#062a47] hover:px-4
      sm:grid-cols-[42px_1fr_auto] sm:gap-5
    "
              >
                <span
                  className="
        text-[10px] font-semibold tracking-[0.16em]
        text-[#062a47]/50
        transition-colors duration-300
        group-hover:text-white/45
      "
                >
                  03
                </span>

                <div className="transition-transform duration-300 group-hover:translate-x-1">
                  <p
                    className="
          text-[9px] uppercase tracking-[0.25em]
          text-[#7a8a97]
          transition-colors duration-300
          group-hover:text-white/55
        "
                  >
                    {text.directContact}{" "}
                  </p>

                  <p
                    className="
          mt-2 font-heading text-[23px] font-black uppercase leading-none
          text-[#062a47]
          transition-colors duration-300
          group-hover:text-white
          sm:text-[27px]
        "
                  >
                    WhatsApp
                  </p>
                </div>

                <div
                  className="
    flex h-11 w-11 shrink-0 items-center justify-center
    rounded-full border border-[#cfd5dc] bg-white/60
    text-[#062a47]
    transition-all duration-300
    group-hover:rotate-[-45deg]
    group-hover:border-white/25
    group-hover:bg-white/10
    group-hover:text-white
  "
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-[18px] w-[18px]"
                    aria-hidden="true"
                  >
                    <path
                      d="M5 19L19 5M19 5H8M19 5V16"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </a>
            </div>
          </div>

          {/* FORMULARIO */}
          <div
            id="asesor"
            className={cx(
              "mt-10 border border-[#d9dde2] bg-white shadow-[0_18px_40px_rgba(6,42,71,0.08)]",
              "transition-all duration-1000 delay-400 ease-out",
              visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0",
            )}
          >
            <div className="h-[4px] bg-[#062a47]" />

            <div className="p-6 md:p-8 lg:p-10">
              <div className="border-b border-[#d9dde2] pb-6">
                <p className="text-[11px] uppercase tracking-[0.28em] text-[#7a8a97]">
                  {text.formEyebrow}
                </p>

                <h3 className="mt-3 font-heading text-[34px] font-black uppercase leading-[0.95] text-[#062a47] md:text-[44px]">
                  {text.formTitle}
                </h3>

                <p className="mt-3 max-w-[34rem] text-[14px] leading-7 text-[#5f6f84] md:text-[15px]">
                  {text.formDescription}
                </p>
              </div>

              <form onSubmit={onSubmit} noValidate className="mt-8 grid gap-6">
                <div className="grid gap-5 md:grid-cols-2">
                  <Field
                    label={text.labels.name}
                    error={submitted ? errors.name : undefined}
                  >
                    <input
                      type="text"
                      value={values.name}
                      onChange={onChange("name")}
                      className={inputClass(!!errors.name)}
                      placeholder={text.placeholders.name}
                    />
                  </Field>

                  <Field
                    label={text.labels.email}
                    error={submitted ? errors.email : undefined}
                  >
                    <input
                      type="email"
                      value={values.email}
                      onChange={onChange("email")}
                      className={inputClass(!!errors.email)}
                      placeholder={text.placeholders.email}
                    />
                  </Field>
                </div>

                <div className="grid gap-5 md:grid-cols-2">
                  <Field label={text.labels.phone}>
                    <input
                      type="text"
                      value={values.phone}
                      onChange={onChange("phone")}
                      className={inputClass()}
                      placeholder={text.placeholders.phone}
                    />
                  </Field>

                  <Field
                    label={text.labels.subject}
                    error={submitted ? errors.subject : undefined}
                  >
                    <input
                      type="text"
                      value={values.subject}
                      onChange={onChange("subject")}
                      className={inputClass(!!errors.subject)}
                      placeholder={text.placeholders.subject}
                    />
                  </Field>
                </div>

                <Field
                  label={text.labels.message}
                  error={submitted ? errors.message : undefined}
                >
                  <textarea
                    rows={6}
                    value={values.message}
                    onChange={onChange("message")}
                    className={cx(inputClass(!!errors.message), "resize-none")}
                    placeholder={text.placeholders.message}
                  />
                </Field>

                <div className="flex flex-col gap-4 border-t border-[#d9dde2] pt-6 sm:flex-row sm:items-center sm:justify-between">
                  <p className="max-w-[28rem] text-[12px] leading-6 text-[#7a8a97]">
                    {text.formNotice}
                  </p>

                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="
        group relative inline-flex h-[52px] items-center justify-center overflow-hidden
        border border-[#062a47] bg-[#062a47] px-8
        text-[11px] font-black uppercase tracking-[0.18em] text-white
        transition-all duration-200
        hover:-translate-y-[1px] hover:bg-[#0b3a63]
        disabled:cursor-not-allowed disabled:opacity-50
      "
                  >
                    <span className="relative z-10">
                      {status === "loading" ? text.sending : text.send}
                    </span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoRow({ eyebrow, value }: { eyebrow: string; value: string }) {
  return (
    <div className="border-t border-[#d9dde2] px-6 py-6 first:border-t-0">
      <p className="text-[11px] uppercase tracking-[0.28em] text-[#7a8a97]">
        {eyebrow}
      </p>
      <p className="mt-2 font-heading text-[28px] font-black uppercase leading-none text-[#062a47] md:text-[32px]">
        {value}
      </p>
    </div>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="mb-2 block text-[11px] uppercase tracking-[0.22em] text-[#7a8a97]">
        {label}
      </label>
      {children}
      {error && <p className="mt-2 text-xs text-red-600">{error}</p>}
    </div>
  );
}
