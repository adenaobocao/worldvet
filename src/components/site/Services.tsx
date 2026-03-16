"use client";
import { useState } from "react";
import { Scissors, Stethoscope, Syringe, Pill, Bath, ChevronRight } from "lucide-react";
import { WHATSAPP_LINKS } from "@/lib/constants";
import Scheduler from "./Scheduler";

const services = [
  {
    icon: Stethoscope,
    title: "Consultas",
    description: "Avaliação clínica completa, triagem, check-up preventivo e acompanhamento de saúde geral.",
    cta: "Agendar consulta",
    action: "schedule-consulta",
  },
  {
    icon: Scissors,
    title: "Cirurgias",
    description: "Desde procedimentos simples até cirurgias de alta complexidade com equipe especializada.",
    cta: "Saber mais",
    action: "whatsapp",
  },
  {
    icon: Syringe,
    title: "Vacinas e Vermifugação",
    description: "Calendário vacinal completo para cães e gatos. Prevenção é o melhor tratamento.",
    cta: "Agendar",
    action: "schedule-vacina",
  },
  {
    icon: Pill,
    title: "Internação",
    description: "Estrutura para internação com monitoramento e cuidados contínuos pós-operatórios.",
    cta: "Consultar",
    action: "whatsapp",
  },
  {
    icon: Bath,
    title: "Banho e Tosa",
    description: "Serviço profissional de higiene e beleza para o seu pet, com cuidado e carinho.",
    cta: "Agendar banho",
    action: "schedule-banho-tosa",
  },
  {
    icon: Stethoscope,
    title: "Microchipagem",
    description: "Identificação permanente e segura do seu pet com microchip homologado.",
    cta: "Saiba mais",
    action: "whatsapp",
  },
];

export default function Services() {
  const [schedulerOpen, setSchedulerOpen] = useState(false);
  const [defaultService, setDefaultService] = useState("banho-tosa");

  const handleAction = (action: string) => {
    if (action === "whatsapp") {
      window.open(WHATSAPP_LINKS.general, "_blank");
      return;
    }
    if (action.startsWith("schedule-")) {
      const svc = action.replace("schedule-", "");
      setDefaultService(svc);
      setSchedulerOpen(true);
    }
  };

  return (
    <>
      <section id="servicos" className="py-24 bg-[#f8faf5]">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <p className="text-[#a8c941] text-sm font-bold uppercase tracking-widest mb-3">Nossos serviços</p>
            <h2 className="text-4xl lg:text-5xl font-bold text-[#003957] mb-4">
              Cuidado completo para seu pet
            </h2>
            <p className="text-gray-600 text-lg">
              Oferecemos uma gama completa de serviços veterinários para manter seu animal saudável e feliz.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-white rounded-2xl p-6 border border-[#c6ccb0]/30 shadow-[0_4px_24px_rgba(0,57,87,0.06)] hover:shadow-[0_8px_40px_rgba(0,57,87,0.12)] hover:-translate-y-1 transition-all duration-300 group flex flex-col"
              >
                <div className="w-12 h-12 bg-[#003957]/8 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#a8c941] transition-colors">
                  <service.icon size={22} className="text-[#003957] group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-bold text-[#003957] text-lg mb-2">{service.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-5 flex-1">{service.description}</p>
                <button
                  onClick={() => handleAction(service.action)}
                  className="flex items-center gap-1 text-[#a8c941] text-sm font-semibold hover:gap-2 transition-all text-left"
                >
                  {service.cta}
                  <ChevronRight size={14} />
                </button>
              </div>
            ))}
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
