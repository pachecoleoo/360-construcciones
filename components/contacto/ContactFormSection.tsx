"use client";

import { useMemo, useState } from "react";

type ContactFormValues = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

function cx(...c: Array<string | false | null | undefined>) {
  return c.filter(Boolean).join(" ");
}

function Field({
  label,
  children,
  hint,
}: {
  label: string;
  children: React.ReactNode;
  hint?: string;
}) {
  return (
    <div>
      <label className="block text-sm font-semibold text-slate-900">
        {label}
      </label>
      <div className="mt-2">{children}</div>
      {hint ? (
        <p className="mt-2 text-xs text-slate-500 leading-relaxed">{hint}</p>
      ) : null}
    </div>
  );
}

export default function ContactFormSection({
  id = "contacto",
  title = "Contacto",
  subtitle = "Contanos sobre tu proyecto. Respondemos a la brevedad.",
  accent = "#062a47",
  actionLabel = "Enviar consulta",
}: {
  id?: string;
  title?: string;
  subtitle?: string;
  accent?: string;
  actionLabel?: string;
}) {
  const [values, setValues] = useState<ContactFormValues>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle",
  );

  // Si más adelante conectás un endpoint real, reemplazás esto.
  const mailtoHref = useMemo(() => {
    const to = "contacto@360construcciones.com"; // <-- cambiá
    const subject = encodeURIComponent(values.subject || "Consulta web");
    const body = encodeURIComponent(
      [
        `Nombre: ${values.name}`,
        `Email: ${values.email}`,
        `Teléfono: ${values.phone}`,
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
      if (status !== "idle") setStatus("idle");
    };

  const isValid =
    values.name.trim().length >= 2 &&
    values.email.includes("@") &&
    values.message.trim().length >= 10;

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isValid) return;

    try {
      setStatus("sending");

      // Versión sin backend: abrimos mailto.
      // Si preferís: reemplazá por fetch("/api/contact", { method:"POST", body: JSON.stringify(values) })
      window.location.href = mailtoHref;

      setStatus("sent");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id={id} className="border-e-gray-500">
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-14 items-start">
          {/* TEXTO */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold tracking-wide text-slate-700">
              <span
                className="h-2 w-2 rounded-full"
                style={{ backgroundColor: accent }}
              />
              360 CONSTRUCCIONES
            </div>

            <h2 className="mt-4 font-heading font-black uppercase tracking-[0.02em] text-3xl md:text-5xl text-slate-900 leading-[1.05]">
              {title}
            </h2>

            <p className="mt-4 text-slate-600 text-base md:text-lg max-w-prose">
              {subtitle}
            </p>

            <div className="mt-8 space-y-4">
              <div className="rounded-2xl border border-slate-200 p-5">
                <p className="text-sm font-semibold text-slate-900">Horarios</p>
                <p className="mt-1 text-sm text-slate-600">
                  Lun a Vie • 09:00 – 18:00
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 p-5">
                <p className="text-sm font-semibold text-slate-900">
                  Respuesta
                </p>
                <p className="mt-1 text-sm text-slate-600">
                  Te respondemos dentro de las próximas 24–48 hs hábiles.
                </p>
              </div>
            </div>
          </div>

          {/* FORM */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-slate-200 bg-white shadow-[0_20px_60px_rgba(2,6,23,0.08)] overflow-hidden">
              <div className="p-6 md:p-8">
                <form onSubmit={onSubmit} className="grid gap-5">
                  <div className="grid gap-5 md:grid-cols-2">
                    <Field label="Nombre y apellido">
                      <input
                        value={values.name}
                        onChange={onChange("name")}
                        placeholder="Ej: Leonardo Pacheco"
                        className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-slate-400"
                      />
                    </Field>

                    <Field label="Email">
                      <input
                        value={values.email}
                        onChange={onChange("email")}
                        placeholder="tu@email.com"
                        type="email"
                        className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-slate-400"
                      />
                    </Field>
                  </div>

                  <div className="grid gap-5 md:grid-cols-2">
                    <Field label="Teléfono (opcional)">
                      <input
                        value={values.phone}
                        onChange={onChange("phone")}
                        placeholder="+54 9 ..."
                        className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-slate-400"
                      />
                    </Field>

                    <Field label="Asunto">
                      <input
                        value={values.subject}
                        onChange={onChange("subject")}
                        placeholder="Ej: Presupuesto obra / Desarrollo"
                        className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-slate-400"
                      />
                    </Field>
                  </div>

                  <Field
                    label="Mensaje"
                    hint="Contanos ubicación, plazos aproximados y tipo de proyecto."
                  >
                    <textarea
                      value={values.message}
                      onChange={onChange("message")}
                      placeholder="Escribí tu consulta..."
                      rows={6}
                      className="w-full resize-none rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-slate-400"
                    />
                  </Field>

                  <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between pt-2">
                    <p className="text-xs text-slate-500">
                      Al enviar aceptás que te contactemos por email/WhatsApp.
                    </p>

                    <button
                      type="submit"
                      disabled={!isValid || status === "sending"}
                      className={cx(
                        "inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-semibold text-white transition",
                        !isValid || status === "sending"
                          ? "opacity-60 cursor-not-allowed"
                          : "hover:opacity-95",
                      )}
                      style={{ backgroundColor: accent }}
                    >
                      {status === "sending" ? "Enviando..." : actionLabel}
                    </button>
                  </div>

                  {status === "error" ? (
                    <div className="rounded-2xl border border-red-200 bg-red-50 p-4 text-sm text-red-700">
                      Hubo un problema. Probá de nuevo o escribinos por
                      WhatsApp.
                    </div>
                  ) : null}
                </form>
              </div>

              <div className="border-t border-slate-200 bg-slate-50 p-5 md:p-6">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-sm text-slate-700">
                    ¿Preferís contacto directo?
                  </p>
                  <div className="flex gap-2">
                    <a
                      href="tel:+5490000000000" // <-- cambiá
                      className="rounded-2xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-900 hover:border-slate-300"
                    >
                      Llamar
                    </a>
                    <a
                      href="https://wa.me/5490000000000" // <-- cambiá
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-2xl px-4 py-2 text-sm font-semibold text-white hover:opacity-95"
                      style={{ backgroundColor: accent }}
                    >
                      WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* mini nota */}
            <p className="mt-4 text-xs text-slate-500">
              Tip: si después armamos un endpoint, el formulario puede enviar a
              tu mail sin abrir el cliente de correo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
