import Image from "next/image";
import Link from "next/link";
import {
  PawPrint, FileText, Bell, CreditCard, Phone,
  Clock, CheckCircle, AlertCircle, Download,
  MapPin, Calendar, Weight, Stethoscope, ArrowLeft,
} from "lucide-react";

const timeline = [
  {
    icon: FileText,
    color: "bg-blue-50 text-blue-600 border-blue-100",
    title: "Hemograma disponível",
    desc: "O exame de sangue do Rex está disponível para visualização.",
    date: "Hoje, 14:32",
  },
  {
    icon: CheckCircle,
    color: "bg-green-50 text-green-600 border-green-100",
    title: "Rex está bem no pós-operatório",
    desc: "A cirurgia foi realizada com sucesso. Rex está acordado e estável. Sem intercorrências.",
    date: "Hoje, 11:05",
  },
  {
    icon: Bell,
    color: "bg-amber-50 text-amber-600 border-amber-100",
    title: "Orientações pós-cirúrgicas",
    desc: "Evitar banho por 10 dias. Collar elizabetano obrigatório. Retorno em 7 dias para retirada de pontos.",
    date: "Hoje, 11:00",
  },
  {
    icon: CreditCard,
    color: "bg-purple-50 text-purple-600 border-purple-100",
    title: "Cobrança lançada",
    desc: "Cirurgia ortopédica + internação — R$ 1.850,00",
    date: "Ontem, 18:45",
  },
];

const files = [
  { name: "Hemograma Completo", type: "PDF", date: "Hoje", size: "1.2 MB" },
  { name: "Radiografia pré-op", type: "IMG", date: "Ontem", size: "3.8 MB" },
  { name: "Receita Antibiótico", type: "PDF", date: "Ontem", size: "0.4 MB" },
];

const charges = [
  { desc: "Cirurgia ortopédica + internação", value: "R$ 1.850,00", status: "PENDING", due: "20/03/2026" },
  { desc: "Consulta pré-operatória + exames", value: "R$ 320,00", status: "PAID", due: "10/03/2026" },
];

