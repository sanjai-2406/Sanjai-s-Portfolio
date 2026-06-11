import { useEffect, useState } from "react";
import { ArrowRight, ChevronDown, Code2, Download, Mail, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import portrait from "@/assets/sanjai-portrait1.png";

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

const roles = [
  "Full Stack Developer",
  "Java Spring Boot Engineer",
  "React & Next.js Specialist",
];

const socialLinks = [
  { href: "mailto:sanjaivsbec@gmail.com", label: "Email", icon: Mail },
  { href: "https://github.com/sanjaivsbec", label: "GitHub", icon: Code2, external: true },
  { href: "https://www.linkedin.com/in/sanjai-saravanan-2559a323b/", label: "LinkedIn", icon: LinkedinIcon, external: true },
  { href: "https://www.instagram.com/_sanjaiii.i/", label: "Instagram", icon: InstagramIcon, external: true },
  { href: "https://wa.me/919345457374", label: "WhatsApp", icon: WhatsappIcon, external: true },
];

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setDisplayText(current.slice(0, displayText.length + 1));
          if (displayText.length === current.length) {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          setDisplayText(current.slice(0, displayText.length - 1));
          if (displayText.length === 0) {
            setIsDeleting(false);
            setRoleIndex((prev) => (prev + 1) % roles.length);
          }
        }
      },
      isDeleting ? 40 : 80,
    );
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <section
      id="home"
      className="relative min-h-[100dvh] flex items-center pt-20 sm:pt-24 pb-24 sm:pb-20 overflow-hidden bg-hero-gradient"
    >
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" aria-hidden />
      <div className="absolute top-1/4 -left-32 w-64 sm:w-96 h-64 sm:h-96 rounded-full bg-accent/10 blur-3xl animate-pulse-soft pointer-events-none" aria-hidden />
      <div className="absolute bottom-1/4 -right-32 w-56 sm:w-80 h-56 sm:h-80 rounded-full bg-primary/5 blur-3xl animate-pulse-soft pointer-events-none" style={{ animationDelay: "2s" }} aria-hidden />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background pointer-events-none" aria-hidden />

      <div className="container relative grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        {/* Portrait — shown first on mobile */}
        <div className="relative flex justify-center lg:justify-end order-1 lg:order-2 animate-fade-in-up mx-auto w-full max-w-[20rem] sm:max-w-none">
          <div className="relative w-full aspect-square max-w-[16rem] sm:max-w-[18rem] md:max-w-[22rem] lg:max-w-[26rem]">
            <div className="absolute inset-0 -z-10 flex items-center justify-center">
              <div className="w-[85%] h-[85%] rounded-full bg-gradient-to-br from-accent/30 via-primary/10 to-transparent blur-3xl opacity-80 animate-glow-pulse" />
            </div>

            <div className="relative w-full h-full rounded-full overflow-hidden border-[3px] border-accent/30 shadow-elegant animate-float bg-card ring-4 ring-background">
              <img
                src={portrait}
                alt="Sanjai Saravanan — Full Stack Developer"
                width={512}
                height={512}
                className="w-full h-full object-cover"
                fetchPriority="high"
              />
            </div>

            <div className="absolute inset-0 rounded-full border border-accent/15 scale-110 pointer-events-none" aria-hidden />

            <div className="absolute top-0 -right-1 sm:-right-4 glass-card rounded-2xl px-3 py-2.5 sm:px-5 sm:py-3.5 z-10 animate-float shadow-card" style={{ animationDelay: "1s" }}>
              <div className="text-[9px] sm:text-[10px] uppercase tracking-wider text-muted-foreground font-mono">Experience</div>
              <div className="text-lg sm:text-xl font-bold text-gradient">1+ Year</div>
            </div>

            <div className="absolute bottom-0 -left-1 sm:-left-6 glass-card rounded-2xl px-3 py-2.5 sm:px-5 sm:py-3.5 z-10 animate-float shadow-card" style={{ animationDelay: "2s" }}>
              <div className="text-[9px] sm:text-[10px] uppercase tracking-wider text-muted-foreground font-mono">Based in</div>
              <div className="text-xs sm:text-sm font-semibold">Bengaluru, IN</div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-5 sm:space-y-7 order-2 lg:order-1 animate-fade-in-up text-center lg:text-left">
          <div className="inline-flex flex-wrap items-center justify-center lg:justify-start gap-2 px-3 sm:px-4 py-2 rounded-full border border-accent/25 bg-accent/5 text-xs sm:text-sm backdrop-blur-sm max-w-full">
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
            </span>
            <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-accent shrink-0" />
            <span className="text-muted-foreground font-medium">Available for freelance & contract work</span>
          </div>

          <div className="space-y-2 sm:space-y-3">
            <p className="text-xs sm:text-sm font-mono uppercase tracking-[0.2em] sm:tracking-[0.25em] text-muted-foreground">
              Sanjai Saravanan
            </p>
            <h1 className="text-[2rem] leading-tight sm:text-5xl md:text-6xl lg:text-[4rem] font-extrabold tracking-tight">
              Hi, I'm <span className="text-gradient">Sanjai</span>
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground/90 min-h-[2rem] sm:min-h-[2.75rem] md:min-h-[3rem]">
              <span className="text-accent">{displayText}</span>
              <span className="inline-block w-[2px] sm:w-[3px] h-[0.85em] bg-accent ml-0.5 sm:ml-1 animate-pulse align-middle" aria-hidden />
            </p>
          </div>

          <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 leading-relaxed">
            I build scalable, production-grade web applications with Java Spring Boot, React.js, and Next.js.
            From headless e-commerce and LMS platforms to enterprise APIs — clean architecture, agile delivery, code that ships.
          </p>

          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2">
            {["Spring Boot", "React.js", "Next.js", "Docker", "REST APIs", "MySQL"].map((tag) => (
              <span
                key={tag}
                className="text-[11px] sm:text-xs font-mono px-2.5 py-1 rounded-full bg-secondary/80 border border-border text-muted-foreground hover:border-accent/30 hover:text-accent transition-smooth"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-1 max-w-md mx-auto lg:mx-0">
            <Button variant="hero" size="lg" className="w-full sm:w-auto rounded-xl" asChild>
              <a href="#contact">
                Let's Work Together <ArrowRight className="ml-1 w-4 h-4" />
              </a>
            </Button>
            <Button variant="outline" size="lg" className="w-full sm:w-auto rounded-xl border-border hover:border-accent/50" asChild>
              <a href="#projects">
                <Download className="mr-1 w-4 h-4" /> View Projects
              </a>
            </Button>
          </div>

          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 sm:gap-3 pt-1">
            {socialLinks.map(({ href, label, icon: Icon, external }) => (
              <a
                key={label}
                href={href}
                target={external ? "_blank" : undefined}
                rel={external ? "noreferrer" : undefined}
                className="touch-target w-11 h-11 rounded-xl border border-border flex items-center justify-center text-muted-foreground hover:text-accent hover:border-accent/40 hover:bg-accent/5 transition-smooth"
                aria-label={label}
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <a
        href="#about"
        className="hidden sm:flex absolute bottom-6 lg:bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-1 text-muted-foreground hover:text-accent transition-smooth group"
        aria-label="Scroll to about section"
      >
        <span className="text-[10px] font-mono uppercase tracking-widest">Explore</span>
        <ChevronDown className="w-5 h-5 animate-bounce group-hover:text-accent" />
      </a>
    </section>
  );
};

export default Hero;
