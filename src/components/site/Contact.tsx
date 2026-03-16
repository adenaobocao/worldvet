import { CLINIC, WHATSAPP_LINKS, DOCTOR } from "@/lib/constants";
import { MapPin, Clock, Phone, Instagram, MessageCircle } from "lucide-react";

export default function Contact() {
  return (
    <section id="contato" className="py-24 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <p data-anim className="text-[#a8c941] text-sm font-bold uppercase tracking-widest mb-3">Localização e contato</p>
          <h2 data-anim data-delay="100" className="text-4xl lg:text-5xl font-bold text-[#003957] mb-4">
            Estamos aqui para você
          </h2>
          <p data-anim data-delay="200" className="text-gray-600 text-lg">
            Venha nos visitar ou entre em contato pelo WhatsApp. Atendemos com carinho em Piraí do Sul e região.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Info */}
          <div data-anim="left" className="space-y-6">
            <div className="bg-[#f8faf5] rounded-2xl p-6 border border-[#c6ccb0]/30 hover:border-[#a8c941]/30 transition-colors duration-300">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#003957] rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin size={18} className="text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-[#003957] mb-1">Endereço</h4>
                  <p className="text-gray-600">{CLINIC.address}</p>
                  <a
                    href={CLINIC.maps}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#a8c941] text-sm font-semibold hover:underline mt-1 inline-block"
                  >
                    Ver no Google Maps →
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-[#f8faf5] rounded-2xl p-6 border border-[#c6ccb0]/30 hover:border-[#a8c941]/30 transition-colors duration-300">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#003957] rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock size={18} className="text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-[#003957] mb-2">Horários</h4>
                  <p className="text-gray-600 text-sm">{CLINIC.hours.weekdays}</p>
                  <p className="text-gray-600 text-sm">{CLINIC.hours.saturday}</p>
                  <p className="text-red-600 text-sm font-semibold mt-1">{CLINIC.hours.urgency}</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <a
                href={WHATSAPP_LINKS.general}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-2 p-4 bg-[#a8c941] hover:bg-[#8aab2d] text-[#001e2e] font-bold rounded-xl transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 text-center"
              >
                <MessageCircle size={22} />
                <span className="text-sm">WhatsApp</span>
                <span className="text-xs font-normal opacity-70">{CLINIC.whatsappDisplay}</span>
              </a>
              <a
                href={CLINIC.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-2 p-4 bg-[#003957] hover:bg-[#004d70] text-white font-bold rounded-xl transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 text-center"
              >
                <Instagram size={22} />
                <span className="text-sm">Instagram</span>
                <span className="text-xs font-normal opacity-70">@worldvetpiraidosul</span>
              </a>
            </div>
          </div>

          {/* Map */}
          <div
            data-anim="right"
            data-delay="100"
            className="rounded-2xl overflow-hidden border border-[#c6ccb0]/30 shadow-[0_4px_24px_rgba(0,57,87,0.08)] h-[420px]"
          >
            <iframe
              src={CLINIC.mapsEmbed}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="World Vet - Localização"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
