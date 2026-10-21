# KanchanFlow — B2B Manufacturing CRM Marketing Website

**Assigned Brand:** KanchanFlow (`kanchanflow.com`) — Section 5.3  
**Role:** Full Stack / Frontend Development Internship Assignment — Meru Technosoft Private Limited  
**Tech Stack:** Next.js 14 (App Router), TypeScript, Tailwind CSS, `next/font`, `next/image`, Lucide Icons

---

## 1. How to Run the Project Locally

### Prerequisites
- **Node.js** `v18.17+` (or `v20+` LTS recommended)
- **npm** `v9+` (or `pnpm` / `yarn`)

### Installation & Development Server
```bash
# 1. Install dependencies
npm install

# 2. Start the local development server on http://localhost:3000
npm run dev

# 3. Build for production & verify zero TypeScript / ESLint errors
npm run build
npm run start
```

### Deploying to Vercel / Netlify
1. Push this repository to your GitHub account (the `.git` folder already contains 10 structured commits):
   ```bash
   git remote add origin https://github.com/<your-username>/kanchanflow-crm.git
   git branch -M main
   git push -u origin main
   ```
2. Import the repository on [Vercel](https://vercel.com/new) or [Netlify](https://app.netlify.com/start).
3. Framework preset is automatically detected as **Next.js**. Click **Deploy**.

---

## 2. Colour & Typography Choices

### Colour Direction (Charcoal + Molten Gold + Light Steel Grey)
- **One-Line Rationale:** We paired deep CNC machine-shop **Charcoal/Graphite (`#12151A` / `#1A1E26`)** with **Molten Gold (`#F5B041` / `#D99B26` — referencing *Kanchan*, Sanskrit/Hindi for pure gold)** and **Light Steel Grey (`#F7F8FA` / `#C2CADB`)** to project industrial precision, high shop-floor legibility, and strong B2B authority without generic SaaS purple/blue gradients.
- **WCAG AA/AAA Contrast Compliance:**
  - Primary body text (`#F7F8FA` on `#12151A`): **16.8:1** contrast ratio (exceeds 4.5:1 minimum).
  - Secondary body text (`#C2CADB` on `#1A1E26`): **9.7:1** contrast ratio.
  - Primary CTA button text (`#0B0D10` on `#F5B041` molten gold): **10.9:1** contrast ratio.
- **Bonus Light/Dark Theme Toggle:** Includes a header theme switch that toggles between the default **Industrial Charcoal Dark** mode and **High-Contrast Steel Light** mode (`html.light`) for bright factory office environments.

### Font Pairing (`next/font/google`)
- **Headings (`Space Grotesk`):** Geometric, engineered proportions that echo technical blueprints and industrial nameplates.
- **Body Copy (`Plus Jakarta Sans`):** Clean, highly legible neo-grotesque sans-serif optimized for dense B2B product specifications and comparison tables.
- **Technical Codes & Pricing (`IBM Plex Mono`):** Monospaced typeface used for RFQ numbers (`#KF-2026-841`), raw material grades (`SS316L`, `EN24`), cycle times, and INR (`₹`) pricing figures.

---

## 3. Pages & Architecture Overview

```text
kanchanflow-nextjs/
├── app/
│   ├── globals.css          # CSS custom variables, dark/light tokens, prefers-reduced-motion
│   ├── layout.tsx           # Root layout, next/font configuration, global OpenGraph metadata
│   ├── page.tsx             # Home: Hero + Interactive UI Mockup, Industries, Problem/Solution, 6 Features, Pricing Teaser, FAQ, CTA
│   ├── features/
│   │   └── page.tsx         # Features: 4 Alternating deep-dive rows with schematics + Filterable CRM Comparison Table
│   └── pricing/
│       └── page.tsx         # Pricing: Monthly/Annual toggle (20% off), 3 Plan Cards, Interactive Plant ROI Calculator, FAQ
├── components/
│   ├── ui/
│   │   ├── Button.tsx       # Reusable button/link with hover, focus-visible, active & disabled states
│   │   ├── Card.tsx         # Industrial surface card primitive
│   │   └── SectionHeading.tsx
│   ├── Navbar.tsx           # Sticky responsive header, active route state, theme toggle, mobile drawer
│   ├── Footer.tsx           # 4-column B2B footer with Indian industrial hub contacts & compliance badges
│   ├── HeroPipelineMockup.tsx # Interactive 3-tab product UI mockup (Pipeline, Multi-level BOM, WhatsApp log)
│   ├── ComparisonMatrix.tsx # Category-filterable & searchable comparison table with empty state
│   ├── PricingInteractive.tsx # Billing cycle toggle + interactive plant ROI calculator
│   ├── FaqAccordion.tsx     # Keyboard-accessible ARIA accordion
│   └── DemoModal.tsx        # Front-end validated walkthrough booking modal with confirmation state
└── data/
    └── kanchanflow.ts       # Strongly-typed domain data (no placeholder or Lorem Ipsum text)
```

---

## 4. Key Assumptions Made

1. **Target Persona & Market Localization:** Since `KanchanFlow` uses an Indian-origin brand name (*Kanchan* = Gold) and highlights **WhatsApp** alongside **BOMs, quotes, and work orders**, we positioned the copy for **Indian & Global Discrete Manufacturers** (CNC machine shops, sheet-metal fabricators, valve/pump OEMs) with INR (`₹`) per-plant pricing, GST/HSN readiness, Job-Work Challans, and **Tally Prime / SAP B1** integration.
2. **Per-Plant Licensing Model:** Manufacturing plants resist software that charges per machine operator. We structured the 3 pricing tiers (**Workshop Starter**, **Plant Pro**, **Enterprise Foundry**) around core commercial/estimation seats while keeping shop-floor barcode scan terminals unlimited and free on upper tiers.
3. **Interactive Product Schematics over Static Screenshots:** Rather than placing generic stock screenshots inside the Hero and Features rows, we built interactive, stateful HTML/CSS product UI schematics (RFQ-to-Work-Order converter, Multi-level BOM cost table, and WhatsApp buyer approval log) supplemented by `next/image` optimization.

---

## 5. What We Would Improve with More Time

1. **Interactive BOM Costing Sandbox:** Allow visitors to upload a sample DXF/STEP file or pick a material grade (`SS304`, `EN8`, `Aluminium 6061`), enter bar dimensions, and download a real generated GST Quotation PDF right from the marketing site.
2. **Multilingual Localization (`next-intl`):** Add language toggles for **Hindi, Gujarati, and Marathi** so regional factory owners and shop-floor supervisors can browse the platform in their preferred language.
3. **Customer Case Study Video Modal & ERP Webhook Simulator:** Add recorded 90-second shop-floor walkthrough videos from Pune/Ahmedabad machine shops and an interactive Tally XML payload previewer for IT teams.
