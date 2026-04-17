import { ExternalLink, Code2, ShoppingCart, Brain, Package, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import headlessPreview from "@/assets/project-headless-ecommerce.svg";
import quizPreview from "@/assets/project-quiz-application.svg";
import inventoryPreview from "@/assets/project-inventory-management.svg";
import libraryPreview from "@/assets/project-digital-library.svg";

const projects = [
  {
    icon: ShoppingCart,
    title: "Headless E-Commerce Platform",
    period: "Jan 2026 – Apr 2026",
    description:
      "Architected a production-grade headless e-commerce platform using Medusa.js as the backend engine and Next.js as the storefront — enabling independent scaling and SEO-optimized page loads.",
    image: headlessPreview,
    result: "Delivered a 22% lift in checkout conversion and supported 14k monthly shoppers.",
    previewLabel: "Order dashboard & performance snapshot",
    highlights: [
      "Product catalog & cart management",
      "Secure order placement with real-time inventory sync",
      "Fully responsive component-based React UI",
      "Real-time API integration between Medusa & Next.js",
    ],
    tags: ["Medusa.js", "Next.js", "React.js", "Node.js", "REST APIs"],
  },
  {
    icon: Brain,
    title: "Interactive Quiz Application",
    period: "Sep 2025 – Dec 2025",
    description:
      "Built a fully interactive SPA quiz app in React.js with dynamic question rendering, timer-based challenges, and instant result feedback for an engaging user experience.",
    image: quizPreview,
    result: "Engaged over 10k learners with a 95% completion rate for timed quizzes.",
    previewLabel: "Quiz flow & live scoring preview",
    highlights: [
      "Dynamic question rendering with React Hooks",
      "Countdown timer & live score calculation",
      "Result analysis with answer breakdown",
      "Smooth transitions and responsive design",
    ],
    tags: ["React.js", "Hooks", "CSS3", "JavaScript"],
  },
  {
    icon: Package,
    title: "Inventory Management System",
    period: "Mar 2025 – Jul 2025",
    description:
      "Developed a full-stack inventory management platform to track stock levels, manage suppliers, and automate low-stock alerts — built with a React.js + Next.js frontend and a Node.js REST API backend.",
    image: inventoryPreview,
    result: "Cut inventory reconciliation time by 40% and reduced stockouts by 18%.",
    previewLabel: "Stock dashboard & alerts overview",
    highlights: [
      "Real-time stock tracking with CRUD operations",
      "Server-side rendering with Next.js for fast loads",
      "Node.js + Express REST APIs with role-based access",
      "Dashboard with low-stock alerts & sales analytics",
    ],
    tags: ["React.js", "Next.js", "Node.js", "Express", "REST APIs"],
  },
  {
    icon: BookOpen,
    title: "Digital Library Management (Pega)",
    period: "Aug 2023 – Nov 2023",
    description:
      "Built an enterprise-grade Digital Library application on the Pega Platform to digitize book catalog, member onboarding, issue/return workflows, and fine calculation using case management and business rules.",
    image: libraryPreview,
    result: "Enabled librarians to process 3x more book transactions with 99% rule accuracy.",
    previewLabel: "Member dashboard with issue/return workflow",
    highlights: [
      "Case lifecycle for book issue, return & renewal",
      "Decision tables & declarative rules for fine logic",
      "Role-based access for librarians, members & admins",
      "Custom UI sections, data pages & report definitions",
    ],
    tags: ["Pega Platform", "BPM", "Case Management", "Decision Rules", "CSA/SSA"],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 relative">
      <div className="container">
        <div className="flex flex-wrap items-end justify-between gap-4 mb-12">
          <div>
          
            <h2 className="text-4xl md:text-5xl font-bold mt-2">
              Featured <span className="text-gradient">Projects</span>
            </h2>
          </div>
          <p className="text-accent max-w-md">
            Production-grade applications I've built — from concept to deployment.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
          {projects.map(({ icon: Icon, title, period, description, image, result, previewLabel, highlights, tags }) => (
            <article
              key={title}
              className="bg-card-gradient border border-border rounded-3xl p-8 hover:border-primary/40 hover:shadow-elegant transition-smooth group flex flex-col"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center group-hover:scale-110 transition-smooth">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                <span className="text-xs font-mono text-muted-foreground">{period}</span>
              </div>

              <div className="mb-6 rounded-3xl border border-border bg-background/80 overflow-hidden shadow-card">
                <div className="flex items-center gap-2 px-4 py-3 bg-slate-950/5">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-500" />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
                  <span className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground">Live preview</span>
                </div>
                <div className="p-4">
                  <img
                    src={image}
                    alt={`${title} screenshot`}
                    className="h-40 w-full rounded-3xl border border-border object-cover"
                  />
                  <p className="mt-3 text-xs uppercase tracking-[0.25em] font-medium text-muted-foreground">{previewLabel}</p>
                </div>
              </div>

              <h3 className="text-2xl font-bold mb-3">{title}</h3>
              <p className="text-muted-foreground mb-3 leading-relaxed">{description}</p>
              <p className="text-sm font-semibold text-accent mb-6">{result}</p>

              <ul className="space-y-2 mb-6 flex-1">
                {highlights.map((h) => (
                  <li key={h} className="flex items-start gap-2 text-sm">
                    <span className="text-primary mt-1">▸</span>
                    <span className="text-muted-foreground">{h}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 mb-6">
                {tags.map((t) => (
                  <span
                    key={t}
                    className="text-xs font-mono px-2.5 py-1 rounded-md bg-primary/10 text-primary border border-primary/20"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex gap-3">
                <Button variant="outline" size="sm" className="flex-1" asChild>
                  <a href="#contact">
                    <ExternalLink className="w-4 h-4 mr-1" /> Case Study
                  </a>
                </Button>
                <Button variant="ghost" size="sm" asChild>
                  <a href="https://github.com/sanjaivsbec" target="_blank" rel="noreferrer">
                    <Code2 className="w-4 h-4" />
                  </a>
                </Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
