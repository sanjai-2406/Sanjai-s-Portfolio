import { Shield, MessageCircle, Clock, Layers, CheckCircle2, Zap } from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";

const reasons = [
  {
    icon: Layers,
    title: "Full-Stack Expertise",
    description: "One developer for frontend, backend, APIs, and database — no handoff gaps, faster delivery.",
  },
  {
    icon: Shield,
    title: "Production-Grade Quality",
    description: "Clean architecture, tested code, and security best practices built in from day one.",
  },
  {
    icon: MessageCircle,
    title: "Clear Communication",
    description: "Regular updates, plain-language explanations, and quick responses on WhatsApp or email.",
  },
  {
    icon: Clock,
    title: "Reliable Delivery",
    description: "Agile sprints with defined milestones — you always know what's done and what's next.",
  },
  {
    icon: CheckCircle2,
    title: "QA-Driven Mindset",
    description: "Manual testing background means fewer bugs in production and better user experiences.",
  },
  {
    icon: Zap,
    title: "Modern Tech Stack",
    description: "Java Spring Boot, React, Next.js, and Node.js — battle-tested tools that scale with your business.",
  },
];

const WhyWorkWithMe = () => {
  return (
    <section id="why-me" className="section-padding bg-section-alt relative section-divider">
      <div className="absolute inset-0 grid-bg opacity-15 pointer-events-none" aria-hidden />
      <div className="container relative">
        <Reveal>
          <SectionHeader
            label="Why Hire Me"
            align="center"
            title={
              <>
                More than just <span className="text-gradient">writing code</span>
              </>
            }
            description="I partner with clients who want a developer who thinks about the product, the user, and the long-term maintainability — not just the next feature."
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
                <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <blockquote className="max-w-3xl mx-auto text-center glass-card rounded-2xl sm:rounded-3xl p-6 sm:p-10 border-accent/20">
            <p className="text-base sm:text-lg md:text-xl text-foreground/90 leading-relaxed italic mb-4">
              "Sanjai delivered our inventory platform ahead of schedule with clean APIs and a polished React dashboard.
              His attention to detail and proactive communication made the entire process smooth."
            </p>
            <footer className="text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">Project Client</span>
              <span className="mx-2 text-border">·</span>
              Inventory Management System
            </footer>
          </blockquote>
        </Reveal>
      </div>
    </section>
  );
};

export default WhyWorkWithMe;
