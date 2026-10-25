import { Mail, MessageCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Reveal from "@/components/Reveal";

const CtaBand = () => {
  const email = "sanjaivsbec@gmail.com";
  const whatsappNumber = "9345457374"; // Replace with your WhatsApp number

  return (
    <section className="section-padding relative overflow-hidden">
      <div
        className="absolute inset-0 bg-accent-gradient opacity-[0.07] pointer-events-none"
        aria-hidden="true"
      />

      <div className="container relative">
        <Reveal>
          <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-accent-gradient p-8 sm:p-12 md:p-14 text-center shadow-elegant">
            <div
              className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.15),transparent_50%)] pointer-events-none"
              aria-hidden="true"
            />

            <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-white/10 blur-3xl pointer-events-none" aria-hidden="true" />

            <div className="absolute -bottom-24 -left-24 w-64 h-64 rounded-full bg-white/5 blur-3xl pointer-events-none" aria-hidden="true" />

            <div className="relative max-w-2xl mx-auto">
              <p className="text-xs sm:text-sm font-mono uppercase tracking-[0.2em] text-primary-foreground/70 mb-3">
                Get in Touch
              </p>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary-foreground mb-4 leading-tight">
                Let's Connect
              </h2>

              <p className="text-sm sm:text-base text-primary-foreground/80 mb-8 leading-relaxed max-w-lg mx-auto">
                Thank you for taking the time to explore my portfolio.
                If my skills and experience align with your requirements,
                I'd be happy to connect and discuss potential career opportunities.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button
                  size="lg"
                  className="rounded-xl bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-semibold h-12"
                  asChild
                >
                  <a href={`mailto:${email}`}>
                    <Mail className="mr-2 w-4 h-4" />
                    Contact Me via Email
                    <ArrowRight className="ml-1 w-4 h-4" />
                  </a>
                </Button>

                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-xl border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 h-12"
                  asChild
                >
                  <a
                    href={`https://wa.me/${whatsappNumber}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="mr-2 w-4 h-4" />
                    WhatsApp Me
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