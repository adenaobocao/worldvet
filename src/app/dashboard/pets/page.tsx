import Link from "next/link";
import { Plus, Search, PawPrint, ChevronRight } from "lucide-react";

const demoPets = [
  {
    id: "demo-1",
    name: "Rex",
    species: "Cachorro",
    breed: "Labrador",
    sex: "Macho",
    tutor: "João Silva",
    status: "Internado",
    statusColor: "bg-blue-50 text-blue-700 border-blue-200",
    lastUpdate: "Há 2 horas",
  },
  {
    id: "demo-2",
    name: "Mia",
    species: "Gato",
    breed: "Siamês",
    sex: "Fêmea",
    tutor: "Ana Souza",
    status: "Em acompanhamento",
    statusColor: "bg-amber-50 text-amber-700 border-amber-200",
    lastUpdate: "Ontem",
  },
  {
    id: "demo-3",
    name: "Thor",
    species: "Cachorro",
    breed: "Rottweiler",
    sex: "Macho",
    tutor: "Carlos Mendes",
    status: "Alta",
    statusColor: "bg-green-50 text-green-700 border-green-200",
    lastUpdate: "3 dias atrás",
  },
];

export default function PetsPage() {
  return (
    <div className="p-6 lg:p-10">
      <div className="flex items-center justify-between mb-6">
        <div>
          <p className="text-[#a8c941] text-sm font-bold uppercase tracking-widest mb-1">Gerenciar</p>
          <h1 className="text-3xl font-bold text-[#003957]">Pets</h1>
        </div>
        <Link
          href="/dashboard/pets/new"
          className="flex items-center gap-2 px-5 py-3 bg-[#003957] hover:bg-[#004d70] text-white font-semibold rounded-xl transition-all shadow-md text-sm"
        >
          <Plus size={16} />
          Novo Pet
        </Link>
      </div>

      <div className="relative mb-6">
        <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          placeholder="Buscar por nome do pet ou tutor..."
          className="w-full pl-11 pr-4 py-3 bg-white border border-[#c6ccb0]/50 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#003957]/20 focus:border-[#003957]"
        />
      </div>

      <div className="space-y-3">
        {demoPets.map((pet) => (
          <Link
            key={pet.id}
            href={`/dashboard/pets/${pet.id}`}
            className="flex items-center gap-4 p-4 bg-white rounded-2xl border border-[#c6ccb0]/30 shadow-[0_2px_12px_rgba(0,57,87,0.05)] hover:shadow-[0_6px_24px_rgba(0,57,87,0.12)] hover:-translate-y-0.5 transition-all group"
          >
            <div className="w-12 h-12 bg-[#003957]/8 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#003957] transition-colors">
              <PawPrint size={20} className="text-[#003957] group-hover:text-white transition-colors" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-0.5">
                <p className="font-bold text-[#003957] text-base">{pet.name}</p>
                <span className={`text-xs font-semibold px-2 py-0.5 rounded-full border ${pet.statusColor}`}>
                  {pet.status}
                </span>
              </div>
              <p className="text-gray-500 text-sm">{pet.species} · {pet.breed} · {pet.sex}</p>
              <p className="text-gray-400 text-xs mt-0.5">Tutor: {pet.tutor} · Atualizado {pet.lastUpdate}</p>
            </div>
            <ChevronRight size={18} className="text-gray-300 group-hover:text-[#a8c941] transition-colors flex-shrink-0" />
          </Link>
        ))}
      </div>
    </div>
  );
}
