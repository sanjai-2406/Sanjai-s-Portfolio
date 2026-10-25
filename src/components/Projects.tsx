import { useState } from "react";
import {
  ExternalLink,
  Code2,
  ShoppingCart,
  Brain,
  BookOpen,
  GraduationCap,
  Network,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import Reveal from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";
import { cn } from "@/lib/utils";

import headlessPreview from "@/assets/project-headless-ecommerce.svg";
import quizPreview from "@/assets/project-quiz-application.svg";
import libraryPreview from "@/assets/project-digital-library.svg";
import lmsPreview from "@/assets/project-learning-management-system.svg";

const categories = [
  "All",
  "Full Stack",
  "E-Commerce",
  "Education",
  "Enterprise",
  "Networking",
] as const;

type Category = (typeof categories)[number];

const projects = [
  {
    icon: ShoppingCart,
    title: "Full Stack E-Commerce Platform",
    category: "E-Commerce" as Category,
    featured: true,
    period: "Jan 2026 – Apr 2026",

    description:
      "Designed and developed a full-stack e-commerce application from scratch. Built the frontend, backend functionality, and database integration to support product browsing, shopping cart management, order processing, and a smooth online shopping experience.",

    image: headlessPreview,

    result:
      "Implemented core e-commerce functionality, including product management, cart operations, order processing, and frontend-backend communication.",

    previewLabel: "Custom-built e-commerce application",

    highlights: [
      "Developed the application from scratch",
      "Built responsive user interfaces using React.js and Next.js",
      "Implemented backend functionality and REST API integration",
      "Developed product catalog and shopping cart functionality",
      "Integrated database operations and order management",
      "Worked on checkout and payment-related functionality",
    ],

    tags: [
      "React.js",
      "Next.js",
      "Node.js",
      "REST APIs",
      "Database Integration",
      "Full Stack Development",
    ],
  },

  {
    icon: Brain,
    title: "Interactive Quiz Application",
    category: "Education" as Category,
    featured: false,
    period: "Sep 2025 – Dec 2025",

    description:
      "Developed an interactive quiz application using React.js, featuring dynamically rendered questions, timed challenges, score calculation, and immediate feedback to create an engaging learning experience.",

    image: quizPreview,

    result:
      "Implemented interactive quizzes, countdown timers, score calculation, and result summaries.",

    previewLabel: "Quiz interface and results preview",

    highlights: [
      "Implemented dynamic question rendering using React Hooks",
      "Developed countdown timers and score calculation",
      "Created result summaries with answer breakdowns",
      "Built responsive layouts and interactive components",
    ],

    tags: [
      "React.js",
      "JavaScript",
      "CSS3",
      "Spring Boot",
      "JDBC",
    ],
  },

  {
    icon: GraduationCap,
    title: "Learning Management System",
    category: "Full Stack" as Category,
    featured: true,
    period: "Nov 2025 – Feb 2026",

    description:
      "Developed a full-stack learning management application for course delivery, student enrollment, and learning progress tracking using React.js, Spring Boot, and MySQL.",

    image: lmsPreview,

    result:
      "Implemented course management, student enrollment, progress tracking, and role-based access functionality.",

    previewLabel: "Course management and learning dashboard",

    highlights: [
      "Implemented role-based access for administrators, instructors, and students",
      "Developed course, lesson, and assignment management",
      "Implemented enrollment and learning progress tracking",
      "Integrated Spring Boot REST APIs with MySQL",
    ],

    tags: [
      "Java",
      "Spring Boot",
      "React.js",
      "MySQL",
      "REST APIs",
    ],
  },

  {
    icon: Network,
    title: "Hospital Network & Infrastructure Setup",
    category: "Networking" as Category,
    featured: true,
    period: "2026",

    description:
      "Worked as a Network Engineer under C-Drive Solutions on infrastructure deployment at Avera Heart Hospital, Coimbatore. Responsibilities included network rack setup, network device installation, access control systems, IP cameras, nurse calling systems, and technical troubleshooting.",

    image: libraryPreview,

    result:
      "Contributed to hospital infrastructure deployment through network installation, system configuration, and hardware and software troubleshooting.",

    previewLabel: "Network infrastructure and integrated systems",

    highlights: [
      "Performed network rack setup and structured cabling",
      "Installed network devices, including switches and routers",
      "Assisted with access control installation and configuration",
      "Installed IP cameras and troubleshot connectivity issues",
      "Worked on nurse calling system installation and troubleshooting",
      "Resolved hardware and software issues during deployment",
    ],

    tags: [
      "Networking",
      "Routers & Switches",
      "Rack Setup",
      "Access Control",
      "IP Cameras",
      "Troubleshooting",
    ],
  },

  {
    icon: BookOpen,
    title: "Digital Library Management",
    category: "Enterprise" as Category,
    featured: false,
    period: "Aug 2023 – Nov 2023",

    description:
      "Developed a digital library application using the Pega Platform to manage book catalogs, member registration, issue and return workflows, and fine calculations using business rules and case management.",

    image: libraryPreview,

    result:
      "Implemented structured library workflows and role-based access for different user types.",

    previewLabel: "Digital library management preview",

    highlights: [
      "Implemented book issue, return, and renewal workflows",
      "Configured business rules for fine calculation",
      "Implemented role-based access for members and administrators",
      "Worked with data pages and report definitions",
    ],

    tags: [
      "Pega Platform",
      "BPM",
      "Case Management",
      "CSA",
      "SSA",
    ],
  },
];

const Projects = () => {
  const [activeCategory, setActiveCategory] =
    useState<Category>("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter(
          (project) => project.category === activeCategory
        );

  return (
    <section
      id="projects"
      className="section-padding relative section-divider bg-section-alt"
    >
      <div className="container">
        {/* Section heading */}
        <Reveal>
          <SectionHeader
            label="Technical Experience"
            align="center"
            title={
              <>
                My Technical{" "}
                <span className="text-gradient">Experience</span>
              </>
            }
            description="Explore my experience in full-stack development, enterprise applications, and IT networking. Each section highlights my technical skills, responsibilities, and practical experience."
          />
        </Reveal>

        {/* Category filters */}
        <Reveal delay={80}>
          <div className="mb-8 mt-8 flex flex-wrap justify-center gap-2 md:mb-10">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                aria-pressed={activeCategory === category}
                className={cn(
                  "rounded-full border px-4 py-2 text-sm font-medium transition-all duration-200",
                  activeCategory === category
                    ? "border-accent bg-accent text-accent-foreground shadow-sm"
                    : "border-border bg-background/60 text-muted-foreground hover:border-accent/50 hover:text-foreground"
                )}
              >
                {category}
              </button>
            ))}
          </div>
        </Reveal>

        {/* Experience cards */}
        <div className="grid grid-cols-1 items-stretch gap-6 md:grid-cols-2 xl:gap-8">
          {filteredProjects.map(
            (
              {
                icon: Icon,
                title,
                category,
                featured,
                period,
                description,
                image,
                result,
                previewLabel,
                highlights,
                tags,
              },
              index
            ) => (
              <Reveal key={title} delay={index * 70}>
                <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-lg sm:p-6 md:p-7">
                  {/* Card heading */}
                  <div className="mb-5 flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-accent/20 bg-accent/10 text-accent transition-transform duration-300 group-hover:scale-105">
                      <Icon className="h-6 w-6" />
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="mb-2 flex flex-wrap items-center gap-2">
                        {featured && (
                          <span className="rounded-full border border-accent/25 bg-accent/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-accent">
                            Featured
                          </span>
                        )}

                        <span className="rounded-full bg-secondary px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
                          {category}
                        </span>
                      </div>

                      <h3 className="text-lg font-bold leading-snug sm:text-xl">
                        {title}
                      </h3>

                      <p className="mt-1 text-xs text-muted-foreground">
                        {period}
                      </p>
                    </div>
                  </div>

                  {/* Preview image */}
                  <div className="mb-5 overflow-hidden rounded-xl border border-border bg-background">
                    <div className="flex items-center gap-2 border-b border-border bg-muted/50 px-4 py-2.5">
                      <span className="h-2 w-2 rounded-full bg-red-400" />
                      <span className="h-2 w-2 rounded-full bg-amber-400" />
                      <span className="h-2 w-2 rounded-full bg-emerald-400" />

                      <span className="ml-2 text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
                        {previewLabel}
                      </span>
                    </div>

                    <div className="p-3">
                      <img
                        src={image}
                        alt={`${title} preview`}
                        className="h-40 w-full rounded-lg border border-border object-cover object-center transition-transform duration-500 group-hover:scale-[1.02] sm:h-48"
                        loading="lazy"
                      />
                    </div>
                  </div>

                  {/* Overview */}
                  <div className="mb-5">
                    <h4 className="mb-2 text-sm font-semibold">
                      Overview
                    </h4>

                    <p className="text-sm leading-7 text-muted-foreground">
                      {description}
                    </p>

                    <div className="mt-4 rounded-lg border border-border/70 bg-secondary/30 p-3">
                      <p className="text-sm leading-6 text-foreground/80">
                        {result}
                      </p>
                    </div>
                  </div>

                  {/* Key responsibilities */}
                  <div className="mb-5">
                    <h4 className="mb-3 text-sm font-semibold">
                      Key Responsibilities & Highlights
                    </h4>

                    <ul className="space-y-2.5">
                      {highlights.map((highlight) => (
                        <li
                          key={highlight}
                          className="flex items-start gap-3 text-sm leading-6 text-muted-foreground"
                        >
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />

                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies and skills */}
                  <div className="mb-6 mt-auto border-t border-border pt-4">
                    <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      Technologies & Skills
                    </h4>

                    <div className="flex flex-wrap gap-2">
                      {tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-md border border-accent/15 bg-accent/5 px-2.5 py-1.5 text-xs font-medium text-accent"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action buttons */}
                  <div className="flex flex-col gap-3 border-t border-border pt-4 sm:flex-row">
                    <Button
                      variant="outline"
                      className="h-10 flex-1 rounded-xl"
                      asChild
                    >
                      <a href="#contact">
                        Contact Me
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </a>
                    </Button>

                    <Button
                      variant="ghost"
                      className="h-10 rounded-xl hover:text-accent sm:w-11 sm:px-0"
                      asChild
                    >
                      <a
                        href="https://github.com/sanjai-2406"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Visit GitHub profile for ${title}`}
                      >
                        <Code2 className="h-4 w-4" />

                        <span className="ml-2 sm:hidden">
                          GitHub Profile
                        </span>
                      </a>
                    </Button>
                  </div>
                </article>
              </Reveal>
            )
          )}
        </div>

        {/* Empty state */}
        {filteredProjects.length === 0 && (
          <p className="py-12 text-center text-muted-foreground">
            No items are available in this category.
          </p>
        )}
      </div>
    </section>
  );
};

export default Projects;