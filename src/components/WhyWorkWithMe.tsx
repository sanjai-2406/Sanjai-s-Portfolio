import {
  Code2,
  Network,
  BookOpen,
  Lightbulb,
  Users,
  Target,
} from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";

const reasons = [
  {
    icon: Code2,
    title: "Full Stack Development",
    description:
      "Knowledge of frontend and backend development using React.js, Next.js, Java, Spring Boot, REST APIs, and SQL.",
  },
  {
    icon: Network,
    title: "Hands-On Networking Experience",
    description:
      "Practical exposure to network infrastructure projects, including router and switch installation, rack setup, and access control systems.",
  },
  {
    icon: Lightbulb,
    title: "Problem-Solving Mindset",
    description:
      "Interested in understanding technical challenges, troubleshooting issues, and finding practical solutions.",
  },
  {
    icon: Target,
    title: "Focus on Quality",
    description:
      "Emphasis on readable code, organized application structure, reliable functionality, and attention to detail.",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description:
      "Ready to collaborate with team members, understand project requirements, share ideas, and contribute to team goals.",
  },
  {
    icon: BookOpen,
    title: "Continuous Learning",
    description:
      "Committed to strengthening technical skills, learning new technologies, and adapting to evolving project requirements.",
  },
];

const WhyWorkWithMe = () => {
  return (
    <section
      id="why-me"
      className="section-padding bg-section-alt relative section-divider"
    >
      <div
        className="absolute inset-0 grid-bg opacity-15 pointer-events-none"
        aria-hidden="true"
      />

      <div className="container relative">
        <Reveal>
          <SectionHeader
            label="Why Consider Me"
            align="center"
            title={
              <>
                Skills, experience, and a{" "}
                <span className="text-gradient">mindset to grow</span>
              </>
            }
            description="I bring a combination of full-stack development knowledge, hands-on IT infrastructure experience, and a commitment to continuous learning and professional growth."
          />
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 mb-10 md:mb-14">
          {reasons.map(({ icon: Icon, title, description }, i) => (
            <Reveal key={title} delay={i * 70}>
              <div className="h-full glass-card rounded-2xl p-5 sm:p-6 card-interactive group">
                <div className="w-11 h-11 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-smooth">
                  <Icon className="w-5 h-5 text-accent" />
                </div>

                <h3 className="font-semibold mb-2">{title}</h3>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  {description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <div className="max-w-3xl mx-auto text-center glass-card rounded-2xl sm:rounded-3xl p-6 sm:p-10 border-accent/20">
            <h3 className="text-xl sm:text-2xl font-semibold mb-3">
              Ready for the Next Opportunity?
            </h3>

            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-6">
              I am looking for opportunities where I can apply my technical
              knowledge, contribute to meaningful projects, collaborate with
              experienced professionals, and continue developing my skills.
            </p>

            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-xl px-6 py-3 bg-accent text-accent-foreground font-medium hover:opacity-90 transition-smooth"
            >
              Let's Connect
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default WhyWorkWithMe;