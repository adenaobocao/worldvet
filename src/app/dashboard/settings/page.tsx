"use client";
import { useState } from "react";
import { Save, Building2, Clock, Lock, CheckCircle } from "lucide-react";

export default function SettingsPage() {
  const [saved, setSaved] = useState(false);
  const save = () => { setSaved(true); setTimeout(() => setSaved(false), 2500); };

  const i = "w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#003957]/20 focus:border-[#003957] bg-white";
  const l = "text-sm font-semibold text-gray-700 mb-1.5 block";

  return (
    <div className="p-6 lg:p-10 max-w-2xl">
      <div className="mb-8">
        <p className="text-[#a8c941] text-sm font-bold uppercase tracking-widest mb-1">Sistema</p>
        <h1 className="text-3xl font-bold text-[#003957]">Configurações</h1>
      </div>

      <div className="space-y-5">
        {/* Clínica */}
        <div className="bg-white rounded-2xl p-6 border border-[#c6ccb0]/30 shadow-[0_4px_20px_rgba(0,57,87,0.05)]">
          <div className="flex items-center gap-2 mb-5">
            <Building2 size={18} className="text-[#a8c941]" />
            <h3 className="font-bold text-[#003957]">Dados da Clínica</h3>
          </div>
          <div className="space-y-4">
            <div>
              <label className={l}>Nome da clínica</label>
              <input type="text" defaultValue="World Vet" className={i} />
            </div>
            <div>
              <label className={l}>Endereço</label>
              <input type="text" defaultValue="Rua Vinte e Três de Abril, Piraí do Sul - PR" className={i} />
            </div>
            <div>
              <label className={l}>WhatsApp</label>
              <input type="text" defaultValue="(42) 99838-8882" className={i} />
            </div>
          </div>
        </div>

        {/* Horários */}
        <div className="bg-white rounded-2xl p-6 border border-[#c6ccb0]/30 shadow-[0_4px_20px_rgba(0,57,87,0.05)]">
          <div className="flex items-center gap-2 mb-5">
            <Clock size={18} className="text-[#a8c941]" />
            <h3 className="font-bold text-[#003957]">Horários de Atendimento</h3>
          </div>
          <div className="space-y-3">
            {[
              { label: "Segunda a Sexta", value: "08:00 — 18:00" },
              { label: "Sábado", value: "08:00 — 12:00" },
              { label: "Domingo / Feriado", value: "Fechado" },
            ].map((h) => (
              <div key={h.label} className="grid grid-cols-2 gap-4 items-center">
                <label className="text-sm text-gray-600">{h.label}</label>
                <input type="text" defaultValue={h.value} className={i} />
              </div>
            ))}
          </div>
        </div>

        {/* Senha */}
        <div className="bg-white rounded-2xl p-6 border border-[#c6ccb0]/30 shadow-[0_4px_20px_rgba(0,57,87,0.05)]">
          <div className="flex items-center gap-2 mb-5">
            <Lock size={18} className="text-[#a8c941]" />
            <h3 className="font-bold text-[#003957]">Alterar Senha</h3>
          </div>
          <div className="space-y-4">
            <div>
              <label className={l}>Senha atual</label>
              <input type="password" placeholder="••••••••" className={i} />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className={l}>Nova senha</label>
                <input type="password" placeholder="••••••••" className={i} />
              </div>
              <div>
                <label className={l}>Confirmar senha</label>
                <input type="password" placeholder="••••••••" className={i} />
              </div>
            </div>
          </div>
        </div>

        <button
          onClick={save}
          className={`flex items-center gap-2 px-8 py-3.5 font-bold rounded-xl text-sm transition-all shadow-md ${
            saved
              ? "bg-green-500 text-white"
              : "bg-[#003957] hover:bg-[#004d70] text-white"
          }`}
        >
          {saved ? <CheckCircle size={16} /> : <Save size={16} />}
          {saved ? "Salvo com sucesso!" : "Salvar alterações"}
        </button>
      </div>
    </div>
  );
}
