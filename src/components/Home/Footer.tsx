import Link from "next/link";
import Image from "next/image";
import Logo from "@/app/icon.png";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  const socials = [
    {
      icon: <FaFacebookF />,
      href: "https://www.facebook.com/khalekuzzamanMurad",
      className:
        "border-[#1877F2]/20 text-[#1877F2] bg-[#1877F2] text-white hover:border-[#1877F2]",
    },
    {
      icon: <FaInstagram />,
      href: "https://www.instagram.com/mdkhalekuzzaman121",
      className:
        "border-[#E4405F]/20 text-[#E4405F] hover:bg-[#E4405F]",
    },
    {
      icon: <FaTwitter />,
      href: "https://x.com/khalekuzzaman21",
      className:
        "border-[#1DA1F2]/20 bg-[#1DA1F2]/5 text-[#1DA1F2] hover:bg-[#1DA1F2] hover:text-white hover:border-[#1DA1F2]",
    },
    {
      icon: <FaLinkedinIn />,
      href: "https://www.linkedin.com/in/muradvcv",
      className:
        "border-[#0A66C2]/20 bg-[#0A66C2]/5 text-[#0A66C2] hover:bg-[#0A66C2] hover:text-white hover:border-[#0A66C2]",
    },
  ];
  const explore = [
    ["Gallery", "/gallery"],
    ["Artists", "/artists"],
    ["Collections", "/collections"],
    ["About Us", "/about"],
  ];

  const information = [
    ["Contact", "/contact"],
    ["Privacy Policy", "/privacy"],
    ["Terms & Conditions", "/terms"],
    ["FAQ", "/faq"],
  ];

  return (
    <footer
      className="
    relative overflow-hidden
    bg-[#008080]
    after:absolute after:inset-0
    after:bg-[repeating-linear-gradient(0deg,rgba(255,255,255,0.025)_0px,rgba(255,255,255,0.025)_1px,transparent_1px,transparent_4px)]
    after:pointer-events-none
  "
    >
      <div className="pointer-events-none absolute -left-32 top-10 h-72 w-72 rounded-full bg-cyan-400/10 blur-[120px]" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-72 w-72 rounded-full bg-cyan-400/10 blur-[120px]" />

      <div className="relative mx-auto max-w-8xl px-6 py-14 lg:px-10">
        <div className="grid gap-10 border-b border-white/10 pb-10 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center">
              <Image
                src={Logo}
                alt="Dawson Wells"
                width={94}
                height={94}
                className="rounded-full object-cover"
              />
              <h2 className="text-2xl font-semibold tracking-wide text-white ">
                Dawson <span className="text-cyan-400">Wells</span>
              </h2>
            </Link>

            <p className="mt-4 max-w-sm text-sm leading-6 text-white">
              A contemporary art platform dedicated to discovering,
              presenting, and celebrating exceptional artistic expression.
            </p>

            <div className="mt-6 flex gap-2.5">

              {socials.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className={`group flex h-10 w-10 items-center justify-center rounded-full border backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${item.className}`}
                >
                  <span className="text-[15px] transition-transform duration-300 group-hover:scale-110">
                    {item.icon}
                  </span>
                </Link>
              ))}

            </div>
          </div>

          {/* Explore */}
          <div>
            <h3 className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">
              Explore
            </h3>
            <ul className="space-y-3 text-sm text-white">
              {explore.map(([name, href]) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="transition-colors duration-300 hover:text-cyan-400"
                  >
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Information */}
          <div>
            <h3 className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">
              Information
            </h3>
            <ul className="space-y-3 text-sm text-white">
            {/* array distructure */}
              {information.map(([name, href]) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="transition-colors duration-300 hover:text-cyan-400"
                  >
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">
              Stay Connected
            </h3>
            <p className="mb-4 text-sm leading-6 text-white">
              Subscribe for new collections, exhibitions, and exclusive art
              news.
            </p>

            <div className="flex overflow-hidden rounded-full border border-white/10 bg-white/[0.04] p-1 transition-colors focus-within:border-cyan-400/50">
              <input
                type="email"
                placeholder="Your email"
                className="min-w-0 flex-1 bg-transparent px-4 text-sm outline-none placeholder:text-white/25"
              />
              <button className="rounded-full bg-cyan-400 px-5 py-2.5 text-xs font-semibold text-black transition-all duration-300 hover:bg-cyan-300">
                Join
              </button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col items-center justify-between gap-3 pt-6 text-xs text-white/30 md:flex-row">
          <p>
            © {new Date().getFullYear()} Dawson Wells Gallery. All rights
            reserved.
          </p>

          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
            <span>Art • Culture • Expression</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;