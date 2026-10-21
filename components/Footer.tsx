import React from "react";
import Link from "next/link";
import { Shield, PhoneCall, Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-charcoal-950 border-t border-steel-300/15 text-steel-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Blurb (2 cols on lg) */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-kanchan-400 rounded">
              <div className="w-9 h-9 rounded bg-charcoal-800 border border-kanchan-400/50 flex items-center justify-center">
                <span className="font-mono font-bold text-kanchan-400 text-sm">KF</span>
              </div>
              <span className="font-display font-bold text-lg text-steel-50">
                KANCHAN<span className="text-kanchan-400">FLOW</span>
              </span>
            </Link>
            <p className="text-sm text-steel-300 max-w-sm leading-relaxed">
              The industrial-grade CRM and Quote-to-Work-Order platform built for precision CNC machine shops, sheet-metal fabricators, and discrete OEMs across India and global manufacturing corridors.
            </p>
            <div className="flex flex-wrap items-center gap-3 pt-2 text-xs font-mono text-steel-200">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-charcoal-800 border border-steel-300/15">
                <Shield className="w-3.5 h-3.5 text-kanchan-400" />
                ISO 27001 Ready
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-charcoal-800 border border-steel-300/15">
                Tally Prime & SAP Sync
              </span>
            </div>
          </div>

          {/* Column 1: Platform */}
          <div>
            <h3 className="font-mono text-xs uppercase tracking-widest text-kanchan-400 mb-4">
              Platform
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/features#bom-costing-engine" className="hover:text-kanchan-400 transition-colors">
                  Multi-Level BOM Costing
                </Link>
              </li>
              <li>
                <Link href="/features#quote-to-work-order" className="hover:text-kanchan-400 transition-colors">
                  Quote-to-Work-Order
                </Link>
              </li>
              <li>
                <Link href="/features#whatsapp-buyer-portal" className="hover:text-kanchan-400 transition-colors">
                  WhatsApp Business Workflow
                </Link>
              </li>
              <li>
                <Link href="/features#margin-analytics-mobile" className="hover:text-kanchan-400 transition-colors">
                  Supervisor Mobile App
                </Link>
              </li>
              <li>
                <Link href="/features#comparison" className="hover:text-kanchan-400 transition-colors">
                  CRM Comparison Matrix
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Industries */}
          <div>
            <h3 className="font-mono text-xs uppercase tracking-widest text-kanchan-400 mb-4">
              Industries Served
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/#industries" className="hover:text-kanchan-400 transition-colors">
                  CNC & VMC Job Shops
                </Link>
              </li>
              <li>
                <Link href="/#industries" className="hover:text-kanchan-400 transition-colors">
                  Sheet Metal & Laser Fab
                </Link>
              </li>
              <li>
                <Link href="/#industries" className="hover:text-kanchan-400 transition-colors">
                  Industrial Valves & Pumps
                </Link>
              </li>
              <li>
                <Link href="/#industries" className="hover:text-kanchan-400 transition-colors">
                  Automotive Tier-2/3 Vendors
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-kanchan-400 transition-colors">
                  Plant Pricing & ROI
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Engineering Hubs */}
          <div>
            <h3 className="font-mono text-xs uppercase tracking-widest text-kanchan-400 mb-4">
              Industrial Support
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-kanchan-400 shrink-0 mt-0.5" />
                <span>MIDC Bhosari, Pune & Vatva GIDC, Ahmedabad</span>
              </li>
              <li className="flex items-center gap-2">
                <PhoneCall className="w-4 h-4 text-kanchan-400 shrink-0" />
                <a href="tel:+912067128900" className="hover:text-kanchan-400 transition-colors">
                  +91 (020) 6712-8900
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-kanchan-400 shrink-0" />
                <a href="mailto:sales@kanchanflow.com" className="hover:text-kanchan-400 transition-colors">
                  sales@kanchanflow.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-steel-300/15 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-steel-400">
          <p>© {new Date().getFullYear()} KanchanFlow Industrial Systems Pvt. Ltd. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <Link href="/pricing#faq" className="hover:text-kanchan-400 transition-colors">
              Security & RBAC
            </Link>
            <Link href="/features" className="hover:text-kanchan-400 transition-colors">
              API & Tally Docs
            </Link>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="KanchanFlow GitHub Repository"
              className="hover:text-kanchan-400 transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="KanchanFlow LinkedIn Profile"
              className="hover:text-kanchan-400 transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
