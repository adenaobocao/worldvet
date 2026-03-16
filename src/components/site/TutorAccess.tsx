import Link from "next/link";
import { WHATSAPP_LINKS } from "@/lib/constants";
import { User, FileText, Bell, CreditCard, Lock, ArrowRight } from "lucide-react";

const features = [
  { icon: FileText, text: "Exames e laudos do seu pet" },
  { icon: Bell, text: "Atualizações e orientações" },
  { icon: CreditCard, text: "Cobranças e pagamentos" },
  { icon: Lock, text: "Acesso seguro e privado" },
];

export default function TutorAccess() {
  return (
    <section className="py-24 bg-gradient-to-br from-[#f8faf5] to-[#e8f0e0]">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <div
            data-anim="scale"
            className="bg-white rounded-3xl p-10 lg:p-14 border border-[#c6ccb0]/30 shadow-[0_8px_48px_rgba(0,57,87,0.12)] text-center"
          >
            <div className="w-16 h-16 bg-[#003957] rounded-2xl flex items-center justify-center mx-auto mb-6">
              <User size={28} className="text-[#a8c941]" />
            </div>
            <p className="text-[#a8c941] text-sm font-bold uppercase tracking-widest mb-3">Exclusivo para tutores</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#003957] mb-4">
              Acompanhe seu pet de onde estiver
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8 max-w-xl mx-auto">
              Acesse exames, orientações, histórico completo e atualizações do seu animal em tempo real — tudo em um só lugar, com segurança e praticidade.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
              {features.map((feat, i) => (
                <div
                  key={feat.text}
                  data-anim
                  data-delay={String(i * 100)}
                  className="flex flex-col items-center gap-2 p-4 bg-[#f8faf5] rounded-xl border border-[#c6ccb0]/30 hover:border-[#a8c941]/40 hover:bg-[#f0f7e0] transition-all duration-300"
                >
                  <feat.icon size={20} className="text-[#003957]" />
                  <p className="text-xs text-gray-600 text-center leading-snug">{feat.text}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/tutor"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#003957] hover:bg-[#004d70] text-white font-bold rounded-xl transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 text-base"
              >
                <User size={18} />
                Acessar Área do Tutor
                <ArrowRight size={16} />
              </Link>
              <a
                href={WHATSAPP_LINKS.general}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 border-2 border-[#003957] text-[#003957] hover:bg-[#003957] hover:text-white font-bold rounded-xl transition-all hover:-translate-y-0.5 active:translate-y-0 text-base"
              >
                Solicitar acesso
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
