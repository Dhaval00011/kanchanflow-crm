import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  AlertOctagon,
  Layers,
  FileSpreadsheet,
  GitBranch,
  MessageSquare,
  BarChart3,
  Smartphone,
  ShieldCheck,
  Factory,
} from "lucide-react";
import { HOME_FEATURES, INDUSTRIES_SERVED, PRICING_PLANS, FAQ_ITEMS } from "@/data/kanchanflow";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { HeroPipelineMockup } from "@/components/HeroPipelineMockup";
import { FaqAccordion } from "@/components/FaqAccordion";

export const metadata: Metadata = {
  title: "KanchanFlow | Manufacturing CRM — Quotes, BOM & Shop-Floor Pipeline",
  description:
    "Turn customer RFQs and CAD drawings into accurate BOM estimates, GST quotations, and barcoded shop-floor Work Orders in minutes.",
  openGraph: {
    title: "KanchanFlow | Industrial CRM for Quotes, BOMs & Work Orders",
    description:
      "Purpose-built CRM for CNC machine shops, sheet-metal fabricators, and OEMs. 12-minute RFQ turnaround and two-way Tally Prime sync.",
  },
};

const FEATURE_ICONS: Record<string, React.ReactNode> = {
  "quote-to-order": <FileSpreadsheet className="w-6 h-6 text-kanchan-400" />,
  "multi-level-bom": <Layers className="w-6 h-6 text-kanchan-400" />,
  "shop-floor-pipeline": <GitBranch className="w-6 h-6 text-kanchan-400" />,
  "whatsapp-sync": <MessageSquare className="w-6 h-6 text-kanchan-400" />,
  "production-reports": <BarChart3 className="w-6 h-6 text-kanchan-400" />,
  "mobile-app": <Smartphone className="w-6 h-6 text-kanchan-400" />,
};

