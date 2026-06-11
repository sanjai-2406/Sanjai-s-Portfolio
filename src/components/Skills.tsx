import { Server, Layout, Database, TestTube2, Wrench, Container } from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";

const skillGroups = [
  {
    icon: Server,
    title: "Backend",
    skills: ["Java", "Spring Boot", "Hibernate (ORM)", "REST APIs", "Spring MVC", "JDBC", "Node.js"],
  },
  {
    icon: Layout,
    title: "Frontend",
    skills: ["React.js", "Next.js", "JavaScript ES6+", "HTML5", "CSS3", "TailWind", "Responsive UI"],
  },
  {
    icon: Database,
    title: "Database",
    skills: ["Oracle SQL", "MySQL", "Schema Design", "Stored Procedures", "ORM Mapping"],
  },
  {
    icon: TestTube2,
    title: "Testing & QA",
    skills: ["Manual Testing", "Test Case Design", "Defect Tracking", "SDLC", "Agile"],
  },
  {
    icon: Wrench,
    title: "Tools & Platforms",
    skills: ["Pega CSA/SSA v8.8", "Git & GitHub", "VS Code", "IntelliJ IDEA", "Medusa.js"],
  },
  {
    icon: Container,
    title: "DevOps",
    skills: ["Docker", "Docker Compose", "CI/CD", "GitHub Actions", "Linux", "Containerization"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="section-padding bg-section-alt relative section-divider">
      <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" aria-hidden />
      <div className="container relative">
        <Reveal>
          <SectionHeader
            label="Expertise"
            align="center"
            title={
              <>
                Tech <span className="text-gradient">Stack</span>
              </>
            }
            description="A versatile toolkit honed across full-stack development, DevOps, enterprise platforms, and quality assurance."
          />
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {skillGroups.map(({ icon: Icon, title, skills }, i) => (
            <Reveal key={title} delay={i * 80}>
              <div className="h-full glass-card rounded-2xl p-5 sm:p-6 card-interactive group">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-smooth">
                    <Icon className="w-5 h-5 text-accent" />
                  </div>
                  <h3 className="text-lg font-semibold">{title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs font-mono px-3 py-1.5 rounded-md bg-background text-secondary-foreground border border-border hover:border-accent/30 hover:text-accent transition-smooth"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
