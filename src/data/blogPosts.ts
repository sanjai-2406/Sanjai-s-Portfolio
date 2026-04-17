export type BlogPost = {
  title: string;
  date: string;
  slug: string;
  image: string;
  readingTime: string;
  excerpt: string;
  intro: string;
  paragraphs: string[];
  keyPoints: string[];
};

export const blogPosts: BlogPost[] = [
  {
    title: "How I build performant Java + React products",
    date: "Apr 2026",
    slug: "performant-java-react-products",
    image: "/blog/product-performance.svg",
    readingTime: "6 min read",
    excerpt:
      "A practical guide to structuring Spring Boot APIs and React frontends for fast load times, resilient deployment, and reduced engineering debt.",
    intro:
      "Performance should be built into your Java + React stack from day one, not retrofitted after launch.",
    paragraphs: [
      "I share a real-world approach to splitting responsibility cleanly between Spring Boot services and client-side rendering, keeping bundles smaller and APIs fast.",
      "We cover server-side caching, lazy-loaded React routes, and lightweight data contracts that prevent over-fetching while keeping UX snappy.",
      "The result is a maintainable full stack product that storms through load tests and gives users the impression of instant responsiveness.",
    ],
    keyPoints: [
      "Measure performance from the first sprint using real user monitoring.",
      "Keep the backend API contract small and cacheable to reduce latency.",
      "Lazy load React routes and assets so users see interactive UI faster.",
    ],
  },
  {
    title: "Designing enterprise dashboards that reduce support demand",
    date: "Mar 2026",
    slug: "enterprise-dashboards-support-demand",
    image: "/blog/enterprise-dashboard.svg",
    readingTime: "5 min read",
    excerpt:
      "Actionable patterns for admin UX, data visibility, and workflow automation that help teams solve problems before they become tickets.",
    intro:
      "Too many dashboards are built for reporting, not for letting teams take action without asking for help.",
    paragraphs: [
      "I discuss how to prioritize metrics that matter, how to avoid clutter, and how to present data with clear next steps.",
      "You’ll see examples of table design, error handling, and intelligent defaults that reduce confusion and increase trust.",
      "Good dashboard design means engineering fewer support calls, not just showing more charts.",
    ],
    keyPoints: [
      "Surface the most actionable KPI first, then use progressive disclosure for detailed metrics.",
      "Use row-level actions so users can resolve issues without leaving the dashboard.",
      "Automate alert thresholds and error states to avoid unnecessary manual triage.",
    ],
  },
  {
    title: "Why headless commerce is the right fit for scalable stores",
    date: "Feb 2026",
    slug: "headless-commerce-scalable-stores",
    image: "/blog/headless-commerce.svg",
    readingTime: "6 min read",
    excerpt:
      "Clear rules for choosing headless architecture, avoiding fragile integrations, and keeping commerce speed high across channels.",
    intro:
      "Headless commerce frees your storefront to evolve, but only if you pair it with smart APIs and a disciplined integration plan.",
    paragraphs: [
      "Learn when headless commerce pays off, and when it adds unnecessary complexity for small catalogs or simple checkout flows.",
      "I walk through a practical stack that keeps the checkout fast, the content flexible, and the CMS boundaries clean.",
      "This article helps you choose the right level of decoupling for growth without sacrificing stability.",
    ],
    keyPoints: [
      "Choose headless when your storefront needs multiple channels or custom UI experiences.",
      "Keep the API layer thin and reusable across mobile, web, and POS systems.",
      "Design fallbacks for search and checkout so the store stays reliable under load.",
    ],
  },
  {
    title: "Shipping features faster with stronger API design",
    date: "Jan 2026",
    slug: "shipping-faster-with-api-design",
    image: "/blog/api-design.svg",
    readingTime: "5 min read",
    excerpt:
      "A checklist for API versioning, contract-first documentation, and backend-first planning that keeps products stable while scaling quickly.",
    intro:
      "A stronger API is the simplest way to speed up delivery across teams and reduce wasted rework.",
    paragraphs: [
      "This post covers how to design APIs that let frontend and backend teams move independently while staying aligned on behavior.",
      "We explore stable error shapes, discoverability with clear docs, and how API contracts save hours during handoffs.",
      "When the API is reliable, your product team stops fixing the integration and starts shipping real value.",
    ],
    keyPoints: [
      "Document request/response contracts before you write code.",
      "Version APIs intentionally so older clients keep working during upgrades.",
      "Use consistent error codes and validation messages to shorten debugging cycles.",
    ],
  },
];
