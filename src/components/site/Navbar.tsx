"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { WHATSAPP_LINKS } from "@/lib/constants";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { label: "Cirurgias", href: "#cirurgias" },
  { label: "Dr. Matheus", href: "#dr-matheus" },
  { label: "Exames", href: "#exames" },
  { label: "Urgência", href: "#urgencia" },
  { label: "Serviços", href: "#servicos" },
  { label: "Contato", href: "#contato" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/98 backdrop-blur-xl border-b border-black/[0.06] shadow-[0_1px_24px_rgba(0,0,0,0.07)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-8 lg:px-12">
        <div className="flex items-center justify-between h-[72px]">

          {/* Logo only — sem texto */}
          <Link href="/" className="flex items-center flex-shrink-0">
            <div className="w-9 h-14 relative">
              <Image src="/logo.svg" alt="World Vet" fill className="object-contain" priority />
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-0.5">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                  isScrolled
                    ? "text-[#001020]/60 hover:text-[#001020] hover:bg-black/[0.04]"
                    : "text-white/60 hover:text-white hover:bg-white/[0.08]"
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTAs */}
          <div className="hidden lg:flex items-center gap-2.5">
            <a
              href={WHATSAPP_LINKS.urgency}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-1.5 px-4 py-2 text-xs font-bold rounded-xl transition-all ${
                isScrolled
                  ? "bg-[#c1121f]/10 text-[#c1121f] hover:bg-[#c1121f] hover:text-white"
                  : "bg-white/[0.08] text-white/70 hover:bg-white/[0.15] hover:text-white border border-white/[0.1]"
              }`}
            >
              <Phone size={13} strokeWidth={2.5} />
              Urgência
            </a>
            <a
              href={WHATSAPP_LINKS.schedule}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 bg-[#a8c941] hover:bg-[#bdd84e] text-[#001020] text-sm font-bold rounded-xl transition-all shadow-[0_0_20px_rgba(168,201,65,0.2)] hover:shadow-[0_0_30px_rgba(168,201,65,0.35)]"
            >
              Agendar Consulta
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`lg:hidden p-2 rounded-xl transition-colors ${isScrolled ? "text-[#001020]" : "text-white"}`}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-black/[0.06] shadow-xl">
          <div className="max-w-[1200px] mx-auto px-6 py-5 flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="px-4 py-3 text-[#001020]/70 hover:text-[#001020] font-medium rounded-xl hover:bg-black/[0.04] transition-colors text-sm"
              >
                {link.label}
              </a>
            ))}
            <div className="border-t border-black/[0.06] pt-4 mt-3 flex flex-col gap-2">
              <a
                href={WHATSAPP_LINKS.urgency}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-5 py-3 bg-[#c1121f] text-white font-bold rounded-2xl text-sm"
              >
                <Phone size={15} /> Urgência
              </a>
              <a
                href={WHATSAPP_LINKS.schedule}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-5 py-3 bg-[#a8c941] text-[#001020] font-bold rounded-2xl text-sm"
              >
                Agendar Consulta
              </a>
              <Link
                href="/tutor"
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-center gap-2 px-5 py-3 text-[#001020]/50 font-medium text-sm"
              >
                Área do Tutor
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
