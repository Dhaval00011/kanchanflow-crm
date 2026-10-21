export interface FeatureCardItem {
  id: string;
  code: string;
  title: string;
  metricBadge: string;
  description: string;
  bullets: string[];
}

export interface DetailedFeatureRow {
  id: string;
  tag: string;
  title: string;
  subtitle: string;
  description: string;
  specs: { label: string; value: string }[];
  bullets: string[];
  mockupType: "bom" | "pipeline" | "whatsapp" | "analytics";
}

export interface ComparisonRow {
  capability: string;
  category: string;
  kanchanflow: string;
  genericCrm: string;
  spreadsheets: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  badge?: string;
  tagline: string;
  monthlyPriceInr: number;
  annualPriceInr: number;
  seatLimit: string;
  popular?: boolean;
  ctaText: string;
  features: string[];
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: "general" | "pricing" | "technical";
}

export const INDUSTRIES_SERVED = [
  { name: "Precision CNC & VMC Machining", code: "IND-01", plants: "140+ Shops" },
  { name: "Sheet Metal & Laser Fabrication", code: "IND-02", plants: "95+ Units" },
  { name: "Industrial Valves, Pumps & Foundry", code: "IND-03", plants: "80+ OEMs" },
  { name: "Plastic Injection & Die Casting", code: "IND-04", plants: "65+ Plants" },
  { name: "Electrical Panels & Switchgear", code: "IND-05", plants: "50+ Makers" },
  { name: "Automotive Tier-2 & Tier-3 Suppliers", code: "IND-06", plants: "110+ Vendors" },
];

export const HOME_FEATURES: FeatureCardItem[] = [
  {
    id: "quote-to-order",
    code: "MOD-01",
    title: "Quote-to-Order Engine",
    metricBadge: "12 min avg. RFQ turnaround",
    description:
      "Convert customer RFQs and CAD drawing revisions into GST-compliant technical quotations and shop-floor Work Orders in one click.",
    bullets: [
      "Version-controlled quotations with drawing rev tracking",
      "Auto-calculates raw material weight, scrap %, and machine hours",
      "One-click conversion from approved quote to Production Work Order",
    ],
  },
  {
    id: "multi-level-bom",
    code: "MOD-02",
    title: "Multi-Level BOM & Routing",
    metricBadge: "Zero costing leakage",
    description:
      "Build nested Bills of Materials with sub-assemblies, bought-out components, heat-treatment processes, and outside job-work challans.",
    bullets: [
      "Up to 7 levels of parent-child assembly hierarchy",
      "Live steel, aluminium, and brass grade rate lookup tables",
      "Automatic shortage flags against current store inventory",
    ],
  },
  {
    id: "shop-floor-pipeline",
    code: "MOD-03",
    title: "Shop-Floor Sales Pipeline",
    metricBadge: "Real-time stage visibility",
    description:
      "Replace generic 'Lead → Deal' boards with manufacturing stages: RFQ Received, Costing Done, Sample/PPAP, Tooling, Production, and Dispatch.",
    bullets: [
      "Stage gates enforce drawing sign-off before releasing work orders",
      "Bottleneck alerts when RFQs stall in engineering estimation",
      "Customer-wise order book and pending delivery schedule",
    ],
  },
  {
    id: "whatsapp-sync",
    code: "MOD-04",
    title: "WhatsApp Business Workflow",
    metricBadge: "94% faster buyer response",
    description:
      "Send quotation PDFs, inspection reports, and dispatch LR copies directly to purchase managers on WhatsApp with full thread logging.",
    bullets: [
      "One-click quote approval link on buyer's WhatsApp",
      "Automated stage alerts: 'Work Order #WO-409 entered QA Inspection'",
      "Centralized chat log attached to the RFQ so nothing stays on personal phones",
    ],
  },
  {
    id: "production-reports",
    code: "MOD-05",
    title: "Margin & Hit-Rate Reports",
    metricBadge: "+6.4% gross margin lift",
    description:
      "Compare estimated BOM cost against actual shop-floor consumption to see which customers, part families, and estimators drive real profit.",
    bullets: [
      "RFQ Win/Loss analysis by material grade, tolerance, and lead time",
      "Estimated vs. Actual machine hour & scrap variance reports",
      "Salesperson and estimator turnaround leaderboard",
    ],
  },
  {
    id: "mobile-app",
    code: "MOD-06",
    title: "Supervisor Shop-Floor App",
    metricBadge: "Works offline on plant Wi-Fi",
    description:
      "Give plant supervisors an industrial Android/iOS app to scan job-card barcodes, log shift quantities, and upload pre-dispatch QC photos.",
    bullets: [
      "QR/Barcode scanning for instant traveller card updates",
      "Voice-to-text shift handover notes in Hindi, Gujarati, Marathi & English",
      "Role-based permissions hides pricing from shop-floor operators",
    ],
  },
];

