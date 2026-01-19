// import { FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative bg-[#081835] text-white overflow-hidden">
      {/* Línea superior técnica */}
      <div className="h-px w-full bg-white/10" />

      {/* Grid sutil tipo plano */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.15) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.15) 1px, transparent 1px)
          `,
          backgroundSize: "96px 96px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
          {/* Marca */}
          <div>
            <h3 className="font-heading font-black uppercase tracking-[0.04em] text-xl">
              360 Construcciones
            </h3>
            <p className="mt-4 text-sm text-white/70 leading-relaxed max-w-sm">
              Arquitectura, ingeniería y gestión integral para proyectos de alto
              impacto. Construimos con visión, precisión y compromiso.
            </p>
          </div>

          {/* Navegación */}
          <div>
            <p className="text-xs tracking-[0.22em] uppercase text-white/60">
              Navegación
            </p>
            <ul className="mt-5 space-y-3 text-sm">
              {[
                "Home",
                "Nosotros",
                "Proyectos desarrollados",
                "Proyectos en desarrollo",
                "Contacto",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-white/80 hover:text-white transition"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Redes */}
          <div>
            <p className="text-xs tracking-[0.22em] uppercase text-white/60">
              Conectemos
            </p>

            {/* <div className="mt-6 flex items-center gap-4">
              <SocialIcon href="#" label="Instagram">
                <FaInstagram />
              </SocialIcon>

              <SocialIcon href="#" label="LinkedIn">
                <FaLinkedinIn />
              </SocialIcon>

              <SocialIcon href="#" label="WhatsApp">
                <FaWhatsapp />
              </SocialIcon>
            </div> */}
          </div>
        </div>

        {/* Divider */}
        <div className="mt-14 h-px w-full bg-white/10" />

        {/* Bottom */}
        <div className="mt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/55">
          <span>
            © {new Date().getFullYear()} 360 Construcciones. Todos los derechos
            reservados.
          </span>
          <span className="tracking-[0.22em] uppercase">
            Calidad · Seguridad · Cumplimiento
          </span>
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      className="
        flex items-center justify-center
        w-11 h-11
        rounded-full
        border border-white/20
        text-white/80
        transition
        hover:bg-white
        hover:text-[#081835]
      "
    >
      {children}
    </a>
  );
}
