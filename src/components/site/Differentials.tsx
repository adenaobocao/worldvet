import { Shield, Zap, Heart, Users, Microscope, Award } from "lucide-react";

const differentials = [
  {
    icon: Shield,
    title: "Estrutura Completa",
    description: "Centro cirúrgico equipado, laboratório próprio, sala de recuperação e internação — tudo na mesma clínica.",
  },
  {
    icon: Zap,
    title: "Diagnóstico Rápido",
    description: "Resultados de exames em tempo real para que o tratamento comece sem demora.",
  },
  {
    icon: Award,
    title: "Especialização Técnica",
    description: "Dr. Matheus Martins com especialização em cirurgia pela ANCLIVEPA-SC e vasta experiência clínica.",
  },
  {
    icon: Heart,
    title: "Cuidado Humanizado",
    description: "Cada animal é tratado com atenção individualizada. Sabemos que eles são parte da família.",
  },
  {
    icon: Users,
    title: "Transparência com o Tutor",
    description: "Comunicação clara, atualizações constantes e área digital exclusiva para acompanhar o pet.",
  },
  {
    icon: Microscope,
    title: "Tecnologia de Ponta",
    description: "Equipamentos modernos para diagnóstico preciso e procedimentos seguros.",
  },
];

export default function Differentials() {
  return (
    <section className="py-24 bg-[#003957] text-white">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <p className="text-[#a8c941] text-sm font-bold uppercase tracking-widest mb-3">Por que escolher a World Vet</p>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Diferenciais que fazem a diferença
          </h2>
          <p className="text-white/70 text-lg">
            Não somos uma clínica comum. Nossa estrutura, equipe e tecnologia nos colocam em outro nível.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {differentials.map((item) => (
            <div
              key={item.title}
              className="bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#a8c941]/30 rounded-2xl p-6 transition-all duration-300 group"
            >
              <div className="w-12 h-12 bg-[#a8c941]/15 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#a8c941] transition-colors">
                <item.icon size={22} className="text-[#a8c941] group-hover:text-[#001e2e] transition-colors" />
              </div>
              <h3 className="font-bold text-white text-lg mb-2">{item.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
