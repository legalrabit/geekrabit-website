// All editable site content lives here.
export const site = {
  brand: "GeekRabit",
  tagline: "We ship AI features that actually run in production.",
  sub: "GenAI on the Java and Spring Boot platforms you already run, on AWS. Retrieval-augmented generation on Amazon Bedrock, LLM features inside existing services, guardrails, evaluation and cost control. For product teams and agencies that need it to work after launch, not just in the demo.",
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
  { value: 12, suffix: "+", label: "years building for banks, payments and trading" },
  { value: 2, label: "AWS certifications: GenAI Developer Pro · Solutions Architect" },
  { value: 0.05, prefix: "~₹", decimals: 2, label: "/ AI message measured with prompt caching" },
  { text: "Amazon Bedrock · Claude · GPT" },
  { text: "Java · Spring Boot · Flutter · React" },
];

export const marketsBar = [
  "JAVA · SPRING BOOT · AWS BEDROCK",
  "RAG · GUARDRAILS · EVALUATION",
  "FIXED-SCOPE ENGAGEMENTS",
  "USD · GBP · EUR · INR INVOICING",
  "IST · CET · EST OVERLAP HOURS",
];

export const services = [
  {
    icon: "BookOpenText",
    title: "Enterprise RAG on AWS Bedrock",
    body: "Retrieval-augmented generation over your documents using Amazon Bedrock Knowledge Bases. Chunking, retrieval and reranking chosen from measured results on a test set, not defaults.",
    subject: "Tell me about Enterprise RAG on AWS Bedrock",
  },
  {
    icon: "Cog",
    title: "LLM features inside Spring Boot",
    body: "Add Bedrock, Claude or GPT capabilities to the Java services you already run. No rewrite, no second platform. Spring AI or LangChain4j, wired into your auth, data and deployment.",
    subject: "Tell me about LLM features inside Spring Boot",
  },
  {
    icon: "ShieldCheck",
    title: "Production readiness for AI",
    body: "Guardrails, evaluation pipelines, observability, prompt caching and cost per request. The layer that turns a pilot into a service your team can run and your finance team can forecast.",
    subject: "Tell me about production readiness for AI features",
  },
  {
    icon: "MessageSquareText",
    title: "Conversational workflows",
    body: "WhatsApp and chat automation with multilingual intent extraction, confirmation loops and human-in-the-loop fallbacks. Proven on mixed Hindi and English messages in Thiya.",
    subject: "Tell me about conversational workflows",
  },
  {
    icon: "Smartphone",
    title: "End-to-end product delivery",
    body: "When you need the whole thing built: Spring Boot backend, React web app, Flutter mobile app for iOS and Android, PostgreSQL and AWS infrastructure, from one senior engineer.",
    subject: "Tell me about end-to-end product delivery",
  },
  {
    icon: "ClipboardCheck",
    title: "GenAI architecture review",
    body: "A one-week audit of a stalled pilot: model and provider choice, RAG versus fine-tuning, token economics, security review and a written plan to production.",
    subject: "Tell me about a GenAI architecture review",
  },
];

export const caseStudy = {
  eyebrow: "PROOF OF WORK",
  title: "Thiya — a commerce platform for recurring local services, built end to end.",
  paragraphs: [
    "Water, milk, tiffin and laundry vendors run hundreds of daily deliveries and monthly accounts on paper and WhatsApp. Thiya gives them a business app for subscriptions, daily delivery runs, worker assignment, invoices with UPI payment links and deposit tracking.",
    "The customer side is WhatsApp. A message like 'kal dudh nahi bhejna' (Hindi for 'don't send milk tomorrow') goes through an LLM layer that extracts the intent, confirms it back to the customer, and only then updates the vendor's orders. Mixed Hindi and English, non-technical users, real money. Accuracy is tracked against a 48-case evaluation set, not assumed.",
    "One engineer, the whole stack: Spring Boot backend with 12 domain modules, Flutter app for Android and iOS, React admin portal, PostgreSQL, WhatsApp Business API, Anthropic Claude and OpenAI models, deployed on AWS. Currently in pilot with its first vendor.",
  ],
  stats: [
    { value: 12, label: "backend modules" },
    { value: 9, label: "service categories" },
    { value: 4, label: "user surfaces" },
    { value: 48, label: "NLP eval cases" },
  ],
};

export const process = [
  {
    step: "01",
    title: "Discovery",
    week: "Week 0",
    body: "One-hour call. We map the AI feature you want to ship, decide model and provider (Bedrock, Claude, GPT or open-source), calculate token economics, and agree on the demo you'll see at the end.",
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
  "Java",
  "Spring Boot",
  "Amazon Bedrock",
  "AWS",
  "Anthropic Claude",
  "OpenAI",
  "Spring AI",
  "LangChain4j",
  "Apache Kafka",
  "PostgreSQL",
  "Flutter",
  "React",
  "WhatsApp Business API",
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
    title: "Senior hands, no handoffs.",
    body: "Backend, mobile, web and the AI layer from one senior engineer who has shipped in regulated environments. Zero coordination cost, zero junior surprises.",
  },
];

export const pricing = [
  {
    name: "RAG audit",
    price: "$2,500 USD",
    duration: "1 week",
    body: "Your documents, your questions, a measured retrieval baseline on Amazon Bedrock and a written plan. Decide go/no-go with numbers.",
  },
  {
    name: "Bedrock integration sprint",
    price: "$5,000 USD",
    duration: "2 weeks",
    body: "One LLM feature wired into your existing Spring Boot service, with guardrails, evaluation and cost tracking, running in your AWS account.",
    featured: true,
  },
  {
    name: "Production MVP",
    price: "$15,000 USD",
    duration: "5 weeks",
    body: "A full feature or product live in production: backend, web or mobile, the AI layer, monitoring and hand-off. Ongoing partnership from $5,000/mo after.",
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
    "I spent 12+ years building backend systems for global banks, payment processors and trading platforms before starting GeekRabit. AWS Certified Generative AI Developer – Professional and Solutions Architect – Associate. We're small and we ship. If you want a deck and a six-month timeline, we're not the right fit. If you want a thing that runs in production, let's talk.",
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
