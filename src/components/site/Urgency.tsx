import { WHATSAPP_LINKS, CLINIC } from "@/lib/constants";
import { Phone, AlertTriangle, MapPin, ChevronRight } from "lucide-react";

const symptoms = [
  "Dificuldade para respirar",
  "Convulsões ou tremores",
  "Trauma ou atropelamento",
  "Abdômen distendido — torção gástrica",
  "Sangramento intenso",
  "Perda de consciência",
  "Intoxicação ou envenenamento",
  "Parto difícil (distocia)",
  "Paralisia súbita",
  "Vômitos intensos e contínuos",
];

export default function Urgency() {
  return (
    <section id="urgencia" className="py-0 bg-[#001020] text-white overflow-hidden">
      {/* Faixa de alerta superior */}
      <div className="bg-[#c1121f] px-6 py-3">
        <div className="max-w-[1200px] mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-white animate-pulse flex-shrink-0" />
            <span className="text-white text-xs font-bold uppercase tracking-[0.15em]">
              Atendimento de urgência disponível
            </span>
          </div>
          <a
            href={WHATSAPP_LINKS.urgency}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-white/80 hover:text-white text-xs font-semibold transition-colors"
          >
            Contato imediato
            <ChevronRight size={13} />
          </a>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-6 py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Esquerda */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="h-px w-8 bg-[#c1121f]" />
              <span className="text-[#c1121f] text-xs font-bold uppercase tracking-[0.2em]">
                Urgência e Emergência
              </span>
            </div>

            <h2 className="text-[clamp(2.2rem,5vw,3.8rem)] font-bold leading-[1.05] tracking-tight mb-6">
              Cada minuto<br />
              <span className="text-white/40">tem peso.</span>
            </h2>

            <p className="text-white/55 text-lg leading-relaxed mb-10 max-w-[440px]">
              Nossa equipe e estrutura estão preparadas para os casos mais críticos. Agilidade, precisão e equipamentos prontos para quando mais importa.
            </p>

            {/* CTA principal */}
            <a
              href={WHATSAPP_LINKS.urgency}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-4 px-6 py-5 bg-[#c1121f] hover:bg-[#d01426] text-white font-bold rounded-2xl transition-all shadow-[0_0_40px_rgba(193,18,31,0.3)] hover:shadow-[0_0_60px_rgba(193,18,31,0.5)] group"
            >
              <div className="w-11 h-11 bg-white/15 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-white/20 transition-colors">
                <Phone size={20} strokeWidth={2} />
              </div>
              <div>
                <p className="text-xs text-white/60 uppercase tracking-widest font-normal mb-0.5">WhatsApp — urgência</p>
                <p className="text-xl font-bold tracking-tight">{CLINIC.whatsappDisplay}</p>
              </div>
            </a>

            <div className="flex items-start gap-2.5 mt-6 text-white/30">
              <MapPin size={14} className="flex-shrink-0 mt-0.5" />
              <p className="text-sm">{CLINIC.address}</p>
            </div>
          </div>

          {/* Direita — lista de sinais */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <AlertTriangle size={18} className="text-white/30" />
              <p className="text-white/40 text-sm font-medium uppercase tracking-widest">
                Sinais que exigem atendimento imediato
              </p>
            </div>

            <div className="space-y-0 border border-white/[0.07] rounded-2xl overflow-hidden">
              {symptoms.map((symptom, i) => (
                <div
                  key={symptom}
                  className="flex items-center gap-4 px-5 py-3.5 border-b border-white/[0.05] last:border-0 hover:bg-white/[0.03] transition-colors"
                >
                  <span className="text-white/20 text-xs font-mono w-5 flex-shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-white/70 text-sm">{symptom}</span>
                </div>
              ))}
            </div>

            <p className="text-white/20 text-xs mt-4 text-center">
              Em caso de dúvida, entre em contato. Em emergências graves, prefira atendimento presencial.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
