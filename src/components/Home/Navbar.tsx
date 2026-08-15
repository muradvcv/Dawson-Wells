"use client";

import Link from "next/link";
import { useState } from "react";
import {
  Menu,
  X,
  ArrowUpRight,
  ChevronDown,
  Search,
} from "lucide-react";
import Logo from "@/app/assets/icon.png";
import Image from "next/image";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [companyOpen, setCompanyOpen] = useState(false);
  const [artworksOpen, setArtworksOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/home/about" },
  ];

  const companyItems = [
    { name: "Mission & Vision", href: "/home/company/mission" },
    { name: "Company Overview", href: "/home/company/company-overview" },
    { name: "News & Updates", href: "/home/company/news" },
  ];

  const artworksItems = [
    { name: "Photography", href: "/home/artworks/photography" },
    { name: "Paintings", href: "/home/artworks/paintings" },
    { name: "Drawings", href: "/home/artworks/drawings" },
    { name: "Ceramics", href: "/home/artworks/ceramics" },
    { name: "Prints", href: "/home/artworks/prints" },
  ];

  const contactItems = [
    { name: "Inquiry", href: "/home/contact/inquiry" },
    { name: "Contact Form", href: "/home/contact/contact" },
  ];

  return (
    <header className="absolute left-0 right-0 top-0 z-50 w-full">
      <nav className="mx-auto flex h-[90px] items-center justify-between border-b border-white/10 bg-black/10 px-5 backdrop-blur-[6px] sm:px-8 lg:px-12">

        {/* Logo */}
        <Link href="/" className="group flex items-center gap-3">
          <div className="relative flex h-14 w-14 items-center justify-center">
            <Image
              src={Logo}
              alt="Dawson Wells Gallery Logo"
              width={52}
              height={52}
              priority
              className="object-contain transition duration-500 group-hover:scale-105"
            />
          </div>

          <div className="hidden sm:block leading-none">
            <p className=" font-semibold tracking-[0.32em] text-white">
              DAWSON <span className="text-cyan-300">WELLS</span>
            </p>

            <div className="mt-2 flex items-center gap-2">
             
              <p className="text-[8px] font-medium uppercase tracking-[0.34em] text-white/50">
                Contemporary Gallery
              </p>
            </div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">

          {/* Home / About */}
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="group relative py-2 text-[14px] font-medium tracking-wide text-white transition duration-300 hover:text-cyan-400"
            >
              {item.name}

              <span className="absolute bottom-0 left-0 h-px w-0 bg-cyan-400 transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}

          {/* Company */}
          <div
            className="group relative"
            onMouseEnter={() => setCompanyOpen(true)}
            onMouseLeave={() => setCompanyOpen(false)}
          >
            <button
              type="button"
              className="group relative flex items-center gap-1.5 py-2 text-[14px] font-medium tracking-wide text-white transition-colors duration-300 hover:text-cyan-400 after:absolute after:bottom-0 after:left-0 after:h-[1.5px] after:w-0 after:bg-cyan-400 after:transition-all after:duration-300 after:ease-out after:content-[''] hover:after:w-full"
            >
              Company

              <ChevronDown
                size={14}
                strokeWidth={1.5}
                className={`transition duration-300 ${companyOpen ? "rotate-180 text-cyan-400" : ""
                  }`}
              />
            </button>

            <div
              className={`absolute left-1/2 top-full mt-8 bg-[#91A3B0]/50 w-60 -translate-x-1/2 rounded-2xl p-2 shadow-[0_20px_60px_rgba(0,0,0,0.45)] backdrop-blur-2xl transition-all duration-300 ${companyOpen
                  ? "visible translate-y-0 opacity-100"
                  : "invisible -translate-y-2 opacity-0"
                }`}
            >
              {companyItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="group flex items-center justify-between rounded-xl px-4 py-3 text-[13px] text-white/70 transition duration-300 hover:bg-cyan-400/10 hover:text-cyan-400"
                >
                  {item.name}

                  <ArrowUpRight
                    size={13}
                    className="opacity-0 transition duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
                  />
                </Link>
              ))}
            </div>
          </div>

          {/* Artworks */}
          <div
            className="group relative"
            onMouseEnter={() => setArtworksOpen(true)}
            onMouseLeave={() => setArtworksOpen(false)}
          >
            <button
              type="button"
              className="group relative flex items-center gap-1.5 py-2 text-[14px] font-medium tracking-wide text-white transition-colors duration-300 hover:text-cyan-400 after:absolute after:bottom-0 after:left-0 after:h-[1.5px] after:w-0 after:bg-cyan-400 after:transition-all after:duration-300 after:ease-out after:content-[''] hover:after:w-full"
            >
              Artworks

              <ChevronDown
                size={14}
                strokeWidth={1.5}
                className={`transition duration-300 ${artworksOpen ? "rotate-180 text-cyan-400" : ""
                  }`}
              />
            </button>

            <div
              className={`absolute left-1/2 top-full mt-8 w-56 -translate-x-1/2 rounded-2xl border border-white/10 bg-[#91A3B0]/50 p-2 shadow-[0_20px_60px_rgba(0,0,0,0.45)] backdrop-blur-2xl transition-all duration-300 ${artworksOpen
                  ? "visible translate-y-0 opacity-100"
                  : "invisible -translate-y-2 opacity-0"
                }`}
            >
              {artworksItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="group flex items-center justify-between rounded-xl px-4 py-3 text-[13px] text-white/70 transition duration-300 hover:bg-cyan-400/10 hover:text-cyan-400"
                >
                  {item.name}

                  <ArrowUpRight
                    size={13}
                    className="opacity-0 transition duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
                  />
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div
            className="group relative"
            onMouseEnter={() => setContactOpen(true)}
            onMouseLeave={() => setContactOpen(false)}
          >
            <button
              type="button"
              className="group relative flex items-center gap-1.5 py-2 text-[14px] font-medium tracking-wide text-white transition-colors duration-300 hover:text-cyan-400 after:absolute after:bottom-0 after:left-0 after:h-[1.5px] after:w-0 after:bg-cyan-400 after:transition-all after:duration-300 after:ease-out after:content-[''] hover:after:w-full"
            >
              Contact

              <ChevronDown
                size={14}
                strokeWidth={1.5}
                className={`transition duration-300 ${contactOpen ? "rotate-180 text-cyan-400" : ""
                  }`}
              />
            </button>

            <div
              className={`absolute left-1/2 top-full mt-8 w-52 -translate-x-1/2 rounded-2xl border border-white/10 bg-[#91A3B0]/50 p-2 shadow-[0_20px_60px_rgba(0,0,0,0.45)] backdrop-blur-2xl transition-all duration-300 ${contactOpen
                  ? "visible translate-y-0 opacity-100"
                  : "invisible -translate-y-2 opacity-0"
                }`}
            >
              {contactItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="group flex items-center justify-between rounded-xl px-4 py-3 text-[13px] text-white/70 transition duration-300 hover:bg-cyan-400/10 hover:text-cyan-400"
                >
                  {item.name}

                  <ArrowUpRight
                    size={13}
                    className="opacity-0 transition duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Desktop Actions */}
        <div className="hidden items-center gap-3 md:flex">

          {/* Search */}
          <Link
            href="/search"
            className="group flex items-center gap-2 rounded-xl border border-white/20 bg-black/10 px-4 py-2.5 text-xs font-medium text-white transition duration-300 hover:border-cyan-400/50 hover:bg-black/20 hover:text-cyan-400"
          >
            <Search
              size={15}
              strokeWidth={1.5}
              className="transition duration-300 group-hover:scale-110"
            />

            <span>Search</span>
          </Link>

          {/* Sign Up */}
          <Link
            href="/signup"
            className="rounded-xl border border-cyan-400/60 px-5 py-2 text-sm font-medium text-cyan-300 transition-all duration-300 hover:border-cyan-300 hover:bg-cyan-400 hover:text-black hover:shadow-[0_0_20px_rgba(34,211,238,0.25)]"
          >
            <span>Sign Up</span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/10 text-white backdrop-blur-md transition duration-300 hover:border-cyan-400 hover:text-cyan-400 md:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X size={19} /> : <Menu size={19} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`mx-4 mt-3 overflow-hidden rounded-3xl border border-white/10 bg-[#080909]/95 shadow-2xl backdrop-blur-2xl transition-all duration-300 md:hidden ${open
            ? "max-h-[900px] p-6 opacity-100"
            : "max-h-0 border-transparent p-0 opacity-0"
          }`}
      >
        <div className="flex flex-col gap-4">

          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setOpen(false)}
              className="border-b border-white/10 pb-4 text-sm font-medium text-white transition duration-300 hover:text-cyan-400"
            >
              {item.name}
            </Link>
          ))}

          {/* Mobile Company */}
          <div className="border-b border-white/10 pb-4">
            <button
              type="button"
              onClick={() => setCompanyOpen(!companyOpen)}
              className="flex w-full items-center justify-between text-sm font-medium text-white transition hover:text-cyan-400"
            >
              Company

              <ChevronDown
                size={16}
                className={`transition duration-300 ${companyOpen ? "rotate-180 text-cyan-400" : ""
                  }`}
              />
            </button>

            <div
              className={`overflow-hidden transition-all duration-300 ${companyOpen
                  ? "mt-3 max-h-96 opacity-100"
                  : "max-h-0 opacity-0"
                }`}
            >
              <div className="ml-2 flex flex-col gap-1 border-l border-cyan-400/20 pl-4">
                {companyItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="rounded-lg px-3 py-2.5 text-sm text-white/60 transition duration-300 hover:bg-cyan-400/10 hover:text-cyan-400"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile Artworks */}
          <div className="border-b border-white/10 pb-4">
            <button
              type="button"
              onClick={() => setArtworksOpen(!artworksOpen)}
              className="flex w-full items-center justify-between text-sm font-medium text-white transition hover:text-cyan-400"
            >
              Artworks

              <ChevronDown
                size={16}
                className={`transition duration-300 ${artworksOpen ? "rotate-180 text-cyan-400" : ""
                  }`}
              />
            </button>

            <div
              className={`overflow-hidden transition-all duration-300 ${artworksOpen
                  ? "mt-3 max-h-96 opacity-100"
                  : "max-h-0 opacity-0"
                }`}
            >
              <div className="ml-2 flex flex-col gap-1 border-l border-cyan-400/20 pl-4">
                {artworksItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="rounded-lg px-3 py-2.5 text-sm text-white/60 transition duration-300 hover:bg-cyan-400/10 hover:text-cyan-400"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile Contact */}
          <div className="border-b border-white/10 pb-4">
            <button
              type="button"
              onClick={() => setContactOpen(!contactOpen)}
              className="flex w-full items-center justify-between text-sm font-medium text-white transition hover:text-cyan-400"
            >
              Contact

              <ChevronDown
                size={16}
                className={`transition duration-300 ${contactOpen ? "rotate-180 text-cyan-400" : ""
                  }`}
              />
            </button>

            <div
              className={`overflow-hidden transition-all duration-300 ${contactOpen
                  ? "mt-3 max-h-96 opacity-100"
                  : "max-h-0 opacity-0"
                }`}
            >
              <div className="ml-2 flex flex-col gap-1 border-l border-cyan-400/20 pl-4">
                {contactItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="rounded-lg px-3 py-2.5 text-sm text-white/60 transition duration-300 hover:bg-cyan-400/10 hover:text-cyan-400"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile Actions */}
          <div className="mt-2 flex flex-col gap-3">

            <Link
              href="/search"
              onClick={() => setOpen(false)}
              className="flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 py-3 text-sm font-medium text-white transition duration-300 hover:border-cyan-400/50 hover:text-cyan-400"
            >
              <Search size={16} />
              Search
            </Link>

            <Link
              href="/signup"
              onClick={() => setOpen(false)}
              className="flex items-center justify-center gap-2 rounded-full border border-cyan-400 bg-cyan-400 py-3 text-sm font-semibold text-black transition duration-300 hover:bg-cyan-300"
            >
              Sign Up
              <ArrowUpRight size={15} />
            </Link>

          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;