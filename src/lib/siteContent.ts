// All editable site content lives here.
export const site = {
  brand: "GeekRabit",
  tagline: "We ship AI features that actually run in production.",
  sub: "WhatsApp NLP. Voice agents. Vision AI. Native mobile. Microservices. We ship production AI for the world's hardest markets — multilingual, low-bandwidth, real-money. From idea to live in 6 weeks.",
  location: "Pune + Remote",
  email: "info@geekrabit.com",
  calendly: "https://cal.com/abhash",
  linkedin: "https://www.linkedin.com/company/geekrabit",
  github: "https://github.com/geekrabit",
  twitter: "https://x.com/geekrabit",
};

export const nav = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "Approach", href: "#approach" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

export const trustFacts = [
  { value: 11, suffix: "", label: "intents shipped" },
  { value: 0.05, prefix: "~₹", decimals: 2, label: "/ message" },
  { value: 200, prefix: "<", suffix: "ms", label: "p95 NLP" },
  { value: 4, label: "production stacks" },
  { text: "iOS + Android day-one" },
  { text: "Claude · GPT-4 · Sarvam" },
];

export const marketsBar = [
  "3 BILLION WHATSAPP USERS",
  "8+ LANGUAGES SHIPPED",
  "4G-FIRST DESIGN",
  "USD · INR · AED INVOICING",
  "IST · CET · EST OVERLAP HOURS",
];

export const services = [
  {
    icon: "💬",
    title: "WhatsApp NLP & Automation",
    body: "Inbound intent extraction, smart replies, multilingual (Hindi + English + 6 more). MSG91 + Meta Business API. Production-tuned token cost.",
    subject: "Tell me about WhatsApp NLP",
  },
  {
    icon: "🎙️",
    title: "Voice AI Agents",
    body: "Sarvam + ElevenLabs voice flows for Indian-language users. Vendor command interfaces, consumer voice search, IVR replacement.",
    subject: "Tell me about Voice AI Agents",
  },
  {
    icon: "👁️",
    title: "Vision AI",
    body: "Claude Vision + GPT-4V for document OCR, UPI screenshot parsing, KYC verification, product photo enhancement.",
    subject: "Tell me about Vision AI",
  },
  {
    icon: "📱",
    title: "Native Mobile Apps",
    body: "Flutter for iOS + Android with a futuristic design system. Premium feel, 60fps, under 25 MB APK. Day-one localization.",
    subject: "Tell me about Native Mobile Apps",
  },
  {
    icon: "⚙️",
    title: "Backend Microservices",
    body: "Spring Boot modular monolith → microservices migration path. JWT portal-scoped auth, event-driven domain modules, Flyway-managed schema.",
    subject: "Tell me about Backend Microservices",
  },
  {
    icon: "📊",
    title: "AI Strategy & Audit",
    body: "Cut your token bill by 90% with prompt caching, RAG vs. fine-tune decisions, model selection, observability setup.",
    subject: "Tell me about AI Strategy & Audit",
  },
];

export const caseStudy = {
  eyebrow: "OUR FLAGSHIP PRODUCT",
  title: "Thiya — WhatsApp-first vendor automation.",
  paragraphs: [
    "3 billion people run their lives on WhatsApp. The hardest version of that problem? Code-switched Hindi-English messages from non-technical users buying daily groceries on 4G in India. We picked it on purpose.",
    "Consumer texts 'kal dudh nahi bhejna' (Hindi for 'don't send milk tomorrow'). Our NLP extracts the intent — skip · tomorrow · milk — updates the vendor's subscription, sends a confirmation back. Zero human in the loop. ~250ms end-to-end. If it works here, your English / Spanish / Arabic / Portuguese / Indonesian customers are downhill.",
    "Built end-to-end in 6 weeks: Flutter mobile app for the vendor, React admin portal, Spring Boot backend with 12 domain modules, MSG91 + Anthropic Claude integration, payment gateway, invoice PDF generation, subscription billing, multi-tenant geographic discovery.",
  ],
  stats: [
    { value: 12, label: "backend modules" },
    { value: 11, label: "NLP intents" },
    { value: 4, label: "user surfaces" },
    { value: 6, suffix: " wks", label: "to MVP" },
  ],
};

