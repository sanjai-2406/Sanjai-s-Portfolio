import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const primaryLinks = [
  { label: "About", href: "/#about", section: "about" },
  { label: "Skills", href: "/#skills", section: "skills" },
  { label: "Projects", href: "/#projects", section: "projects" },
  { label: "Experience", href: "/#experience", section: "experience" },
  { label: "Contact", href: "/#contact", section: "contact" },
];

const secondaryLinks = [
  { label: "Services", href: "/#services", section: "services" },

];

const allLinks = [...primaryLinks, ...secondaryLinks];
const sectionIds = ["home", "about", "skills", "services", "process", "projects", "experience", "contact"];

const Navbar = () => {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);

      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(docHeight > 0 ? (window.scrollY / docHeight) * 100 : 0);

      const offset = 100;
      let current = "home";
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= offset) {
          current = id;
        }
      }
      setActiveSection(current);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  const isActive = (section: string) => {
    if (section === "blog") return location.pathname === "/blog" || location.pathname.startsWith("/blog/");
    if (section === "faq") return location.pathname === "/faq";
    return location.pathname === "/" && activeSection === section;
  };

  const linkClass = (section: string) =>
    cn(
      "relative px-2.5 xl:px-3 py-2 text-[13px] xl:text-sm font-medium rounded-lg transition-smooth whitespace-nowrap",
      isActive(section)
        ? "text-accent bg-accent/5"
        : "text-muted-foreground hover:text-foreground hover:bg-secondary/70",
    );

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-smooth safe-area-inset-top",
        scrolled || open
          ? "bg-background/90 backdrop-blur-xl border-b border-border/80 shadow-sm"
          : "bg-transparent",
      )}
    >
      <div
        className="absolute bottom-0 left-0 h-[2px] bg-accent-gradient transition-all duration-150 ease-out"
        style={{ width: `${scrollProgress}%` }}
        aria-hidden
      />

      <nav className="container flex items-center justify-between h-14 sm:h-16 md:h-[4.25rem] gap-3">
        <a href="/#home" className="flex items-center shrink-0 group">
          <img
            src="/logo.png"
            alt="Sanjai logo"
            className="h-9 sm:h-10 md:h-11 w-auto max-w-[120px] sm:max-w-[140px] rounded-lg object-contain transition-smooth group-hover:opacity-90"
          />
        </a>

        <ul className="hidden lg:flex items-center gap-0.5 xl:gap-1 flex-1 justify-center max-w-3xl mx-auto">
          {primaryLinks.map((l) => (
            <li key={l.href}>
              <a href={l.href} className={linkClass(l.section)}>
                {l.label}
              </a>
            </li>
          ))}
          <li className="hidden xl:block w-px h-5 bg-border mx-1" aria-hidden />
          {secondaryLinks.map((l) => (
            <li key={l.href} className={l.section === "services" ? "hidden xl:block" : "hidden lg:block"}>
              <a href={l.href} className={linkClass(l.section)}>
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block shrink-0">
          <Button variant="hero" size="sm" className="rounded-xl px-5" asChild>
            <a href="/#contact">Contact</a>
          </Button>
        </div>

        <button
          type="button"
          className="lg:hidden touch-target w-11 h-11 flex items-center justify-center rounded-xl border border-border/80 bg-background/60 backdrop-blur-sm hover:bg-secondary transition-smooth text-foreground shrink-0"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* Mobile menu overlay */}
      <div
        className={cn(
          "lg:hidden fixed inset-0 top-14 sm:top-16 bg-background/40 backdrop-blur-sm transition-opacity duration-300 z-[-1]",
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
        )}
        onClick={() => setOpen(false)}
        aria-hidden
      />

      <div
        className={cn(
          "lg:hidden overflow-hidden transition-all duration-300 ease-out border-b border-border bg-background/98 backdrop-blur-xl",
          open ? "max-h-[calc(100dvh-3.5rem)] opacity-100" : "max-h-0 opacity-0 border-transparent",
        )}
      >
        <ul className="container py-4 space-y-1 overflow-y-auto max-h-[calc(100dvh-5rem)]">
          {allLinks.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "block px-4 py-3 rounded-xl text-sm font-medium transition-smooth",
                  isActive(l.section)
                    ? "text-accent bg-accent/8 border border-accent/15"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary/60",
                )}
              >
                {l.label}
              </a>
            </li>
          ))}
          <li className="pt-3 px-1">
            <Button variant="hero" className="w-full rounded-xl h-12" asChild>
              <a href="#contact" onClick={() => setOpen(false)}>Hire Me</a>
            </Button>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
