import { useEffect, useState } from "react";
import { ArrowDown, ArrowUp } from "lucide-react";
import { cn } from "@/lib/utils";

const ScrollArrow = () => {
  const [isAtBottom, setIsAtBottom] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const pageHeight = document.documentElement.scrollHeight;
      setIsAtBottom(scrollPosition >= pageHeight - 100);
      setVisible(window.scrollY > 400);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const handleClick = () => {
    if (isAtBottom) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      window.scrollTo({ top: document.documentElement.scrollHeight, behavior: "smooth" });
    }
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className={cn(
        "fixed bottom-5 right-4 sm:bottom-6 sm:right-6 z-50 inline-flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-full border border-border bg-background/90 backdrop-blur-md text-foreground shadow-elegant transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:text-accent hover:shadow-glow focus:outline-none focus:ring-2 focus:ring-accent/30 touch-target",
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none",
      )}
      aria-label={isAtBottom ? "Scroll to top" : "Scroll to bottom"}
    >
      {isAtBottom ? <ArrowUp className="h-5 w-5" /> : <ArrowDown className="h-5 w-5" />}
    </button>
  );
};

export default ScrollArrow;
