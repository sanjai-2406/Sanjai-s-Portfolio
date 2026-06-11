import { Card } from "@/components/ui/card";
import { Palette, Code, ShoppingCart, Plug, RefreshCw, Smartphone } from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";

const services = [
  {
    icon: Palette,
    title: "Website Design",
    description:
      "Clean, modern, and responsive UI/UX designs tailored to your brand and built to convert visitors into customers.",
    features: ["Mobile-first layouts", "Brand-aligned UI", "Conversion-focused UX"],
  },
  {
    icon: Code,
    title: "Website Development",
    description:
      "Fast, scalable websites built with React, TypeScript, and modern tooling for great performance and SEO.",
    features: ["React & Next.js apps", "Performance optimization", "SEO-ready structure"],
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce Development",
    description:
      "Custom e-commerce and headless storefronts with secure checkout, product management, and smooth UX.",
    features: ["Headless commerce", "Payment integration", "Inventory sync"],
  },
  {
    icon: Plug,
    title: "API Development & Integration",
    description:
      "Robust REST APIs and seamless third-party integrations to connect your tools, data, and services.",
    features: ["Spring Boot APIs", "Third-party integrations", "Documentation & Postman"],
  },
  {
    icon: Smartphone,
    title: "Custom Web Applications",
    description:
      "Full-stack SPAs and dashboards — LMS platforms, admin panels, quiz apps, and internal business tools.",
    features: ["Role-based access", "Real-time dashboards", "Database design"],
  },
  {
    icon: RefreshCw,
    title: "Website Redesign",
    description:
      "Transform outdated sites into modern, mobile-first experiences that boost engagement and load speed.",
    features: ["Legacy migration", "UI modernization", "Performance audit"],
  },
];

const Services = () => {
  return (
    <section id="services" className="section-padding section-divider">
      <div className="container">
        <Reveal>
          <SectionHeader
            label="Services"
            align="center"
            title={
              <>
                What I <span className="text-gradient">Deliver</span>
              </>
            }
            description="End-to-end web solutions — from design and development to API integration, testing, and deployment support."
          />
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 70}>
              <Card className="group h-full p-5 sm:p-6 glass-card card-interactive rounded-2xl">
                <div className="w-12 h-12 rounded-xl bg-accent-gradient flex items-center justify-center mb-5 group-hover:scale-110 transition-smooth shadow-sm">
                  <s.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{s.description}</p>
                <ul className="space-y-1.5 pt-3 border-t border-border/80">
                  {s.features.map((f) => (
                    <li key={f} className="text-xs text-muted-foreground flex items-center gap-2">
                      <span className="text-accent">✓</span>
                      {f}
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
