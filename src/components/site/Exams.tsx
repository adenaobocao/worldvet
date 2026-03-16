import { WHATSAPP_LINKS } from "@/lib/constants";
import { Zap, FlaskConical, Scan, Waves, Clock, CheckCircle } from "lucide-react";

const exams = [
  { icon: FlaskConical, title: "Hemograma Completo", time: "Na hora", description: "Análise rápida do sangue com resultado imediato para decisão clínica precisa." },
  { icon: Scan, title: "Radiografia Digital", time: "Imediato", description: "Imagens de alta resolução com diagnóstico rápido para fraturas, órgãos e estruturas internas." },
  { icon: Waves, title: "Ultrassonografia", time: "Na consulta", description: "Visualização em tempo real de órgãos abdominais, gestação e anomalias internas." },
  { icon: FlaskConical, title: "Bioquímico Sérico", time: "Na hora", description: "Avaliação de fígado, rins, pâncreas e outros órgãos vitais com agilidade." },
  { icon: Zap, title: "Eletrocardiograma", time: "Imediato", description: "Análise cardíaca para avaliação pré-operatória e diagnóstico de arritmias." },
  { icon: FlaskConical, title: "Urinálise", time: "Rápido", description: "Avaliação completa da urina para diagnóstico de infecções, doenças renais e metabólicas." },
];

export default function Exams() {
  return (
    <section id="exames" className="py-24 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <p className="text-[#a8c941] text-sm font-bold uppercase tracking-widest mb-3">Diagnóstico preciso</p>
            <h2 className="text-4xl lg:text-5xl font-bold text-[#003957] mb-6 leading-tight">
              Exames com resultado na hora
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Tempo é fundamental quando se trata da saúde do seu animal. Nossa estrutura laboratorial completa garante resultados rápidos para que o Dr. Matheus tome as melhores decisões no menor tempo possível.
            </p>
            <div className="space-y-3 mb-8">
              {["Laboratório próprio na clínica", "Equipamentos modernos e calibrados", "Resultados em tempo real durante a consulta", "Histórico digital de todos os exames"].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle size={18} className="text-[#a8c941] flex-shrink-0" />
                  <p className="text-gray-700">{item}</p>
                </div>
              ))}
            </div>
            <a
              href={WHATSAPP_LINKS.schedule}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#a8c941] hover:bg-[#8aab2d] text-[#001e2e] font-bold rounded-xl transition-all shadow-[0_8px_32px_rgba(168,201,65,0.3)] text-base"
            >
              Agendar exame
            </a>
          </div>

          {/* Exams grid */}
          <div className="grid grid-cols-2 gap-4">
            {exams.map((exam) => (
              <div
                key={exam.title}
                className="bg-[#f8faf5] rounded-xl p-4 border border-[#c6ccb0]/30 hover:border-[#a8c941]/40 transition-all group"
              >
                <div className="flex items-center gap-2 mb-2">
                  <exam.icon size={16} className="text-[#003957]" />
                  <span className="text-xs font-bold text-[#a8c941] uppercase tracking-wide flex items-center gap-1">
                    <Clock size={11} />
                    {exam.time}
                  </span>
                </div>
                <h4 className="font-bold text-[#003957] text-sm mb-1">{exam.title}</h4>
                <p className="text-gray-500 text-xs leading-relaxed">{exam.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
