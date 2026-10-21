import React from "react";
import Link from "next/link";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  children: React.ReactNode;
}

export function Button({
  variant = "primary",
  size = "md",
  href,
  className = "",
  children,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center gap-2 font-display font-semibold tracking-tight rounded-md transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-kanchan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-charcoal-900 active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none";

  const variants = {
    primary:
      "bg-kanchan-400 text-charcoal-950 hover:bg-kanchan-300 active:bg-kanchan-500 shadow-gold-glow",
    secondary:
      "bg-charcoal-700 text-steel-50 border border-steel-300/20 hover:bg-charcoal-600 hover:border-kanchan-400/50",
    outline:
      "bg-transparent text-steel-50 border border-steel-300/30 hover:border-kanchan-400 hover:text-kanchan-300",
    ghost:
      "bg-transparent text-steel-200 hover:text-kanchan-400 hover:bg-charcoal-800/70",
  };

  const sizes = {
    sm: "px-3.5 py-2 text-xs",
    md: "px-5 py-2.5 text-sm",
    lg: "px-6 py-3.5 text-base",
  };

  const combinedClassName = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combinedClassName}>
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedClassName} {...props}>
      {children}
    </button>
  );
}