export const DETAILED_FEATURE_ROWS: DetailedFeatureRow[] = [
  {
    id: "bom-costing-engine",
    tag: "01 / COSTING & BOM ENGINE",
    title: "Estimate complex multi-operation parts in minutes, not days.",
    subtitle: "Built for estimators who juggle raw material volatility, cycle times, and subcontracting.",
    description:
      "Generic CRMs only let you type a flat product price. KanchanFlow calculates bottom-up cost from bar-stock diameter, cut weight, kerf loss, CNC turning/milling minutes, surface coating per sq. inch, and packing cost—locking in your target margin before the quote ever leaves your desk.",
    specs: [
      { label: "Max BOM Nesting", value: "7 Assembly Levels" },
      { label: "Costing Formulae", value: "Weight, Area, Cycle Time" },
      { label: "Drawing Formats", value: "STEP, DXF, DWG, PDF" },
    ],
    bullets: [
      "Maintain master rate cards for EN8, SS304,SS316, Aluminium 6061, and Brass C36000 with scrap recovery credits.",
      "Attach 2D/3D CAD files with strict revision locks so the shop floor never manufactures an obsolete Rev-A drawing.",
      "Clone historical quotes and recalculate with today's LME/local metal rates in two clicks.",
    ],
    mockupType: "bom",
  },
  {
    id: "quote-to-work-order",
    tag: "02 / QUOTE-TO-WORK-ORDER PIPELINE",
    title: "Zero handover friction between Sales, Engineering, and Plant Floor.",
    subtitle: "When a purchase order arrives, your production routing and traveller card are already built.",
    description:
      "In most factories, winning a PO triggers hours of re-typing data from Excel quotes into ERP/Tally and Word job cards. KanchanFlow converts an approved customer quote into a numbered Work Order, generates the shop-floor route card with barcode, and reserves raw material instantly.",
    specs: [
      { label: "Handover Time", value: "< 30 Seconds" },
      { label: "Traceability", value: "Heat / Batch No. Linked" },
      { label: "Accounting Sync", value: "Tally Prime & SAP B1" },
    ],
    bullets: [
      "Split a single blanket Purchase Order into staggered monthly delivery schedules and child Work Orders.",
      "Track every order across 8 customizable shop-floor gates: Raw Material QC → Machining → Deburring → Coating → Final PDI → Dispatch.",
      "Automatically flag delivery slip risks 48 hours before committed customer dispatch dates.",
    ],
    mockupType: "pipeline",
  },
  {
    id: "whatsapp-buyer-portal",
    tag: "03 / WHATSAPP & BUYER COLLABORATION",
    title: "Meet industrial buyers where they actually work—on WhatsApp.",
    subtitle: "Eliminate unrecorded phone promises and scattered personal WhatsApp threads.",
    description:
      "Indian and global manufacturing buyers approve drawings, negotiate lead times, and ask for LR dispatch receipts on WhatsApp. KanchanFlow embeds the official WhatsApp Business API directly inside every RFQ and Work Order timeline.",
    specs: [
      { label: "Template Alerts", value: "Quote, OA, PDI, Dispatch" },
      { label: "Audit Trail", value: "100% Timestamped Log" },
      { label: "Attachments", value: "GST Quote PDF, TC, E-Way" },
    ],
    bullets: [
      "Send interactive 'Approve Quote #KF-841' buttons that capture buyer PO numbers directly from WhatsApp.",
      "Auto-notify customers when their batch passes Pre-Dispatch Inspection (PDI) with attached micrometer test reports.",
      "Keep customer communication safe with the company even when a sales engineer leaves.",
    ],
    mockupType: "whatsapp",
  },
  {
    id: "margin-analytics-mobile",
    tag: "04 / SHOP-FLOOR MOBILE & MARGIN INTELLIGENCE",
    title: "Know your true gross margin on every batch before the truck leaves the gate.",
    subtitle: "Live barcode scans from the floor feed real-time costing and OTD dashboards.",
    description:
      "Stop waiting until quarter-end accounting to discover a job ran at a loss due to tool breakage or extra setup hours. Supervisors log actual cycle times and scrap counts via the KanchanFlow Android app, giving leadership live variance analytics.",
    specs: [
      { label: "Mobile Offline Mode", value: "Auto-syncs on reconnect" },
      { label: "Floor Languages", value: "EN, HI, GU, MR, TA" },
      { label: "Export Formats", value: "XLSX, CSV, Tally XML" },
    ],
    bullets: [
      "Spot repeat part numbers where actual machining time exceeds quoted cycle time by more than 10%.",
      "Monitor Estimator Hit-Rate: see which product categories win at high margins vs. where you are underpricing.",
      "Executive morning digest delivered at 8:30 AM with yesterday's bookings, dispatches, and delayed work orders.",
    ],
    mockupType: "analytics",
  },
];

