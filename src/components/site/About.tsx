import { CLINIC } from "@/lib/constants";
import { Heart, Star, Microscope, Users } from "lucide-react";

const stats = [
  { icon: Heart, value: "Alta", label: "Complexidade cirúrgica", color: "text-red-500" },
  { icon: Microscope, value: "Rápido", label: "Resultado de exames", color: "text-[#003957]" },
  { icon: Star, value: "Ponta", label: "Equipamentos modernos", color: "text-[#a8c941]" },
  { icon: Users, value: "Próximo", label: "Suporte ao tutor", color: "text-[#a8c941]" },
];

export default function About() {
  return (
    <section id="sobre" className="py-24 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div>
            <p data-anim className="text-[#a8c941] text-sm font-bold uppercase tracking-widest mb-3">Sobre a Clínica</p>
            <h2 data-anim data-delay="100" className="text-4xl lg:text-5xl font-bold text-[#003957] mb-6 leading-tight">
              Um mundo de cuidados para seu melhor amigo
            </h2>
            <p data-anim data-delay="200" className="text-gray-600 text-lg leading-relaxed mb-6">
              A World Vet nasceu com a missão de elevar o padrão da medicina veterinária em Piraí do Sul e região. Nossa estrutura foi pensada para oferecer diagnóstico preciso, tratamento eficiente e acompanhamento próximo — tudo em um só lugar.
            </p>
            <p data-anim data-delay="300" className="text-gray-600 leading-relaxed mb-8">
              Com equipamentos de ponta e uma equipe especializada liderada pelo Dr. Matheus Martins, realizamos desde consultas de rotina até cirurgias de alta complexidade, com o cuidado e a atenção que cada animal merece.
            </p>
            <div data-anim data-delay="400" className="flex flex-wrap gap-3">
              <span className="px-4 py-2 bg-[#f8faf5] border border-[#c6ccb0]/50 rounded-full text-sm text-[#003957] font-medium">Cirurgias especializadas</span>
              <span className="px-4 py-2 bg-[#f8faf5] border border-[#c6ccb0]/50 rounded-full text-sm text-[#003957] font-medium">Exames rápidos</span>
              <span className="px-4 py-2 bg-[#f8faf5] border border-[#c6ccb0]/50 rounded-full text-sm text-[#003957] font-medium">Tecnologia avançada</span>
              <span className="px-4 py-2 bg-[#f8faf5] border border-[#c6ccb0]/50 rounded-full text-sm text-[#003957] font-medium">Equipe humanizada</span>
            </div>
          </div>

          {/* Stats grid */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                data-anim
                data-delay={String((i + 1) * 100)}
                className="bg-[#f8faf5] rounded-2xl p-6 border border-[#c6ccb0]/30 hover:border-[#a8c941]/40 transition-all duration-300 group hover:shadow-[0_8px_32px_rgba(0,57,87,0.1)] hover:-translate-y-1"
              >
                <stat.icon size={28} className={`${stat.color} mb-3`} />
                <p className={`text-2xl font-bold ${stat.color} mb-1`}>{stat.value}</p>
                <p className="text-sm text-gray-500 leading-snug">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
