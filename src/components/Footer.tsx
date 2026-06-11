import { ArrowUpRight } from "lucide-react";

const Footer = () => {
  const linkGroups = [
    {
      title: "Navigate",
      links: [
        { label: "About", href: "/#about" },
        { label: "Projects", href: "/#projects" },
        { label: "Contact", href: "/#contact" },
        { label: "Blog", href: "/blog" },
      ],
    },
    {
      title: "Resources",
      links: [
        { label: "Process", href: "/#process" },
        { label: "FAQ", href: "/faq" },
        { label: "Skills", href: "/#skills" },
        { label: "Services", href: "/#services" },
      ],
    },
    {
      title: "Connect",
      links: [
        { label: "WhatsApp", href: "https://wa.me/919345457374" },
        { label: "LinkedIn", href: "https://www.linkedin.com/in/sanjai-saravanan-2559a323b/" },
        { label: "GitHub", href: "https://github.com/sanjaivsbec" },
      ],
    },
  ];

  return (
    <footer className="border-t border-border bg-section-footer">
      <div className="container py-10 sm:py-12 md:py-14 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_2fr] items-start">
          <div className="space-y-4 sm:space-y-5 text-center lg:text-left">
            <a href="/#home" className="inline-flex items-center gap-3 group">
              <img
                src="/logo.png"
                alt="Sanjai logo"
                className="h-12 max-w-[140px] rounded-lg object-contain transition-smooth group-hover:opacity-90"
              />
            </a>
            <p className="max-w-sm text-sm text-muted-foreground leading-relaxed">
              Full Stack Developer crafting scalable web applications with Java, React, and Next.js.
              Available for freelance projects and contract work.
            </p>
            <a
              href="/#contact"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:gap-2.5 transition-all"
            >
              Start a project <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-8 text-center sm:text-left">
            {linkGroups.map((group) => (
              <div key={group.title} className="space-y-4">
                <p className="text-sm font-semibold text-foreground">{group.title}</p>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  {group.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="transition-smooth hover:text-accent inline-flex items-center gap-1"
                        target={link.href.startsWith("http") ? "_blank" : undefined}
                        rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© 2026 Sanjai Saravanan. All rights reserved.</p>
          <p className="font-mono text-xs">Built with React · TypeScript · Tailwind</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
