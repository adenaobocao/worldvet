import { redirect } from "next/navigation";
import Sidebar from "@/components/platform/Sidebar";

// TODO: add real auth check with NextAuth
export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-[#f8faf5]">
      <Sidebar />
      <main className="flex-1 ml-0 lg:ml-64 min-h-screen">
        {children}
      </main>
    </div>
  );
}
