"use client";
import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Save } from "lucide-react";

export default function NewPetPage() {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    tutorName: "", tutorPhone: "", tutorCpf: "",
    petName: "", species: "cachorro", breed: "", sex: "UNKNOWN", weight: "", notes: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 800));
    setLoading(false);
  };

  const inputCls = "w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#003957]/20 focus:border-[#003957] bg-white";
  const labelCls = "text-sm font-semibold text-gray-700 mb-1.5 block";

  return (
    <div className="p-6 lg:p-10 max-w-2xl">
      <div className="flex items-center gap-4 mb-8">
        <Link href="/dashboard/pets" className="w-10 h-10 bg-white border border-[#c6ccb0]/50 rounded-xl flex items-center justify-center hover:border-[#003957] transition-colors">
          <ArrowLeft size={18} className="text-[#003957]" />
        </Link>
        <div>
          <h1 className="text-2xl font-bold text-[#003957]">Cadastrar Pet</h1>
          <p className="text-gray-500 text-sm">Preencha os dados do tutor e do animal</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="bg-white rounded-2xl p-6 border border-[#c6ccb0]/30 shadow-[0_4px_20px_rgba(0,57,87,0.05)]">
          <h3 className="font-bold text-[#003957] mb-4 flex items-center gap-2">
            <span className="w-6 h-6 bg-[#003957] text-white text-xs rounded-lg flex items-center justify-center font-bold">1</span>
            Dados do Tutor
          </h3>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="sm:col-span-2">
              <label className={labelCls}>Nome completo *</label>
              <input type="text" required value={form.tutorName} onChange={(e) => setForm({ ...form, tutorName: e.target.value })} placeholder="Nome do tutor" className={inputCls} />
            </div>
            <div>
              <label className={labelCls}>Telefone / WhatsApp</label>
              <input type="tel" value={form.tutorPhone} onChange={(e) => setForm({ ...form, tutorPhone: e.target.value })} placeholder="(42) 9 9999-9999" className={inputCls} />
            </div>
            <div>
              <label className={labelCls}>CPF</label>
              <input type="text" value={form.tutorCpf} onChange={(e) => setForm({ ...form, tutorCpf: e.target.value })} placeholder="000.000.000-00" className={inputCls} />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 border border-[#c6ccb0]/30 shadow-[0_4px_20px_rgba(0,57,87,0.05)]">
          <h3 className="font-bold text-[#003957] mb-4 flex items-center gap-2">
            <span className="w-6 h-6 bg-[#a8c941] text-[#001e2e] text-xs rounded-lg flex items-center justify-center font-bold">2</span>
            Dados do Pet
          </h3>
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className={labelCls}>Nome do pet *</label>
              <input type="text" required value={form.petName} onChange={(e) => setForm({ ...form, petName: e.target.value })} placeholder="Ex: Rex" className={inputCls} />
            </div>
            <div>
              <label className={labelCls}>Espécie *</label>
              <select value={form.species} onChange={(e) => setForm({ ...form, species: e.target.value })} className={inputCls}>
                <option value="cachorro">Cachorro</option>
                <option value="gato">Gato</option>
                <option value="ave">Ave</option>
                <option value="roedor">Roedor</option>
                <option value="reptil">Réptil</option>
                <option value="outro">Outro</option>
              </select>
            </div>
            <div>
              <label className={labelCls}>Raça</label>
              <input type="text" value={form.breed} onChange={(e) => setForm({ ...form, breed: e.target.value })} placeholder="Ex: Labrador" className={inputCls} />
            </div>
            <div>
              <label className={labelCls}>Sexo</label>
              <select value={form.sex} onChange={(e) => setForm({ ...form, sex: e.target.value })} className={inputCls}>
                <option value="MALE">Macho</option>
                <option value="FEMALE">Fêmea</option>
                <option value="UNKNOWN">Não informado</option>
              </select>
            </div>
            <div>
              <label className={labelCls}>Peso (kg)</label>
              <input type="number" step="0.1" value={form.weight} onChange={(e) => setForm({ ...form, weight: e.target.value })} placeholder="Ex: 12.5" className={inputCls} />
            </div>
            <div className="sm:col-span-2">
              <label className={labelCls}>Observações</label>
              <textarea value={form.notes} onChange={(e) => setForm({ ...form, notes: e.target.value })} placeholder="Histórico, alergias, observações importantes..." rows={3} className={`${inputCls} resize-none`} />
            </div>
          </div>
        </div>

        <div className="flex gap-3">
          <Link href="/dashboard/pets" className="flex-1 py-3.5 border-2 border-[#003957] text-[#003957] font-bold rounded-xl text-center text-sm hover:bg-[#003957] hover:text-white transition-all">
            Cancelar
          </Link>
          <button type="submit" disabled={loading} className="flex-1 py-3.5 bg-[#003957] hover:bg-[#004d70] disabled:opacity-50 text-white font-bold rounded-xl transition-all flex items-center justify-center gap-2 text-sm">
            <Save size={16} />
            {loading ? "Salvando..." : "Cadastrar Pet"}
          </button>
        </div>
      </form>
    </div>
  );
}
