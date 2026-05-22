"use client";

import Link from "next/link";

const NAV = [
  { label: "Inicio", href: "/" },
  { label: "Nosotros", href: "/nosotros" },
  {
    label: "Infraestructura y movimiento de suelos",
    href: "/infraestructura",
  },
  { label: "Proyectos", href: "/proyectos?estado=desarrollados" },
  { label: "En ejecución", href: "/proyectos?estado=en-desarrollo" },
  { label: "Contacto", href: "/contacto" },
];

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="relative">
        {/* blueprint sutil */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.16) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.16) 1px, transparent 1px)",
            backgroundSize: "96px 96px",
          }}
        />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white/10" />

        <div className="relative mx-auto max-w-7xl px-6 md:px-12 lg:px-20 py-14">
          <div className="grid gap-12 lg:grid-cols-12">
            {/* NAV */}
            <div className="lg:col-span-5">
              <p className="font-body text-xs tracking-[0.28em] uppercase text-white/55">
                Navegación
              </p>

              <ul className="mt-6 divide-y divide-white/12">
                {NAV.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="
                        group relative flex items-center justify-between
                        py-4 outline-none
                      "
                    >
                      {/* highlight al “marcar” */}
                      <span
                        aria-hidden
                        className="
                          absolute inset-y-0 left-0 w-0
                          bg-white/6
                          transition-[width] duration-300
                          group-hover:w-full group-focus-visible:w-full
                        "
                      />
                      <span className="relative font-body text-base text-white/90">
                        {item.label}
                      </span>
                      <span
                        aria-hidden
                        className="
                          relative text-white/70
                          transition-transform duration-300
                          group-hover:translate-x-2 group-focus-visible:translate-x-2
                        "
                      >
                        →
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* INFO */}
            <div className="lg:col-span-7">
              <p className="font-body text-xs tracking-[0.28em] uppercase text-white/55">
                Información
              </p>

              <div className="mt-6 divide-y divide-white/12">
                <Row
                  label="Dirección"
                  value={
                    <>
                      Salta 256, Neuquén Capital - Piso 2 <br />
                      Neuquén, Argentina
                    </>
                  }
                />

                <Row
                  label="Redes"
                  value={
                    <div className="flex flex-col gap-2">
                      <a
                        href="https://www.instagram.com/360construcciones/?hl=en"
                        className=" w-fit text-white/85 hover:text-white focus-visible:text-white outline-none
                                   underline decoration-white/0 hover:decoration-white/40 focus-visible:decoration-white/40
                                   underline-offset-4 transition"
                      >
                        Instagram
                      </a>
                      <a
                        href="https://www.linkedin.com/company/360-construcciones/posts/?feedView=all"
                        className="w-fit text-white/85 hover:text-white focus-visible:text-white outline-none
                                   underline decoration-white/0 hover:decoration-white/40 focus-visible:decoration-white/40
                                   underline-offset-4 transition"
                      >
                        LinkedIn
                      </a>
                    </div>
                  }
                />

                <Row
                  label="Teléfono"
                  value={
                    <>
                      +54 299 536-0404 <br />
                    </>
                  }
                />

                <Row
                  label="E-mail"
                  value={
                    <div className="flex flex-col gap-2">
                      <a
                        href="mailto:info@360construcciones.com.ar"
                        className="w-fit text-white/85 hover:text-white focus-visible:text-white outline-none
                                   underline decoration-white/0 hover:decoration-white/40 focus-visible:decoration-white/40
                                   underline-offset-4 transition"
                      >
                        info@360construcciones.com.ar
                      </a>
                      <a
                        href="mailto:ventas@360construcciones.com.ar"
                        className="w-fit text-white/85 hover:text-white focus-visible:text-white outline-none
                                   underline decoration-white/0 hover:decoration-white/40 focus-visible:decoration-white/40
                                   underline-offset-4 transition"
                      >
                        ventas@360construcciones.com.ar
                      </a>
                    </div>
                  }
                />
              </div>
            </div>
          </div>

          {/* bottom */}
          <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
            <p className="font-body text-xs text-white/60">
              © {new Date().getFullYear()} 360 Construcciones. Todos los
              derechos reservados.
            </p>

            <p className="font-body text-xs text-white/60">
              Dev by <span className="text-white/80">Leo Pacheco</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

function Row({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div className="grid grid-cols-12 gap-6 py-6">
      <div className="col-span-12 md:col-span-4">
        <p className="font-body text-sm text-white/70">{label}</p>
      </div>
      <div className="col-span-12 md:col-span-8">
        <div className="font-body text-sm md:text-base text-white/90 leading-relaxed">
          {value}
        </div>
      </div>
    </div>
  );
}
