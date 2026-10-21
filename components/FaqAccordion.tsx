"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { FaqItem } from "@/data/kanchanflow";

interface FaqAccordionProps {
  items: FaqItem[];
}

export function FaqAccordion({ items }: FaqAccordionProps) {
  const [openId, setOpenId] = useState<string | null>(items[0]?.id ?? null);

  const toggleItem = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="space-y-3" role="region" aria-label="Frequently Asked Questions">
      {items.map((item, idx) => {
        const isOpen = openId === item.id;
        const contentId = `faq-panel-${item.id}`;
        const buttonId = `faq-trigger-${item.id}`;

        return (
          <div
            key={item.id}
            className={`rounded-lg border transition-colors ${
              isOpen
                ? "bg-charcoal-800 border-kanchan-400/60"
                : "bg-charcoal-800/60 border-steel-300/15 hover:border-steel-300/35"
            }`}
          >
            <h3>
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={contentId}
                onClick={() => toggleItem(item.id)}
                className="w-full px-6 py-4 text-left flex items-center justify-between gap-4 font-display font-semibold text-base sm:text-lg text-steel-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-kanchan-400 rounded-lg"
              >
                <span className="flex items-center gap-3">
                  <span className="font-mono text-xs text-kanchan-400">
                    0{idx + 1}
                  </span>
                  <span>{item.question}</span>
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-kanchan-400 shrink-0 transition-transform duration-200 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                  aria-hidden="true"
                />
              </button>
            </h3>
            <div
              id={contentId}
              role="region"
              aria-labelledby={buttonId}
              hidden={!isOpen}
              className={isOpen ? "px-6 pb-5 pt-1 text-sm sm:text-base text-steel-200 leading-relaxed border-t border-steel-300/10" : "hidden"}
            >
              {item.answer}
            </div>
          </div>
        );
      })}
    </div>
  );
}
