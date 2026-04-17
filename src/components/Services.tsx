import { Card } from "@/components/ui/card";
import { Palette, Code, ShoppingCart, Plug, RefreshCw } from "lucide-react";

const services = [
  {
    icon: Palette,
    title: "Website Design",
    description:
      "Clean, modern, and responsive UI/UX designs tailored to your brand and built to convert visitors.",
  },
  {
    icon: Code,
    title: "Website Development",
    description:
      "Fast, scalable websites built with React, TypeScript, and modern tooling for great performance.",
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce Development",
    description:
      "Custom e-commerce experiences with secure checkout, product management, and smooth UX.",
  },
  {
    icon: Plug,
    title: "API Development & Integration",
    description:
      "Robust REST APIs and seamless third-party integrations to connect your tools and data.",
  },
  {
    icon: RefreshCw,
    title: "Website Redesign",
    description:
      "Transform outdated sites into modern, mobile-first experiences that boost engagement.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 md:py-28">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-14">
        
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            My <span className="text-gradient">Works</span>
          </h2>
          <p className="text-muted-foreground">
            End-to-end web solutions — from design to development, integration, and beyond.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <Card
              key={s.title}
              className="group p-6 bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-smooth hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4 group-hover:scale-110 transition-smooth">
                <s.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {s.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
