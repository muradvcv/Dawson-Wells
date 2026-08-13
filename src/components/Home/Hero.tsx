import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-black text-white">
      {/* Video */}
      <video autoPlay loop muted playsInline className="absolute inset-0 h-full w-full object-cover">
        <source src="/Banner-video.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black/45" />

      {/* Content */}
      <div className="relative z-10 flex min-h-screen items-center">
        <div className="mx-auto w-full max-w-[1500px] px-6 lg:px-16">
          <div className="max-w-3xl">
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-cyan-400" />
              <span className="text-[10px] uppercase tracking-[0.35em] text-cyan-300">
                Dawson Wells Gallery
              </span>
            </div>

            <h1 className="text-5xl font-light leading-[0.95] tracking-tight sm:text-7xl lg:text-8xl">
              Where Art
              <br />
              Meets <span className="text-cyan-300">Perspective.</span>
            </h1>

            <p className="mt-7 max-w-lg text-sm leading-6 text-white/65 sm:text-base">
              A distinguished collection of modern and contemporary art,
              thoughtfully curated to inspire discovery and connection.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/artworks"
                className="group flex items-center gap-3 rounded-lg bg-cyan-400 px-6 py-3 text-[10px] font-semibold uppercase tracking-[0.15em] text-black transition hover:bg-cyan-300"
              >
                Explore Collection
                <span className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </Link>

              <Link
                href="/contact"
                className="group flex items-center gap-3 rounded-lg border border-white/25 bg-white/5 px-6 py-3 text-[10px] uppercase tracking-[0.15em] backdrop-blur-md transition hover:border-cyan-400 hover:text-cyan-300"
              >
                Visit Gallery
                <span className="transition-transform group-hover:translate-x-1">
                  ↗
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll */}
      <div className="absolute bottom-8 right-8 z-10 flex flex-col items-center gap-2">
        <span className="text-[8px] uppercase tracking-[0.3em] text-white/40">
          Discover
        </span>
        <span className="h-10 w-px bg-white/20">
          <span className="block h-4 w-px bg-cyan-400" />
        </span>
      </div>
    </section>
  );
};

export default Hero;