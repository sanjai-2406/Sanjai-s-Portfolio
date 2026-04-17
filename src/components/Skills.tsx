import { Server, Layout, Database, TestTube2, Wrench } from "lucide-react";

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
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-secondary/20 relative">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4">
            Tech <span className="text-gradient">Stack</span>
          </h2>
          <p className="text-muted-foreground">
            A versatile toolkit honed across full-stack development, enterprise platforms, and quality assurance.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map(({ icon: Icon, title, skills }) => (
            <div
              key={title}
              className="bg-card-gradient border border-border rounded-2xl p-6 hover:border-primary/40 hover:shadow-elegant transition-smooth group"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-smooth">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">{title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs font-mono px-3 py-1.5 rounded-md bg-secondary text-secondary-foreground border border-border"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
