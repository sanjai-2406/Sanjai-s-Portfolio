import { cn } from "@/lib/utils";

type SectionHeaderProps = {
  label: string;
  title: React.ReactNode;
  description?: string;
  align?: "left" | "center";
};

const SectionHeader = ({ label, title, description, align = "left" }: SectionHeaderProps) => {
  const centered = align === "center";

  return (
    <div className={cn("mb-10 sm:mb-12 md:mb-14 lg:mb-16 px-1", centered && "text-center max-w-2xl mx-auto")}>
      <span
        className={cn(
          "inline-flex items-center gap-2 text-[10px] sm:text-xs font-mono uppercase tracking-[0.15em] sm:tracking-[0.2em] text-accent mb-3 sm:mb-4",
          centered && "justify-center",
        )}
      >
        <span className="h-px w-4 sm:w-6 bg-accent/60" aria-hidden />
        {label}
        <span className="h-px w-4 sm:w-6 bg-accent/60" aria-hidden />
      </span>
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-3 sm:mb-4 leading-[1.15]">
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "text-sm sm:text-base text-muted-foreground leading-relaxed max-w-prose",
            centered ? "mx-auto" : "max-w-xl",
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
