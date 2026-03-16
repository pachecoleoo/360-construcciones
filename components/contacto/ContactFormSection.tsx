"use client";
import Image from "next/image";
import { useMemo, useState } from "react";

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

function cx(...c: Array<string | false | null | undefined>) {
  return c.filter(Boolean).join(" ");
}

function validateEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export default function ContactFormSection() {
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

    if (!values.name.trim()) e.name = "Ingresá tu nombre.";
    if (!values.email.trim()) e.email = "Ingresá tu email.";
    else if (!validateEmail(values.email)) e.email = "Ingresá un email válido.";

    if (!values.subject.trim()) e.subject = "Indicá el asunto.";

    if (!values.message.trim()) e.message = "Escribí tu mensaje.";
    else if (values.message.length < 10)
      e.message = "El mensaje debe tener al menos 10 caracteres.";

    return e;
  };

  const mailtoHref = useMemo(() => {
    const to = "contacto@360construcciones.com";

    const subject = encodeURIComponent(values.subject);

    const body = encodeURIComponent(
      [
        `Nombre: ${values.name}`,
        `Email: ${values.email}`,
        `Teléfono: ${values.phone || "-"}`,
        "",
        values.message,
      ].join("\n"),
    );

    return `mailto:${to}?subject=${subject}&body=${body}`;
  }, [values]);

  const onChange =
    (key: keyof ContactFormValues) =>
    (
      e:
        | React.ChangeEvent<HTMLInputElement>
        | React.ChangeEvent<HTMLTextAreaElement>,
    ) => {
      setValues((v) => ({ ...v, [key]: e.target.value }));
    };

  const onSubmit = (e: React.FormEvent) => {
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
      "w-full rounded-[12px] border px-4 py-3.5 text-sm outline-none transition-all duration-300",
      error
        ? "border-red-300 bg-red-50 focus:border-red-400"
        : "border-[#D9E2E8] hover:border-[#BCD0DD] focus:border-[#9FB7C8]",
    );

  return (
    <section
      id="primera-seccion"
      className="relative overflow-hidden bg-white text-slate-900"
    >
      {/* fondo */}
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(201,216,226,0.16),rgba(255,255,255,0.96)_28%,rgba(255,255,255,1)_100%)]" />

      <div className="absolute inset-x-0 top-0 h-px bg-[#D7E2E9]" />

      <div className="absolute left-[6%] top-0 bottom-0 hidden w-px bg-[#E7EEF2] lg:block" />

      <div className="absolute right-[6%] top-0 bottom-0 hidden w-px bg-[#E7EEF2] lg:block" />

      <div className="relative mx-auto max-w-7xl px-6 py-20">
        <div className="grid lg:grid-cols-12 gap-14">
          {/* LADO IZQUIERDO */}

          <div className="lg:col-span-5">
            <h2
              id="whatsapp"
              className="mt-5 text-5xl font-black uppercase text-[#062a47]"
            >
              Contacto
            </h2>

            <p className="mt-5 text-slate-600 max-w-md">
              Contanos sobre tu proyecto. Respondemos a la brevedad.
            </p>

            <div className="mt-10 grid gap-4">
              {/* horarios */}

              <div className="group block border border-[#D7E2E9] bg-white p-6 transition-all duration-800 hover:-translate-y-[3px] hover:bg-[#062a47] hover:border-[#4f5255] hover:shadow-[0_22px_55px_rgba(37,211,102,0.25)] group-hover:text-white">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#062a47]/55 group-hover:text-white">
                  Horarios
                </p>

                <p className="mt-3 text-2xl font-semibold text-[#062a47] group-hover:text-white">
                  Lun a Vie · 09:00 – 18:00
                </p>

                <div className="mt-5 h-[2px] w-10 bg-[#C9D8E2] transition-all duration-300 group-hover:w-16" />
              </div>

              {/* respuesta */}
              <div className="group block border border-[#D7E2E9] bg-white p-6 transition-all duration-800 hover:-translate-y-[3px] hover:bg-[#062a47] hover:border-[#4f5255] hover:shadow-[0_22px_55px_rgba(6,42,71,0.25)]">
                <div className="flex items-center justify-between">
                  {/* TEXTO */}

                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#062a47]/55 transition-colors duration-300 group-hover:text-white">
                      Respuesta
                    </p>

                    <p className="mt-3 text-2xl font-semibold text-[#062a47] transition-colors duration-300 group-hover:text-white">
                      24–48 hs hábiles
                    </p>

                    <div className="mt-5 h-[2px] w-10 bg-[#C9D8E2] transition-all duration-300 group-hover:w-16 group-hover:bg-white" />
                  </div>

                  {/* ICONO */}

                  <div className="flex items-center justify-center">
                    {/* <Image
                      src="/images/iconos/hora.png"
                      alt="Tiempo de respuesta"
                      width={40}
                      height={40}
                      className="transition-all duration-300 group-hover:scale-110 group-hover:invert"
                    /> */}
                  </div>
                </div>
              </div>

              {/* whatsapp */}

              <a
                href="https://wa.me/5490000000000"
                target="_blank"
                rel="noopener noreferrer"
                className="group block border border-[#D7E2E9] bg-white p-6 transition-all duration-800 hover:-translate-y-[3px] hover:bg-[#25D366] hover:border-[#25D366] hover:shadow-[0_22px_55px_rgba(37,211,102,0.25)]"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#062a47]/55 transition-colors duration-300 group-hover:text-white/100">
                      Comunicate directamente con un asesor
                    </p>

                    <p className="mt-3 text-2xl font-semibold text-[#062a47] transition-colors duration-300 group-hover:text-white">
                      WhatsApp
                    </p>

                    <div className="mt-5 h-[2px] w-10 bg-[#C9D8E2] transition-all duration-300 group-hover:w-16 group-hover:bg-white" />
                  </div>
                  <div className="flex items-center justify-center">
                    <Image
                      src="/images/iconos/abir2.png"
                      alt="WhatsApp"
                      width={25}
                      height={40}
                      className="transition-all  duration-300  group-hover:scale-110 group-hover:invert"
                    />
                  </div>{" "}
                </div>
              </a>
            </div>
          </div>

          {/* FORM */}

          <div className="lg:col-span-7">
            <div className="border border-[#D7E2E9] bg-white ">
              <div className="h-[4px] bg-gradient-to-r from-[#062a47] via-[#C9D8E2] to-white" />

              <div className="p-8">
                <div
                  id="email"
                  className="mb-8 border-b border-[#E5EDF2] pb-5 "
                >
                  <h2 className="mt-5 text-4xl font-black uppercase text-[#062a47]">
                    Te asesoramos
                  </h2>

                  <p className="mt-2 text-sm text-slate-500">
                    Envíanos tus consultas
                  </p>
                </div>

                <form onSubmit={onSubmit} noValidate className="grid gap-6">
                  {/* nombre email */}

                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <input
                        placeholder="Nombre"
                        value={values.name}
                        onChange={onChange("name")}
                        className={inputClass(errors.name)}
                      />

                      {submitted && errors.name && (
                        <p className="text-xs text-red-600 mt-2">
                          {errors.name}
                        </p>
                      )}
                    </div>

                    <div>
                      <input
                        type="email"
                        placeholder="Email"
                        value={values.email}
                        onChange={onChange("email")}
                        className={inputClass(!!errors.name)}
                      />

                      {submitted && errors.email && (
                        <p className="text-xs text-red-600 mt-2">
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* telefono asunto */}

                  <div className="grid md:grid-cols-2 gap-5">
                    <input
                      placeholder="Teléfono (opcional)"
                      value={values.phone}
                      onChange={onChange("phone")}
                      className={inputClass()}
                    />

                    <div>
                      <input
                        placeholder="Asunto"
                        value={values.subject}
                        onChange={onChange("subject")}
                        className={inputClass(errors.subject)}
                      />

                      {submitted && errors.subject && (
                        <p className="text-xs text-red-600 mt-2">
                          {errors.subject}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* mensaje */}

                  <div>
                    <textarea
                      rows={6}
                      placeholder="Mensaje"
                      value={values.message}
                      onChange={onChange("message")}
                      className={cx(inputClass(errors.message), "resize-none")}
                    />

                    {submitted && errors.message && (
                      <p className="text-xs text-red-600 mt-2">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  {/* BOTON CTA */}

                  <div className="flex justify-end pt-4">
                    <button
                      type="submit"
                      disabled={status === "loading"}
                      className="
                      group relative inline-flex items-center justify-center
                      h-[52px] px-8 overflow-hidden
                      border border-[#062a47]
                      bg-[#062a47]
                      text-sm font-black uppercase tracking-[0.18em]
                      text-white
                      transition-all duration-150
                      hover:-translate-y-[1px]
                      active:translate-y-[4px]
                      active:shadow-[0_4px_0_rgba(6,42,71,0.35)]
                      disabled:opacity-50
                    "
                    >
                      <span
                        aria-hidden
                        className="
                        absolute inset-0 bg-[#C9D8E2]
                        translate-x-[-100%]
                        transition-transform duration-500
                        group-hover:translate-x-0
                      "
                      />

                      <span className="relative z-10 transition-colors duration-300 group-hover:text-[#062a47]">
                        {status === "loading"
                          ? "ENVIANDO..."
                          : "Enviar consulta"}
                      </span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
