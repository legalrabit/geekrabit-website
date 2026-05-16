// All editable site content lives here.
export const site = {
  brand: "GeekRabit",
  tagline: "We ship AI features that actually run in production.",
  sub: "WhatsApp NLP. Voice agents. Vision AI. Native mobile. Microservices. From idea to live in 6 weeks.",
  location: "Bengaluru + Remote",
  email: "hello@geekrabit.com",
  linkedin: "https://www.linkedin.com/company/geekrabit",
  github: "https://github.com/geekrabit",
  twitter: "https://x.com/geekrabit",
};

export const nav = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "Approach", href: "#approach" },
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

export const services = [
  {
    icon: "💬",
    title: "WhatsApp NLP & Automation",
    body: "Inbound intent extraction, smart replies, multilingual (Hindi + English + 6 more). MSG91 + Meta Business API. Production-tuned token cost.",
  },
  {
    icon: "🎙️",
    title: "Voice AI Agents",
    body: "Sarvam + ElevenLabs voice flows for Indian-language users. Vendor command interfaces, consumer voice search, IVR replacement.",
  },
  {
    icon: "👁️",
    title: "Vision AI",
    body: "Claude Vision + GPT-4V for document OCR, UPI screenshot parsing, KYC verification, product photo enhancement.",
  },
  {
    icon: "📱",
    title: "Native Mobile Apps",
    body: "Flutter for iOS + Android with a futuristic design system. Premium feel, 60fps, under 25 MB APK. Day-one localization.",
  },
  {
    icon: "⚙️",
    title: "Backend Microservices",
    body: "Spring Boot modular monolith → microservices migration path. JWT portal-scoped auth, event-driven domain modules, Flyway-managed schema.",
  },
  {
    icon: "📊",
    title: "AI Strategy & Audit",
    body: "Cut your token bill by 90% with prompt caching, RAG vs. fine-tune decisions, model selection, observability setup.",
  },
];

export const caseStudy = {
  eyebrow: "OUR FLAGSHIP PRODUCT",
  title: "Thiya — WhatsApp-first vendor automation.",
  paragraphs: [
    "Indian neighborhood vendors run their whole business on WhatsApp. We built the system that turns those messages into structured operations — automatically.",
    "Consumer texts 'kal dudh nahi bhejna' on WhatsApp. Our NLP extracts the intent (skip · tomorrow · milk), updates the vendor's subscription, sends a confirmation back. Zero human in the loop. ~250ms end-to-end.",
    "Built end-to-end in 6 weeks: Flutter mobile app for the vendor, React admin portal, Spring Boot backend with 12 domain modules, MSG91 + Anthropic Claude integration, payment gateway, invoice PDF generation, subscription billing, multi-tenant geographic discovery.",
  ],
  stats: [
    { value: "12", label: "backend modules" },
    { value: "11", label: "NLP intents" },
    { value: "4", label: "user surfaces" },
    { value: "6 wks", label: "to MVP" },
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

export const founder = {
  name: "Abhash Shrivastava",
  initials: "AS",
  note:
    "I built systems at scale for 8 years before starting GeekRabit. We're small, we're fast, and we ship. If you want a deck and a 6-month timeline, we're not the right fit. If you want a thing that runs, let's talk.",
};
