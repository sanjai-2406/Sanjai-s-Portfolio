import Reveal from "@/components/Reveal";
import { Briefcase, Code2, Rocket, Users } from "lucide-react";
import { cn } from "@/lib/utils";

const stats = [
  { icon: Rocket, value: "6+", label: "Projects Delivered" },
  { icon: Briefcase, value: "1+", label: "Years Experience" },
  { icon: Code2, value: "17+", label: "Technologies" },
  { icon: Users, value: "10k+", label: "Users Impacted" },
];

const StatsBar = () => {
  return (
    <section className="relative border-y border-border bg-section-alt backdrop-blur-sm">
      <div className="container py-8 sm:py-10 md:py-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-6">
          {stats.map(({ icon: Icon, value, label }, i) => (
            <Reveal key={label} delay={i * 80}>
              <div
                className={cn(
                  "flex flex-col items-center text-center lg:flex-row lg:items-start lg:text-left gap-3 group px-2 sm:px-0",
                  i % 2 === 0 && "max-lg:border-r max-lg:border-border/60",
                  i < 2 && "max-lg:pb-6 max-lg:border-b max-lg:border-border/60",
                )}
              >
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0 group-hover:bg-accent/20 group-hover:scale-105 transition-smooth">
                  <Icon className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <div className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-gradient">{value}</div>
                  <div className="text-[11px] sm:text-xs md:text-sm text-muted-foreground mt-0.5 leading-snug">{label}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsBar;
