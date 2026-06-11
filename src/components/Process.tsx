import { Search, PenTool, Code2, Rocket } from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";

const steps = [
  {
    icon: Search,
    step: "01",
    title: "Discovery & Planning",
    description:
      "We align on goals, users, and success metrics. I map requirements, define scope, and propose a realistic timeline before writing a single line of code.",
    deliverables: ["Requirement analysis", "Tech stack recommendation", "Project roadmap"],
  },
  {
    icon: PenTool,
    step: "02",
    title: "Design & Architecture",
    description:
      "I design clean UI flows and a scalable backend structure — REST API contracts, database schema, and component architecture that keeps the project maintainable.",
    deliverables: ["System architecture", "API design", "UI wireframes"],
  },
  {
    icon: Code2,
    step: "03",
    title: "Build & Test",
    description:
      "Agile development with regular updates. Features ship in sprints with peer-reviewed code, manual testing, and performance checks at every milestone.",
    deliverables: ["Sprint demos", "Code reviews", "QA & bug fixes"],
  },
  {
    icon: Rocket,
    step: "04",
    title: "Launch & Support",
    description:
      "Deployment, documentation, and a smooth handoff. I ensure your product is production-ready with monitoring setup and post-launch support options.",
    deliverables: ["Deployment", "Documentation", "Post-launch support"],
  },
];

const Process = () => {
  return (
    <section id="process" className="section-padding relative section-divider">
      <div className="container">
        <Reveal>
          <SectionHeader
            label="How I Work"
            align="center"
            title={
              <>
                A proven <span className="text-gradient">delivery process</span>
              </>
            }
            description="From first call to production launch — a structured, transparent workflow that keeps projects on track and quality high."
          />
        </Reveal>

        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-5 md:gap-6">
          {steps.map(({ icon: Icon, step, title, description, deliverables }, i) => (
            <Reveal key={title} delay={i * 90}>
              <div className="relative h-full glass-card rounded-2xl p-5 sm:p-6 card-interactive group">
                <span className="absolute top-4 right-4 text-4xl font-extrabold text-accent/10 group-hover:text-accent/20 transition-smooth select-none">
                  {step}
                </span>
                <div className="w-12 h-12 rounded-xl bg-accent-gradient flex items-center justify-center mb-5 shadow-sm group-hover:scale-110 transition-smooth">
                  <Icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-semibold mb-2 pr-8">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{description}</p>
                <ul className="space-y-1.5 pt-3 border-t border-border/80">
                  {deliverables.map((d) => (
                    <li key={d} className="text-xs text-muted-foreground flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-accent shrink-0" />
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
