import {
  GraduationCap,
  Award,
  Code,
  Heart,
  Target,
  Users,
  Zap,
} from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";

const stats = [
  {
    icon: Code,
    label: "Technical Background",
    value: "Full Stack Development & Networking",
  },
  {
    icon: Award,
    label: "Certifications",
    value: "Pega CSA/SSA • Java Full Stack",
  },
  {
    icon: GraduationCap,
    label: "Education",
    value: "B.E. Electronics & Communication",
  },
];

const values = [
  {
    icon: Code,
    title: "Full Stack Development",
    text: "Building web applications using React.js, Next.js, Java, Spring Boot, and REST APIs.",
  },
  {
    icon: Target,
    title: "Networking & IT Support",
    text: "Hands-on experience with network installations, routers, switches, rack setup, and access control.",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    text: "Working with team members to understand requirements, troubleshoot issues, and complete tasks.",
  },
  {
    icon: Zap,
    title: "Continuous Learning",
    text: "Strengthening technical skills and exploring new tools, technologies, and industry practices.",
  },
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
                A developer with a{" "}
                <span className="text-gradient">problem-solving mindset</span>
              </>
            }
            description="A technology professional with a background in Full Stack Development and hands-on experience in Network Engineering, focused on solving technical problems and growing through real-world projects."
          />
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start mb-12 md:mb-16">
          <Reveal delay={100}>
            <div className="space-y-5 text-muted-foreground leading-relaxed text-base md:text-[1.05rem]">
              <p>
                I'm{" "}
                <span className="text-foreground font-medium">
                  Sanjai Saravanan
                </span>
                , an engineering graduate with a technical background in Full
                Stack Development and Network Engineering. I am currently
                working as a Network Engineer at C Drive in Coimbatore.
              </p>

              <p>
                My full-stack development skills include{" "}
                <span className="text-foreground font-medium">
                  React.js, Next.js, Java, Spring Boot, REST APIs, and SQL
                </span>
                . I have worked on web application development, including
                building an e-commerce application from scratch.
              </p>

              <p>
                In my current networking role, I gain hands-on experience with
                network infrastructure activities, including{" "}
                <span className="text-foreground font-medium">
                  router and switch installation, rack setup, access control,
                  and security-related systems
                </span>
                .
              </p>

              <p>
                I enjoy learning new technologies, troubleshooting technical
                challenges, and applying my knowledge to practical problems.
                I am looking for opportunities to contribute my skills, take
                on new responsibilities, and continue growing as a technology
                professional.
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

                  <div className="font-semibold text-foreground leading-snug">
                    {value}
                  </div>
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

                <p className="text-xs text-muted-foreground leading-relaxed">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default About;