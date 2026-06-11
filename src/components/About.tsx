import { GraduationCap, Award, Code, Heart, Target, Users, Zap } from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";

const stats = [
  { icon: Code, label: "Projects Shipped", value: "6+ Production" },
  { icon: Award, label: "Certifications", value: "Pega CSA/SSA • Java Full Stack" },
  { icon: GraduationCap, label: "Education", value: "B.E. ECE — 7.8 CGPA" },
];

const values = [
  { icon: Heart, title: "User-First Design", text: "Every feature starts with the end user in mind." },
  { icon: Target, title: "Clean Architecture", text: "Maintainable code that scales with your product." },
  { icon: Users, title: "Agile Collaboration", text: "Transparent sprints, demos, and feedback loops." },
  { icon: Zap, title: "End-to-End Ownership", text: "From database to UI — one developer, full accountability." },
];

const About = () => {
  return (
    <section id="about" className="section-padding relative section-divider">
      <div className="container">
        <Reveal>
          <SectionHeader
            label="About Me"
            title={
              <>
                Building the web, <span className="text-gradient">one feature at a time</span>
              </>
            }
            description="Full-stack developer who bridges enterprise Java backends and modern React frontends — delivering products that are fast, reliable, and built to last."
          />
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start mb-12 md:mb-16">
          <Reveal delay={100}>
            <div className="space-y-5 text-muted-foreground leading-relaxed text-base md:text-[1.05rem]">
              <p>
                I'm <span className="text-foreground font-medium">Sanjai Saravanan</span>, a Full Stack Developer based in
                Karur, Tamil Nadu, currently working from Bengaluru. I help startups, agencies, and businesses ship
                web applications that perform under real-world load.
              </p>
              <p>
                I specialize in turning ideas into scalable web applications — combining the reliability of{" "}
                <span className="text-foreground font-medium">Java Spring Boot and Node.js</span> on the backend
                with the modern speed of{" "}
                <span className="text-foreground font-medium">React.js</span> and{" "}
                <span className="text-foreground font-medium">Next.js</span> on the frontend.
              </p>
              <p>
                My background spans headless e-commerce, learning platforms, inventory systems, and enterprise Pega
                applications — giving me a unique blend of startup agility and enterprise-grade discipline.
              </p>
              <p>
                Whether you need a headless e-commerce platform, a custom SPA, LMS, or REST API integration,
                I bring clean architecture, agile delivery, and a tester's eye for quality to every project.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4">
            {stats.map(({ icon: Icon, label, value }, i) => (
              <Reveal key={label} delay={150 + i * 80}>
                <div className="h-full glass-card rounded-2xl p-5 sm:p-6 card-interactive group">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-smooth">
                    <Icon className="w-6 h-6 text-accent" />
                  </div>
                  <div className="text-[11px] text-muted-foreground uppercase tracking-wider mb-1.5 font-mono">
                    {label}
                  </div>
                  <div className="font-semibold text-foreground leading-snug">{value}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={200}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {values.map(({ icon: Icon, title, text }, i) => (
              <div
                key={title}
                className="glass-card rounded-2xl p-5 card-interactive group text-center sm:text-left"
                style={{ animationDelay: `${i * 50}ms` }}
              >
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-3 mx-auto sm:mx-0 group-hover:bg-accent/20 transition-smooth">
                  <Icon className="w-5 h-5 text-accent" />
                </div>
                <h3 className="font-semibold text-sm mb-1">{title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default About;
