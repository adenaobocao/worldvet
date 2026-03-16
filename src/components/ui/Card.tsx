import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  padding?: "none" | "sm" | "md" | "lg";
}

export default function Card({ children, className, hover = false, padding = "md" }: CardProps) {
  const paddings = {
    none: "",
    sm: "p-4",
    md: "p-6",
    lg: "p-8",
  };

  return (
    <div
      className={cn(
        "bg-white rounded-2xl border border-[#c6ccb0]/30 shadow-[0_4px_24px_rgba(0,57,87,0.08)]",
        hover && "transition-all duration-300 hover:shadow-[0_8px_40px_rgba(0,57,87,0.16)] hover:-translate-y-1 cursor-pointer",
        paddings[padding],
        className
      )}
    >
      {children}
    </div>
  );
}
