import { useEffect, useState } from "react";
import {
  ArrowRight,
  ChevronDown,
  Code2,
  Download,
  Mail,
  Sparkles,
  Network,
  BriefcaseBusiness,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import portrait from "@/assets/sanjai-portrait1.png";

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const WhatsappIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
  </svg>
);

const roles = [
  "Full Stack Developer",
  "Network Engineer",
  "Backend Developer",
  "Frontend Developer"
];

const socialLinks = [
  {
    href: "mailto:sanjaivsbec@gmail.com",
    label: "Email",
    icon: Mail,
  },
  {
    href: "https://github.com/sanjai-2406",
    label: "GitHub",
    icon: Code2,
    external: true,
  },
  {
    href: "https://www.linkedin.com/in/sanjai-saravanan-2559a323b/",
    label: "LinkedIn",
    icon: LinkedinIcon,
    external: true,
  },
  {
    href: "https://www.instagram.com/_sanjaiii.i/",
    label: "Instagram",
    icon: InstagramIcon,
    external: true,
  },
  {
    href: "https://wa.me/919345457374",
    label: "WhatsApp",
    icon: WhatsappIcon,
    external: true,
  },
];

const skills = [
  "Java",
  "Spring Boot",
  "React.js",
  "Next.js",
  "REST APIs",
  "SQL",
  "Networking",
  "TCP/IP",
];

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let pauseTimeout: ReturnType<typeof setTimeout> | undefined;

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          const nextText = currentRole.slice(
            0,
            displayText.length + 1
          );

          setDisplayText(nextText);

          if (nextText === currentRole) {
            pauseTimeout = setTimeout(() => {
              setIsDeleting(true);
            }, 1800);
          }
        } else {
          const nextText = currentRole.slice(
            0,
            displayText.length - 1
          );

          setDisplayText(nextText);

          if (nextText.length === 0) {
            setIsDeleting(false);
            setRoleIndex((previous) => (previous + 1) % roles.length);
          }
        }
      },
      isDeleting ? 35 : 70
    );

    return () => {
      clearTimeout(timeout);

      if (pauseTimeout) {
        clearTimeout(pauseTimeout);
      }
    };
  }, [displayText, isDeleting, roleIndex]);

  return (
    <section
      id="home"
      className="relative flex min-h-[100dvh] items-center overflow-hidden bg-hero-gradient px-4 pb-20 pt-24 sm:px-6 sm:pb-24 sm:pt-28"
    >
      {/* Background effects */}
      <div
        className="pointer-events-none absolute inset-0 grid-bg opacity-20"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute -left-32 top-1/4 h-64 w-64 rounded-full bg-accent/10 blur-3xl sm:h-96 sm:w-96"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute -right-32 bottom-1/4 h-56 w-56 rounded-full bg-primary/5 blur-3xl sm:h-80 sm:w-80"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background"
        aria-hidden="true"
      />

      <div className="container relative z-10 mx-auto">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Profile image */}
          <div className="order-1 mx-auto w-full max-w-[17rem] sm:max-w-[21rem] lg:order-2 lg:max-w-[26rem]">
            <div className="relative aspect-square w-full">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="h-[85%] w-[85%] rounded-full bg-gradient-to-br from-accent/25 via-primary/10 to-transparent blur-3xl" />
              </div>

              <div className="relative h-full w-full overflow-hidden rounded-full border-[3px] border-accent/30 bg-card shadow-elegant ring-4 ring-background">
                <img
                  src={portrait}
                  alt="Sanjai Saravanan"
                  width={512}
                  height={512}
                  className="h-full w-full object-cover"
                  fetchPriority="high"
                />
              </div>

              <div
                className="pointer-events-none absolute inset-0 scale-110 rounded-full border border-accent/20"
                aria-hidden="true"
              />

              {/* Experience badge */}
              <div className="glass-card absolute -right-2 top-5 z-10 rounded-2xl px-4 py-3 shadow-card sm:-right-5 sm:px-5">
                <div className="text-[10px] uppercase tracking-wider text-muted-foreground">
                  Professional Experience
                </div>

                <div className="mt-1 text-lg font-bold text-gradient sm:text-xl">
                  1+ Year
                </div>
              </div>

              
            </div>
          </div>

          {/* Introduction */}
          <div className="order-2 space-y-6 text-center lg:order-1 lg:text-left">
            {/* Availability badge */}
            <div className="inline-flex max-w-full flex-wrap items-center justify-center gap-2 rounded-full border border-accent/25 bg-accent/5 px-4 py-2 text-sm backdrop-blur-sm lg:justify-start">
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />

                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>

              <Sparkles className="h-4 w-4 shrink-0 text-accent" />

              <span className="font-medium text-muted-foreground">
                Open to new career opportunities
              </span>
            </div>

            {/* Name and role */}
            <div className="space-y-3">
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground sm:text-sm">
                Hello, I'm
              </p>

              <h1 className="text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                Sanjai{" "}
                <span className="text-gradient">Saravanan</span>
              </h1>

              <div className="flex min-h-[3.5rem] items-center justify-center lg:justify-start">
                <p
                  className="text-xl font-semibold leading-snug text-accent sm:text-2xl md:text-3xl"
                  aria-label={roles[roleIndex]}
                >
                  {displayText}

                  <span
                    className="ml-1 inline-block h-[0.9em] w-[2px] animate-pulse bg-accent align-middle"
                    aria-hidden="true"
                  />
                </p>
              </div>
            </div>

            {/* Professional summary */}
            <p className="mx-auto max-w-xl text-sm leading-7 text-muted-foreground sm:text-base md:text-lg lg:mx-0">
              I am a technology professional with experience in full-stack
              development and IT networking. I work with Java, Spring Boot,
              React.js, and Next.js to develop web applications, while my
              networking experience includes device installation,
              infrastructure setup, and technical troubleshooting. I am
              eager to apply my skills, learn from experienced teams, and
              contribute to an organization's technical goals.
            </p>

            {/* Skills */}
            <div className="flex flex-wrap justify-center gap-2 lg:justify-start">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-border bg-secondary/70 px-3 py-1.5 font-mono text-[11px] text-muted-foreground transition-colors hover:border-accent/40 hover:text-accent sm:text-xs"
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* Career focus */}
            <div className="flex flex-wrap justify-center gap-x-5 gap-y-3 text-sm text-muted-foreground lg:justify-start">
              <span className="inline-flex items-center gap-2">
                <Code2 className="h-4 w-4 text-accent" />
                Software Development
              </span>

              <span className="inline-flex items-center gap-2">
                <Network className="h-4 w-4 text-accent" />
                Network Engineering
              </span>

              <span className="inline-flex items-center gap-2">
                <BriefcaseBusiness className="h-4 w-4 text-accent" />
                IT Infrastructure
              </span>
            </div>

            {/* Action buttons */}
            <div className="flex flex-col justify-center gap-3 pt-2 sm:flex-row lg:justify-start">
              <Button
                variant="hero"
                size="lg"
                className="w-full rounded-xl sm:w-auto"
                asChild
              >
                <a href="#contact">
                  Contact Me
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="w-full rounded-xl border-border hover:border-accent/50 sm:w-auto"
                asChild
              >
                <a href="#projects">
                  <Code2 className="mr-2 h-4 w-4" />
                  View My Work
                </a>
              </Button>
            </div>

            {/* Social links */}
            <div className="flex flex-wrap items-center justify-center gap-3 pt-2 lg:justify-start">
              {socialLinks.map(
                ({ href, label, icon: Icon, external }) => (
                  <a
                    key={label}
                    href={href}
                    target={external ? "_blank" : undefined}
                    rel={external ? "noopener noreferrer" : undefined}
                    className="flex h-11 w-11 items-center justify-center rounded-xl border border-border text-muted-foreground transition-all duration-200 hover:border-accent/40 hover:bg-accent/5 hover:text-accent"
                    aria-label={label}
                    title={label}
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                )
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-5 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-1 text-muted-foreground transition-colors hover:text-accent sm:flex"
        aria-label="Scroll to About section"
      >
        <span className="text-[10px] uppercase tracking-widest">
          Explore
        </span>

        <ChevronDown className="h-5 w-5 animate-bounce" />
      </a>
    </section>
  );
};

export default Hero;