export const process = [
  {
    step: "01",
    title: "Discovery",
    week: "Week 0",
    body: "One-hour call. We map the AI feature you want to ship, decide model + provider, calculate token economics, agree on the demo we'll show in 6 weeks.",
  },
  {
    step: "02",
    title: "Spike",
    week: "Week 1",
    body: "End-to-end skeleton in 5 working days. Real API calls, real database, fake UI. You'll see the AI work before we commit to design.",
  },
  {
    step: "03",
    title: "Ship",
    week: "Weeks 2–5",
    body: "Build out. Daily Loom updates, weekly demo, you can pull the trigger to deploy any time.",
  },
  {
    step: "04",
    title: "Hand-off",
    week: "Week 6",
    body: "Production deploy, runbook, monitoring, your team trained. Optional ongoing retainer for evolution.",
  },
];

export const availableMarkets = [
  { flag: "🇮🇳", name: "India" },
  { flag: "🇦🇪", name: "UAE" },
  { flag: "🇸🇬", name: "Singapore" },
  { flag: "🇬🇧", name: "UK" },
  { flag: "🇺🇸", name: "USA" },
  { flag: "🇨🇦", name: "Canada" },
  { flag: "🇦🇺", name: "Australia" },
];

export const techStack = [
  "Anthropic Claude",
  "OpenAI",
  "Sarvam",
  "ElevenLabs",
  "Flutter",
  "Spring Boot",
  "PostgreSQL",
  "React",
  "Tailwind",
  "MSG91",
  "Razorpay",
  "Railway",
  "ngrok",
];

export const whyUs = [
  {
    title: "We ship, not pitch.",
    body: "Every conversation ends with code you can run. We don't sell PowerPoint slides.",
  },
  {
    title: "Token economics first.",
    body: "We model your cost-per-message before we model the response. Production AI without a runaway OpenAI bill.",
  },
  {
    title: "Full stack, one team.",
    body: "Mobile + backend + AI + design under one roof. Zero coordination cost between vendors.",
  },
];

export const pricing = [
  {
    name: "Discovery sprint",
    price: "$2,500 USD",
    duration: "1 week",
    body: "End-to-end skeleton, model selection, token economics. Decide go/no-go.",
  },
  {
    name: "Production MVP",
    price: "$15,000 USD",
    duration: "5 weeks",
    body: "Full feature live in production. Includes mobile + backend + AI + design.",
    featured: true,
  },
  {
    name: "Ongoing partnership",
    price: "from $5,000/mo",
    duration: "Monthly retainer",
    body: "Evolution, support, new features.",
  },
];

export const comparison = {
  columns: ["Full-time hire", "Generic agency", "GeekRabit"],
  rows: [
    { label: "Time to first ship", values: ["3+ months", "4+ months", "6 weeks"] },
    { label: "Hard-coded scope", values: ["No", "Yes (rigid SOW)", "Outcome-based"] },
    { label: "AI specialization", values: ["Generalist", "Sometimes", "AI-native"] },
    { label: "Cost (3-month engagement)", values: ["$30K+", "$40K+", "$15K"] },
    { label: "You own the code", values: ["After 90 days", "Usually", "From day 1"] },
  ],
};

export const founder = {
  name: "Abhash Shrivastava",
  initials: "AS",
  note:
    "I built systems at scale for 10+ years before starting GeekRabit. We're small, we're fast, and we ship. If you want a deck and a 6-month timeline, we're not the right fit. If you want a thing that runs, let's talk.",
};

export const company = {
  legalName: "GeekRabit Private Limited",
  cin: "U72900MP2022PTC062322",
  gstin: "23AAJCG9892L1ZU",
  incorporated: "20 August 2022",
  phone: "+91 20-4422 7566",
  emails: [
    { label: "info@geekrabit.com", href: "mailto:info@geekrabit.com" },
    { label: "contact@thiya.in (Thiya product)", href: "mailto:contact@thiya.in" },
  ],
  offices: [
    {
      city: "PUNE OFFICE",
      lines: ["Office No. 14, 2nd Floor", "B.A. Hub, Wagholi", "Pune, Maharashtra 412207", "India"],
    },
    {
      city: "BHOPAL OFFICE",
      lines: ["A-01/204, Atlantis Fortune", "Soumya Katara Hills, Misrod", "Bhopal, MP 462026", "India"],
    },
  ],
};
