"use client";
import { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft, PawPrint, Upload, Bell, CreditCard, Link2,
  CheckCircle, FileText, Copy, ExternalLink, Plus,
  Weight, Calendar, Stethoscope, User, Phone,
  ClipboardList, AlertCircle, X, Send,
} from "lucide-react";

// ─── Demo data ──────────────────────────────────────────
const pet = {
  name: "Rex",
  species: "Cachorro",
  breed: "Labrador",
  sex: "Macho",
  age: "3 anos",
  weight: "28 kg",
  color: "Bege",
  notes: "Animal dócil. Alérgico à dipirona. Histórico de displasia coxofemoral.",
  status: "Internado",
  tutor: {
    name: "João Silva",
    phone: "(42) 99999-0000",
    cpf: "123.456.789-00",
  },
  accessToken: "worldvet.app/tutor/abc123xyz",
};

const timeline = [
  { id: 1, type: "EXAM", icon: FileText, color: "blue", label: "Exame disponível", title: "Hemograma Completo disponível", content: "Resultados dentro do esperado. Sem alterações significativas.", date: "Hoje, 14:32", visible: true },
  { id: 2, type: "POST_SURGERY", icon: CheckCircle, color: "green", label: "Pós-operatório", title: "Rex está bem no pós-operatório", content: "Cirurgia realizada com sucesso. Animal acordado e estável.", date: "Hoje, 11:05", visible: true },
  { id: 3, type: "ORIENTATION", icon: Bell, color: "amber", label: "Orientação", title: "Orientações pós-cirúrgicas enviadas", content: "Collar elizabetano, sem banho por 10 dias, retorno em 7 dias.", date: "Hoje, 11:00", visible: true },
  { id: 4, type: "CHARGE", icon: CreditCard, color: "purple", label: "Cobrança", title: "Cobrança lançada: R$ 1.850,00", content: "Cirurgia ortopédica + internação.", date: "Ontem, 18:45", visible: true },
];

const files = [
  { id: 1, name: "Hemograma Completo.pdf", type: "PDF", size: "1.2 MB", date: "Hoje", visible: true },
  { id: 2, name: "Radiografia pré-op.jpg", type: "IMG", size: "3.8 MB", date: "Ontem", visible: true },
  { id: 3, name: "Receita Antibiótico.pdf", type: "PDF", size: "0.4 MB", date: "Ontem", visible: false },
];

const charges = [
  { id: 1, desc: "Cirurgia ortopédica + internação", value: 1850, status: "PENDING", due: "20/03/2026" },
  { id: 2, desc: "Consulta pré-operatória + exames", value: 320, status: "PAID", due: "10/03/2026" },
];

const colorMap: Record<string, string> = {
  blue: "bg-blue-50 text-blue-600 border-blue-100",
  green: "bg-green-50 text-green-600 border-green-100",
  amber: "bg-amber-50 text-amber-600 border-amber-100",
  purple: "bg-purple-50 text-purple-600 border-purple-100",
  red: "bg-red-50 text-red-600 border-red-100",
};

// ─── Modais ──────────────────────────────────────────────
function Modal({ open, onClose, title, children }: { open: boolean; onClose: () => void; title: string; children: React.ReactNode }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />
      <div className="relative bg-white rounded-2xl w-full max-w-lg shadow-2xl">
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
          <h3 className="font-bold text-[#003957] text-lg">{title}</h3>
          <button onClick={onClose} className="w-8 h-8 rounded-xl bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors">
            <X size={16} className="text-gray-500" />
          </button>
        </div>
        <div className="p-6">{children}</div>
      </div>
    </div>
  );
}

