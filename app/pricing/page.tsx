import type { Metadata } from "next";
import { FAQ_ITEMS } from "@/data/kanchanflow";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PricingInteractive } from "@/components/PricingInteractive";
import { FaqAccordion } from "@/components/FaqAccordion";

export const metadata: Metadata = {
  title: "Plant Pricing & ROI Calculator | Workshop, Plant Pro & Enterprise Tiers",
  description:
    "Simple per-plant pricing in INR with a 20% annual discount. Unlimited shop-floor barcode scan terminals and 48-hour Tally Prime onboarding included.",
  openGraph: {
    title: "KanchanFlow Pricing | Built for Indian & Global Manufacturers",
    description:
      "Compare Workshop Starter, Plant Pro, and Enterprise Foundry plans. Calculate your monthly estimation time and scrap recovery savings.",
  },
};

export default function PricingPage() {
  return (
    <div>
      {/* Pricing Header & Interactive Toggle + 3-Tier Cards + ROI Calculator */}
      <section className="bg-industrial-grid border-b border-steel-300/15 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <p className="font-mono text-xs uppercase tracking-widest text-kanchan-400 mb-3">
              PREDICTABLE PER-PLANT LICENSING
            </p>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-steel-50 tracking-tight">
              Pricing built for factories, not per-seat traps.
            </h1>
            <p className="mt-4 text-base sm:text-lg text-steel-200 leading-relaxed">
              Start with a 14-day risk-free sandbox on your own CAD drawings and BOM sheets. Every plan includes GST-compliant quotation templates and dedicated engineering support.
            </p>
          </div>

          <PricingInteractive />
        </div>
      </section>

      {/* Pricing & Onboarding FAQ Accordion */}
      <section id="faq" className="py-20 bg-charcoal-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            align="center"
            eyebrow="PRICING & IMPLEMENTATION FAQS"
            title="Licensing, Shop-Floor Terminals & Tally Sync"
            description="Have a custom multi-plant requirement? Reach out to sales@kanchanflow.com for an enterprise architecture review."
          />
          <FaqAccordion items={FAQ_ITEMS} />
        </div>
      </section>
    </div>
  );
}
