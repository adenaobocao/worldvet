import Link from "next/link";
import { Plus, Search, User, ChevronRight, Phone, PawPrint } from "lucide-react";

const demoTutors = [
  { id: "t1", name: "João Silva", phone: "(42) 99999-0000", cpf: "123.456.789-00", pets: ["Rex"], lastActivity: "Há 2 horas" },
  { id: "t2", name: "Ana Souza", phone: "(42) 98888-1111", cpf: "987.654.321-00", pets: ["Mia"], lastActivity: "Ontem" },
  { id: "t3", name: "Carlos Mendes", phone: "(42) 97777-2222", cpf: "456.789.123-00", pets: ["Thor", "Luna"], lastActivity: "3 dias atrás" },
];

export default function TutorsPage() {
  return (
    <div className="p-6 lg:p-10">
      <div className="flex items-center justify-between mb-6">
        <div>
          <p className="text-[#a8c941] text-sm font-bold uppercase tracking-widest mb-1">Gerenciar</p>
          <h1 className="text-3xl font-bold text-[#003957]">Tutores</h1>
        </div>
        <Link href="/dashboard/tutors/new" className="flex items-center gap-2 px-5 py-3 bg-[#003957] hover:bg-[#004d70] text-white font-semibold rounded-xl transition-all shadow-md text-sm">
          <Plus size={16} />
          Novo Tutor
        </Link>
      </div>

      <div className="relative mb-6">
        <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
        <input type="text" placeholder="Buscar por nome, CPF ou telefone..." className="w-full pl-11 pr-4 py-3 bg-white border border-[#c6ccb0]/50 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#003957]/20 focus:border-[#003957]" />
      </div>

      <div className="space-y-3">
        {demoTutors.map((tutor) => (
          <Link key={tutor.id} href="/dashboard/pets" className="flex items-center gap-4 p-4 bg-white rounded-2xl border border-[#c6ccb0]/30 shadow-[0_2px_12px_rgba(0,57,87,0.05)] hover:shadow-[0_6px_24px_rgba(0,57,87,0.12)] hover:-translate-y-0.5 transition-all group">
            <div className="w-12 h-12 bg-[#003957]/8 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#003957] transition-colors">
              <User size={20} className="text-[#003957] group-hover:text-white transition-colors" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-bold text-[#003957] text-base">{tutor.name}</p>
              <div className="flex items-center gap-4 mt-0.5">
                <span className="flex items-center gap-1 text-gray-400 text-xs"><Phone size={11} />{tutor.phone}</span>
                <span className="flex items-center gap-1 text-gray-400 text-xs"><PawPrint size={11} />{tutor.pets.length} {tutor.pets.length === 1 ? "pet" : "pets"}</span>
              </div>
              <p className="text-gray-400 text-xs mt-0.5">Última atividade: {tutor.lastActivity}</p>
            </div>
            <div className="flex items-center gap-2">
              {tutor.pets.map((p) => (
                <span key={p} className="text-xs px-2 py-1 bg-[#f8faf5] border border-[#c6ccb0]/40 rounded-lg text-[#003957]">{p}</span>
              ))}
              <ChevronRight size={18} className="text-gray-300 group-hover:text-[#a8c941] transition-colors flex-shrink-0 ml-1" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
