import Link from "next/link";
import { PawPrint, Users, DollarSign, AlertCircle, Plus, ArrowRight } from "lucide-react";

const stats = [
  { icon: PawPrint, label: "Pets cadastrados", value: "—", color: "bg-[#003957]", href: "/dashboard/pets" },
  { icon: Users, label: "Tutores ativos", value: "—", color: "bg-[#a8c941]", href: "/dashboard/tutors" },
  { icon: DollarSign, label: "Cobranças pendentes", value: "—", color: "bg-amber-500", href: "/dashboard/charges" },
  { icon: AlertCircle, label: "Urgências hoje", value: "0", color: "bg-red-600", href: "/dashboard" },
];

export default function DashboardPage() {
  return (
    <div className="p-6 lg:p-10">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <p className="text-[#a8c941] text-sm font-bold uppercase tracking-widest mb-1">Painel</p>
          <h1 className="text-3xl font-bold text-[#003957]">Visão Geral</h1>
        </div>
        <Link
          href="/dashboard/pets/new"
          className="hidden sm:flex items-center gap-2 px-5 py-3 bg-[#003957] hover:bg-[#004d70] text-white font-semibold rounded-xl transition-all shadow-md text-sm"
        >
          <Plus size={16} />
          Novo Pet
        </Link>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {stats.map((stat) => (
          <Link
            key={stat.label}
            href={stat.href}
            className="bg-white rounded-2xl p-5 border border-[#c6ccb0]/30 shadow-[0_4px_20px_rgba(0,57,87,0.06)] hover:shadow-[0_8px_32px_rgba(0,57,87,0.12)] hover:-translate-y-0.5 transition-all group"
          >
            <div className={`w-10 h-10 ${stat.color} rounded-xl flex items-center justify-center mb-3`}>
              <stat.icon size={18} className="text-white" />
            </div>
            <p className="text-2xl font-bold text-[#003957] mb-1">{stat.value}</p>
            <p className="text-gray-500 text-xs leading-snug">{stat.label}</p>
          </Link>
        ))}
      </div>

      {/* Quick actions */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {[
          { title: "Cadastrar tutor", desc: "Adicionar novo tutor ao sistema", href: "/dashboard/tutors/new", icon: Users },
          { title: "Cadastrar pet", desc: "Novo animal para acompanhamento", href: "/dashboard/pets/new", icon: PawPrint },
          { title: "Lançar cobrança", desc: "Criar nova cobrança para um pet", href: "/dashboard/charges/new", icon: DollarSign },
        ].map((action) => (
          <Link
            key={action.title}
            href={action.href}
            className="flex items-center gap-4 p-5 bg-white rounded-2xl border border-[#c6ccb0]/30 shadow-[0_4px_20px_rgba(0,57,87,0.06)] hover:shadow-[0_8px_32px_rgba(0,57,87,0.12)] hover:-translate-y-0.5 transition-all group"
          >
            <div className="w-10 h-10 bg-[#f8faf5] group-hover:bg-[#a8c941] rounded-xl flex items-center justify-center flex-shrink-0 transition-colors">
              <action.icon size={18} className="text-[#003957] group-hover:text-white transition-colors" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-semibold text-[#003957] text-sm">{action.title}</p>
              <p className="text-gray-500 text-xs">{action.desc}</p>
            </div>
            <ArrowRight size={16} className="text-gray-400 group-hover:text-[#a8c941] transition-colors flex-shrink-0" />
          </Link>
        ))}
      </div>
    </div>
  );
}
