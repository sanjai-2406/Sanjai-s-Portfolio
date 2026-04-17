import { ArrowRight, Download, Code2, Mail, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import portrait from "@/assets/sanjai-portrait.png";

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
  </svg>
);
const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
);
const WhatsappIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
  </svg>
);

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden bg-hero-gradient"
    >
      <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" aria-hidden />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background pointer-events-none" aria-hidden />

      <div className="container relative grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 animate-fade-in-up">
         

          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-accent/30 bg-accent/10 text-sm">
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-muted-foreground">Available for work</span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.05]">
            Hi, I'm <span className="text-gradient">Sanjai</span>
            <br />
            Full Stack
            <br />
            <span className="text-primary">Developer</span>
          </h1>

          <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
            I build scalable, production-grade web applications using Java Spring Boot, React.js, and Next.js, Node.js,Rest Api's. From headless e-commerce platforms to interactive SPAs — I deliver clean code that ships.
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <Button variant="hero" size="lg" asChild>
              <a href="#contact">
                Let's Work Together <ArrowRight className="ml-1 w-4 h-4" />
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="#projects">
                <Download className="mr-1 w-4 h-4" /> View Projects
              </a>
            </Button>
          </div>

          <div className="flex items-center gap-5 pt-4">
            <a
              href="mailto:sanjaivsbec@gmail.com"
              className="text-muted-foreground hover:text-primary transition-smooth"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
            <a
              href="https://github.com/sanjaivsbec"
              target="_blank"
              rel="noreferrer"
              className="text-muted-foreground hover:text-primary transition-smooth"
              aria-label="GitHub"
            >
              <Code2 className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/sanjai-saravanan-2559a323b/"
              target="_blank"
              rel="noreferrer"
              className="text-muted-foreground hover:text-primary transition-smooth"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="w-5 h-5" />
            </a>
            <a
              href="https://www.instagram.com/_sanjaiii.i/"
              target="_blank"
              rel="noreferrer"
              className="text-muted-foreground hover:text-primary transition-smooth"
              aria-label="Instagram"
            >
              <InstagramIcon className="w-5 h-5" />
            </a>
            <a
              href="https://wa.me/919345457374"
              target="_blank"
              rel="noreferrer"
              className="text-muted-foreground hover:text-primary transition-smooth"
              aria-label="WhatsApp"
            >
              <WhatsappIcon className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="relative flex justify-center lg:justify-end animate-fade-in-up">
          <div className="relative">
            {/* Glow halo */}
            <div className="absolute inset-0 -z-10 flex items-center justify-center">
              <div className="w-72 h-72 md:w-96 md:h-96 rounded-full bg-gradient-to-br from-primary/40 via-accent/30 to-transparent blur-3xl opacity-70 animate-glow-pulse" />
            </div>

            {/* Circular portrait */}
            <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-primary/40 shadow-elegant animate-float bg-card">
              <img
                src={portrait}
                alt="Sanjai Saravanan — Full Stack Java Developer"
                width={512}
                height={512}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Decorative outer ring */}
            <div className="absolute inset-0 rounded-full border-2 border-primary/20 scale-110 animate-glow-pulse pointer-events-none" aria-hidden />

            
            <div className="absolute -top-2 -right-4 md:-right-6 bg-card/90 backdrop-blur border border-border rounded-xl px-4 py-3 shadow-card z-10">
              <div className="text-xs text-muted-foreground">Experience</div>
              <div className="text-lg font-bold text-gradient">1+ Year</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
