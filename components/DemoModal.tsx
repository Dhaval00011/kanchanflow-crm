"use client";

import React, { useState, useEffect } from "react";
import { X, CheckCircle2, ShieldCheck, Factory } from "lucide-react";
import { Button } from "./ui/Button";

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultPlan?: string;
}

interface FormState {
  fullName: string;
  workEmail: string;
  companyName: string;
  phone: string;
  monthlyOrders: string;
  notes: string;
}

interface FormErrors {
  fullName?: string;
  workEmail?: string;
  companyName?: string;
  phone?: string;
}

export function DemoModal({ isOpen, onClose, defaultPlan = "Plant Pro" }: DemoModalProps) {
  const [form, setForm] = useState<FormState>({
    fullName: "",
    workEmail: "",
    companyName: "",
    phone: "",
    monthlyOrders: "50-200 Work Orders / mo",
    notes: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!form.fullName.trim() || form.fullName.trim().length < 2) {
      newErrors.fullName = "Please enter your full name.";
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.workEmail.trim())) {
      newErrors.workEmail = "Please enter a valid company email address.";
    }
    if (!form.companyName.trim() || form.companyName.trim().length < 2) {
      newErrors.companyName = "Please enter your factory or company name.";
    }
    if (!/^[0-9+\-\s()]{8,15}$/.test(form.phone.trim())) {
      newErrors.phone = "Please enter a valid 10-digit WhatsApp or mobile number.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 500);
  };

  const handleResetAndClose = () => {
    setIsSuccess(false);
    setErrors({});
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-charcoal-950/80 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="demo-modal-title"
    >
      <div className="relative w-full max-w-lg rounded-lg bg-charcoal-800 border border-steel-300/25 shadow-industrial p-6 sm:p-8 text-steel-50 max-h-[90vh] overflow-y-auto">
        <button
          type="button"
          onClick={handleResetAndClose}
          className="absolute top-4 right-4 p-2 rounded-md text-steel-300 hover:text-steel-50 hover:bg-charcoal-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-kanchan-400"
          aria-label="Close demo booking modal"
        >
          <X className="w-5 h-5" />
        </button>

        {isSuccess ? (
          <div className="py-6 text-center">
            <div className="w-14 h-14 rounded-full bg-kanchan-400/15 border border-kanchan-400 flex items-center justify-center mx-auto mb-4 text-kanchan-400">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <p className="font-mono text-xs uppercase tracking-widest text-kanchan-400 mb-2">
              DEMO REQUEST CONFIRMED • REF #KF-DEMO-892
            </p>
            <h3 id="demo-modal-title" className="font-display text-2xl font-bold text-steel-50">
              Shop-Floor Walkthrough Scheduled
            </h3>
            <p className="mt-3 text-sm text-steel-200 leading-relaxed">
              Thank you, <span className="font-semibold text-steel-50">{form.fullName}</span>. Our manufacturing solutions engineer will send a calendar invite to{" "}
              <span className="font-mono text-kanchan-300">{form.workEmail}</span> and WhatsApp confirmation on{" "}
              <span className="font-mono text-kanchan-300">{form.phone}</span> within 2 business hours.
            </p>
            <div className="mt-6 p-4 rounded bg-charcoal-900 border border-steel-300/15 text-left text-xs font-mono text-steel-300 space-y-1">
              <div>PLANT / OEM: {form.companyName}</div>
              <div>SELECTED TIER: {defaultPlan}</div>
              <div>VOLUME: {form.monthlyOrders}</div>
            </div>
            <div className="mt-6">
              <Button variant="primary" onClick={handleResetAndClose} className="w-full">
                Return to KanchanFlow
              </Button>
            </div>
          </div>
        ) : (
          <>
            <div className="flex items-center gap-2 text-kanchan-400 font-mono text-xs uppercase tracking-widest mb-2">
              <Factory className="w-4 h-4" />
              <span>1-ON-1 ENGINEERING WALKTHROUGH</span>
            </div>
            <h3 id="demo-modal-title" className="font-display text-2xl font-bold text-steel-50">
              Book Your KanchanFlow Plant Demo
            </h3>
            <p className="mt-1.5 text-sm text-steel-200">
              See how your estimators can convert a CAD drawing into a costed BOM and barcoded Work Order in under 4 minutes.
            </p>

            <form onSubmit={handleSubmit} noValidate className="mt-6 space-y-4">
              <div>
                <label htmlFor="demo-fullname" className="block text-xs font-mono uppercase tracking-wider text-steel-200 mb-1.5">
                  Full Name *
                </label>
                <input
                  id="demo-fullname"
                  type="text"
                  value={form.fullName}
                  onChange={(e) => setForm({ ...form, fullName: e.target.value })}
                  placeholder="e.g., Rajesh Kulkarni"
                  aria-invalid={Boolean(errors.fullName)}
                  aria-describedby={errors.fullName ? "err-fullname" : undefined}
                  className="w-full px-3.5 py-2.5 rounded bg-charcoal-900 border border-steel-300/25 text-steel-50 placeholder-steel-400 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-kanchan-400"
                />
                {errors.fullName && (
                  <p id="err-fullname" className="mt-1 text-xs text-amber-400">
                    {errors.fullName}
                  </p>
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="demo-email" className="block text-xs font-mono uppercase tracking-wider text-steel-200 mb-1.5">
                    Work Email *
                  </label>
                  <input
                    id="demo-email"
                    type="email"
                    value={form.workEmail}
                    onChange={(e) => setForm({ ...form, workEmail: e.target.value })}
                    placeholder="rajesh@precisioncnc.in"
                    aria-invalid={Boolean(errors.workEmail)}
                    aria-describedby={errors.workEmail ? "err-email" : undefined}
                    className="w-full px-3.5 py-2.5 rounded bg-charcoal-900 border border-steel-300/25 text-steel-50 placeholder-steel-400 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-kanchan-400"
                  />
                  {errors.workEmail && (
                    <p id="err-email" className="mt-1 text-xs text-amber-400">
                      {errors.workEmail}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="demo-phone" className="block text-xs font-mono uppercase tracking-wider text-steel-200 mb-1.5">
                    WhatsApp / Mobile *
                  </label>
                  <input
                    id="demo-phone"
                    type="tel"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    placeholder="+91 98201 54321"
                    aria-invalid={Boolean(errors.phone)}
                    aria-describedby={errors.phone ? "err-phone" : undefined}
                    className="w-full px-3.5 py-2.5 rounded bg-charcoal-900 border border-steel-300/25 text-steel-50 placeholder-steel-400 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-kanchan-400"
                  />
                  {errors.phone && (
                    <p id="err-phone" className="mt-1 text-xs text-amber-400">
                      {errors.phone}
                    </p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="demo-company" className="block text-xs font-mono uppercase tracking-wider text-steel-200 mb-1.5">
                    Factory / Company Name *
                  </label>
                  <input
                    id="demo-company"
                    type="text"
                    value={form.companyName}
                    onChange={(e) => setForm({ ...form, companyName: e.target.value })}
                    placeholder="Apex Gears & Valves Pvt Ltd"
                    aria-invalid={Boolean(errors.companyName)}
                    aria-describedby={errors.companyName ? "err-company" : undefined}
                    className="w-full px-3.5 py-2.5 rounded bg-charcoal-900 border border-steel-300/25 text-steel-50 placeholder-steel-400 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-kanchan-400"
                  />
                  {errors.companyName && (
                    <p id="err-company" className="mt-1 text-xs text-amber-400">
                      {errors.companyName}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="demo-volume" className="block text-xs font-mono uppercase tracking-wider text-steel-200 mb-1.5">
                    Monthly Work Orders
                  </label>
                  <select
                    id="demo-volume"
                    value={form.monthlyOrders}
                    onChange={(e) => setForm({ ...form, monthlyOrders: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded bg-charcoal-900 border border-steel-300/25 text-steel-50 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-kanchan-400"
                  >
                    <option value="Under 50 Work Orders / mo">Under 50 Work Orders / mo</option>
                    <option value="50-200 Work Orders / mo">50–200 Work Orders / mo</option>
                    <option value="200-1,000 Work Orders / mo">200–1,000 Work Orders / mo</option>
                    <option value="1,000+ (Multi-Plant OEM)">1,000+ (Multi-Plant OEM)</option>
                  </select>
                </div>
              </div>

              <div className="pt-2">
                <Button type="submit" variant="primary" size="lg" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? "Scheduling Walkthrough..." : "Confirm Live Shop-Floor Demo"}
                </Button>
              </div>

              <p className="flex items-center justify-center gap-1.5 text-xs text-steel-300 text-center">
                <ShieldCheck className="w-4 h-4 text-kanchan-400 shrink-0" />
                <span>NDA-protected walkthrough. Zero spam. 14-day sandbox included.</span>
              </p>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