export const COMPARISON_ROWS: ComparisonRow[] = [
  {
    capability: "Multi-Level BOM & Raw Material Scrap Costing",
    category: "Costing",
    kanchanflow: "Native (Weight, Kerf, Cycle Time & Scrap Credit)",
    genericCrm: "Not supported (Flat SKU price list only)",
    spreadsheets: "Fragile manual formulas prone to copy-paste errors",
  },
  {
    capability: "CAD Drawing Revision Control (STEP / DXF / PDF)",
    category: "Costing",
    kanchanflow: "Strict Rev-Lock tied to Quote & Work Order",
    genericCrm: "Generic file attachments with no revision lock",
    spreadsheets: "Files scattered across local folders & emails",
  },
  {
    capability: "One-Click Quote to Shop-Floor Work Order",
    category: "Production",
    kanchanflow: "Instant Work Order + Barcode Route Card PDF",
    genericCrm: "Requires expensive 3rd-party ERP middleware",
    spreadsheets: "Manual re-entry into Word/Excel job cards",
  },
  {
    capability: "Heat Number & Material Test Certificate (MTC) Traceability",
    category: "Production",
    kanchanflow: "Built-in batch & heat number tracking per stage",
    genericCrm: "No shop-floor quality or batch primitives",
    spreadsheets: "Hard to trace during customer quality audits",
  },
  {
    capability: "Official WhatsApp Business Quote & Dispatch Automation",
    category: "Communication",
    kanchanflow: "Built-in with 1-click buyer approval & PDI alerts",
    genericCrm: "Paid add-on designed for B2C marketing blasts",
    spreadsheets: "Unrecorded chats on sales reps' personal phones",
  },
  {
    capability: "Tally Prime & Indian GST / HSN Code Readiness",
    category: "Operations",
    kanchanflow: "Out-of-the-box HSN, Job-Work Challan & Tally XML",
    genericCrm: "Requires custom consulting & localization",
    spreadsheets: "Manual voucher entry by accounts team",
  },
  {
    capability: "Average Implementation & Operator Training Time",
    category: "Operations",
    kanchanflow: "48 Hours (Pre-configured for discrete manufacturing)",
    genericCrm: "3 to 6 Months of custom object configuration",
    spreadsheets: "Immediate, but breaks above 30 active orders/month",
  },
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: "workshop-starter",
    name: "Workshop Starter",
    tagline: "For precision job shops and single-unit fabricators moving off Excel quotes.",
    monthlyPriceInr: 7999,
    annualPriceInr: 6399,
    seatLimit: "Includes up to 8 users (Sales + Estimators)",
    ctaText: "Start 14-Day Free Trial",
    features: [
      "Unlimited RFQs & GST-ready Quotations",
      "Single-level BOM & Raw Material Weight Calculator",
      "Visual Shop-Floor Sales Pipeline (6 stages)",
      "Standard Route Card & Job Sheet PDF Generator",
      "Drawing attachment & revision history (50 GB storage)",
      "Email & standard WhatsApp share links",
    ],
  },
  {
    id: "plant-pro",
    name: "Plant Pro",
    badge: "MOST POPULAR FOR OEMS",
    tagline: "For growing multi-shift factories requiring nested BOMs, WhatsApp sync, and floor tracking.",
    monthlyPriceInr: 16999,
    annualPriceInr: 13599,
    seatLimit: "Includes up to 25 users + Unlimited Floor Barcodes",
    popular: true,
    ctaText: "Book Plant Pro Demo",
    features: [
      "Everything in Workshop Starter, plus:",
      "Multi-level BOM (up to 7 levels) + Sub-contracting Challans",
      "Official WhatsApp Business API (Automated Quote & Dispatch alerts)",
      "Supervisor Android/iOS App with Offline Barcode Scanning",
      "Estimated vs. Actual Margin & Cycle-Time Variance Reports",
      "Two-way Tally Prime & Busy Accounting Sync",
      "Dedicated onboarding engineer (Go-live in 48 hours)",
    ],
  },
  {
    id: "enterprise-foundry",
    name: "Enterprise Foundry",
    badge: "MULTI-PLANT & CUSTOM ERP",
    tagline: "For multi-location industrial groups needing SAP/Oracle sync, custom QA gates, and SLA.",
    monthlyPriceInr: 34999,
    annualPriceInr: 27999,
    seatLimit: "Unlimited users across up to 5 Manufacturing Plants",
    ctaText: "Talk to Solutions Architect",
    features: [
      "Everything in Plant Pro, plus:",
      "Multi-plant inventory & inter-unit work order routing",
      "Custom PPAP, APQP, and ISO 9001 / IATF 16949 stage-gate checklists",
      "Native connectors for SAP Business One, ERPNext & Oracle NetSuite",
      "Custom role-based field masking (hide prices from plant floor)",
      "Dedicated India/Global cloud instance & 99.95% uptime SLA",
      "On-site plant floor training available (Pune, Ahmedabad, Chennai, NCR)",
    ],
  },
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: "faq-1",
    category: "general",
    question: "How is KanchanFlow different from Zoho CRM, HubSpot, or Salesforce?",
    answer:
      "Generic CRMs are built for software or service sales—they track contacts and flat deal amounts. KanchanFlow is purpose-built for discrete manufacturers. It understands bar-stock weights, CNC cycle times, multi-level Bills of Materials (BOM), drawing revisions, job-work challans, and converts won quotes directly into barcoded shop-floor Work Orders.",
  },
  {
    id: "faq-2",
    category: "technical",
    question: "Can we import our existing Excel rate cards, customer masters, and Tally items?",
    answer:
      "Yes. During your 48-hour onboarding, our implementation team imports your existing customer master, HSN codes, raw material grade rates, and machine hour rates via Excel/CSV or direct Tally Prime XML sync—so your estimators can generate their first quote on Day 1.",
  },
  {
    id: "faq-3",
    category: "general",
    question: "Will our shop-floor supervisors see quotation prices or customer margins?",
    answer:
      "Never, unless you explicitly grant permission. KanchanFlow enforces strict role-based access control (RBAC). When a quote converts to a Work Order, the shop-floor mobile app and printed route card only display part drawings, tolerances, target quantities, and delivery dates—keeping all commercial pricing 100% confidential.",
  },
  {
    id: "faq-4",
    category: "pricing",
    question: "Do we pay extra for shop-floor machine operators scanning barcodes?",
    answer:
      "On the Plant Pro and Enterprise Foundry plans, barcode scan stations and view-only shop-floor terminals are completely free and unlimited. Paid seats only apply to core commercial, estimation, and plant management users.",
  },
  {
    id: "faq-5",
    category: "pricing",
    question: "Can we switch between Monthly and Annual billing or upgrade plans later?",
    answer:
      "Absolutely. You can start on Monthly billing and switch to Annual billing at any time to lock in the 20% discount. Upgrading from Workshop Starter to Plant Pro preserves all your historical RFQs, BOM templates, and customer timelines without downtime.",
  },
  {
    id: "faq-6",
    category: "technical",
    question: "Does the mobile app work in factory sheds with patchy cellular or Wi-Fi coverage?",
    answer:
      "Yes. The KanchanFlow Supervisor App caches active Work Orders and route cards locally on the device. Supervisors can scan job-card QR codes, record shift rejections, and snap QC photos offline; the app automatically syncs with the cloud the moment connectivity returns.",
  },
];
