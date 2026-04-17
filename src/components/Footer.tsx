const Footer = () => {
  const linkGroups = [
    {
      title: "Company",
      links: [
        { label: "About", href: "/#about" },
        { label: "Contact", href: "/#contact" },
        { label: "Blog", href: "/blog" },
      ],
    },
    {
      title: "Resources",
      links: [
        { label: "FAQ", href: "/faq" },
      ],
    },
    {
      title: "Social",
      links: [
        { label: "WhatsApp", href: "https://wa.me/919345457374" },
        { label: "LinkedIn", href: "https://www.linkedin.com/in/sanjai-saravanan-2559a323b/" },
        { label: "GitHub", href: "https://github.com/sanjaivsbec" },
      ],
    },
  ];

  return (
    <footer className="border-t border-border py-12">
      <div className="container px-4 sm:px-6 lg:px-8 grid gap-10 sm:grid-cols-2 lg:grid-cols-[minmax(220px,320px)_1fr_1fr] items-start">
        <div className="space-y-4 text-center sm:text-left sm:col-span-2 lg:col-span-1">
          <div className="inline-flex items-center gap-3">
            <img src="/logo.png" alt="Sanjai logo" className="h-14 max-w-[150px] rounded-md object-contain bg-background p-1" />
          </div>
          <p className="max-w-sm text-sm text-muted-foreground">
            There is no risk-free trading.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 text-center sm:text-left">
          {linkGroups.map((group) => (
            <div key={group.title} className="space-y-3">
              <p className="mb-4 text-sm font-semibold text-foreground">{group.title}</p>
              <ul className="space-y-3 text-sm text-muted-foreground">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="transition-colors hover:text-primary"
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
      <div className="mt-10 border-t border-border pt-6 text-center text-sm text-muted-foreground">
        © 2026 Sanjai Saravanan. Crafted with care.
      </div>
    </footer>
  );
};

export default Footer;
