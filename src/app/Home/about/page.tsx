import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Check,
  Sparkles,
} from "lucide-react";

const AboutCompany = () => {
  const highlights = [
    "Modern & Contemporary Art",
    "Curated Gallery Collection",
    "Visual Storytelling",
    "Global Digital Presence",
  ];

  const galleryImageUrl =
    "https://i.ibb.co.com/kssbFqyJ/Gemini-Generated-Image-yoj40eyoj40eyoj4.png";

  return (
    <section className="relative min-h-screen overflow-hidden bg-black py-24 text-white lg:py-32">

      {/* Background Image */}
      <Image
        src={galleryImageUrl}
        alt="Dawson Wells Gallery"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/65" />

     

      <div className="pointer-events-none absolute -left-40 bottom-20 h-96 w-96 rounded-full bg-teal-400/10 blur-[140px]" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12">

        {/* Header */}
        <div className="mb-16 grid gap-10 lg:grid-cols-2 lg:items-end">

          <div>

            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-300/30 bg-black/30 px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-cyan-200 backdrop-blur-md">
              <Sparkles size={14} />
              About Dawson Wells
            </div>

            <h2 className="max-w-3xl text-4xl font-light leading-[1.05] tracking-tight sm:text-5xl lg:text-7xl">
              A space for
              <span className="block bg-gradient-to-r from-cyan-200 via-teal-200 to-white bg-clip-text font-normal italic text-transparent">
                meaningful art.
              </span>
            </h2>

          </div>

          <p className="max-w-xl text-base leading-8 text-white/65 lg:ml-auto lg:text-lg">
            Dawson Wells Gallery is a contemporary art platform dedicated
            to presenting exceptional Modern and Contemporary Art through
            thoughtful curation, visual storytelling, and an engaging
            digital experience.
          </p>

        </div>

        {/* Main Content */}
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

          {/* Left Side */}
          <div className="relative overflow-hidden rounded-3xl border border-white/15 bg-black/25 p-2 backdrop-blur-sm">

            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">

              <Image
                src={galleryImageUrl}
                alt="Dawson Wells Fine Art Gallery"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover opacity-75"
              />

              <div className="absolute inset-0 bg-black/35" />

            </div>

            <div className="absolute bottom-6 left-6 rounded-2xl border border-white/15 bg-black/55 px-5 py-4 backdrop-blur-md">

              <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-cyan-300">
                Dawson Wells
              </p>

              <p className="mt-1 text-xs text-white/70">
                Modern & Contemporary Art
              </p>

            </div>

          </div>

          {/* Right Content */}
          <div>

            <p className="text-base leading-8 text-white/65 md:text-lg">
              Our gallery brings together a carefully selected collection
              of artworks designed to connect ideas, perspectives, and
              audiences. Dawson Wells focuses on creating a sophisticated
              digital showcase that inspires discovery and encourages
              visitors to experience the physical gallery.
            </p>

            {/* Highlights */}
            <div className="mt-8 grid gap-3 sm:grid-cols-2">

              {highlights.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-xl border border-white/10 bg-black/30 p-4 backdrop-blur-md transition-all duration-300 hover:border-cyan-300/30 hover:bg-black/45"
                >
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-cyan-300/10 text-cyan-300">
                    <Check size={14} />
                  </span>

                  <span className="text-sm font-medium text-white/80">
                    {item}
                  </span>
                </div>
              ))}

            </div>

            {/* CTA */}
            <div className="mt-9">

              <Link
                href="/about"
                className="group inline-flex items-center gap-3 rounded-full border border-cyan-300/40 bg-cyan-300/10 px-6 py-3.5 text-sm font-medium text-cyan-200 backdrop-blur-md transition-all duration-300 hover:border-cyan-300 hover:bg-cyan-300 hover:text-black hover:shadow-[0_0_30px_rgba(103,232,249,0.2)]"
              >
                Discover Our Story

                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/10 transition duration-300 group-hover:translate-x-1 group-hover:bg-black/10">
                  <ArrowUpRight size={14} />
                </span>

              </Link>

            </div>

          </div>

        </div>

        {/* Mission & Vision */}
        <div className="mt-24 grid gap-6 md:grid-cols-2">

          {/* Mission */}
          <div className="rounded-3xl border border-white/10 bg-black/45 p-8 backdrop-blur-md md:p-10">

            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
              Our Mission
            </p>

            <h3 className="text-2xl font-light leading-snug text-white md:text-3xl">
              To connect exceptional contemporary art with audiences through
              thoughtful presentation and meaningful visual experiences.
            </h3>

            <p className="mt-5 text-sm leading-7 text-white/50">
              We aim to make art discovery engaging, accessible, and memorable
              while maintaining the quality and sophistication expected from
              a professional gallery.
            </p>

          </div>

          {/* Vision */}
          <div className="rounded-3xl border border-cyan-300/20 bg-[#008080]/70 p-8 backdrop-blur-md md:p-10">

            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-cyan-100">
              Our Vision
            </p>

            <h3 className="text-2xl font-light leading-snug text-white md:text-3xl">
              To build a globally recognized digital presence for Dawson Wells
              Gallery.
            </h3>

            <p className="mt-5 text-sm leading-7 text-white/70">
              Our vision is to create a refined digital destination where
              visitors can explore our collection, discover new perspectives,
              and feel connected to the physical gallery.
            </p>

          </div>

        </div>

        {/* Bottom */}
        <div className="mt-16 flex flex-col justify-between gap-6 border-t border-white/15 pt-8 md:flex-row md:items-center">

          <p className="max-w-xl text-xs leading-6 text-white/45">
            A carefully curated collection. A sophisticated digital
            experience. A lasting connection between art and audience.
          </p>

          <Link
            href="/gallery"
            className="group inline-flex items-center gap-2 text-sm font-medium text-cyan-300 transition-colors hover:text-cyan-100"
          >
            Explore Collection

            <ArrowUpRight
              size={16}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </Link>

        </div>

      </div>
    </section>
  );
};

export default AboutCompany;