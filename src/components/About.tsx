import { GraduationCap, Award, Code } from "lucide-react";

const stats = [
  { icon: Code, label: "Projects Shipped", value: "5+ Production" },
  { icon: Award, label: "Certifications", value: "Pega CSA/SSA • Java Full Stack" },
  { icon: GraduationCap, label: "Education", value: "B.E. ECE — 7.8 CGPA" },
];

const About = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-6">
              Building the web, <span className="text-gradient">one feature at a time</span>
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I'm an enthusiastic Full Stack Developer based in Karur, Tamil Nadu.
              </p>
              <p>
                I specialize in turning ideas into scalable web applications — combining the reliability of <span className="text-primary">Java Spring Boot and Node.js</span> on the backend with the modern speed of <span className="text-primary">React.js</span> and <span className="text-primary">Next.js</span> on the frontend.
              </p>
              <p>
                Whether you need a headless e-commerce platform, a custom SPA, or a REST API integration, I bring clean architecture, agile delivery, and a tester's eye for quality to every project.
              </p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {stats.map(({ icon: Icon, label, value }) => (
              <div
                key={label}
                className="bg-card-gradient border border-border rounded-2xl p-6 hover:border-primary/40 transition-smooth shadow-card group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-smooth">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
                  {label}
                </div>
                <div className="font-semibold text-foreground">{value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