export default function TutorDemoPage() {
  return (
    <div className="min-h-screen bg-[#f8faf5]">
      {/* Header */}
      <header className="bg-gradient-to-r from-[#001e2e] to-[#003957] text-white px-4 py-4 sticky top-0 z-30 shadow-lg">
        <div className="max-w-2xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="w-8 h-8 bg-white/10 hover:bg-white/20 rounded-xl flex items-center justify-center transition-colors flex-shrink-0"
              title="Voltar ao site"
            >
              <ArrowLeft size={15} className="text-white" />
            </Link>
            <div className="w-7 h-10 relative flex-shrink-0">
              <Image src="/logo.svg" alt="World Vet" fill className="object-contain" />
            </div>
            <div>
              <p className="font-bold text-sm leading-none">World Vet</p>
              <p className="text-white/50 text-xs mt-0.5">Área do Tutor</p>
            </div>
          </div>
          <a
            href="https://wa.me/5542998388882"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-2 bg-[#a8c941] text-[#001e2e] text-xs font-bold rounded-xl"
          >
            <Phone size={13} />
            Falar com a clínica
          </a>
        </div>
      </header>

      <div className="max-w-2xl mx-auto px-4 py-6 space-y-5">

        {/* Pet card */}
        <div className="bg-white rounded-2xl p-5 border border-[#c6ccb0]/30 shadow-[0_4px_20px_rgba(0,57,87,0.08)]">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-[#003957]/8 rounded-2xl flex items-center justify-center flex-shrink-0">
              <PawPrint size={28} className="text-[#003957]" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-0.5">
                <h1 className="text-xl font-bold text-[#003957]">Rex</h1>
                <span className="px-2 py-0.5 bg-green-50 text-green-700 text-xs font-semibold rounded-full border border-green-200">
                  Internado
                </span>
              </div>
              <p className="text-gray-500 text-sm">Labrador · Macho · 3 anos</p>
              <p className="text-gray-400 text-xs mt-0.5">Tutor: João Silva</p>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-3 mt-4 pt-4 border-t border-gray-100">
            <div className="text-center">
              <Weight size={14} className="text-[#a8c941] mx-auto mb-1" />
              <p className="text-sm font-bold text-[#003957]">28 kg</p>
              <p className="text-xs text-gray-400">Peso</p>
            </div>
            <div className="text-center">
              <Calendar size={14} className="text-[#a8c941] mx-auto mb-1" />
              <p className="text-sm font-bold text-[#003957]">3 anos</p>
              <p className="text-xs text-gray-400">Idade</p>
            </div>
            <div className="text-center">
              <Stethoscope size={14} className="text-[#a8c941] mx-auto mb-1" />
              <p className="text-sm font-bold text-[#003957]">Cirurgia</p>
              <p className="text-xs text-gray-400">Motivo</p>
            </div>
          </div>
        </div>

        {/* Cobrança pendente */}
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 flex items-center gap-4">
          <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center flex-shrink-0">
            <AlertCircle size={20} className="text-amber-600" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="font-bold text-amber-800 text-sm">Cobrança pendente</p>
            <p className="text-amber-700 text-xs">Cirurgia ortopédica + internação · R$ 1.850,00</p>
            <p className="text-amber-500 text-xs">Vence em 20/03/2026</p>
          </div>
          <a
            href="https://wa.me/5542998388882?text=Quero+pagar+a+cobran%C3%A7a+do+Rex"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-2 bg-amber-600 text-white text-xs font-bold rounded-xl flex-shrink-0"
          >
            Pagar
          </a>
        </div>

        {/* Timeline */}
        <div className="bg-white rounded-2xl border border-[#c6ccb0]/30 shadow-[0_4px_20px_rgba(0,57,87,0.06)] overflow-hidden">
          <div className="px-5 py-4 border-b border-gray-100">
            <h2 className="font-bold text-[#003957] text-base flex items-center gap-2">
              <Bell size={16} className="text-[#a8c941]" />
              Atualizações do Rex
            </h2>
          </div>
          <div className="divide-y divide-gray-50">
            {timeline.map((item, i) => (
              <div key={i} className="px-5 py-4 flex gap-3">
                <div className="flex flex-col items-center flex-shrink-0">
                  <div className={`w-8 h-8 rounded-xl flex items-center justify-center border ${item.color}`}>
                    <item.icon size={14} />
                  </div>
                  {i < timeline.length - 1 && (
                    <div className="w-px flex-1 bg-gray-100 mt-2" />
                  )}
                </div>
                <div className="flex-1 min-w-0 pb-1">
                  <div className="flex items-start justify-between gap-2">
                    <p className="font-semibold text-[#003957] text-sm">{item.title}</p>
                    <span className="text-gray-400 text-xs whitespace-nowrap flex-shrink-0">{item.date}</span>
                  </div>
                  <p className="text-gray-500 text-xs mt-0.5 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Arquivos */}
        <div className="bg-white rounded-2xl border border-[#c6ccb0]/30 shadow-[0_4px_20px_rgba(0,57,87,0.06)] overflow-hidden">
          <div className="px-5 py-4 border-b border-gray-100">
            <h2 className="font-bold text-[#003957] text-base flex items-center gap-2">
              <FileText size={16} className="text-[#a8c941]" />
              Exames e Documentos
            </h2>
          </div>
          <div className="divide-y divide-gray-50">
            {files.map((file, i) => (
              <div key={i} className="px-5 py-3.5 flex items-center gap-3">
                <div
                  className={`w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 text-xs font-bold ${
                    file.type === "PDF" ? "bg-red-50 text-red-600" : "bg-blue-50 text-blue-600"
                  }`}
                >
                  {file.type}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-[#003957] text-sm truncate">{file.name}</p>
                  <p className="text-gray-400 text-xs">{file.date} · {file.size}</p>
                </div>
                <button className="w-8 h-8 bg-[#f8faf5] hover:bg-[#003957] text-gray-400 hover:text-white rounded-xl flex items-center justify-center transition-colors flex-shrink-0">
                  <Download size={14} />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Cobranças */}
        <div className="bg-white rounded-2xl border border-[#c6ccb0]/30 shadow-[0_4px_20px_rgba(0,57,87,0.06)] overflow-hidden">
          <div className="px-5 py-4 border-b border-gray-100">
            <h2 className="font-bold text-[#003957] text-base flex items-center gap-2">
              <CreditCard size={16} className="text-[#a8c941]" />
              Cobranças
            </h2>
          </div>
          <div className="divide-y divide-gray-50">
            {charges.map((charge, i) => (
              <div key={i} className="px-5 py-4 flex items-center gap-3">
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-[#003957] text-sm">{charge.desc}</p>
                  <p className="text-gray-400 text-xs mt-0.5">Vence: {charge.due}</p>
                </div>
                <div className="text-right flex-shrink-0">
                  <p className="font-bold text-[#003957] text-sm">{charge.value}</p>
                  <span
                    className={`text-xs font-semibold px-2 py-0.5 rounded-full ${
                      charge.status === "PAID"
                        ? "bg-green-50 text-green-700"
                        : "bg-amber-50 text-amber-700"
                    }`}
                  >
                    {charge.status === "PAID" ? "Pago" : "Pendente"}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Info clínica */}
        <div className="bg-[#003957] rounded-2xl p-5 text-white">
          <p className="text-[#a8c941] text-xs font-bold uppercase tracking-widest mb-3">World Vet — Contato</p>
          <div className="space-y-2 mb-4">
            <div className="flex items-center gap-2 text-white/70 text-sm">
              <MapPin size={14} className="text-[#a8c941] flex-shrink-0" />
              Rua Vinte e Três de Abril, Piraí do Sul - PR
            </div>
            <div className="flex items-center gap-2 text-white/70 text-sm">
              <Clock size={14} className="text-[#a8c941] flex-shrink-0" />
              Seg–Sex 8h–18h · Sáb 8h–12h
            </div>
          </div>
          <a
            href="https://wa.me/5542998388882"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 py-3 bg-[#a8c941] text-[#001e2e] font-bold rounded-xl text-sm"
          >
            <Phone size={15} />
            Falar no WhatsApp
          </a>
        </div>

        <p className="text-center text-gray-400 text-xs pb-4">
          Área privada · World Vet · Dr. Matheus A. F. Martins — CRMV-PR 18808
        </p>
      </div>
    </div>
  );
}
