import type { Metadata } from "next";
import Image from "next/image";
import { CheckCircle2, ArrowRight, Cpu, Layers, MessageSquare, BarChart3 } from "lucide-react";
import { DETAILED_FEATURE_ROWS } from "@/data/kanchanflow";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ComparisonMatrix } from "@/components/ComparisonMatrix";

export const metadata: Metadata = {
  title: "Features & Architecture | Multi-Level BOM, Work Orders & WhatsApp Sync",
  description:
    "Explore KanchanFlow's 4 core manufacturing subsystems: Multi-level BOM costing, 1-click Quote-to-Work-Order routing, Official WhatsApp Business API integration, and Shop-Floor Barcode Analytics.",
  openGraph: {
    title: "KanchanFlow Features | Built for Precision Manufacturing Teams",
    description:
      "Compare KanchanFlow against generic CRMs and spreadsheets across BOM costing, CAD revision locks, and Tally Prime sync.",
  },
};

export default function FeaturesPage() {
  return (
    <div>
      {/* Features Hero */}
      <section className="bg-industrial-grid border-b border-steel-300/15 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="font-mono text-xs uppercase tracking-widest text-kanchan-400 mb-3">
              PRODUCT ARCHITECTURE • KANCHANFLOW v4.2
            </p>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-steel-50 tracking-tight leading-tight">
              Engineered for the realities of discrete manufacturing.
            </h1>
            <p className="mt-4 text-base sm:text-lg text-steel-200 leading-relaxed">
              Every screen in KanchanFlow is designed around how estimators, production planners, and plant supervisors actually work—from raw material weight formulas to barcoded shop-floor traveller cards.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/pricing" variant="primary" size="lg">
                <span>See Plant Pricing Plans</span>
                <ArrowRight className="w-4 h-4" />
              </Button>
              <Button href="#comparison" variant="secondary" size="lg">
                <span>Compare vs. Generic CRMs</span>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Alternating Feature Rows with Industrial UI Mockups */}
      <section className="py-20 bg-charcoal-900 border-b border-steel-300/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          {DETAILED_FEATURE_ROWS.map((row, index) => {
            const isReversed = index % 2 === 1;
            return (
              <div
                key={row.id}
                id={row.id}
                className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center"
              >
                {/* Copy Column */}
                <div className={`lg:col-span-6 space-y-5 ${isReversed ? "lg:order-2" : "lg:order-1"}`}>
                  <span className="inline-block px-3 py-1 rounded bg-charcoal-800 border border-kanchan-400/30 font-mono text-xs text-kanchan-400">
                    {row.tag}
                  </span>
                  <h2 className="font-display text-2xl sm:text-3xl font-bold text-steel-50 leading-snug">
                    {row.title}
                  </h2>
                  <p className="font-medium text-kanchan-300 text-sm sm:text-base">
                    {row.subtitle}
                  </p>
                  <p className="text-sm sm:text-base text-steel-200 leading-relaxed">
                    {row.description}
                  </p>

                  {/* Technical Specs Bar */}
                  <div className="grid grid-cols-3 gap-3 pt-2">
                    {row.specs.map((spec) => (
                      <div
                        key={spec.label}
                        className="p-3 rounded-lg bg-charcoal-800 border border-steel-300/15"
                      >
                        <p className="text-[11px] font-mono text-steel-300">{spec.label}</p>
                        <p className="font-mono text-xs sm:text-sm font-bold text-steel-50 mt-0.5">
                          {spec.value}
                        </p>
                      </div>
                    ))}
                  </div>

                  <ul className="space-y-2.5 pt-2 text-sm text-steel-100">
                    {row.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-kanchan-400 shrink-0 mt-1" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* UI Mockup Column (Alternating) */}
                <div className={`lg:col-span-6 ${isReversed ? "lg:order-1" : "lg:order-2"}`}>
                  <div className="rounded-xl bg-charcoal-950 border border-steel-300/20 shadow-industrial overflow-hidden">
                    <div className="px-4 py-2.5 bg-charcoal-900 border-b border-steel-300/15 flex items-center justify-between text-xs font-mono text-steel-300">
                      <span>MODULE // {row.id.toUpperCase()}</span>
                      <span className="text-kanchan-400">LIVE UI SCHEMATIC</span>
                    </div>

                    <div className="p-6 space-y-4">
                      {row.mockupType === "bom" && (
                        <div className="space-y-3">
                          <div className="flex items-center justify-between p-3 rounded bg-charcoal-800 border border-kanchan-400/40">
                            <div className="flex items-center gap-2.5">
                              <Layers className="w-5 h-5 text-kanchan-400" />
                              <div>
                                <p className="font-display font-bold text-sm text-steel-50">
                                  Assy #KF-902: Planetary Gear Reducer Housing
                                </p>
                                <p className="font-mono text-xs text-steel-300">
                                  Drawing Rev-D (Locked) • Material: EN24 Forged
                                </p>
                              </div>
                            </div>
                            <span className="font-mono text-xs px-2 py-1 rounded bg-emerald-500/20 text-emerald-300">
                              Margin: 31.0%
                            </span>
                          </div>
                          <div className="grid grid-cols-2 gap-3 font-mono text-xs">
                            <div className="p-3 rounded bg-charcoal-900 border border-steel-300/15">
                              <span className="text-steel-400 block">RAW WEIGHT & KERF</span>
                              <span className="text-steel-50 font-bold text-sm mt-1 block">
                                28.4 kg (6.5% scrap)
                              </span>
                            </div>
                            <div className="p-3 rounded bg-charcoal-900 border border-steel-300/15">
                              <span className="text-steel-400 block">CNC + HOBBING CYCLE</span>
                              <span className="text-steel-50 font-bold text-sm mt-1 block">
                                64 mins @ ₹22/min
                              </span>
                            </div>
                          </div>
                          <div className="p-3 rounded bg-charcoal-900 border border-steel-300/15 font-mono text-xs text-steel-200 flex justify-between">
                            <span>Net Quoted Unit Rate (Ex-Works Pune):</span>
                            <span className="text-kanchan-400 font-bold">₹8,420.00 / Pc</span>
                          </div>
                        </div>
                      )}

                      {row.mockupType === "pipeline" && (
                        <div className="space-y-3 font-mono text-xs">
                          <div className="p-3 rounded bg-charcoal-800 border border-steel-300/15 flex items-center justify-between">
                            <span>WORK ORDER #WO-2026-418</span>
                            <span className="text-kanchan-400">BATCH: 150 NOS</span>
                          </div>
                          <div className="space-y-2">
                            {[
                              { gate: "Gate 1: Raw Material Spectro QC", status: "COMPLETED • Heat #A91" },
                              { gate: "Gate 2: CNC Turning & Milling", status: "IN PROGRESS • 112/150 Done" },
                              { gate: "Gate 3: Black Oxide Surface Coat", status: "SCHEDULED • Tomorrow 09:00" },
                              { gate: "Gate 4: Final CMM PDI & Dispatch", status: "PENDING QA SIGN-OFF" },
                            ].map((g, i) => (
                              <div
                                key={g.gate}
                                className={`p-2.5 rounded border flex items-center justify-between ${
                                  i === 1
                                    ? "bg-kanchan-400/10 border-kanchan-400 text-steel-50"
                                    : "bg-charcoal-900 border-steel-300/15 text-steel-300"
                                }`}
                              >
                                <span>{g.gate}</span>
                                <span className="text-[11px] text-kanchan-300">{g.status}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {row.mockupType === "whatsapp" && (
                        <div className="space-y-3 text-xs">
                          <div className="flex items-center gap-2 text-emerald-400 font-mono">
                            <MessageSquare className="w-4 h-4" />
                            <span>VERIFIED WHATSAPP THREAD • KIRLOSKAR PROCUREMENT</span>
                          </div>
                          <div className="p-3.5 rounded bg-charcoal-900 border border-steel-300/15 space-y-1.5">
                            <p className="font-mono text-[11px] text-kanchan-400">
                              Auto-Trigger: Pre-Dispatch Inspection (PDI) Passed
                            </p>
                            <p className="text-steel-100">
                              Batch #WO-418 (150 Nos) passed CMM dimensional check. Material Test Certificate (MTC) & E-Way Bill #29104812 attached. Vehicle MH-12-PQ-4091 departing at 17:30.
                            </p>
                          </div>
                        </div>
                      )}

                      {row.mockupType === "analytics" && (
                        <div className="space-y-3 font-mono text-xs">
                          <div className="flex items-center justify-between text-kanchan-400">
                            <span className="flex items-center gap-1.5">
                              <BarChart3 className="w-4 h-4" />
                              ESTIMATED VS. ACTUAL MARGIN VARIANCE
                            </span>
                            <span>OCT 2026</span>
                          </div>
                          <div className="grid grid-cols-3 gap-2 text-center">
                            <div className="p-3 rounded bg-charcoal-900 border border-steel-300/15">
                              <span className="text-steel-400 block text-[10px]">QUOTED MARGIN</span>
                              <span className="text-steel-50 font-bold text-base">26.5%</span>
                            </div>
                            <div className="p-3 rounded bg-charcoal-900 border border-steel-300/15">
                              <span className="text-steel-400 block text-[10px]">ACTUAL REALIZED</span>
                              <span className="text-emerald-400 font-bold text-base">28.1%</span>
                            </div>
                            <div className="p-3 rounded bg-charcoal-900 border border-steel-300/15">
                              <span className="text-steel-400 block text-[10px]">ON-TIME DISPATCH</span>
                              <span className="text-kanchan-400 font-bold text-base">96.4%</span>
                            </div>
                          </div>
                          {/* Optimised Next/Image usage with explicit width/height and descriptive alt text */}
                          <div className="pt-2 flex items-center justify-between text-[11px] text-steel-300 bg-charcoal-900 px-3 py-2 rounded border border-steel-300/10">
                            <span className="flex items-center gap-2">
                              <Cpu className="w-4 h-4 text-kanchan-400" />
                              Synced with 14 Shop-Floor Android Terminals
                            </span>
                            <Image
                              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=120&q=80"
                              alt="Engineer inspecting CNC machining telemetry on tablet"
                              width={48}
                              height={32}
                              className="rounded object-cover border border-steel-300/20"
                            />
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Interactive Comparison Matrix Section */}
      <section id="comparison" className="py-20 bg-charcoal-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="HEAD-TO-HEAD CAPABILITY MATRIX"
            title="How KanchanFlow compares against Generic CRMs & Excel"
            description="Filter by operational category or search specific manufacturing capabilities below."
          />
          <ComparisonMatrix />
        </div>
      </section>
    </div>
  );
}
