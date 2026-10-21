import React from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  highlighted?: boolean;
}

export function Card({ children, className = "", highlighted = false }: CardProps) {
  return (
    <div
      className={`rounded-lg border p-6 transition-all duration-200 ${
        highlighted
          ? "bg-charcoal-800/95 border-kanchan-400 shadow-gold-glow"
          : "bg-charcoal-800/80 border-steel-300/15 hover:border-kanchan-400/40"
      } ${className}`}
    >
      {children}
    </div>
  );
}
