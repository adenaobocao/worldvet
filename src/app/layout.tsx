import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import ScrollProgress from "@/components/site/ScrollProgress";
import BackToTop from "@/components/site/BackToTop";
import ScrollAnimations from "@/components/site/ScrollAnimations";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "World Vet | Clínica Veterinária em Piraí do Sul - PR",
  description:
    "Especialistas em cirurgias de alta complexidade, exames rápidos e acompanhamento contínuo. Dr. Matheus Martins — CRMV-PR 18808. Piraí do Sul, PR.",
  keywords: [
    "clínica veterinária",
    "Piraí do Sul",
    "cirurgia veterinária",
    "veterinário",
    "Dr. Matheus",
    "World Vet",
    "exames veterinários",
    "banho e tosa",
    "urgência veterinária",
    "PR",
    "Paraná",
  ],
  openGraph: {
    title: "World Vet | Clínica Veterinária em Piraí do Sul - PR",
    description:
      "Especialistas em cirurgias de alta complexidade, exames rápidos e acompanhamento contínuo.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${plusJakarta.variable}`}>
      <body className="font-sans antialiased bg-surface">
        <ScrollProgress />
        <ScrollAnimations />
        {children}
        <BackToTop />
      </body>
    </html>
  );
}
