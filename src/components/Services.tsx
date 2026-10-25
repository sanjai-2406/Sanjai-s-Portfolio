import {
  Code,
  Database,
  Server,
  Network,
  ShieldCheck,
  BookOpen,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import Reveal from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";

const expertise = [
  {
    icon: Code,
    title: "Frontend Development",
    description:
      "Building responsive and user-friendly web interfaces with modern JavaScript frameworks and reusable components.",
    features: [
      "React.js & Next.js",
      "JavaScript & TypeScript",
      "HTML5, CSS3 & Tailwind CSS",
    ],
  },
  {
    icon: Server,
    title: "Backend Development",
    description:
      "Developing server-side functionality and REST APIs to support web applications and business requirements.",
    features: [
      "Java & Spring Boot",
      "REST API development",
      "Authentication & authorization",
    ],
  },
  {
    icon: Database,
    title: "Database Management",
    description:
      "Working with relational databases to organize application data and support reliable data access.",
    features: [
      "MySQL & Oracle SQL",
      "SQL queries and joins",
      "Database integration",
    ],
  },
  {
    icon: Network,
    title: "Networking & Infrastructure",
    description:
      "Hands-on experience supporting network infrastructure installations and connectivity-related activities.",
    features: [
      "Router & switch installation",
      "Network rack setup",
      "LAN/WAN fundamentals",
    ],
  },
  {
    icon: ShieldCheck,
    title: "IT Infrastructure & Security",
    description:
      "Exposure to on-site IT infrastructure projects involving access control and security-related systems.",
    features: [
      "Access control installation",
      "Network connectivity troubleshooting",
      "IT infrastructure support",
    ],
  },
  {
    icon: BookOpen,
    title: "Technical Learning & Development",
    description:
      "Continuously strengthening technical knowledge through practical projects, troubleshooting, and learning new technologies.",
    features: [
      "Full-stack application development",
      "Git & GitHub",
      "Technical problem-solving",
    ],
  },
];

const Services = () => {
  return (
    <section id="services" className="section-padding section-divider">
      <div className="container">
        <Reveal>
          <SectionHeader
            label="Technical Expertise"
            align="center"
            title={
              <>
                My Technical{" "}
                <span className="text-gradient">Strengths</span>
              </>
            }
            description="A combination of full-stack development skills and hands-on IT infrastructure experience, supported by continuous learning and practical problem-solving."
          />
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
          {expertise.map((item, i) => (
            <Reveal key={item.title} delay={i * 70}>
              <Card className="group h-full p-5 sm:p-6 glass-card card-interactive rounded-2xl">
                <div className="w-12 h-12 rounded-xl bg-accent-gradient flex items-center justify-center mb-5 group-hover:scale-110 transition-smooth shadow-sm">
                  <item.icon className="w-6 h-6 text-primary-foreground" />
                </div>

                <h3 className="text-lg font-semibold mb-2">
                  {item.title}
                </h3>

                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {item.description}
                </p>

                <ul className="space-y-1.5 pt-3 border-t border-border/80">
                  {item.features.map((feature) => (
                    <li
                      key={feature}
                      className="text-xs text-muted-foreground flex items-start gap-2"
                    >
                      <span className="text-accent shrink-0">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;