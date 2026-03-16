"use client";
import { useState } from "react";
import Image from "next/image";
import { PawPrint, Lock, ArrowRight } from "lucide-react";

export default function TutorAccessPage() {
  const [form, setForm] = useState({ petName: "", token: "" });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 800));
    // Demo: redireciona para página de demonstração do tutor
    window.location.href = "/tutor/demo";
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f8faf5] via-white to-[#e8f4e8] flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="w-14 h-20 relative mx-auto mb-4">
            <Image src="/logo.svg" alt="World Vet" fill className="object-contain" />
          </div>
          <h1 className="text-[#003957] font-bold text-2xl">World Vet</h1>
          <p className="text-gray-500 text-sm">Área exclusiva do tutor</p>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-[0_8px_48px_rgba(0,57,87,0.12)] border border-[#c6ccb0]/30">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-[#003957] rounded-xl flex items-center justify-center">
              <PawPrint size={18} className="text-[#a8c941]" />
            </div>
            <div>
              <h2 className="font-bold text-[#003957] text-lg leading-none">Acessar área do pet</h2>
              <p className="text-gray-400 text-xs mt-0.5">Use o link recebido por WhatsApp</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="text-sm font-semibold text-gray-700 mb-1.5 block">Nome do pet</label>
              <div className="relative">
                <PawPrint size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  required
                  value={form.petName}
                  onChange={(e) => setForm({ ...form, petName: e.target.value })}
                  placeholder="Ex: Rex"
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#003957]/30 focus:border-[#003957]"
                />
              </div>
            </div>

            <div>
              <label className="text-sm font-semibold text-gray-700 mb-1.5 block">Código de acesso</label>
              <div className="relative">
                <Lock size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  required
                  value={form.token}
                  onChange={(e) => setForm({ ...form, token: e.target.value })}
                  placeholder="Código enviado pela clínica"
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#003957]/30 focus:border-[#003957]"
                />
              </div>
              <p className="text-xs text-gray-400 mt-1.5">O código foi enviado pela World Vet pelo WhatsApp</p>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3.5 bg-[#a8c941] hover:bg-[#8aab2d] disabled:opacity-50 text-[#001e2e] font-bold rounded-xl transition-all shadow-md flex items-center justify-center gap-2 text-sm mt-2"
            >
              {loading ? "Verificando..." : <><span>Acessar</span><ArrowRight size={16} /></>}
            </button>
          </form>

          <div className="border-t border-gray-100 mt-6 pt-5">
            <p className="text-xs text-gray-400 text-center">
              Não recebeu o link?{" "}
              <a
                href="https://wa.me/5542998388882?text=Preciso+do+link+de+acesso+para+meu+pet"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#a8c941] font-semibold hover:underline"
              >
                Fale com a clínica no WhatsApp
              </a>
            </p>
          </div>
        </div>

        <p className="text-center text-gray-400 text-xs mt-5">
          Seus dados são privados e seguros — World Vet
        </p>
      </div>
    </div>
  );
}
