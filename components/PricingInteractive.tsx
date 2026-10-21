"use client";

import React, { useState } from "react";
import { Check, Calculator, ArrowRight } from "lucide-react";
import { PRICING_PLANS } from "@/data/kanchanflow";
import { Button } from "./ui/Button";
import { DemoModal } from "./DemoModal";

export function PricingInteractive() {
  const [isAnnual, setIsAnnual] = useState(true);
  const [selectedPlanForDemo, setSelectedPlanForDemo] = useState<string | null>(null);
  const [estimatorsCount, setEstimatorsCount] = useState(6);
  const [rfqsPerMonth, setRfqsPerMonth] = useState(120);

  // Realistic ROI calculation: 42 minutes saved per RFQ + margin recovery
  const hoursSavedPerMonth = Math.round((rfqsPerMonth * 42) / 60);
  const estimatedMonthlySavingsInr = hoursSavedPerMonth * 850 + estimatorsCount * 4200;

  return (
    <div>
      {/* Monthly / Annual Billing Toggle */}
      <div className="flex flex-col items-center justify-center mb-12">
        <div
          className="inline-flex items-center p-1.5 rounded-lg bg-charcoal-800 border border-steel-300/20"
          role="group"
          aria-label="Billing frequency toggle"
        >
          <button
            type="button"
            onClick={() => setIsAnnual(false)}
            aria-pressed={!isAnnual}
            className={`px-5 py-2.5 rounded-md font-display text-sm font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-kanchan-400 ${
              !isAnnual
                ? "bg-kanchan-400 text-charcoal-950 shadow"
                : "text-steel-200 hover:text-steel-50"
            }`}
          >
            Monthly Billing
          </button>
          <button
            type="button"
            onClick={() => setIsAnnual(true)}
            aria-pressed={isAnnual}
            className={`px-5 py-2.5 rounded-md font-display text-sm font-semibold transition-all flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-kanchan-400 ${
              isAnnual
                ? "bg-kanchan-400 text-charcoal-950 shadow"
                : "text-steel-200 hover:text-steel-50"
            }`}
          >
            <span>Annual Billing</span>
            <span
              className={`px-2 py-0.5 rounded text-[11px] font-mono uppercase ${
                isAnnual
                  ? "bg-charcoal-950 text-kanchan-300"
                  : "bg-kanchan-400/20 text-kanchan-300"
              }`}
            >
              Save 20%
            </span>
          </button>
        </div>
        <p className="mt-3 text-xs font-mono text-steel-300">
          All plans billed in INR (₹) • GST invoice provided • Free 48-hour Tally & Excel migration
        </p>
      </div>

      {/* 3 Plan Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
        {PRICING_PLANS.map((plan) => {
          const activePrice = isAnnual ? plan.annualPriceInr : plan.monthlyPriceInr;
          return (
            <article
              key={plan.id}
              className={`rounded-xl border p-7 flex flex-col justify-between transition-all ${
                plan.popular
                  ? "bg-charcoal-800 border-kanchan-400 shadow-gold-glow relative"
                  : "bg-charcoal-800/75 border-steel-300/20 hover:border-steel-300/40"
              }`}
            >
              {plan.badge && (
                <div className="mb-4">
                  <span
                    className={`inline-block px-3 py-1 rounded text-xs font-mono uppercase tracking-wider font-semibold ${
                      plan.popular
                        ? "bg-kanchan-400 text-charcoal-950"
                        : "bg-charcoal-700 text-kanchan-300 border border-kanchan-400/30"
                    }`}
                  >
                    {plan.badge}
                  </span>
                </div>
              )}

              <div>
                <h2 className="font-display text-2xl font-bold text-steel-50">
                  {plan.name}
                </h2>
                <p className="mt-2 text-sm text-steel-200 min-h-[40px]">
                  {plan.tagline}
                </p>

                <div className="mt-6 pb-6 border-b border-steel-300/15">
                  <div className="flex items-baseline gap-1.5">
                    <span className="font-mono text-3xl sm:text-4xl font-bold text-steel-50">
                      ₹{activePrice.toLocaleString("en-IN")}
                    </span>
                    <span className="text-xs font-mono text-steel-300">
                      / plant / month
                    </span>
                  </div>
                  <p className="mt-1.5 text-xs font-mono text-kanchan-400">
                    {isAnnual
                      ? `Billed annually (₹${(activePrice * 12).toLocaleString("en-IN")}/yr)`
                      : "Billed monthly • Switch to annual anytime"}
                  </p>
                  <p className="mt-2 text-xs text-steel-200 font-medium">
                    {plan.seatLimit}
                  </p>
                </div>

                <ul className="mt-6 space-y-3 text-sm text-steel-100">
                  {plan.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-kanchan-400 shrink-0 mt-1" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 pt-4">
                <Button
                  variant={plan.popular ? "primary" : "secondary"}
                  size="lg"
                  className="w-full"
                  onClick={() => setSelectedPlanForDemo(plan.name)}
                >
                  <span>{plan.ctaText}</span>
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </article>
          );
        })}
      </div>

      {/* Interactive Shop-Floor ROI Estimator */}
      <div className="mt-16 rounded-xl bg-charcoal-800 border border-steel-300/20 p-6 sm:p-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-5">
            <div className="inline-flex items-center gap-2 text-kanchan-400 font-mono text-xs uppercase tracking-widest">
              <Calculator className="w-4 h-4" />
              <span>INTERACTIVE PLANT ROI ESTIMATOR</span>
            </div>
            <h3 className="font-display text-2xl font-bold text-steel-50">
              Calculate Your Monthly Estimation & Margin Recovery
            </h3>
            <p className="text-sm text-steel-200">
              Adjust the sliders below to match your factory&apos;s monthly RFQ volume and sales/estimation team size.
            </p>

            <div className="space-y-4 pt-2">
              <div>
                <div className="flex justify-between text-xs font-mono mb-1.5">
                  <label htmlFor="rfq-slider" className="text-steel-200">
                    MONTHLY RFQs & QUOTES PROCESSED
                  </label>
                  <span className="text-kanchan-400 font-bold">{rfqsPerMonth} RFQs / mo</span>
                </div>
                <input
                  id="rfq-slider"
                  type="range"
                  min={20}
                  max={500}
                  step={10}
                  value={rfqsPerMonth}
                  onChange={(e) => setRfqsPerMonth(Number(e.target.value))}
                  className="w-full accent-amber-400 cursor-pointer"
                />
              </div>

              <div>
                <div className="flex justify-between text-xs font-mono mb-1.5">
                  <label htmlFor="estimator-slider" className="text-steel-200">
                    SALES, ESTIMATION & PLANNER SEATS
                  </label>
                  <span className="text-kanchan-400 font-bold">{estimatorsCount} Users</span>
                </div>
                <input
                  id="estimator-slider"
                  type="range"
                  min={2}
                  max={40}
                  step={1}
                  value={estimatorsCount}
                  onChange={(e) => setEstimatorsCount(Number(e.target.value))}
                  className="w-full accent-amber-400 cursor-pointer"
                />
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 rounded-lg bg-charcoal-900 border border-kanchan-400/40 p-6 space-y-4">
            <p className="font-mono text-xs uppercase tracking-widest text-steel-300">
              ESTIMATED MONTHLY PLANT IMPACT
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-3.5 rounded bg-charcoal-800 border border-steel-300/15">
                <p className="text-xs text-steel-300">Engineering Time Saved</p>
                <p className="font-mono text-2xl font-bold text-kanchan-400 mt-1">
                  {hoursSavedPerMonth} hrs/mo
                </p>
              </div>
              <div className="p-3.5 rounded bg-charcoal-800 border border-steel-300/15">
                <p className="text-xs text-steel-300">Costing & Scrap Recovery</p>
                <p className="font-mono text-2xl font-bold text-emerald-400 mt-1">
                  ₹{estimatedMonthlySavingsInr.toLocaleString("en-IN")}
                </p>
              </div>
            </div>
            <p className="text-xs text-steel-300 leading-relaxed">
              Recommended Tier:{" "}
              <span className="font-semibold text-steel-50">
                {estimatorsCount <= 8 && rfqsPerMonth <= 80
                  ? "Workshop Starter"
                  : estimatorsCount <= 25
                  ? "Plant Pro"
                  : "Enterprise Foundry"}
              </span>
            </p>
            <Button
              variant="primary"
              className="w-full"
              onClick={() => setSelectedPlanForDemo("Plant Pro (ROI Custom Assessment)")}
            >
              Get Custom Plant ROI Report
            </Button>
          </div>
        </div>
      </div>

      <DemoModal
        isOpen={Boolean(selectedPlanForDemo)}
        onClose={() => setSelectedPlanForDemo(null)}
        defaultPlan={selectedPlanForDemo ?? "Plant Pro"}
      />
    </div>
  );
}
