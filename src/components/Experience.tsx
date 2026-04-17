import { Briefcase, GraduationCap, BadgeCheck } from "lucide-react";

const timeline = [
  {
    type: "work",
    icon: Briefcase,
    title: "Full Stack Developer",
    org: "",
    period: "Feb 2025 – Present",
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
    <section id="experience" className="py-24 bg-secondary/20 relative">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
       
          <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4">
            Experience & <span className="text-gradient">Credentials</span>
          </h2>
        </div>

        <div className="max-w-3xl mx-auto relative">
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-primary/60 via-border to-transparent" aria-hidden />

          <div className="space-y-8">
            {timeline.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="relative pl-16 md:pl-20">
                  <div className="absolute left-0 top-0 w-12 h-12 rounded-xl bg-card border-2 border-primary/40 flex items-center justify-center shadow-glow">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <div className="bg-card-gradient border border-border rounded-2xl p-6 hover:border-primary/40 transition-smooth">
                    <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                      <h3 className="text-lg font-semibold">{item.title}</h3>
                      <span className="text-xs font-mono text-muted-foreground">{item.period}</span>
                    </div>
                    <p className="text-primary text-sm mb-3">{item.org}</p>
                    <ul className="space-y-1.5">
                      {item.points.map((p) => (
                        <li key={p} className="text-sm text-muted-foreground flex gap-2">
                          <span className="text-primary">▸</span>
                          <span>{p}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