export default function HomePage() {
  return (
    <div>
      {/* 1. HERO SECTION WITH PRODUCT UI MOCKUP */}
      <section className="relative overflow-hidden bg-industrial-grid border-b border-steel-300/15 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded bg-charcoal-800 border border-kanchan-400/40 text-kanchan-400 font-mono text-xs uppercase tracking-widest">
                <Factory className="w-3.5 h-3.5" />
                <span>BUILT FOR DISCRETE MANUFACTURING & JOB SHOPS</span>
              </div>

              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-steel-50 leading-[1.08]">
                From Customer RFQ to{" "}
                <span className="text-kanchan-400">Shop-Floor Work Order</span>{" "}
                Without the Chaos.
              </h1>

              <p className="text-base sm:text-lg text-steel-200 leading-relaxed max-w-2xl">
                Stop losing profitable tenders to slow Excel costing and buried WhatsApp threads. KanchanFlow unifies multi-level BOM estimation, CAD drawing revisions, WhatsApp buyer approvals, and barcoded production tracking in one industrial workspace.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <Button href="/pricing" variant="primary" size="lg">
                  <span>Start 14-Day Factory Trial</span>
                  <ArrowRight className="w-4 h-4" />
                </Button>
                <Button href="/features" variant="secondary" size="lg">
                  <span>Explore 6 Core Modules</span>
                </Button>
              </div>

              <div className="pt-4 grid grid-cols-3 gap-4 border-t border-steel-300/15 text-left">
                <div>
                  <p className="font-mono text-2xl font-bold text-kanchan-400">540+</p>
                  <p className="text-xs text-steel-300">Plants & CNC Units</p>
                </div>
                <div>
                  <p className="font-mono text-2xl font-bold text-steel-50">12 min</p>
                  <p className="text-xs text-steel-300">Avg. Quote Turnaround</p>
                </div>
                <div>
                  <p className="font-mono text-2xl font-bold text-emerald-400">+6.4%</p>
                  <p className="text-xs text-steel-300">Realized Margin Lift</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <HeroPipelineMockup />
            </div>
          </div>
        </div>
      </section>

      {/* 2. INDUSTRIES STRIP */}
      <section id="industries" className="bg-charcoal-950 border-b border-steel-300/15 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="font-mono text-xs uppercase tracking-widest text-steel-300 text-center mb-6">
            POWERING PRODUCTION TEAMS ACROSS 6 INDUSTRIAL SECTORS
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {INDUSTRIES_SERVED.map((ind) => (
              <div
                key={ind.code}
                className="flex items-center justify-between px-4 py-3.5 rounded-lg bg-charcoal-900 border border-steel-300/15"
              >
                <div>
                  <span className="font-mono text-[10px] text-kanchan-400 block">
                    {ind.code}
                  </span>
                  <span className="font-display font-semibold text-sm text-steel-50">
                    {ind.name}
                  </span>
                </div>
                <span className="px-2.5 py-1 rounded bg-charcoal-800 font-mono text-xs text-steel-200 border border-steel-300/15">
                  {ind.plants}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. PROBLEM / SOLUTION SECTION */}
      <section className="py-20 bg-charcoal-900 border-b border-steel-300/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="WHY GENERIC CRMS FAIL ON THE SHOP FLOOR"
            title="Spreadsheets leak margin. Generic CRMs don't understand BOMs."
            description="Software built for selling SaaS subscriptions breaks down the moment a buyer asks for a 5-level assembly quote with EN24 heat treatment and staggered delivery schedules."
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Problem Card */}
            <div className="rounded-xl bg-charcoal-950/90 border border-red-500/30 p-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-red-500/10 text-red-300 font-mono text-xs uppercase">
                <AlertOctagon className="w-4 h-4" />
                <span>BEFORE KANCHANFLOW: DISCONNECTED PLANT CHAOS</span>
              </div>
              <h3 className="font-display text-2xl font-bold text-steel-50">
                Where manufacturing quotes and orders get stuck
              </h3>
              <ul className="space-y-3.5 text-sm text-steel-200">
                <li className="flex items-start gap-3">
                  <span className="font-mono text-red-400 font-bold">01</span>
                  <span>
                    <strong className="text-steel-50">Outdated metal rates in Excel:</strong> Estimators copy-paste last month&apos;s SS304 or aluminium rate, wiping out 8% margin before the PO is even signed.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-mono text-red-400 font-bold">02</span>
                  <span>
                    <strong className="text-steel-50">Wrong drawing revision machined:</strong> Buyer sends Rev-B on personal WhatsApp, but the floor supervisor machines 500 pieces using the old Rev-A print.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-mono text-red-400 font-bold">03</span>
                  <span>
                    <strong className="text-steel-50">Blind delivery promises:</strong> Sales commits to a 10-day dispatch without knowing VMC-02 is booked for 14 days on another customer&apos;s batch.
                  </span>
                </li>
              </ul>
            </div>

            {/* Solution Card */}
            <div className="rounded-xl bg-charcoal-800 border border-kanchan-400/60 shadow-gold-glow p-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-kanchan-400/15 text-kanchan-300 font-mono text-xs uppercase">
                <CheckCircle2 className="w-4 h-4" />
                <span>WITH KANCHANFLOW: UNIFIED SHOP-FLOOR PIPELINE</span>
              </div>
              <h3 className="font-display text-2xl font-bold text-steel-50">
                One system from drawing receipt to dispatch gate
              </h3>
              <ul className="space-y-3.5 text-sm text-steel-100">
                <li className="flex items-start gap-3">
                  <span className="font-mono text-kanchan-400 font-bold">01</span>
                  <span>
                    <strong className="text-steel-50">Bottom-up BOM & cycle-time costing:</strong> Lock in raw material grade rates, kerf loss, sub-contracting, and target margin with manager sign-off gates.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-mono text-kanchan-400 font-bold">02</span>
                  <span>
                    <strong className="text-steel-50">Revision-locked barcode route cards:</strong> Scanning a job card on the floor pulls the exact approved CAD revision and quality inspection checklist.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-mono text-kanchan-400 font-bold">03</span>
                  <span>
                    <strong className="text-steel-50">Automated WhatsApp & Tally sync:</strong> Buyers approve quotes in one tap on WhatsApp, and approved orders sync directly with Tally Prime.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SIX FEATURE CARDS SECTION */}
      <section className="py-20 bg-charcoal-950 border-b border-steel-300/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="6 CORE MANUFACTURING MODULES"
            title="Everything your estimation, sales, and shop-floor teams need."
            description="Every module in KanchanFlow is engineered around discrete manufacturing workflows—never generic contact lists."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {HOME_FEATURES.map((feat) => (
              <Card key={feat.id} className="flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-5">
                    <div className="w-12 h-12 rounded-lg bg-charcoal-900 border border-kanchan-400/30 flex items-center justify-center">
                      {FEATURE_ICONS[feat.id]}
                    </div>
                    <span className="px-2.5 py-1 rounded bg-charcoal-900 border border-steel-300/15 font-mono text-xs text-kanchan-400">
                      {feat.metricBadge}
                    </span>
                  </div>

                  <p className="font-mono text-xs text-steel-400 mb-1">{feat.code}</p>
                  <h3 className="font-display text-xl font-bold text-steel-50">
                    {feat.title}
                  </h3>
                  <p className="mt-2.5 text-sm text-steel-200 leading-relaxed">
                    {feat.description}
                  </p>

                  <ul className="mt-5 pt-4 border-t border-steel-300/15 space-y-2 text-xs text-steel-200">
                    {feat.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-kanchan-400 shrink-0 mt-0.5" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 pt-3">
                  <Link
                    href="/features"
                    className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-kanchan-400 hover:text-kanchan-300"
                  >
                    <span>Inspect Module Architecture</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 5. PRICING TEASER SECTION */}
      <section className="py-20 bg-charcoal-900 border-b border-steel-300/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-6">
            <SectionHeading
              eyebrow="TRANSPARENT PLANT PRICING"
              title="Predictable per-plant licensing. Free shop-floor barcode stations."
              description="Unlike per-seat SaaS tools that penalize you for adding machine operators, KanchanFlow includes unlimited floor scan terminals on Plant Pro & Enterprise tiers."
            />
            <div className="shrink-0 mb-12">
              <Button href="/pricing" variant="primary" size="lg">
                <span>Compare All 3 Plans & ROI Calculator</span>
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PRICING_PLANS.map((plan) => (
              <Card key={plan.id} highlighted={Boolean(plan.popular)}>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-display text-xl font-bold text-steel-50">
                    {plan.name}
                  </h3>
                  {plan.popular && (
                    <span className="px-2.5 py-0.5 rounded bg-kanchan-400 text-charcoal-950 font-mono text-[11px] font-bold">
                      POPULAR
                    </span>
                  )}
                </div>
                <p className="text-xs text-steel-300 min-h-[36px]">{plan.tagline}</p>
                <div className="my-5 py-4 border-y border-steel-300/15 flex items-baseline gap-2">
                  <span className="font-mono text-3xl font-bold text-steel-50">
                    ₹{plan.annualPriceInr.toLocaleString("en-IN")}
                  </span>
                  <span className="text-xs font-mono text-steel-300">/ plant / mo (Annual)</span>
                </div>
                <p className="text-xs font-mono text-kanchan-400 mb-4">{plan.seatLimit}</p>
                <Button
                  href="/pricing"
                  variant={plan.popular ? "primary" : "secondary"}
                  className="w-full"
                >
                  View Full Plan Breakdown
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 6. FAQ ACCORDION SECTION */}
      <section className="py-20 bg-charcoal-950 border-b border-steel-300/15">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            align="center"
            eyebrow="FREQUENTLY ASKED QUESTIONS"
            title="Common questions from Plant Heads & Managing Directors"
            description="Everything you need to know about data security, Tally integration, and shop-floor onboarding."
          />
          <FaqAccordion items={FAQ_ITEMS.slice(0, 5)} />
        </div>
      </section>

      {/* 7. FOOTER CTA SECTION */}
      <section className="py-20 bg-charcoal-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-charcoal-800 border border-kanchan-400/50 shadow-gold-glow p-8 sm:p-12 text-center space-y-6">
            <p className="font-mono text-xs uppercase tracking-widest text-kanchan-400">
              GO LIVE IN 48 HOURS • ZERO DATA LOSS
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-steel-50 max-w-2xl mx-auto">
              Ready to modernize your quote-to-order pipeline?
            </h2>
            <p className="text-base text-steel-200 max-w-2xl mx-auto">
              Send us one of your actual part drawings or Excel costing sheets. Our engineers will configure your live BOM and Work Order workflow in a 25-minute custom demo.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <Button href="/pricing" variant="primary" size="lg">
                <span>View Pricing & Start 14-Day Trial</span>
                <ArrowRight className="w-4 h-4" />
              </Button>
              <Button href="/features" variant="outline" size="lg">
                <span>See Full Feature Matrix</span>
              </Button>
            </div>
            <p className="flex items-center justify-center gap-2 text-xs font-mono text-steel-300 pt-2">
              <ShieldCheck className="w-4 h-4 text-kanchan-400" />
              <span>Includes free migration of Customer Masters, HSN Codes & Raw Material Rate Cards</span>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
