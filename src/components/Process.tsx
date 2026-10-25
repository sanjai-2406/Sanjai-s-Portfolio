import {
  Code2,
  Network,
  Database,
  BrainCircuit,
} from "lucide-react";

import Reveal from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";

const strengths = [
  {
    icon: Code2,
    step: "01",
    title: "Full Stack Development",
    description:
      "I have experience developing web applications using React.js, Next.js, Java, Spring Boot, and REST APIs. I focus on writing clean, maintainable code and building responsive user interfaces.",
    skills: ["React.js & Next.js", "Java & Spring Boot", "REST APIs"],
  },
  {
    icon: Network,
    step: "02",
    title: "Networking & IT Infrastructure",
    description:
      "My hands-on experience includes network device installation, switch configuration, router setup, rack installation, access control systems, and on-site technical troubleshooting.",
    skills: ["Routers & Switches", "LAN/WAN & TCP/IP", "IT Infrastructure"],
  },
  {
    icon: Database,
    step: "03",
    title: "Database & Backend",
    description:
      "I work with relational databases and backend technologies to build reliable application functionality, manage data, and integrate frontend applications with backend services.",
    skills: ["MySQL & SQL", "Hibernate", "Backend Development"],
  },
  {
    icon: BrainCircuit,
    step: "04",
    title: "Problem Solving & Continuous Learning",
    description:
      "I enjoy troubleshooting technical issues, learning new technologies, and improving my skills. I am eager to take on new challenges, collaborate with teams, and contribute to organizational goals.",
    skills: ["Technical Troubleshooting", "Analytical Thinking", "Adaptability"],
  },
];

const Process = () => {
  return (
    <section
      id="process"
      className="section-padding relative section-divider"
    >
      <div className="container">
        <Reveal>
          <SectionHeader
            label="Why Hire Me"
            align="center"
            title={
              <>
                Skills that create{" "}
                <span className="text-gradient">value</span>
              </>
            }
            description="I bring experience in full-stack development and IT networking, a practical approach to solving technical problems, and a strong willingness to learn and grow."
          />
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4 md:gap-6">
          {strengths.map(
            ({ icon: Icon, step, title, description, skills }, i) => (
              <Reveal key={title} delay={i * 90}>
                <div className="group relative h-full rounded-2xl glass-card card-interactive p-5 sm:p-6">
                  <span className="absolute right-4 top-4 select-none text-4xl font-extrabold text-accent/10 transition-smooth group-hover:text-accent/20">
                    {step}
                  </span>

                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-accent-gradient shadow-sm transition-smooth group-hover:scale-110">
                    <Icon className="h-6 w-6 text-primary-foreground" />
                  </div>

                  <h3 className="mb-3 pr-8 text-lg font-semibold">
                    {title}
                  </h3>

                  <p className="mb-5 text-sm leading-relaxed text-muted-foreground">
                    {description}
                  </p>

                  <div className="flex flex-wrap gap-2 border-t border-border/80 pt-4">
                    {skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-border/80 bg-secondary/50 px-2.5 py-1 text-xs text-muted-foreground"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            )
          )}
        </div>

        <Reveal delay={200}>
          <div className="mt-12 text-center">
            <p className="mx-auto max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
              I am looking for opportunities where I can apply my existing
              technical skills, learn from experienced professionals, and
              contribute to meaningful business and technology goals.
            </p>

            <a
              href="#contact"
              className="mt-6 inline-flex items-center justify-center rounded-xl bg-primary px-6 py-3 font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              Let's Connect
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Process;