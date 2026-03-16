import Image from "next/image";
import { DOCTOR, WHATSAPP_LINKS } from "@/lib/constants";
import { ArrowRight } from "lucide-react";

const credentials = [
  { label: "Especialização", value: "Cirurgia Veterinária", sub: "ANCLIVEPA-SC" },
  { label: "Registro profissional", value: "CRMV-PR 18808", sub: "Paraná" },
  { label: "Área de atuação", value: "Tecidos moles & Ortopedia", sub: "Alta complexidade" },
];

export default function DrMatheus() {
  return (
    <section id="dr-matheus" className="bg-[#f8faf5] py-0 overflow-hidden">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid lg:grid-cols-2 min-h-[640px]">

          {/* ── Foto — fullbleed à esquerda ── */}
          <div className="relative min-h-[460px] lg:min-h-0 overflow-hidden">
            <Image
              src={DOCTOR.photo}
              alt={DOCTOR.name}
              fill
              className="object-cover object-top"
              priority
            />
            {/* Overlay lateral para transição com o texto */}
            <div className="hidden lg:block absolute inset-y-0 right-0 w-24 bg-gradient-to-r from-transparent to-[#f8faf5]" />
            {/* Overlay inferior mobile */}
            <div className="lg:hidden absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#f8faf5] to-transparent" />
          </div>

          {/* ── Conteúdo ── */}
          <div className="flex flex-col justify-center px-8 lg:px-14 py-16 lg:py-20">
            <div className="flex items-center gap-3 mb-8">
              <div className="h-px w-8 bg-[#a8c941]" />
              <span className="text-[#a8c941] text-xs font-bold uppercase tracking-[0.2em]">
                Direção clínica
              </span>
            </div>

            <h2 className="text-[clamp(2rem,4vw,3rem)] font-bold text-[#001020] leading-[1.05] tracking-tight mb-2">
              {DOCTOR.name}
            </h2>
            <p className="text-[#003957]/60 font-medium text-base mb-8">
              {DOCTOR.title}
            </p>

            <p className="text-[#001020]/60 leading-relaxed text-base mb-10 max-w-[420px]">
              {DOCTOR.bio}
            </p>

            {/* Credential cards */}
            <div className="grid grid-cols-1 gap-3 mb-10">
              {credentials.map((cred) => (
                <div
                  key={cred.label}
                  className="flex items-center gap-4 px-5 py-4 bg-white border border-[#c6ccb0]/40 rounded-2xl hover:border-[#a8c941]/50 transition-colors group"
                >
                  <div className="w-1.5 h-8 bg-[#a8c941] rounded-full flex-shrink-0 group-hover:h-10 transition-all" />
                  <div>
                    <p className="text-[#001020]/40 text-xs uppercase tracking-wider font-medium">{cred.label}</p>
                    <p className="text-[#001020] font-bold text-sm">{cred.value}</p>
                    <p className="text-[#001020]/40 text-xs">{cred.sub}</p>
                  </div>
                </div>
              ))}
            </div>

            <a
              href={WHATSAPP_LINKS.schedule}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-7 py-4 bg-[#003957] hover:bg-[#004d70] text-white font-bold rounded-2xl transition-all text-sm self-start group"
            >
              Agendar com o Dr. Matheus
              <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
