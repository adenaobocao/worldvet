"use client";
import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, CreditCard } from "lucide-react";

export default function NewChargePage() {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ petId: "", desc: "", value: "", due: "", paymentLink: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 800));
    setLoading(false);
  };

  const i = "w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#003957]/20 focus:border-[#003957] bg-white";
  const l = "text-sm font-semibold text-gray-700 mb-1.5 block";

  return (
    <div className="p-6 lg:p-10 max-w-xl">
      <div className="flex items-center gap-4 mb-8">
        <Link href="/dashboard/charges" className="w-10 h-10 bg-white border border-[#c6ccb0]/50 rounded-xl flex items-center justify-center hover:border-[#003957] transition-colors">
          <ArrowLeft size={18} className="text-[#003957]" />
        </Link>
        <div>
          <h1 className="text-2xl font-bold text-[#003957]">Nova Cobrança</h1>
          <p className="text-gray-500 text-sm">Lançar cobrança para um pet</p>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="bg-white rounded-2xl p-6 border border-[#c6ccb0]/30 shadow-[0_4px_20px_rgba(0,57,87,0.05)] space-y-4 mb-5">
          <div>
            <label className={l}>Pet *</label>
            <select required value={form.petId} onChange={(e) => setForm({ ...form, petId: e.target.value })} className={i}>
              <option value="">Selecionar pet...</option>
              <option value="demo-1">Rex — João Silva</option>
              <option value="demo-2">Mia — Ana Souza</option>
              <option value="demo-3">Thor — Carlos Mendes</option>
            </select>
          </div>
          <div>
            <label className={l}>Descrição *</label>
            <input type="text" required value={form.desc} onChange={(e) => setForm({ ...form, desc: e.target.value })} placeholder="Ex: Consulta + hemograma" className={i} />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className={l}>Valor (R$) *</label>
              <input type="number" step="0.01" min="0" required value={form.value} onChange={(e) => setForm({ ...form, value: e.target.value })} placeholder="0,00" className={i} />
            </div>
            <div>
              <label className={l}>Vencimento</label>
              <input type="date" value={form.due} onChange={(e) => setForm({ ...form, due: e.target.value })} className={i} />
            </div>
          </div>
          <div>
            <label className={l}>Link de pagamento <span className="text-gray-400 font-normal">(opcional)</span></label>
            <input type="url" value={form.paymentLink} onChange={(e) => setForm({ ...form, paymentLink: e.target.value })} placeholder="https://pagar.me/link..." className={i} />
            <p className="text-xs text-gray-400 mt-1.5">Mercado Pago, PicPay, Pix, etc.</p>
          </div>
        </div>
        <div className="flex gap-3">
          <Link href="/dashboard/charges" className="flex-1 py-3.5 border-2 border-[#003957] text-[#003957] font-bold rounded-xl text-center text-sm hover:bg-[#003957] hover:text-white transition-all">Cancelar</Link>
          <button type="submit" disabled={loading} className="flex-1 py-3.5 bg-[#003957] hover:bg-[#004d70] disabled:opacity-50 text-white font-bold rounded-xl transition-all flex items-center justify-center gap-2 text-sm">
            <CreditCard size={16} />
            {loading ? "Salvando..." : "Lançar Cobrança"}
          </button>
        </div>
      </form>
    </div>
  );
}
