import Image from "next/image";

export default function HeroVideo() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src="/images/buildvideo.mp4"
        autoPlay
        muted
        loop
        playsInline
      />

      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 flex h-full items-center justify-center px-6">
        <div className="text-center max-w-3xl">
          {/* <h1 className="text-white text-4xl md:text-6xl font-bold">
            360 Construcciones
          </h1> */}
          {/* LOGO */}
          <div className="mx-auto w-[260px] md:w-[420px]">
            <div className="logo-reveal">
              <Image
                src="/brand/logoBlanco.png"
                alt="360 Construcciones"
                width={900}
                height={220}
                priority
                className="h-auto w-full"
              />
            </div>
          </div>
          <p className="mt-4 text-white/90 text-lg md:text-xl">
            Arquitectura e ingeniería para proyectos de alto impacto
          </p>

          <div className="mt-8 flex justify-center gap-4">
            <a
              href="/contacto"
              className="rounded-full bg-white text-black px-6 py-3 font-medium hover:bg-white/90 transition"
            >
              Contactanos
            </a>
            <a
              href="/proyectos"
              className="rounded-full border border-white/60 text-white px-6 py-3 hover:bg-white/10 transition"
            >
              Ver proyectos
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
