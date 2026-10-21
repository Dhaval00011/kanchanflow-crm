"use client";

import React, { useState } from "react";
import { CheckCircle2, FileSpreadsheet, Layers, MessageSquare, QrCode, ArrowRight } from "lucide-react";

type MockupTab = "pipeline" | "bom" | "whatsapp";

export function HeroPipelineMockup() {
  const [activeTab, setActiveTab] = useState<MockupTab>("pipeline");
  const [orderConverted, setOrderConverted] = useState(false);

  return (
    <div className="rounded-xl bg-charcoal-900 border border-steel-300/25 shadow-industrial overflow-hidden">
      {/* Window Top Bar */}
      <div className="px-4 py-3 bg-charcoal-950 border-b border-steel-300/15 flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
          <span className="w-2.5 h-2.5 rounded-full bg-kanchan-400" />
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/70" />
          <span className="ml-2 font-mono text-xs text-steel-300">
            PLANT-01 // KANCHANFLOW COMMAND CENTER v4.2
          </span>
        </div>
        <div className="flex items-center gap-1.5 bg-charcoal-800 p-1 rounded-md border border-steel-300/15">
          <button
            type="button"
            onClick={() => setActiveTab("pipeline")}
            className={`px-2.5 py-1 rounded text-xs font-mono transition-colors ${
              activeTab === "pipeline"
                ? "bg-kanchan-400 text-charcoal-950 font-semibold"
                : "text-steel-300 hover:text-steel-50"
            }`}
          >
            1. Shop Pipeline
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("bom")}
            className={`px-2.5 py-1 rounded text-xs font-mono transition-colors ${
              activeTab === "bom"
                ? "bg-kanchan-400 text-charcoal-950 font-semibold"
                : "text-steel-300 hover:text-steel-50"
            }`}
          >
            2. BOM Costing
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("whatsapp")}
            className={`px-2.5 py-1 rounded text-xs font-mono transition-colors ${
              activeTab === "whatsapp"
                ? "bg-kanchan-400 text-charcoal-950 font-semibold"
                : "text-steel-300 hover:text-steel-50"
            }`}
          >
            3. WhatsApp Sync
          </button>
        </div>
      </div>

      {/* Tab 1: Shop-Floor Sales & Production Pipeline */}
      {activeTab === "pipeline" && (
        <div className="p-5 space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-steel-300/15">
            <div>
              <span className="font-mono text-xs text-kanchan-400">ACTIVE RFQ #KF-2026-841</span>
              <h3 className="font-display font-bold text-base text-steel-50">
                High-Pressure Hydraulic Manifold Block (SS316L • Rev-C)
              </h3>
            </div>
            <span className="px-2.5 py-1 rounded bg-emerald-500/15 border border-emerald-400/40 font-mono text-xs text-emerald-300">
              Gross Margin: 28.4%
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="p-3.5 rounded-lg bg-charcoal-800 border border-steel-300/15">
              <div className="flex items-center justify-between text-xs font-mono text-steel-300 mb-2">
                <span>STAGE 01 • COSTING</span>
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              </div>
              <p className="font-display font-semibold text-sm text-steel-50">BOM & CNC Routing Locked</p>
              <p className="mt-1 font-mono text-xs text-steel-300">250 Units • ₹4,850 / unit</p>
            </div>

            <div className="p-3.5 rounded-lg bg-charcoal-800 border border-kanchan-400/60">
              <div className="flex items-center justify-between text-xs font-mono text-kanchan-400 mb-2">
                <span>STAGE 02 • BUYER PO</span>
                <span className="px-1.5 py-0.5 rounded bg-kanchan-400/20 text-[10px]">APPROVED</span>
              </div>
              <p className="font-display font-semibold text-sm text-steel-50">PO #BHEL-7741 Received</p>
              <p className="mt-1 font-mono text-xs text-steel-300">Total Value: ₹12,12,500</p>
            </div>

            <div className="p-3.5 rounded-lg bg-charcoal-800 border border-steel-300/15">
              <div className="flex items-center justify-between text-xs font-mono text-steel-300 mb-2">
                <span>STAGE 03 • SHOP FLOOR</span>
                <QrCode className="w-4 h-4 text-kanchan-400" />
              </div>
              <p className="font-display font-semibold text-sm text-steel-50">
                {orderConverted ? "Work Order #WO-904 Live" : "Awaiting Release"}
              </p>
              <p className="mt-1 font-mono text-xs text-steel-300">
                {orderConverted ? "VMC-04 Assigned • Heat #H892" : "Click below to release"}
              </p>
            </div>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 bg-charcoal-950/70 p-3.5 rounded-lg border border-steel-300/15">
            <div className="text-xs text-steel-200">
              <span className="font-mono text-kanchan-400 font-semibold">TRY INTERACTIVE FLOW: </span>
              {orderConverted
                ? "Route card & barcode generated! Tally Sales Order synced."
                : "Convert this approved quote into a shop-floor Work Order."}
            </div>
            <button
              type="button"
              onClick={() => setOrderConverted(!orderConverted)}
              className="px-4 py-2 rounded bg-kanchan-400 hover:bg-kanchan-300 text-charcoal-950 font-display font-semibold text-xs inline-flex items-center justify-center gap-1.5 transition-colors shrink-0"
            >
              <span>{orderConverted ? "Reset Demo State" : "Convert Quote → Work Order"}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}

      {/* Tab 2: Multi-Level BOM Costing */}
      {activeTab === "bom" && (
        <div className="p-5 space-y-3">
          <div className="flex items-center justify-between text-xs font-mono text-kanchan-400">
            <span className="flex items-center gap-1.5">
              <Layers className="w-4 h-4" />
              MULTI-LEVEL BOM • PART #KF-MAN-316
            </span>
            <span>SCRAP RECOVERY: -₹142/unit</span>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs font-mono">
              <thead>
                <tr className="border-b border-steel-300/20 text-steel-300">
                  <th className="py-2 pr-3">Level / Operation</th>
                  <th className="py-2 px-3">Spec / Machine</th>
                  <th className="py-2 pl-3 text-right">Unit Cost</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-steel-300/10 text-steel-100">
                <tr>
                  <td className="py-2.5 pr-3">L1 • Raw Forged Block</td>
                  <td className="py-2.5 px-3 text-steel-300">SS316L • 14.2 kg @ ₹240/kg</td>
                  <td className="py-2.5 pl-3 text-right text-kanchan-300">₹3,408</td>
                </tr>
                <tr>
                  <td className="py-2.5 pr-3">L2 • 5-Axis VMC Milling</td>
                  <td className="py-2.5 px-3 text-steel-300">Cycle: 38 mins @ ₹18/min</td>
                  <td className="py-2.5 pl-3 text-right text-kanchan-300">₹684</td>
                </tr>
                <tr>
                  <td className="py-2.5 pr-3">L2 • Ultrasonic Passivation</td>
                  <td className="py-2.5 px-3 text-steel-300">Sub-contract Challan #JW-19</td>
                  <td className="py-2.5 pl-3 text-right text-kanchan-300">₹290</td>
                </tr>
                <tr>
                  <td className="py-2.5 pr-3">L3 • Viton O-Ring Seal Kit</td>
                  <td className="py-2.5 px-3 text-steel-300">Bought-Out • Parker Make</td>
                  <td className="py-2.5 pl-3 text-right text-kanchan-300">₹195</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Tab 3: WhatsApp Business Sync */}
      {activeTab === "whatsapp" && (
        <div className="p-5 space-y-3">
          <div className="flex items-center justify-between text-xs font-mono text-emerald-400">
            <span className="flex items-center gap-1.5">
              <MessageSquare className="w-4 h-4" />
              OFFICIAL WHATSAPP BUSINESS API LOG
            </span>
            <span>AUTO-ARCHIVED TO RFQ #841</span>
          </div>
          <div className="space-y-2.5 text-xs">
            <div className="p-3 rounded-lg bg-charcoal-800 border border-steel-300/15">
              <p className="font-mono text-[11px] text-kanchan-400">KanchanFlow Bot → Purchase Head (BHEL)</p>
              <p className="mt-1 text-steel-100">
                Dear Mr. Deshmukh, Quotation #KF-2026-841 (SS316L Manifold, 250 Nos) is attached with Rev-C drawing & HSN 8481 breakdown. Tap below to approve or request revision.
              </p>
            </div>
            <div className="p-3 rounded-lg bg-emerald-950/40 border border-emerald-500/30 ml-6">
              <p className="font-mono text-[11px] text-emerald-300">Buyer Reply • Verified via WhatsApp</p>
              <p className="mt-1 text-steel-100">
                Approved Quote #KF-2026-841. PO #BHEL-7741 uploaded. Please share heat certificate before dispatch.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
