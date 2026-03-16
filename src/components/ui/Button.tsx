"use client";
import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "accent" | "outline" | "ghost" | "danger" | "urgency";
  size?: "sm" | "md" | "lg" | "xl";
  loading?: boolean;
  fullWidth?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", loading, fullWidth, children, disabled, ...props }, ref) => {
    const base = "inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed select-none";

    const variants = {
      primary: "bg-[#003957] hover:bg-[#004d70] text-white focus:ring-[#003957] shadow-md hover:shadow-lg",
      accent: "bg-[#a8c941] hover:bg-[#8aab2d] text-[#001e2e] focus:ring-[#a8c941] shadow-md hover:shadow-lg font-bold",
      outline: "border-2 border-[#003957] text-[#003957] hover:bg-[#003957] hover:text-white focus:ring-[#003957]",
      ghost: "text-[#003957] hover:bg-[#003957]/10 focus:ring-[#003957]",
      danger: "bg-red-600 hover:bg-red-700 text-white focus:ring-red-600 shadow-md",
      urgency: "bg-red-600 hover:bg-red-700 text-white focus:ring-red-600 shadow-lg animate-pulse-glow font-bold uppercase tracking-wide",
    };

    const sizes = {
      sm: "px-4 py-2 text-sm gap-1.5",
      md: "px-6 py-3 text-sm gap-2",
      lg: "px-8 py-4 text-base gap-2",
      xl: "px-10 py-5 text-lg gap-3",
    };

    return (
      <button
        ref={ref}
        className={cn(base, variants[variant], sizes[size], fullWidth && "w-full", className)}
        disabled={disabled || loading}
        {...props}
      >
        {loading && (
          <svg className="animate-spin -ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
          </svg>
        )}
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
export default Button;
