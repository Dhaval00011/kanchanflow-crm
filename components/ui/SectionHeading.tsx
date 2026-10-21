import React from "react";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  const alignment = align === "center" ? "text-center mx-auto max-w-3xl" : "max-w-3xl";

  return (
    <div className={`mb-12 ${alignment}`}>
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-charcoal-800 border border-kanchan-400/30 text-kanchan-400 font-mono text-xs uppercase tracking-widest mb-4">
        <span className="w-2 h-2 rounded-full bg-kanchan-400 animate-pulse" aria-hidden="true" />
        <span>{eyebrow}</span>
      </div>
      <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-steel-50 leading-tight">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base sm:text-lg text-steel-200 leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
