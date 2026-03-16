"use client";
import { useState, useEffect } from "react";
import { X, ChevronLeft, ChevronRight, Clock, CheckCircle } from "lucide-react";

const SERVICES = [
  { id: "banho", label: "Banho" },
  { id: "tosa", label: "Tosa" },
  { id: "banho-tosa", label: "Banho + Tosa" },
  { id: "consulta", label: "Consulta" },
  { id: "vacina", label: "Vacinas" },
];

const TIME_SLOTS_WEEK = [
  "08:00", "08:30", "09:00", "09:30", "10:00", "10:30",
  "11:00", "11:30", "13:00", "13:30", "14:00", "14:30",
  "15:00", "15:30", "16:00", "16:30", "17:00", "17:30",
];
const TIME_SLOTS_SAT = ["08:00", "08:30", "09:00", "09:30", "10:00", "10:30", "11:00", "11:30"];

const MONTHS = ["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"];
const WEEKDAYS_SHORT = ["Dom","Seg","Ter","Qua","Qui","Sex","Sáb"];

interface Props {
  open: boolean;
  onClose: () => void;
  defaultService?: string;
}

export default function Scheduler({ open, onClose, defaultService }: Props) {
  const today = new Date();
  const [step, setStep] = useState<"date" | "time" | "info" | "done">("date");
  const [month, setMonth] = useState(today.getMonth());
  const [year, setYear] = useState(today.getFullYear());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState("");
  const [service, setService] = useState(defaultService ?? "banho-tosa");
  const [petName, setPetName] = useState("");
  const [ownerName, setOwnerName] = useState("");

  useEffect(() => {
    if (open) {
      setStep("date");
      setSelectedDate(null);
      setSelectedTime("");
      setPetName("");
      setOwnerName("");
    }
  }, [open]);

  if (!open) return null;

  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDay = new Date(year, month, 1).getDay();
  const todayMidnight = new Date(today.getFullYear(), today.getMonth(), today.getDate());

  const getDayStatus = (day: number) => {
    const d = new Date(year, month, day);
    const dow = d.getDay();
    if (dow === 0 || d < todayMidnight) return "disabled";
    if (dow === 6) return "saturday";
    return "available";
  };

  const isSatSelected = selectedDate ? selectedDate.getDay() === 6 : false;
  const slots = isSatSelected ? TIME_SLOTS_SAT : TIME_SLOTS_WEEK;

  const prevMonth = () => {
    if (month === 0) { setMonth(11); setYear(y => y - 1); }
    else setMonth(m => m - 1);
  };
  const nextMonth = () => {
    if (month === 11) { setMonth(0); setYear(y => y + 1); }
    else setMonth(m => m + 1);
  };

  const handleSend = () => {
    const svc = SERVICES.find(s => s.id === service)?.label ?? service;
    const dateStr = selectedDate?.toLocaleDateString("pt-BR", {
      weekday: "long", day: "numeric", month: "long"
    }) ?? "";
    const msg = `Olá, World Vet! Gostaria de agendar *${svc}* para o pet *${petName}*.\n\n📅 ${dateStr}\n🕐 ${selectedTime}\n👤 Responsável: ${ownerName}\n\nAguardo confirmação!`;
    window.open(`https://wa.me/5542998388882?text=${encodeURIComponent(msg)}`, "_blank");
    setStep("done");
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/60 backdrop-blur-sm"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div className="bg-white rounded-t-3xl sm:rounded-3xl w-full sm:max-w-sm shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-[#001e2e] to-[#003957] px-6 py-5 flex items-center justify-between">
          <div>
            <p className="text-[#a8c941] text-xs font-bold uppercase tracking-widest">Agendar</p>
            <p className="text-white font-bold text-base leading-tight">
              {step === "date" && "Escolha a data"}
              {step === "time" && "Escolha o horário"}
              {step === "info" && "Seus dados"}
              {step === "done" && "Confirmado!"}
            </p>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 bg-white/10 hover:bg-white/20 rounded-xl flex items-center justify-center transition-colors"
          >
            <X size={16} className="text-white" />
          </button>
        </div>

        <div className="p-5">
          {/* STEP: DATE */}
          {step === "date" && (
            <>
              {/* Serviço selector */}
              <div className="flex gap-2 flex-wrap mb-5">
                {SERVICES.map(s => (
                  <button
                    key={s.id}
                    onClick={() => setService(s.id)}
                    className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all ${
                      service === s.id
                        ? "bg-[#003957] text-white"
                        : "bg-gray-100 text-gray-600 hover:bg-[#003957]/10 hover:text-[#003957]"
                    }`}
                  >
                    {s.label}
                  </button>
                ))}
              </div>

              {/* Calendar nav */}
              <div className="flex items-center justify-between mb-3">
                <button onClick={prevMonth} className="w-8 h-8 flex items-center justify-center rounded-xl hover:bg-gray-100 transition-colors">
                  <ChevronLeft size={16} className="text-[#003957]" />
                </button>
                <p className="font-bold text-[#003957] text-sm">{MONTHS[month]} {year}</p>
                <button onClick={nextMonth} className="w-8 h-8 flex items-center justify-center rounded-xl hover:bg-gray-100 transition-colors">
                  <ChevronRight size={16} className="text-[#003957]" />
                </button>
              </div>

              {/* Weekday headers */}
              <div className="grid grid-cols-7 mb-1">
                {WEEKDAYS_SHORT.map(d => (
                  <p key={d} className="text-center text-xs text-gray-400 font-medium py-1">{d}</p>
                ))}
              </div>

              {/* Days grid */}
              <div className="grid grid-cols-7 gap-y-1">
                {Array.from({ length: firstDay }).map((_, i) => <div key={`e${i}`} />)}
                {Array.from({ length: daysInMonth }).map((_, i) => {
                  const day = i + 1;
                  const status = getDayStatus(day);
                  const d = new Date(year, month, day);
                  const isSelected = selectedDate?.toDateString() === d.toDateString();
                  const isToday = d.toDateString() === today.toDateString();

                  return (
                    <button
                      key={day}
                      disabled={status === "disabled"}
                      onClick={() => { setSelectedDate(d); setStep("time"); }}
                      className={[
                        "h-9 w-full rounded-xl text-sm font-medium transition-all",
                        status === "disabled" ? "text-gray-300 cursor-not-allowed" : "",
                        isSelected ? "bg-[#003957] text-white shadow-md" : "",
                        !isSelected && status !== "disabled" ? "hover:bg-[#003957]/10 text-[#003957]" : "",
                        isToday && !isSelected ? "ring-2 ring-[#a8c941] ring-inset font-bold" : "",
                        status === "saturday" && !isSelected ? "text-[#a8c941]" : "",
                      ].filter(Boolean).join(" ")}
                    >
                      {day}
                    </button>
                  );
                })}
              </div>
              <p className="text-xs text-gray-400 mt-4 text-center">
                Seg–Sex 8h–18h · <span className="text-[#a8c941] font-medium">Sáb</span> 8h–12h · Dom fechado
              </p>
            </>
          )}

          {/* STEP: TIME */}
          {step === "time" && (
            <>
              <button
                onClick={() => setStep("date")}
                className="flex items-center gap-1 text-[#003957] text-sm font-semibold mb-4 hover:gap-2 transition-all"
              >
                <ChevronLeft size={15} />
                {selectedDate?.toLocaleDateString("pt-BR", { weekday: "long", day: "numeric", month: "long" })}
              </button>
              <p className="text-sm font-bold text-[#003957] mb-3 flex items-center gap-2">
                <Clock size={14} className="text-[#a8c941]" /> Horário disponível
              </p>
              <div className="grid grid-cols-4 gap-2">
                {slots.map(t => (
                  <button
                    key={t}
                    onClick={() => { setSelectedTime(t); setStep("info"); }}
                    className="py-2.5 rounded-xl text-sm font-semibold border border-gray-200 text-[#003957] hover:border-[#003957] hover:bg-[#003957]/5 transition-all"
                  >
                    {t}
                  </button>
                ))}
              </div>
            </>
          )}

          {/* STEP: INFO */}
          {step === "info" && (
            <>
              <button
                onClick={() => setStep("time")}
                className="flex items-center gap-1 text-[#003957] text-sm font-semibold mb-4 hover:gap-2 transition-all"
              >
                <ChevronLeft size={15} />
                {selectedDate?.toLocaleDateString("pt-BR", { weekday: "short", day: "numeric", month: "short" })} · {selectedTime}
              </button>
              <div className="space-y-3 mb-5">
                <div>
                  <label className="text-sm font-semibold text-gray-700 mb-1.5 block">Nome do pet *</label>
                  <input
                    value={petName}
                    onChange={e => setPetName(e.target.value)}
                    placeholder="Ex: Rex, Mia, Thor..."
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#003957]/20 focus:border-[#003957] bg-white"
                  />
                </div>
                <div>
                  <label className="text-sm font-semibold text-gray-700 mb-1.5 block">Seu nome *</label>
                  <input
                    value={ownerName}
                    onChange={e => setOwnerName(e.target.value)}
                    placeholder="Nome do responsável"
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#003957]/20 focus:border-[#003957] bg-white"
                  />
                </div>
              </div>
              <button
                disabled={!petName.trim() || !ownerName.trim()}
                onClick={handleSend}
                className="w-full py-3.5 bg-[#a8c941] hover:bg-[#96b535] disabled:opacity-40 disabled:cursor-not-allowed text-[#001e2e] font-bold rounded-xl text-sm transition-all flex items-center justify-center gap-2"
              >
                Confirmar via WhatsApp
              </button>
              <p className="text-xs text-gray-400 text-center mt-2">
                Você será redirecionado para o WhatsApp
              </p>
            </>
          )}

          {/* STEP: DONE */}
          {step === "done" && (
            <div className="text-center py-6">
              <div className="w-16 h-16 bg-green-50 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <CheckCircle size={32} className="text-green-600" />
              </div>
              <p className="font-bold text-[#003957] text-lg mb-2">Solicitação enviada!</p>
              <p className="text-gray-500 text-sm mb-5 leading-relaxed">
                Aguarde a confirmação da clínica pelo WhatsApp. Respondemos em breve.
              </p>
              <button
                onClick={onClose}
                className="px-8 py-3 bg-[#003957] hover:bg-[#004d70] text-white font-bold rounded-xl text-sm transition-all"
              >
                Fechar
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
