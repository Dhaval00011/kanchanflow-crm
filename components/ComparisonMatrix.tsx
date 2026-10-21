"use client";

import React, { useState } from "react";
import { COMPARISON_ROWS } from "@/data/kanchanflow";
import { CheckCircle2, XCircle, AlertTriangle, Search } from "lucide-react";

export function ComparisonMatrix() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const categories = ["All", "Costing", "Production", "Communication", "Operations"];

  const filteredRows = COMPARISON_ROWS.filter((row) => {
    const matchesCategory = selectedCategory === "All" || row.category === selectedCategory;
    const matchesQuery =
      row.capability.toLowerCase().includes(searchQuery.toLowerCase()) ||
      row.kanchanflow.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesQuery;
  });

  return (
    <div className="space-y-6">
      {/* Filter & Search Bar */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 bg-charcoal-800 p-4 rounded-lg border border-steel-300/15">
        <div className="flex flex-wrap items-center gap-2" role="group" aria-label="Filter comparison by category">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded text-xs font-mono uppercase transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-kanchan-400 ${
                selectedCategory === cat
                  ? "bg-kanchan-400 text-charcoal-950 font-semibold"
                  : "bg-charcoal-900 text-steel-200 hover:text-steel-50"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="relative">
          <label htmlFor="compare-search" className="sr-only">
            Filter comparison capabilities
          </label>
          <Search className="w-4 h-4 text-steel-400 absolute left-3 top-1/2 -translate-y-1/2" aria-hidden="true" />
          <input
            id="compare-search"
            type="search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search BOM, Tally, WhatsApp..."
            className="w-full sm:w-64 pl-9 pr-3 py-1.5 rounded bg-charcoal-900 border border-steel-300/25 text-xs text-steel-50 placeholder-steel-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-kanchan-400"
          />
        </div>
      </div>

      {/* Responsive Table or Empty State */}
      {filteredRows.length === 0 ? (
        <div className="p-12 text-center rounded-lg bg-charcoal-800/60 border border-steel-300/15">
          <p className="font-display text-lg font-semibold text-steel-50">
            No matching capabilities found for &ldquo;{searchQuery}&rdquo;
          </p>
          <p className="mt-1 text-sm text-steel-300">
            Try clearing your filter or searching for terms like BOM, CAD, Tally, or WhatsApp.
          </p>
          <button
            type="button"
            onClick={() => {
              setSelectedCategory("All");
              setSearchQuery("");
            }}
            className="mt-4 px-4 py-2 rounded bg-kanchan-400 text-charcoal-950 font-display text-xs font-semibold"
          >
            Reset Comparison Filters
          </button>
        </div>
      ) : (
        <div className="overflow-x-auto rounded-xl border border-steel-300/20 bg-charcoal-900">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-steel-300/20 bg-charcoal-950 text-xs font-mono uppercase tracking-wider text-steel-300">
                <th className="py-4 px-5 min-w-[220px]">Manufacturing Capability</th>
                <th className="py-4 px-5 min-w-[240px] bg-kanchan-400/10 text-kanchan-400 border-x border-kanchan-400/30">
                  KanchanFlow CRM
                </th>
                <th className="py-4 px-5 min-w-[220px]">Generic Sales CRMs</th>
                <th className="py-4 px-5 min-w-[220px]">Excel + Personal WhatsApp</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-steel-300/15 text-sm">
              {filteredRows.map((row) => (
                <tr key={row.capability} className="hover:bg-charcoal-800/50 transition-colors">
                  <td className="py-4 px-5 font-display font-semibold text-steel-50">
                    <span className="block text-[10px] font-mono uppercase text-kanchan-400 mb-0.5">
                      {row.category}
                    </span>
                    {row.capability}
                  </td>
                  <td className="py-4 px-5 bg-kanchan-400/5 border-x border-kanchan-400/20 text-steel-50 font-medium">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-kanchan-400 shrink-0 mt-0.5" />
                      <span>{row.kanchanflow}</span>
                    </div>
                  </td>
                  <td className="py-4 px-5 text-steel-300">
                    <div className="flex items-start gap-2">
                      <XCircle className="w-4 h-4 text-red-400/80 shrink-0 mt-0.5" />
                      <span>{row.genericCrm}</span>
                    </div>
                  </td>
                  <td className="py-4 px-5 text-steel-300">
                    <div className="flex items-start gap-2">
                      <AlertTriangle className="w-4 h-4 text-amber-400/80 shrink-0 mt-0.5" />
                      <span>{row.spreadsheets}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
