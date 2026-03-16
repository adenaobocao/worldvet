"use client";
import { useState } from "react";
import Image from "next/image";
import { CLINIC, DOCTOR, WHATSAPP_LINKS } from "@/lib/constants";
import { Phone, Calendar, Bath, ArrowRight } from "lucide-react";
import Scheduler from "./Scheduler";

export default function Hero() {
  const [schedulerOpen, setSchedulerOpen] = useState(false);
  const [defaultService, setDefaultService] = useState("consulta");

  const openScheduler = (svc: string) => {
    setDefaultService(svc);
    setSchedulerOpen(true);
  };

  return (
    <>
      <section className="relative min-h-screen flex items-center overflow-hidden bg-[#001020]">

        {/* Linha verde vertical — assinatura da marca */}
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-[#a8c941] to-transparent opacity-60" />

        {/* Gradiente direcional */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#001020] via-[#001830] to-[#002a48]" />

        {/* Luz ambiente */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#a8c941]/[0.04] rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-1/3 w-[400px] h-[400px] bg-[#003957]/60 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative z-10 w-full max-w-[1200px] mx-auto px-8 lg:px-12 py-28 lg:py-0 lg:min-h-screen flex items-center">
          <div className="grid lg:grid-cols-[1fr_420px] gap-16 xl:gap-24 items-center w-full">

            {/* ── Esquerda: conteúdo ── */}
            <div>
              {/* Credencial */}
              <div className="flex items-center gap-3 mb-10">
                <div className="h-px w-8 bg-[#a8c941]" />
                <span className="text-[#a8c941] text-xs font-bold uppercase tracking-[0.2em]">
                  Piraí do Sul · PR · {DOCTOR.crmv}
                </span>
              </div>

              {/* Heading */}
              <h1 className="text-[clamp(2.6rem,5.5vw,4.6rem)] font-bold text-white leading-[1.04] tracking-tight mb-6">
                Cuidado veterinário{" "}
                <span className="block text-[#a8c941]">de alta complexidade.</span>
              </h1>

              <p className="text-white/55 text-lg leading-relaxed mb-10 max-w-[520px]">
                Cirurgias especializadas, diagnóstico preciso e suporte contínuo.
                Sob a direção do{" "}
                <span className="text-white/80 font-medium">{DOCTOR.name}</span>.
              </p>

              {/* CTAs principais */}
              <div className="flex flex-wrap gap-3 mb-10">
                <a
                  href={WHATSAPP_LINKS.schedule}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-6 py-4 bg-[#a8c941] hover:bg-[#bdd84e] text-[#001020] font-bold rounded-2xl transition-all text-sm tracking-wide shadow-[0_0_40px_rgba(168,201,65,0.25)] hover:shadow-[0_0_60px_rgba(168,201,65,0.4)]"
                >
                  <Calendar size={17} />
                  Agendar Consulta
                </a>
                <button
                  onClick={() => openScheduler("banho-tosa")}
                  className="inline-flex items-center gap-2.5 px-6 py-4 bg-white/[0.08] hover:bg-white/[0.14] text-white font-bold rounded-2xl transition-all text-sm border border-[#a8c941]/30 hover:border-[#a8c941]/60"
                >
                  <Bath size={16} />
                  Banho/Tosa
                </button>
                <a
                  href={WHATSAPP_LINKS.urgency}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-4 text-white/50 hover:text-white/80 font-medium text-sm transition-colors"
                >
                  <Phone size={15} />
                  Urgência
                  <ArrowRight size={13} />
                </a>
                <Link
                  href="/tutor"
                  className="inline-flex items-center gap-2 px-5 py-4 text-white/50 hover:text-white/80 font-medium text-sm transition-colors"
                >
                  Área do Tutor
                  <ArrowRight size={13} />
                </Link>
              </div>

              {/* Stats */}
              <div className="flex items-center gap-8 pt-8 border-t border-white/[0.08]">
                {[
                  { value: "Alta complexidade", label: "Cirurgias" },
                  { value: "Resultados rápidos", label: "Exames" },
                  { value: "Acompanhamento", label: "Pós-operatório" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <p className="text-white font-semibold text-sm">{stat.value}</p>
                    <p className="text-white/35 text-xs mt-0.5">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* ── Direita: foto editorial ── */}
            <div className="hidden lg:block relative">
              <div className="relative">
                <div className="absolute -inset-[1px] rounded-3xl bg-gradient-to-b from-[#a8c941]/30 via-[#a8c941]/10 to-transparent" />
                <div className="relative rounded-3xl overflow-hidden bg-[#001830] h-[540px]">
                  <Image
                    src="/matheus.png"
                    alt={DOCTOR.name}
                    fill
                    className="object-cover object-top scale-105"
                    priority
                  />
                  <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#001020] to-transparent" />
                </div>

                {/* Credencial flutuante */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/[0.06] backdrop-blur-md border border-white/[0.1] rounded-2xl px-5 py-4">
                    <p className="text-white font-bold text-sm">{DOCTOR.name}</p>
                    <p className="text-[#a8c941] text-xs font-medium mt-0.5">Especialista em Cirurgia Veterinária</p>
                    <p className="text-white/40 text-xs mt-1">{DOCTOR.crmv}</p>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-6 -right-6 w-32 h-32 border border-[#a8c941]/15 rounded-3xl -z-10" />
              <div className="absolute -top-6 -left-6 w-24 h-24 border border-white/5 rounded-2xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      <Scheduler
        open={schedulerOpen}
        onClose={() => setSchedulerOpen(false)}
        defaultService={defaultService}
      />
    </>
  );
}
