import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "primary" | "accent" | "sage" | "success" | "warning" | "danger" | "outline";
  className?: string;
}

export default function Badge({ children, variant = "primary", className }: BadgeProps) {
  const variants = {
    primary: "bg-[#003957]/10 text-[#003957] border border-[#003957]/20",
    accent: "bg-[#a8c941]/15 text-[#5a7020] border border-[#a8c941]/30",
    sage: "bg-[#c6ccb0]/30 text-[#4e6040] border border-[#c6ccb0]/50",
    success: "bg-green-50 text-green-700 border border-green-200",
    warning: "bg-amber-50 text-amber-700 border border-amber-200",
    danger: "bg-red-50 text-red-700 border border-red-200",
    outline: "bg-transparent text-[#003957] border border-[#003957]",
  };

  return (
    <span className={cn("inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold tracking-wide", variants[variant], className)}>
      {children}
    </span>
  );
}
