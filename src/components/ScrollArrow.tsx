import { useEffect, useState } from "react";
import { ArrowDown, ArrowUp } from "lucide-react";

const ScrollArrow = () => {
  const [isAtBottom, setIsAtBottom] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const pageHeight = document.documentElement.scrollHeight;
      setIsAtBottom(scrollPosition >= pageHeight - 100);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
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
      className="fixed bottom-6 right-6 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full border border-border bg-background/95 text-foreground shadow-xl transition hover:-translate-y-1 hover:bg-accent hover:text-background focus:outline-none focus:ring-2 focus:ring-accent"
      aria-label={isAtBottom ? "Scroll to top" : "Scroll to bottom"}
    >
      {isAtBottom ? <ArrowUp className="h-6 w-6" /> : <ArrowDown className="h-6 w-6" />}
    </button>
  );
};

export default ScrollArrow;
