"use client";
import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Save } from "lucide-react";

export default function NewTutorPage() {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", email: "", cpf: "", address: "" });

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
        <Link href="/dashboard/tutors" className="w-10 h-10 bg-white border border-[#c6ccb0]/50 rounded-xl flex items-center justify-center hover:border-[#003957] transition-colors">
          <ArrowLeft size={18} className="text-[#003957]" />
        </Link>
        <div>
          <h1 className="text-2xl font-bold text-[#003957]">Cadastrar Tutor</h1>
          <p className="text-gray-500 text-sm">Dados de contato do responsável</p>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="bg-white rounded-2xl p-6 border border-[#c6ccb0]/30 shadow-[0_4px_20px_rgba(0,57,87,0.05)] space-y-4 mb-5">
          <div>
            <label className={l}>Nome completo *</label>
            <input type="text" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Nome do tutor" className={i} />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className={l}>Telefone / WhatsApp</label>
              <input type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="(42) 9 9999-9999" className={i} />
            </div>
            <div>
              <label className={l}>CPF</label>
              <input type="text" value={form.cpf} onChange={(e) => setForm({ ...form, cpf: e.target.value })} placeholder="000.000.000-00" className={i} />
            </div>
          </div>
          <div>
            <label className={l}>E-mail</label>
            <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="email@exemplo.com" className={i} />
          </div>
          <div>
            <label className={l}>Endereço</label>
            <input type="text" value={form.address} onChange={(e) => setForm({ ...form, address: e.target.value })} placeholder="Rua, número, bairro" className={i} />
          </div>
        </div>
        <div className="flex gap-3">
          <Link href="/dashboard/tutors" className="flex-1 py-3.5 border-2 border-[#003957] text-[#003957] font-bold rounded-xl text-center text-sm hover:bg-[#003957] hover:text-white transition-all">Cancelar</Link>
          <button type="submit" disabled={loading} className="flex-1 py-3.5 bg-[#003957] hover:bg-[#004d70] disabled:opacity-50 text-white font-bold rounded-xl transition-all flex items-center justify-center gap-2 text-sm">
            <Save size={16} />
            {loading ? "Salvando..." : "Cadastrar Tutor"}
          </button>
        </div>
      </form>
    </div>
  );
}
