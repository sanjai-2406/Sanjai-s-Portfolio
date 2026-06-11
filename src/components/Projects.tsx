import { useState } from "react";
import { ExternalLink, Code2, ShoppingCart, Brain, Package, BookOpen, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import Reveal from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";
import { cn } from "@/lib/utils";
import headlessPreview from "@/assets/project-headless-ecommerce.svg";
import quizPreview from "@/assets/project-quiz-application.svg";
import inventoryPreview from "@/assets/project-inventory-management.svg";
import libraryPreview from "@/assets/project-digital-library.svg";
import lmsPreview from "@/assets/project-learning-management-system.svg";

const categories = ["All", "Full Stack", "E-Commerce", "Education", "Enterprise"] as const;

type Category = (typeof categories)[number];

const projects = [
  {
    icon: ShoppingCart,
    title: "Headless E-Commerce Platform",
    category: "E-Commerce" as Category,
    featured: true,
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
    category: "Education" as Category,
    featured: false,
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
    tags: ["React.js", "Hooks", "CSS3", "JavaScript", "Spring Boot", "JDBC"],
  },
  {
    icon: GraduationCap,
    title: "Learning Management System",
    category: "Education" as Category,
    featured: true,
    period: "Nov 2025 – Feb 2026",
    description:
      "Designed and built a full-stack LMS for managing courses, enrollments, and learner progress — with separate dashboards for admins, instructors, and students, backed by a Spring Boot REST API and a React.js frontend.",
    image: lmsPreview,
    result: "Streamlined course delivery for 500+ enrolled learners with 85% module completion rate.",
    previewLabel: "Course catalog & learner progress dashboard",
    highlights: [
      "Role-based access for admins, instructors, and students",
      "Course modules with lessons, assignments, and progress tracking",
      "Student enrollment, batch management, and certificate workflows",
      "Spring Boot REST APIs with MySQL and a responsive React UI",
    ],
    tags: ["Java", "Spring Boot", "React.js", "MySQL", "REST APIs"],
  },
  {
    icon: Package,
    title: "Inventory Management System",
    category: "Full Stack" as Category,
    featured: false,
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
    category: "Enterprise" as Category,
    featured: false,
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
  const [activeCategory, setActiveCategory] = useState<Category>("All");

  const filtered =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="section-padding relative bg-section-alt section-divider">
      <div className="container">
        <Reveal>
          <SectionHeader
            label="Portfolio"
            title={
              <>
                Featured <span className="text-gradient">Projects</span>
              </>
            }
            description="Production-grade applications I've built — from headless e-commerce and LMS platforms to enterprise case management systems."
          />
        </Reveal>

        <Reveal delay={80}>
          <div className="flex flex-wrap justify-center gap-2 mb-8 md:mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  "px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-smooth border",
                  activeCategory === cat
                    ? "bg-accent text-accent-foreground border-accent shadow-sm"
                    : "bg-background/60 text-muted-foreground border-border hover:border-accent/40 hover:text-foreground",
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="grid gap-5 sm:gap-6 lg:grid-cols-2">
          {filtered.map(({ icon: Icon, title, category, featured, period, description, image, result, previewLabel, highlights, tags }, i) => (
            <Reveal key={title} delay={i * 80}>
              <article className="h-full glass-card rounded-2xl sm:rounded-3xl p-5 sm:p-7 md:p-8 card-interactive group flex flex-col">
                <div className="flex items-start justify-between gap-3 mb-5 sm:mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center group-hover:scale-110 group-hover:bg-accent/20 transition-smooth shrink-0">
                      <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-accent" />
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {featured && (
                        <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-full bg-accent/15 text-accent border border-accent/25">
                          Featured
                        </span>
                      )}
                      <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-full bg-secondary text-muted-foreground">
                        {category}
                      </span>
                    </div>
                  </div>
                  <span className="text-[10px] sm:text-xs font-mono text-muted-foreground bg-secondary px-2.5 sm:px-3 py-1 rounded-full text-right leading-snug shrink-0">
                    {period}
                  </span>
                </div>

                <div className="mb-5 sm:mb-6 rounded-xl sm:rounded-2xl border border-border bg-background/80 overflow-hidden shadow-card group-hover:shadow-elegant transition-smooth">
                  <div className="flex items-center gap-2 px-3 sm:px-4 py-2 sm:py-2.5 bg-muted/50 border-b border-border">
                    <span className="h-2 w-2 sm:h-2.5 sm:w-2.5 rounded-full bg-red-400" />
                    <span className="h-2 w-2 sm:h-2.5 sm:w-2.5 rounded-full bg-amber-400" />
                    <span className="h-2 w-2 sm:h-2.5 sm:w-2.5 rounded-full bg-emerald-400" />
                    <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.2em] sm:tracking-[0.25em] text-muted-foreground ml-1">Live preview</span>
                  </div>
                  <div className="p-3 sm:p-4">
                    <img
                      src={image}
                      alt={`${title} screenshot`}
                      className="h-36 sm:h-40 md:h-44 w-full rounded-lg sm:rounded-xl border border-border object-cover object-top group-hover:scale-[1.02] transition-smooth duration-500"
                      loading="lazy"
                    />
                    <p className="mt-2 sm:mt-3 text-[10px] sm:text-[11px] uppercase tracking-[0.15em] sm:tracking-[0.2em] font-medium text-muted-foreground line-clamp-2">
                      {previewLabel}
                    </p>
                  </div>
                </div>

                <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3 leading-snug">{title}</h3>
                <p className="text-muted-foreground mb-2 sm:mb-3 leading-relaxed text-sm md:text-base">{description}</p>
                <p className="text-xs sm:text-sm font-semibold text-accent mb-4 sm:mb-6">{result}</p>

                <ul className="space-y-1.5 sm:space-y-2 mb-4 sm:mb-6 flex-1">
                  {highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2 text-xs sm:text-sm">
                      <span className="text-accent mt-0.5 shrink-0">▸</span>
                      <span className="text-muted-foreground">{h}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-6">
                  {tags.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] sm:text-xs font-mono px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-md bg-accent/5 text-accent border border-accent/15"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 mt-auto">
                  <Button variant="outline" size="sm" className="flex-1 hover:border-accent/50 rounded-xl h-10 sm:h-9" asChild>
                    <a href="#contact">
                      <ExternalLink className="w-4 h-4 mr-1" /> Case Study
                    </a>
                  </Button>
                  <Button variant="ghost" size="sm" className="hover:text-accent rounded-xl h-10 sm:h-9 sm:w-10 sm:px-0" asChild>
                    <a href="https://github.com/sanjaivsbec" target="_blank" rel="noreferrer" aria-label="View on GitHub">
                      <Code2 className="w-4 h-4" />
                    </a>
                  </Button>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-muted-foreground py-12">No projects in this category yet.</p>
        )}
      </div>
    </section>
  );
};

export default Projects;
