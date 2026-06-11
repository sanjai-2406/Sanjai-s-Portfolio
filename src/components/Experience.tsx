import { Briefcase, GraduationCap, BadgeCheck } from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";

const timeline = [
  {
    type: "work",
    icon: Briefcase,
    title: "Full Stack Developer",
    org: "Current Role",
    period: "May 2025 – Present",
    points: [
      "Developing full-stack features using React.js and Java Spring Boot",
      "Designing and consuming REST APIs to connect frontend & backend",
      "Participating in Agile sprints, daily standups, and peer code reviews",
      "Managing source code with Git and collaborating on pull requests",
      "Contributing to manual testing cycles and defect tracking",
    ],
  },
  {
    type: "education",
    icon: GraduationCap,
    title: "B.E. Electronics & Communication Engineering",
    org: "V.S.B Engineering College, Karur",
    period: "Aug 2020 – May 2024 • CGPA 7.8/10",
    points: [
      "Coursework: Data Structures, Algorithms, DBMS, OOP, Computer Networks",
      "Built strong analytical and problem-solving fundamentals",
    ],
  },
  {
    type: "cert",
    icon: BadgeCheck,
    title: "Java Full Stack Development",
    org: "Qspiders",
    period: "Mar – Nov 2025",
    points: ["HTML, CSS, JS, React, Java, SQL, Hibernate, Spring Boot, Manual Testing"],
  },
  {
    type: "cert",
    icon: BadgeCheck,
    title: "Pega Certified System Architect (CSA & SSA) v8.8",
    org: "Pegasystems",
    period: "Mar 2023 – Feb 2024",
    points: ["Enterprise app dev, case management & business rule engine"],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="section-padding relative">
      <div className="container">
        <Reveal>
          <SectionHeader
            label="Career"
            align="center"
            title={
              <>
                Experience & <span className="text-gradient">Credentials</span>
              </>
            }
            description="A track record of learning, building, and delivering across enterprise and startup contexts."
          />
        </Reveal>

        <div className="max-w-3xl mx-auto relative px-1 sm:px-0">
          <div className="absolute left-[1.125rem] sm:left-6 top-0 bottom-0 w-px bg-gradient-to-b from-accent/60 via-border to-transparent" aria-hidden />

          <div className="space-y-6 sm:space-y-8">
            {timeline.map((item, idx) => {
              const Icon = item.icon;
              return (
                <Reveal key={idx} delay={idx * 80}>
                  <div className="relative pl-12 sm:pl-16 md:pl-20">
                    <div className="absolute left-0 top-0 w-9 h-9 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl glass-card border-2 border-accent/30 flex items-center justify-center shadow-card">
                      <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-accent" />
                    </div>
                    <div className="glass-card rounded-xl sm:rounded-2xl p-4 sm:p-6 card-interactive">
                      <div className="flex flex-col sm:flex-row sm:flex-wrap sm:items-baseline sm:justify-between gap-1 sm:gap-2 mb-1">
                        <h3 className="text-base sm:text-lg font-semibold leading-snug">{item.title}</h3>
                        <span className="text-[10px] sm:text-xs font-mono text-muted-foreground bg-secondary px-2 sm:px-2.5 py-1 rounded-full w-fit">
                          {item.period}
                        </span>
                      </div>
                      <p className="text-accent text-xs sm:text-sm font-medium mb-2 sm:mb-3">{item.org}</p>
                      <ul className="space-y-1.5">
                        {item.points.map((p) => (
                          <li key={p} className="text-xs sm:text-sm text-muted-foreground flex gap-2">
                            <span className="text-accent shrink-0">▸</span>
                            <span>{p}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
