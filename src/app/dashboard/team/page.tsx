"use client";
import { useState } from "react";
import { UserCog, Plus, Trash2, Eye, EyeOff, CheckCircle, Shield, User } from "lucide-react";

interface TeamMember {
  id: string;
  name: string;
  email: string;
  role: "admin" | "vet" | "staff";
  createdAt: string;
}

const INITIAL_TEAM: TeamMember[] = [
  { id: "1", name: "Dr. Matheus A. F. Martins", email: "matheus@worldvet.com.br", role: "admin", createdAt: "01/01/2025" },
  { id: "2", name: "Recepcionista", email: "recepcao@worldvet.com.br", role: "staff", createdAt: "15/01/2025" },
];

const ROLE_CONFIG = {
  admin: { label: "Administrador", cls: "bg-[#003957] text-white", icon: Shield },
  vet: { label: "Veterinário", cls: "bg-[#a8c941]/20 text-[#3d5c00]", icon: User },
  staff: { label: "Auxiliar / Recepção", cls: "bg-gray-100 text-gray-600", icon: User },
};

const i = "w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#003957]/20 focus:border-[#003957] bg-white";
const l = "text-sm font-semibold text-gray-700 mb-1.5 block";

export default function TeamPage() {
  const [team, setTeam] = useState<TeamMember[]>(INITIAL_TEAM);
  const [showForm, setShowForm] = useState(false);
  const [saved, setSaved] = useState(false);
  const [showPass, setShowPass] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", role: "staff" as TeamMember["role"], password: "", confirm: "" });
  const [error, setError] = useState("");

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (form.password !== form.confirm) {
      setError("As senhas não coincidem.");
      return;
    }
    if (form.password.length < 6) {
      setError("Senha deve ter pelo menos 6 caracteres.");
      return;
    }
    const newMember: TeamMember = {
      id: Date.now().toString(),
      name: form.name,
      email: form.email,
      role: form.role,
      createdAt: new Date().toLocaleDateString("pt-BR"),
    };
    setTeam(prev => [...prev, newMember]);
    setForm({ name: "", email: "", role: "staff", password: "", confirm: "" });
    setShowForm(false);
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  };

  const handleRemove = (id: string) => {
    if (team.length <= 1) return; // não remover o último admin
    setTeam(prev => prev.filter(m => m.id !== id));
  };

  return (
    <div className="p-6 lg:p-10 max-w-2xl">
      <div className="flex items-center justify-between mb-8">
        <div>
          <p className="text-[#a8c941] text-sm font-bold uppercase tracking-widest mb-1">Plataforma</p>
          <h1 className="text-3xl font-bold text-[#003957]">Equipe</h1>
        </div>
        <button
          onClick={() => setShowForm(!showForm)}
          className="flex items-center gap-2 px-5 py-3 bg-[#003957] hover:bg-[#004d70] text-white font-semibold rounded-xl transition-all shadow-md text-sm"
        >
          <Plus size={16} />
          Novo Login
        </button>
      </div>

      {saved && (
        <div className="flex items-center gap-2 px-4 py-3 bg-green-50 border border-green-200 rounded-xl text-green-700 text-sm font-semibold mb-5">
          <CheckCircle size={16} /> Login criado com sucesso!
        </div>
      )}

      {/* Formulário */}
      {showForm && (
        <div className="bg-white rounded-2xl p-6 border border-[#c6ccb0]/30 shadow-[0_4px_20px_rgba(0,57,87,0.05)] mb-6">
          <h3 className="font-bold text-[#003957] mb-5 flex items-center gap-2">
            <UserCog size={18} className="text-[#a8c941]" />
            Criar novo acesso
          </h3>
          <form onSubmit={handleAdd} className="space-y-4">
            <div>
              <label className={l}>Nome completo *</label>
              <input type="text" required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} placeholder="Nome do profissional" className={i} />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className={l}>E-mail *</label>
                <input type="email" required value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} placeholder="email@worldvet.com.br" className={i} />
              </div>
              <div>
                <label className={l}>Perfil *</label>
                <select value={form.role} onChange={e => setForm({ ...form, role: e.target.value as TeamMember["role"] })} className={i}>
                  <option value="admin">Administrador</option>
                  <option value="vet">Veterinário</option>
                  <option value="staff">Auxiliar / Recepção</option>
                </select>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className={l}>Senha *</label>
                <div className="relative">
                  <input
                    type={showPass ? "text" : "password"}
                    required
                    value={form.password}
                    onChange={e => setForm({ ...form, password: e.target.value })}
                    placeholder="Mínimo 6 caracteres"
                    className={i + " pr-10"}
                  />
                  <button type="button" onClick={() => setShowPass(!showPass)} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
                    {showPass ? <EyeOff size={15} /> : <Eye size={15} />}
                  </button>
                </div>
              </div>
              <div>
                <label className={l}>Confirmar senha *</label>
                <input type={showPass ? "text" : "password"} required value={form.confirm} onChange={e => setForm({ ...form, confirm: e.target.value })} placeholder="Repetir senha" className={i} />
              </div>
            </div>
            {error && <p className="text-red-600 text-xs font-medium">{error}</p>}
            <div className="flex gap-3 pt-2">
              <button type="button" onClick={() => setShowForm(false)} className="flex-1 py-3 border-2 border-[#003957] text-[#003957] font-bold rounded-xl text-sm hover:bg-[#003957] hover:text-white transition-all">Cancelar</button>
              <button type="submit" className="flex-1 py-3 bg-[#003957] hover:bg-[#004d70] text-white font-bold rounded-xl text-sm transition-all flex items-center justify-center gap-2">
                <Plus size={15} /> Criar Login
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Lista */}
      <div className="bg-white rounded-2xl border border-[#c6ccb0]/30 shadow-[0_4px_20px_rgba(0,57,87,0.06)] overflow-hidden">
        <div className="px-5 py-4 border-b border-gray-100">
          <h2 className="font-bold text-[#003957] text-base flex items-center gap-2">
            <UserCog size={16} className="text-[#a8c941]" />
            Acessos ativos — {team.length}
          </h2>
        </div>
        <div className="divide-y divide-gray-50">
          {team.map((member) => {
            const cfg = ROLE_CONFIG[member.role];
            return (
              <div key={member.id} className="px-5 py-4 flex items-center gap-4">
                <div className="w-10 h-10 bg-[#003957]/8 rounded-xl flex items-center justify-center flex-shrink-0">
                  <cfg.icon size={18} className="text-[#003957]" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-[#003957] text-sm">{member.name}</p>
                  <p className="text-gray-400 text-xs">{member.email} · desde {member.createdAt}</p>
                </div>
                <span className={`text-xs font-semibold px-2.5 py-1 rounded-full flex-shrink-0 ${cfg.cls}`}>
                  {cfg.label}
                </span>
                {member.role !== "admin" && (
                  <button
                    onClick={() => handleRemove(member.id)}
                    className="w-8 h-8 text-gray-300 hover:text-red-500 hover:bg-red-50 rounded-xl flex items-center justify-center transition-all flex-shrink-0"
                    title="Remover acesso"
                  >
                    <Trash2 size={14} />
                  </button>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <p className="text-xs text-gray-400 mt-4 px-1">
        Os acessos de administrador não podem ser removidos por aqui por segurança. Alterações de senha são feitas em Configurações.
      </p>
    </div>
  );
}