// ─── Page ────────────────────────────────────────────────
export default function PetProfilePage() {
  const [modal, setModal] = useState<"update" | "upload" | "charge" | "link" | null>(null);
  const [copied, setCopied] = useState(false);
  const [newUpdate, setNewUpdate] = useState({ type: "GENERAL", title: "", content: "", visible: true });
  const [newCharge, setNewCharge] = useState({ desc: "", value: "", due: "" });
  const [dragOver, setDragOver] = useState(false);

  const copyLink = () => {
    navigator.clipboard.writeText(`https://${pet.accessToken}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const inputCls = "w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#003957]/20 focus:border-[#003957] bg-white";

  return (
    <div className="p-4 lg:p-8 max-w-4xl">

      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <Link href="/dashboard/pets" className="w-9 h-9 bg-white border border-[#c6ccb0]/50 rounded-xl flex items-center justify-center hover:border-[#003957] transition-colors flex-shrink-0">
          <ArrowLeft size={16} className="text-[#003957]" />
        </Link>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <h1 className="text-2xl font-bold text-[#003957]">{pet.name}</h1>
            <span className="px-2.5 py-1 bg-blue-50 text-blue-700 text-xs font-semibold rounded-full border border-blue-200">{pet.status}</span>
          </div>
          <p className="text-gray-500 text-sm">{pet.species} · {pet.breed} · Tutor: {pet.tutor.name}</p>
        </div>
      </div>

      {/* Action bar */}
      <div className="flex flex-wrap gap-2 mb-6">
        <button onClick={() => setModal("update")} className="flex items-center gap-2 px-4 py-2.5 bg-[#003957] hover:bg-[#004d70] text-white font-semibold rounded-xl transition-all text-sm shadow-sm">
          <Bell size={15} />
          Nova atualização
        </button>
        <button onClick={() => setModal("upload")} className="flex items-center gap-2 px-4 py-2.5 bg-white border border-[#c6ccb0]/60 hover:border-[#003957] text-[#003957] font-semibold rounded-xl transition-all text-sm">
          <Upload size={15} />
          Subir arquivo
        </button>
        <button onClick={() => setModal("charge")} className="flex items-center gap-2 px-4 py-2.5 bg-white border border-[#c6ccb0]/60 hover:border-[#003957] text-[#003957] font-semibold rounded-xl transition-all text-sm">
          <CreditCard size={15} />
          Lançar cobrança
        </button>
        <button onClick={() => setModal("link")} className="flex items-center gap-2 px-4 py-2.5 bg-[#a8c941] hover:bg-[#8aab2d] text-[#001e2e] font-bold rounded-xl transition-all text-sm shadow-sm">
          <Link2 size={15} />
          Link do tutor
        </button>
      </div>

      <div className="grid lg:grid-cols-3 gap-5">

        {/* ── Coluna esquerda ── */}
        <div className="lg:col-span-1 space-y-4">

          {/* Pet info */}
          <div className="bg-white rounded-2xl p-5 border border-[#c6ccb0]/30 shadow-[0_4px_20px_rgba(0,57,87,0.06)]">
            <div className="w-14 h-14 bg-[#003957]/8 rounded-2xl flex items-center justify-center mb-4">
              <PawPrint size={24} className="text-[#003957]" />
            </div>
            <h3 className="font-bold text-[#003957] text-base mb-3">{pet.name}</h3>
            <div className="space-y-2.5">
              {[
                { icon: Stethoscope, label: "Espécie", value: `${pet.species} · ${pet.breed}` },
                { icon: Weight, label: "Peso", value: pet.weight },
                { icon: Calendar, label: "Idade", value: pet.age },
                { icon: ClipboardList, label: "Cor", value: pet.color },
              ].map((row) => (
                <div key={row.label} className="flex items-start gap-2">
                  <row.icon size={14} className="text-[#a8c941] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs text-gray-400">{row.label}</p>
                    <p className="text-sm font-medium text-[#003957]">{row.value}</p>
                  </div>
                </div>
              ))}
            </div>
            {pet.notes && (
              <div className="mt-4 pt-4 border-t border-gray-100">
                <p className="text-xs text-gray-400 mb-1">Observações</p>
                <p className="text-sm text-gray-600 leading-relaxed">{pet.notes}</p>
              </div>
            )}
          </div>

          {/* Tutor */}
          <div className="bg-white rounded-2xl p-5 border border-[#c6ccb0]/30 shadow-[0_4px_20px_rgba(0,57,87,0.06)]">
            <p className="text-xs font-bold text-[#a8c941] uppercase tracking-widest mb-3">Tutor</p>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-[#003957]/8 rounded-xl flex items-center justify-center flex-shrink-0">
                <User size={16} className="text-[#003957]" />
              </div>
              <div>
                <p className="font-bold text-[#003957] text-sm">{pet.tutor.name}</p>
                <p className="text-gray-400 text-xs">{pet.tutor.cpf}</p>
              </div>
            </div>
            <a
              href={`https://wa.me/55${pet.tutor.phone.replace(/\D/g, "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-2.5 bg-[#f8faf5] hover:bg-[#a8c941]/15 border border-[#c6ccb0]/40 rounded-xl text-sm text-[#003957] font-medium transition-colors"
            >
              <Phone size={14} className="text-[#a8c941]" />
              {pet.tutor.phone}
            </a>
          </div>

          {/* Cobranças */}
          <div className="bg-white rounded-2xl border border-[#c6ccb0]/30 shadow-[0_4px_20px_rgba(0,57,87,0.06)] overflow-hidden">
            <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100">
              <p className="text-xs font-bold text-[#a8c941] uppercase tracking-widest">Cobranças</p>
              <button onClick={() => setModal("charge")} className="w-7 h-7 bg-[#003957]/8 hover:bg-[#003957] text-[#003957] hover:text-white rounded-lg flex items-center justify-center transition-colors">
                <Plus size={14} />
              </button>
            </div>
            <div className="divide-y divide-gray-50">
              {charges.map((c) => (
                <div key={c.id} className="px-4 py-3 flex items-center justify-between gap-2">
                  <div className="min-w-0">
                    <p className="text-sm font-medium text-[#003957] truncate">{c.desc}</p>
                    <p className="text-xs text-gray-400">Vence: {c.due}</p>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <p className="text-sm font-bold text-[#003957]">R$ {c.value.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}</p>
                    <span className={`text-xs font-semibold ${c.status === "PAID" ? "text-green-600" : "text-amber-600"}`}>
                      {c.status === "PAID" ? "Pago" : "Pendente"}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Coluna direita ── */}
        <div className="lg:col-span-2 space-y-4">

          {/* Timeline */}
          <div className="bg-white rounded-2xl border border-[#c6ccb0]/30 shadow-[0_4px_20px_rgba(0,57,87,0.06)] overflow-hidden">
            <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
              <h3 className="font-bold text-[#003957] text-base">Timeline</h3>
              <button
                onClick={() => setModal("update")}
                className="flex items-center gap-1.5 px-3 py-1.5 bg-[#003957] hover:bg-[#004d70] text-white text-xs font-semibold rounded-lg transition-colors"
              >
                <Plus size={13} />
                Nova
              </button>
            </div>
            <div className="divide-y divide-gray-50">
              {timeline.map((item, i) => (
                <div key={item.id} className="px-5 py-4 flex gap-3 group hover:bg-gray-50/50 transition-colors">
                  <div className="flex flex-col items-center flex-shrink-0">
                    <div className={`w-8 h-8 rounded-xl flex items-center justify-center border ${colorMap[item.color]}`}>
                      <item.icon size={14} />
                    </div>
                    {i < timeline.length - 1 && <div className="w-px flex-1 bg-gray-100 mt-2" />}
                  </div>
                  <div className="flex-1 min-w-0 pb-1">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <span className="text-xs text-gray-400 mr-2">{item.label}</span>
                        <p className="font-semibold text-[#003957] text-sm">{item.title}</p>
                      </div>
                      <div className="flex items-center gap-1.5 flex-shrink-0">
                        <span className={`w-2 h-2 rounded-full flex-shrink-0 ${item.visible ? "bg-green-400" : "bg-gray-300"}`} title={item.visible ? "Visível ao tutor" : "Oculto"} />
                        <span className="text-gray-400 text-xs whitespace-nowrap">{item.date}</span>
                      </div>
                    </div>
                    {item.content && (
                      <p className="text-gray-500 text-xs mt-1 leading-relaxed">{item.content}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Arquivos */}
          <div className="bg-white rounded-2xl border border-[#c6ccb0]/30 shadow-[0_4px_20px_rgba(0,57,87,0.06)] overflow-hidden">
            <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
              <h3 className="font-bold text-[#003957] text-base">Arquivos</h3>
              <button
                onClick={() => setModal("upload")}
                className="flex items-center gap-1.5 px-3 py-1.5 bg-[#003957] hover:bg-[#004d70] text-white text-xs font-semibold rounded-lg transition-colors"
              >
                <Upload size={13} />
                Subir
              </button>
            </div>
            <div className="divide-y divide-gray-50">
              {files.map((file) => (
                <div key={file.id} className="px-5 py-3.5 flex items-center gap-3 hover:bg-gray-50/50 transition-colors">
                  <div className={`w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 text-xs font-bold ${file.type === "PDF" ? "bg-red-50 text-red-600" : "bg-blue-50 text-blue-600"}`}>
                    {file.type}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-[#003957] text-sm truncate">{file.name}</p>
                    <p className="text-gray-400 text-xs">{file.date} · {file.size}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className={`w-2 h-2 rounded-full ${file.visible ? "bg-green-400" : "bg-gray-300"}`} title={file.visible ? "Visível ao tutor" : "Oculto"} />
                    <span className="text-xs text-gray-400">{file.visible ? "Visível" : "Oculto"}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ─── Modal: Nova atualização ─── */}
      <Modal open={modal === "update"} onClose={() => setModal(null)} title="Nova atualização">
        <div className="space-y-4">
          <div>
            <label className="text-sm font-semibold text-gray-700 mb-1.5 block">Tipo</label>
            <select
              value={newUpdate.type}
              onChange={(e) => setNewUpdate({ ...newUpdate, type: e.target.value })}
              className={inputCls}
            >
              <option value="GENERAL">Geral</option>
              <option value="EXAM_AVAILABLE">Exame disponível</option>
              <option value="POST_SURGERY">Pós-operatório</option>
              <option value="ORIENTATION">Orientação</option>
              <option value="RETURN_RECOMMENDED">Retorno recomendado</option>
            </select>
          </div>
          <div>
            <label className="text-sm font-semibold text-gray-700 mb-1.5 block">Título *</label>
            <input
              type="text"
              value={newUpdate.title}
              onChange={(e) => setNewUpdate({ ...newUpdate, title: e.target.value })}
              placeholder="Ex: Rex está bem no pós-op"
              className={inputCls}
            />
          </div>
          <div>
            <label className="text-sm font-semibold text-gray-700 mb-1.5 block">Mensagem (opcional)</label>
            <textarea
              value={newUpdate.content}
              onChange={(e) => setNewUpdate({ ...newUpdate, content: e.target.value })}
              placeholder="Detalhes, observações..."
              rows={3}
              className={`${inputCls} resize-none`}
            />
          </div>
          <label className="flex items-center gap-3 cursor-pointer">
            <div
              onClick={() => setNewUpdate({ ...newUpdate, visible: !newUpdate.visible })}
              className={`w-10 h-6 rounded-full transition-colors flex items-center px-0.5 ${newUpdate.visible ? "bg-[#a8c941]" : "bg-gray-200"}`}
            >
              <div className={`w-5 h-5 bg-white rounded-full shadow transition-transform ${newUpdate.visible ? "translate-x-4" : "translate-x-0"}`} />
            </div>
            <span className="text-sm text-gray-700">Visível para o tutor</span>
          </label>
          <button
            onClick={() => setModal(null)}
            className="w-full py-3.5 bg-[#003957] hover:bg-[#004d70] text-white font-bold rounded-xl text-sm flex items-center justify-center gap-2"
          >
            <Send size={15} />
            Publicar atualização
          </button>
        </div>
      </Modal>

      {/* ─── Modal: Upload ─── */}
      <Modal open={modal === "upload"} onClose={() => setModal(null)} title="Subir arquivo">
        <div className="space-y-4">
          <div
            onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
            onDragLeave={() => setDragOver(false)}
            onDrop={(e) => { e.preventDefault(); setDragOver(false); }}
            className={`border-2 border-dashed rounded-2xl p-10 text-center transition-colors cursor-pointer ${dragOver ? "border-[#a8c941] bg-[#a8c941]/5" : "border-[#c6ccb0] hover:border-[#003957] hover:bg-[#003957]/3"}`}
          >
            <Upload size={32} className="text-[#c6ccb0] mx-auto mb-3" />
            <p className="font-semibold text-[#003957] text-sm">Arraste e solte aqui</p>
            <p className="text-gray-400 text-xs mt-1">ou clique para buscar no computador</p>
            <p className="text-gray-300 text-xs mt-2">PDF, JPG, PNG — até 50 MB</p>
            <input type="file" className="hidden" />
          </div>
          <div>
            <label className="text-sm font-semibold text-gray-700 mb-1.5 block">Comentário (opcional)</label>
            <input type="text" placeholder="Ex: Resultado do hemograma pós-cirurgia" className={inputCls} />
          </div>
          <label className="flex items-center gap-3 cursor-pointer">
            <div className="w-10 h-6 rounded-full bg-[#a8c941] flex items-center px-0.5">
              <div className="w-5 h-5 bg-white rounded-full shadow translate-x-4" />
            </div>
            <span className="text-sm text-gray-700">Liberar para o tutor</span>
          </label>
          <button
            onClick={() => setModal(null)}
            className="w-full py-3.5 bg-[#003957] hover:bg-[#004d70] text-white font-bold rounded-xl text-sm flex items-center justify-center gap-2"
          >
            <Upload size={15} />
            Enviar arquivo
          </button>
        </div>
      </Modal>

      {/* ─── Modal: Cobrança ─── */}
      <Modal open={modal === "charge"} onClose={() => setModal(null)} title="Lançar cobrança">
        <div className="space-y-4">
          <div>
            <label className="text-sm font-semibold text-gray-700 mb-1.5 block">Descrição *</label>
            <input
              type="text"
              value={newCharge.desc}
              onChange={(e) => setNewCharge({ ...newCharge, desc: e.target.value })}
              placeholder="Ex: Consulta + exames"
              className={inputCls}
            />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-sm font-semibold text-gray-700 mb-1.5 block">Valor (R$) *</label>
              <input
                type="number"
                step="0.01"
                value={newCharge.value}
                onChange={(e) => setNewCharge({ ...newCharge, value: e.target.value })}
                placeholder="0,00"
                className={inputCls}
              />
            </div>
            <div>
              <label className="text-sm font-semibold text-gray-700 mb-1.5 block">Vencimento</label>
              <input
                type="date"
                value={newCharge.due}
                onChange={(e) => setNewCharge({ ...newCharge, due: e.target.value })}
                className={inputCls}
              />
            </div>
          </div>
          <div>
            <label className="text-sm font-semibold text-gray-700 mb-1.5 block">Link de pagamento (opcional)</label>
            <input type="url" placeholder="https://pagar.me/..." className={inputCls} />
          </div>
          <button
            onClick={() => setModal(null)}
            className="w-full py-3.5 bg-[#003957] hover:bg-[#004d70] text-white font-bold rounded-xl text-sm flex items-center justify-center gap-2"
          >
            <CreditCard size={15} />
            Lançar cobrança
          </button>
        </div>
      </Modal>

      {/* ─── Modal: Link do tutor ─── */}
      <Modal open={modal === "link"} onClose={() => setModal(null)} title="Link do tutor">
        <div className="space-y-4">
          <div className="bg-[#f8faf5] rounded-xl p-4 border border-[#c6ccb0]/40">
            <p className="text-xs text-gray-400 mb-1">Link de acesso de {pet.tutor.name}</p>
            <p className="text-[#003957] font-mono text-sm break-all">{pet.accessToken}</p>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <button
              onClick={copyLink}
              className={`flex items-center justify-center gap-2 py-3.5 font-bold rounded-xl text-sm transition-all ${copied ? "bg-green-500 text-white" : "bg-[#003957] hover:bg-[#004d70] text-white"}`}
            >
              {copied ? <CheckCircle size={15} /> : <Copy size={15} />}
              {copied ? "Copiado!" : "Copiar link"}
            </button>
            <a
              href={`https://wa.me/55${pet.tutor.phone.replace(/\D/g, "")}?text=Ol%C3%A1%20${encodeURIComponent(pet.tutor.name)}%2C%20segue%20o%20link%20para%20acompanhar%20o%20${encodeURIComponent(pet.name)}%3A%20https%3A%2F%2F${encodeURIComponent(pet.accessToken)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-3.5 bg-[#25d366] hover:bg-[#20ba5a] text-white font-bold rounded-xl text-sm transition-all"
            >
              <Send size={15} />
              Enviar no WhatsApp
            </a>
          </div>
          <p className="text-xs text-gray-400 text-center">
            O tutor usa este link para acessar todas as informações do {pet.name}.
          </p>
        </div>
      </Modal>
    </div>
  );
}
