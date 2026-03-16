import Link from "next/link";
import { Plus, DollarSign, CheckCircle, Clock, AlertCircle } from "lucide-react";

const charges = [
  { id: "c1", desc: "Cirurgia ortopédica + internação", pet: "Rex", tutor: "João Silva", value: 1850, status: "PENDING", due: "20/03/2026" },
  { id: "c2", desc: "Consulta pré-operatória + exames", pet: "Rex", tutor: "João Silva", value: 320, status: "PAID", due: "10/03/2026" },
  { id: "c3", desc: "Banho, tosa e consulta de rotina", pet: "Mia", tutor: "Ana Souza", value: 180, status: "PENDING", due: "22/03/2026" },
  { id: "c4", desc: "Vacinação anual + vermifugação", pet: "Thor", tutor: "Carlos Mendes", value: 240, status: "PAID", due: "05/03/2026" },
];

const statusConfig: Record<string, { label: string; icon: React.ElementType; cls: string }> = {
  PAID: { label: "Pago", icon: CheckCircle, cls: "bg-green-50 text-green-700 border-green-200" },
  PENDING: { label: "Pendente", icon: Clock, cls: "bg-amber-50 text-amber-700 border-amber-200" },
  OVERDUE: { label: "Vencida", icon: AlertCircle, cls: "bg-red-50 text-red-700 border-red-200" },
};

const total = charges.reduce((a, c) => a + c.value, 0);
const paid = charges.filter((c) => c.status === "PAID").reduce((a, c) => a + c.value, 0);
const pending = charges.filter((c) => c.status === "PENDING").reduce((a, c) => a + c.value, 0);

export default function ChargesPage() {
  return (
    <div className="p-6 lg:p-10">
      <div className="flex items-center justify-between mb-6">
        <div>
          <p className="text-[#a8c941] text-sm font-bold uppercase tracking-widest mb-1">Financeiro</p>
          <h1 className="text-3xl font-bold text-[#003957]">Cobranças</h1>
        </div>
        <Link href="/dashboard/charges/new" className="flex items-center gap-2 px-5 py-3 bg-[#003957] hover:bg-[#004d70] text-white font-semibold rounded-xl transition-all shadow-md text-sm">
          <Plus size={16} />
          Nova Cobrança
        </Link>
      </div>

      {/* Resumo financeiro */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        {[
          { label: "Total", value: total, color: "bg-[#003957]" },
          { label: "Recebido", value: paid, color: "bg-green-600" },
          { label: "Pendente", value: pending, color: "bg-amber-500" },
        ].map((s) => (
          <div key={s.label} className="bg-white rounded-2xl p-5 border border-[#c6ccb0]/30 shadow-[0_4px_20px_rgba(0,57,87,0.06)]">
            <div className={`w-9 h-9 ${s.color} rounded-xl flex items-center justify-center mb-3`}>
              <DollarSign size={16} className="text-white" />
            </div>
            <p className="text-xl font-bold text-[#003957]">
              R$ {s.value.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
            </p>
            <p className="text-gray-400 text-xs mt-0.5">{s.label}</p>
          </div>
        ))}
      </div>

      {/* Lista */}
      <div className="bg-white rounded-2xl border border-[#c6ccb0]/30 shadow-[0_4px_20px_rgba(0,57,87,0.06)] overflow-hidden">
        <div className="divide-y divide-gray-50">
          {charges.map((charge) => {
            const cfg = statusConfig[charge.status];
            const Icon = cfg.icon;
            return (
              <div key={charge.id} className="px-5 py-4 flex items-center gap-4 hover:bg-gray-50/50 transition-colors">
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-[#003957] text-sm">{charge.desc}</p>
                  <p className="text-gray-400 text-xs mt-0.5">
                    {charge.pet} · {charge.tutor} · Vence: {charge.due}
                  </p>
                </div>
                <div className="text-right flex-shrink-0">
                  <p className="font-bold text-[#003957] text-base">
                    R$ {charge.value.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
                  </p>
                  <span className={`inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-0.5 rounded-full border mt-1 ${cfg.cls}`}>
                    <Icon size={11} />
                    {cfg.label}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
