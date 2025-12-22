import Link from "next/link";

export default function ContactoPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* HERO */}
      <section className="bg-[#3b2358] text-white">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <p className="text-xs font-semibold tracking-[0.25em] uppercase text-white/80">
            Contacto
          </p>

          <h1 className="mt-3 text-3xl md:text-5xl font-extrabold leading-tight">
            Contanos tu proyecto y te respondemos rápido.
          </h1>

          <p className="mt-5 max-w-2xl text-white/85 text-base md:text-lg">
            Podés escribirnos por WhatsApp, correo o completar el formulario.
            Coordinamos una llamada, revisamos el alcance y te armamos una propuesta.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="https://api.whatsapp.com/send?phone=542996211266"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-white px-5 py-3 text-sm font-semibold text-[#3b2358] hover:bg-white/90 transition"
            >
              WhatsApp
            </a>

            <a
              href="mailto:info@360construcciones.com.ar"
              className="rounded-xl border border-white/30 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10 transition"
            >
              Enviar correo
            </a>

            <Link
              href="/proyectos"
              className="rounded-xl border border-white/30 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10 transition"
            >
              Ver proyectos
            </Link>
          </div>
        </div>
      </section>

      {/* INFO + FORM */}
      <section className="py-14">
        <div className="mx-auto max-w-7xl px-6 grid gap-10 lg:grid-cols-5">
          {/* TARJETAS INFO */}
          <aside className="lg:col-span-2">
            <h2 className="text-2xl font-extrabold text-slate-900">
              Canales de contacto
            </h2>
            <p className="mt-3 text-slate-600">
              Elegí el canal que te quede más cómodo. Respondemos en horario
              laboral y coordinamos visita/llamada si hace falta.
            </p>

            <div className="mt-8 grid gap-4">
              <div className="rounded-2xl border border-slate-200 p-6">
                <p className="text-xs font-semibold tracking-[0.25em] uppercase text-slate-500">
                  WhatsApp
                </p>
                <p className="mt-2 font-semibold text-slate-900">
                  +54 299 621 1266
                </p>
                <p className="mt-2 text-sm text-slate-600">
                  Ideal para consultas rápidas y coordinación.
                </p>
                <a
                  className="mt-4 inline-flex text-sm font-semibold text-[#3b2358] hover:underline"
                  href="https://api.whatsapp.com/send?phone=542996211266"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Abrir WhatsApp →
                </a>
              </div>

              <div className="rounded-2xl border border-slate-200 p-6">
                <p className="text-xs font-semibold tracking-[0.25em] uppercase text-slate-500">
                  Email
                </p>
                <p className="mt-2 font-semibold text-slate-900">
                  info@360construcciones.com.ar
                </p>
                <p className="mt-2 text-sm text-slate-600">
                  Para adjuntar planos, referencias o detalles del alcance.
                </p>
                <a
                  className="mt-4 inline-flex text-sm font-semibold text-[#3b2358] hover:underline"
                  href="mailto:info@360construcciones.com.ar"
                >
                  Enviar correo →
                </a>
              </div>

              <div className="rounded-2xl border border-slate-200 p-6">
                <p className="text-xs font-semibold tracking-[0.25em] uppercase text-slate-500">
                  Ubicación
                </p>
                <p className="mt-2 font-semibold text-slate-900">
                  Neuquén / Alto Valle
                </p>
                <p className="mt-2 text-sm text-slate-600">
                  Trabajamos en la región. Coordinamos visita a obra o reunión.
                </p>
              </div>
            </div>
          </aside>

          {/* FORMULARIO */}
          <div className="lg:col-span-3">
            <div className="rounded-3xl border border-slate-200 bg-white p-8 md:p-10 shadow-sm">
              <h2 className="text-2xl font-extrabold text-slate-900">
                Enviá tu consulta
              </h2>
              <p className="mt-2 text-slate-600">
                Contanos qué necesitás. Con 3 o 4 datos ya podemos orientarte.
              </p>

              {/* Form “front-only”: después lo conectamos a Formspree o API */}
              <form className="mt-8 grid gap-5">
                <div className="grid gap-5 md:grid-cols-2">
                  <div>
                    <label className="text-sm font-semibold text-slate-900">
                      Nombre y apellido
                    </label>
                    <input
                      className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[#3b2358]/30"
                      placeholder="Tu nombre"
                      type="text"
                      name="name"
                      required
                    />
                  </div>

                  <div>
                    <label className="text-sm font-semibold text-slate-900">
                      Teléfono
                    </label>
                    <input
                      className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[#3b2358]/30"
                      placeholder="+54 ..."
                      type="tel"
                      name="phone"
                    />
                  </div>
                </div>

                <div className="grid gap-5 md:grid-cols-2">
                  <div>
                    <label className="text-sm font-semibold text-slate-900">
                      Email
                    </label>
                    <input
                      className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[#3b2358]/30"
                      placeholder="tucorreo@email.com"
                      type="email"
                      name="email"
                      required
                    />
                  </div>

                  <div>
                 <label
                    htmlFor="project-type"
                    className="text-sm font-semibold text-slate-900"
                    >
                     Tipo de proyecto
                    </label>

                    <select
                         id="project-type"
                      name="type"
                      className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[#3b2358]/30"
                      defaultValue="obra"
                    >
                      <option value="obra">Obra / Construcción</option>
                      <option value="arquitectura">Arquitectura</option>
                      <option value="ingenieria">Ingeniería</option>
                      <option value="remodelacion">Remodelación</option>
                      <option value="otro">Otro</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-sm font-semibold text-slate-900">
                    Mensaje
                  </label>
                  <textarea
                    name="message"
                    className="mt-2 w-full min-h-[140px] rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[#3b2358]/30"
                    placeholder="Contanos ubicación, metros aprox, tiempos, presupuesto estimado, etc."
                    required
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
                  <button
                    type="submit"
                    className="inline-flex justify-center rounded-xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white hover:bg-slate-800 transition"
                  >
                    Enviar
                  </button>

                  <p className="text-xs text-slate-500">
                    Al enviar aceptás que te contactemos por los medios indicados.
                  </p>
                </div>
              </form>
            </div>

            {/* FAQ breve */}
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 p-6">
                <p className="text-sm font-bold text-slate-900">
                  ¿En cuánto responden?
                </p>
                <p className="mt-2 text-sm text-slate-600">
                  Habitualmente dentro de 24 hs hábiles.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 p-6">
                <p className="text-sm font-bold text-slate-900">
                  ¿Pueden visitar la obra?
                </p>
                <p className="mt-2 text-sm text-slate-600">
                  Sí, coordinamos visita o reunión según el proyecto.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-14 bg-slate-50">
        <div className="mx-auto max-w-7xl px-6">
          <div className="rounded-3xl bg-[#3b2358] p-10 text-white flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-extrabold">
                ¿Querés una propuesta a medida?
              </h2>
              <p className="mt-2 text-white/85">
                Pasanos la idea y te guiamos con los próximos pasos.
              </p>
            </div>

            <a
              href="https://api.whatsapp.com/send?phone=542996211266"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-fit rounded-xl bg-white px-6 py-3 text-sm font-semibold text-[#3b2358] hover:bg-white/90 transition"
            >
              Escribir por WhatsApp
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
