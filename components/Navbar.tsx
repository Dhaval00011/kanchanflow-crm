"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Sun, Moon, ArrowUpRight } from "lucide-react";
import { Button } from "./ui/Button";
import { DemoModal } from "./DemoModal";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/features", label: "Features" },
  { href: "/pricing", label: "Pricing" },
  { href: "/features#comparison", label: "CRM Compare" },
  { href: "/pricing#faq", label: "FAQ" },
];

export function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [demoModalOpen, setDemoModalOpen] = useState(false);
  const [lightMode, setLightMode] = useState(false);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const toggleTheme = () => {
    const nextLight = !lightMode;
    setLightMode(nextLight);
    if (typeof document !== "undefined") {
      document.documentElement.classList.toggle("light", nextLight);
    }
  };

  return (
    <>
      <header className="sticky top-0 z-40 w-full bg-charcoal-900/95 backdrop-blur-md border-b border-steel-300/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
          {/* Brand Wordmark & Custom Industrial Logo Mark */}
          <Link
            href="/"
            className="flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-kanchan-400 rounded-md"
            aria-label="KanchanFlow Home"
          >
            <div className="w-10 h-10 rounded-md bg-charcoal-800 border border-kanchan-400/50 flex items-center justify-center shadow-gold-glow group-hover:border-kanchan-300 transition-colors">
              <svg
                className="w-6 h-6 text-kanchan-400"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="square"
                strokeLinejoin="miter"
                aria-hidden="true"
              >
                <path d="M4 6h16M4 12h10M4 18h16" />
                <polygon points="17,10 21,12 17,14" fill="currentColor" />
              </svg>
            </div>
            <div>
              <span className="font-display font-bold text-lg tracking-tight text-steel-50 block leading-none">
                KANCHAN<span className="text-kanchan-400">FLOW</span>
              </span>
              <span className="font-mono text-[10px] tracking-widest uppercase text-steel-300 block mt-1">
                MANUFACTURING CRM
              </span>
            </div>
          </Link>

          {/* Desktop Navigation (5 links) */}
          <nav aria-label="Primary Navigation" className="hidden md:flex items-center gap-1 lg:gap-2">
            {NAV_LINKS.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href.split("#")[0]) && !link.href.includes("#");
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3.5 py-2 rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-kanchan-400 ${
                    isActive
                      ? "text-kanchan-400 bg-charcoal-800 border border-kanchan-400/30"
                      : "text-steel-200 hover:text-steel-50 hover:bg-charcoal-800/60"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Actions: Bonus Theme Toggle + Primary CTA */}
          <div className="hidden md:flex items-center gap-3">
            <button
              type="button"
              onClick={toggleTheme}
              className="p-2.5 rounded-md bg-charcoal-800 border border-steel-300/20 text-steel-200 hover:text-kanchan-400 hover:border-kanchan-400/40 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-kanchan-400"
              aria-label={lightMode ? "Switch to industrial dark theme" : "Switch to high-contrast light theme"}
              title={lightMode ? "Industrial Dark Mode" : "Steel Light Mode"}
            >
              {lightMode ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
            </button>

            <Button
              variant="primary"
              size="md"
              onClick={() => setDemoModalOpen(true)}
            >
              <span>Book Plant Demo</span>
              <ArrowUpRight className="w-4 h-4" />
            </Button>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              type="button"
              onClick={toggleTheme}
              className="p-2.5 rounded-md bg-charcoal-800 border border-steel-300/20 text-steel-200 hover:text-kanchan-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-kanchan-400"
              aria-label="Toggle color theme"
            >
              {lightMode ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
            </button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation-menu"
              aria-label={mobileMenuOpen ? "Close main menu" : "Open main menu"}
              className="p-2.5 rounded-md bg-charcoal-800 border border-steel-300/20 text-steel-50 hover:border-kanchan-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-kanchan-400"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Working Mobile Drawer Menu */}
        {mobileMenuOpen && (
          <nav
            id="mobile-navigation-menu"
            aria-label="Mobile Navigation"
            className="md:hidden bg-charcoal-900 border-b border-steel-300/20 px-4 pt-3 pb-6 space-y-2"
          >
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-3 rounded-md text-base font-medium text-steel-100 hover:bg-charcoal-800 hover:text-kanchan-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-kanchan-400"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-3 border-t border-steel-300/15">
              <Button
                variant="primary"
                size="lg"
                className="w-full"
                onClick={() => {
                  setMobileMenuOpen(false);
                  setDemoModalOpen(true);
                }}
              >
                <span>Book Shop-Floor Demo</span>
                <ArrowUpRight className="w-4 h-4" />
              </Button>
            </div>
          </nav>
        )}
      </header>

      <DemoModal isOpen={demoModalOpen} onClose={() => setDemoModalOpen(false)} />
    </>
  );
}
