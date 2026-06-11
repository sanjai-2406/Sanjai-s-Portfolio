import { ArrowRight, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import Reveal from "@/components/Reveal";

const CtaBand = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-accent-gradient opacity-[0.07] pointer-events-none" aria-hidden />
      <div className="container relative">
        <Reveal>
          <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-accent-gradient p-8 sm:p-12 md:p-14 text-center shadow-elegant">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.15),transparent_50%)] pointer-events-none" aria-hidden />
            <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-white/10 blur-3xl pointer-events-none" aria-hidden />
            <div className="absolute -bottom-24 -left-24 w-64 h-64 rounded-full bg-white/5 blur-3xl pointer-events-none" aria-hidden />

            <div className="relative max-w-2xl mx-auto">
              <p className="text-xs sm:text-sm font-mono uppercase tracking-[0.2em] text-primary-foreground/70 mb-3">
                Let's collaborate
              </p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary-foreground mb-4 leading-tight">
                Have an idea? Let's turn it into a product.
              </h2>
              <p className="text-sm sm:text-base text-primary-foreground/80 mb-8 leading-relaxed max-w-lg mx-auto">
                Whether it's a new web app, API integration, or full platform rebuild — I'm available for freelance projects,
                contract work, and long-term collaborations.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button
                  size="lg"
                  className="rounded-xl bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-semibold h-12"
                  asChild
                >
                  <a href="#contact">
                    Start a Project <ArrowRight className="ml-1 w-4 h-4" />
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-xl border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 h-12"
                  asChild
                >
                  <a href="mailto:sanjaivsbec@gmail.com">
                    <Mail className="mr-1 w-4 h-4" /> Email Me
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default CtaBand;
