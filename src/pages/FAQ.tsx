import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const faqs = [
  {
    question: "What technologies do you usually work with?",
    answer:
      "I build full-stack applications using Java Spring Boot on the backend and React/Next.js on the frontend, with PostgreSQL or MongoDB for persistence depending on project needs.",
  },
  {
    question: "How do you scope a project before starting?",
    answer:
      "I begin with a discovery session to clarify goals, map out core user journeys, and define a prioritized MVP before committing to architecture and timelines.",
  },
  {
    question: "Can you improve an existing Java application?",
    answer:
      "Yes. I can audit current architecture, identify performance and maintainability gaps, and modernize the app incrementally without rewriting the entire codebase.",
  },
  {
    question: "Do you provide deployment and monitoring support?",
    answer:
      "Absolutely. I can deliver the application through CI/CD pipelines, containerization, and monitoring dashboards so the project stays stable after launch.",
  },
  {
    question: "What does the engagement model look like?",
    answer:
      "I offer flexible hourly and fixed-price engagements with weekly check-ins, clear milestone deliveries, and open communication throughout the project.",
  },
];

const FAQ = () => (
  <div className="min-h-screen bg-background text-foreground">
    <Navbar />

    <main className="container py-24">
      <div className="max-w-3xl space-y-6">
        <p className="text-sm uppercase tracking-[0.35em] text-accent">FAQ</p>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          Frequently asked questions about projects and delivery.
        </h1>
        <p className="text-muted-foreground text-lg leading-8">
          Clear answers to the questions I hear most often from clients, recruiters, and product teams.
        </p>
      </div>

      <section className="mt-16 rounded-3xl border border-border bg-card p-8 shadow-card">
        <Accordion type="single" collapsible defaultValue="item-1">
          {faqs.map((item, index) => (
            <AccordionItem key={item.question} value={`item-${index + 1}`}>
              <AccordionTrigger>{item.question}</AccordionTrigger>
              <AccordionContent>
                <p className="text-sm leading-7 text-muted-foreground">{item.answer}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>
    </main>

    <Footer />
  </div>
);

export default FAQ;
