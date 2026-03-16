import Link from "next/link";
import Image from "next/image";
import { CLINIC, DOCTOR, WHATSAPP_LINKS } from "@/lib/constants";
import { MapPin, Clock, Instagram, MessageCircle, Moon } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#001e2e] text-white">
      <div className="max-w-[1200px] mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-12 relative flex-shrink-0">
                <Image src="/logo.svg" alt="World Vet" fill className="object-contain" />
              </div>
            </div>
            <p className="text-white/70 text-sm leading-relaxed mb-4">
              {CLINIC.tagline}. Especialistas em cirurgias de alta complexidade em Piraí do Sul, PR.
            </p>
            <p className="text-white/50 text-xs">{DOCTOR.crmv}</p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-sm text-[#a8c941] uppercase tracking-widest mb-4">Serviços</h4>
            <ul className="space-y-2">
              {["Cirurgias de Alta Complexidade", "Exames e Diagnóstico", "Atendimento de Urgência", "Banho e Tosa", "Consultas"].map((s) => (
                <li key={s}>
                  <a href="#servicos" className="text-white/70 hover:text-[#a8c941] text-sm transition-colors">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="font-semibold text-sm text-[#a8c941] uppercase tracking-widest mb-4">Contato</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <MapPin size={15} className="text-[#a8c941] flex-shrink-0 mt-0.5" />
                <p className="text-white/70 text-sm">{CLINIC.address}</p>
              </div>
              <div className="flex items-start gap-2">
                <Clock size={15} className="text-[#a8c941] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-white/70 text-sm">{CLINIC.hours.weekdays}</p>
                  <p className="text-white/70 text-sm">{CLINIC.hours.saturday}</p>
                  <p className="text-red-400 text-sm font-medium">{CLINIC.hours.urgency}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Social + CTA */}
          <div>
            <h4 className="font-semibold text-sm text-[#a8c941] uppercase tracking-widest mb-4">Fale Conosco</h4>
            <a
              href={WHATSAPP_LINKS.general}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-3 bg-[#a8c941] hover:bg-[#8aab2d] text-[#001e2e] font-bold rounded-xl transition-all mb-4 text-sm"
            >
              <MessageCircle size={16} />
              Falar no WhatsApp
            </a>
            <a
              href={CLINIC.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-3 bg-white/10 hover:bg-white/15 text-white font-medium rounded-xl transition-all text-sm"
            >
              <Instagram size={16} />
              @worldvetpiraidosul
            </a>
            <div className="mt-6 pt-4 border-t border-white/10">
              <Link
                href="/tutor"
                className="text-white/60 hover:text-[#a8c941] text-sm transition-colors flex items-center gap-1"
              >
                → Área do Tutor
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/40 text-xs">
            © {new Date().getFullYear()} World Vet — Todos os direitos reservados
          </p>
          <p className="text-white/40 text-xs">
            {DOCTOR.name} — {DOCTOR.crmv}
          </p>
          {/* Acesso da equipe */}
          <Link
            href="/login"
            className="flex items-center gap-1.5 text-white/20 hover:text-white/50 transition-colors text-xs"
          >
            <Moon size={13} />
            Área da equipe
          </Link>
        </div>
      </div>
    </footer>
  );
}
