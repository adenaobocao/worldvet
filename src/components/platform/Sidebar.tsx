"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  PawPrint,
  Users,
  DollarSign,
  Settings,
  LogOut,
  Menu,
  X,
  ChevronRight,
  UserCog,
} from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { icon: LayoutDashboard, label: "Dashboard", href: "/dashboard" },
  { icon: PawPrint, label: "Pets", href: "/dashboard/pets" },
  { icon: Users, label: "Tutores", href: "/dashboard/tutors" },
  { icon: DollarSign, label: "Cobranças", href: "/dashboard/charges" },
  { icon: UserCog, label: "Equipe", href: "/dashboard/team" },
  { icon: Settings, label: "Configurações", href: "/dashboard/settings" },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const NavContent = () => (
    <div className="flex flex-col h-full">
      {/* Brand */}
      <div className="flex items-center gap-3 px-6 py-5 border-b border-[#c6ccb0]/20">
        <div className="w-8 h-12 relative flex-shrink-0">
          <Image src="/logo.svg" alt="World Vet" fill className="object-contain" />
        </div>
        <div>
          <p className="font-bold text-white text-sm">World Vet</p>
          <p className="text-white/40 text-xs">Clínica Veterinária</p>
        </div>
      </div>

      {/* Nav */}
      <nav className="flex-1 px-3 py-4 space-y-1">
        {navItems.map((item) => {
          const active = pathname === item.href || pathname.startsWith(item.href + "/");
          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className={cn(
                "flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all",
                active
                  ? "bg-[#a8c941] text-[#001e2e] shadow-md"
                  : "text-white/70 hover:text-white hover:bg-white/10"
              )}
            >
              <item.icon size={18} />
              {item.label}
              {active && <ChevronRight size={14} className="ml-auto opacity-60" />}
            </Link>
          );
        })}
      </nav>

      {/* Bottom */}
      <div className="px-3 pb-4 border-t border-white/10 pt-4">
        <Link
          href="/"
          className="flex items-center gap-3 px-4 py-3 rounded-xl text-white/50 hover:text-white hover:bg-white/10 text-sm transition-all"
        >
          <LogOut size={18} />
          Sair
        </Link>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop */}
      <aside className="hidden lg:flex w-64 bg-gradient-to-b from-[#001e2e] to-[#003957] fixed inset-y-0 left-0 z-40 flex-col">
        <NavContent />
      </aside>

      {/* Mobile toggle */}
      <button
        onClick={() => setMobileOpen(true)}
        className="lg:hidden fixed top-4 left-4 z-50 w-10 h-10 bg-[#003957] text-white rounded-xl flex items-center justify-center shadow-lg"
      >
        <Menu size={20} />
      </button>

      {/* Mobile drawer */}
      {mobileOpen && (
        <>
          <div
            className="lg:hidden fixed inset-0 bg-black/50 z-40"
            onClick={() => setMobileOpen(false)}
          />
          <aside className="lg:hidden fixed inset-y-0 left-0 w-64 bg-gradient-to-b from-[#001e2e] to-[#003957] z-50 flex flex-col">
            <button
              onClick={() => setMobileOpen(false)}
              className="absolute top-4 right-4 text-white/60 hover:text-white"
            >
              <X size={20} />
            </button>
            <NavContent />
          </aside>
        </>
      )}
    </>
  );
}
