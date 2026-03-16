import { WHATSAPP_LINKS } from "@/lib/constants";
import { Scissors, Activity, Bone, Heart, Eye, Zap, ChevronRight } from "lucide-react";

const surgeries = [
  {
    icon: Scissors,
    title: "Cirurgias de Tecidos Moles",
    description: "Procedimentos abdominais, torácicos e de sistema reprodutor com alta precisão e segurança.",
    examples: ["Esplenectomia", "Gastrotomia", "Cesariana", "Cistotomia"],
  },
  {
    icon: Bone,
    title: "Ortopedia e Traumatologia",
    description: "Correção de fraturas, luxações e doenças articulares com técnicas modernas.",
    examples: ["Fixação de fraturas", "Correção de luxação", "Amputação", "Artroscopia"],
  },
  {
    icon: Activity,
    title: "Cirurgias de Urgência",
    description: "Atendimento imediato em situações críticas com equipe preparada para emergências.",
    examples: ["Torção gástrica (GDV)", "Hemoabdômen", "Pneumotórax", "Obstrução intestinal"],
  },
  {
    icon: Heart,
    title: "Cirurgias Oncológicas",
    description: "Remoção de tumores e nódulos com margens de segurança adequadas.",
    examples: ["Mastectomia", "Excisão de tumores", "Biópsia cirúrgica"],
  },
  {
    icon: Eye,
    title: "Cirurgias de Pele e Reconstrutiva",
    description: "Reconstrução tecidual, tratamento de feridas e correções dermatológicas.",
    examples: ["Retalhos de pele", "Enxertos", "Correção de entrópio"],
  },
  {
    icon: Zap,
    title: "Procedimentos Minimamente Invasivos",
    description: "Técnicas modernas que reduzem o tempo de recuperação e o desconforto do animal.",
    examples: ["Laparoscopia", "Toracoscopia", "Biópsia guiada"],
  },
];

const delays = ["0", "100", "200", "100", "200", "300"];

export default function Surgeries() {
  return (
    <section id="cirurgias" className="py-24 bg-[#f8faf5]">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <p data-anim className="text-[#a8c941] text-sm font-bold uppercase tracking-widest mb-3">Nossa especialidade</p>
          <h2 data-anim data-delay="100" className="text-4xl lg:text-5xl font-bold text-[#003957] mb-4 leading-tight">
            Cirurgias de Alta Complexidade
          </h2>
          <p data-anim data-delay="200" className="text-gray-600 text-lg leading-relaxed">
            Combinamos tecnologia de ponta, treinamento especializado e cuidado preciso para oferecer os melhores resultados nos casos mais desafiadores.
          </p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {surgeries.map((surgery, i) => (
            <div
              key={surgery.title}
              data-anim
              data-delay={delays[i]}
              className="bg-white rounded-2xl p-6 border border-[#c6ccb0]/30 shadow-[0_4px_24px_rgba(0,57,87,0.06)] hover:shadow-[0_12px_40px_rgba(0,57,87,0.14)] hover:-translate-y-1.5 transition-all duration-300 group"
            >
              <div className="w-12 h-12 bg-[#003957]/8 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#003957] transition-colors duration-300">
                <surgery.icon size={22} className="text-[#003957] group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="font-bold text-[#003957] text-lg mb-2">{surgery.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">{surgery.description}</p>
              <div className="flex flex-wrap gap-2">
                {surgery.examples.map((ex) => (
                  <span key={ex} className="text-xs px-2.5 py-1 bg-[#f8faf5] text-[#003957]/70 rounded-lg border border-[#c6ccb0]/40 group-hover:border-[#c6ccb0]/60 transition-colors">
                    {ex}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div data-anim className="text-center">
          <a
            href={WHATSAPP_LINKS.schedule}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#003957] hover:bg-[#004d70] text-white font-bold rounded-xl transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 text-base"
          >
            Consultar sobre cirurgia
            <ChevronRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
