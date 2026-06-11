const technologies = [
  "Java", "Spring Boot", "React.js", "Next.js", "Node.js", "TypeScript",
  "REST APIs", "MySQL", "Oracle SQL", "Docker", "Docker Compose", "CI/CD",
  "GitHub Actions", "Medusa.js", "Git", "Pega", "Hibernate", "Tailwind CSS", "Agile",
];

const TechMarquee = () => {
  const items = [...technologies, ...technologies];

  return (
    <section className="py-6 sm:py-8 overflow-hidden border-b border-border bg-background/60">
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" aria-hidden />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" aria-hidden />
        <div className="flex animate-marquee whitespace-nowrap">
          {items.map((tech, i) => (
            <span
              key={`${tech}-${i}`}
              className="inline-flex items-center mx-4 md:mx-6 text-sm font-mono text-muted-foreground"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-accent mr-3 shrink-0" aria-hidden />
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechMarquee;
