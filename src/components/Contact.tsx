import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  Clock,
  MessageSquare,
  Send,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Reveal from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";
import { cn } from "@/lib/utils";

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
const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 0.297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.09-.745.083-.73.083-.73 1.205.085 1.84 1.236 1.84 1.236 1.07 1.835 2.807 1.305 3.492.998.108-.775.418-1.305.76-1.605-2.665-.305-5.466-1.335-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.4 3-.405 1.02.005 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.435.375.81 1.11.81 2.235 0 1.615-.015 2.915-.015 3.315 0 .315.21.69.825.57 4.765-1.59 8.205-6.087 8.205-11.387 0-6.627-5.373-12-12-12z"/>
  </svg>
);

const contactMethods = [
  {
    icon: Mail,
    label: "Email",
    value: "sanjaivsbec@gmail.com",
    href: "mailto:sanjaivsbec@gmail.com",
    description: "Best for detailed project briefs",
  },
  {
    icon: WhatsappIcon,
    label: "WhatsApp",
    value: "+91 9345457374",
    href: "https://wa.me/919345457374",
    description: "Quick questions & fast replies",
    external: true,
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 9345457374",
    href: "tel:+919345457374",
    description: "Mon–Sat, 10 AM – 7 PM IST",
  },
];

const socialLinks = [
  { href: "https://github.com/sanjaivsbec", label: "GitHub", icon: GithubIcon },
  { href: "https://www.linkedin.com/in/sanjai-saravanan-2559a323b/", label: "LinkedIn", icon: LinkedinIcon },
  { href: "https://www.instagram.com/_sanjaiii.i/", label: "Instagram", icon: InstagramIcon },
  { href: "https://wa.me/919345457374", label: "WhatsApp", icon: WhatsappIcon },
];

const projectTypes = [
  "Web Application",
  "E-Commerce",
  "API / Backend",
  "Website Redesign",
  "Other",
];

const inputClass =
  "w-full bg-background/80 border border-border rounded-xl px-4 py-3 text-sm placeholder:text-muted-foreground/60 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-smooth";

const Contact = () => {
  const [projectType, setProjectType] = useState("Web Application");

  return (
    <section id="contact" className="section-padding relative overflow-hidden section-divider">
      <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" aria-hidden />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-accent/10 blur-3xl rounded-full pointer-events-none" aria-hidden />

      <div className="container relative">
        <Reveal>
          <SectionHeader
            label="Contact"
            align="center"
            title={
              <>
                Let's start a <span className="text-gradient">conversation</span>
              </>
            }
            description="Tell me about your project — I'll get back to you within 24 hours with next steps."
          />
        </Reveal>

        {/* Quick action cards — mobile first */}
        <Reveal delay={80}>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-6 md:mb-8 max-w-4xl mx-auto">
            {contactMethods.map(({ icon: Icon, label, value, href, description, external }) => (
              <a
                key={label}
                href={href}
                target={external ? "_blank" : undefined}
                rel={external ? "noreferrer" : undefined}
                className="glass-card rounded-2xl p-4 sm:p-5 card-interactive group flex sm:flex-col items-center sm:items-start gap-3 sm:gap-0 text-center sm:text-left"
              >
                <div className="w-11 h-11 rounded-xl bg-accent-gradient flex items-center justify-center shrink-0 group-hover:scale-105 transition-smooth shadow-sm">
                  <Icon className="w-5 h-5 text-primary-foreground" />
                </div>
                <div className="min-w-0 flex-1 sm:mt-3">
                  <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-0.5">{label}</p>
                  <p className="font-semibold text-sm truncate">{value}</p>
                  <p className="text-xs text-muted-foreground mt-1 hidden sm:block">{description}</p>
                </div>
              </a>
            ))}
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="max-w-5xl mx-auto overflow-hidden rounded-2xl sm:rounded-3xl border border-border shadow-elegant">
            <div className="grid lg:grid-cols-5">
              {/* Info panel */}
              <div className="lg:col-span-2 relative bg-accent-gradient p-6 sm:p-8 lg:p-10 text-primary-foreground overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,rgba(255,255,255,0.12),transparent_55%)] pointer-events-none" aria-hidden />
                <div className="absolute -bottom-16 -right-16 w-48 h-48 rounded-full bg-white/10 blur-2xl pointer-events-none" aria-hidden />

                <div className="relative">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/15 border border-white/20 text-xs font-medium mb-6">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-white" />
                    </span>
                    Available for new projects
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold mb-2">Get in touch</h3>
                  <p className="text-sm text-primary-foreground/80 leading-relaxed mb-8">
                    Open to freelance projects, contract roles, and long-term collaborations. Based in Bengaluru, working with clients worldwide.
                  </p>

                  <div className="space-y-4 mb-8">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 shrink-0 mt-0.5 opacity-80" />
                      <div>
                        <p className="text-xs uppercase tracking-wider opacity-70 mb-0.5">Location</p>
                        <p className="text-sm font-medium">Bengaluru, Karnataka, India</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Clock className="w-5 h-5 shrink-0 mt-0.5 opacity-80" />
                      <div>
                        <p className="text-xs uppercase tracking-wider opacity-70 mb-0.5">Response time</p>
                        <p className="text-sm font-medium">Within 24 hours</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <MessageSquare className="w-5 h-5 shrink-0 mt-0.5 opacity-80" />
                      <div>
                        <p className="text-xs uppercase tracking-wider opacity-70 mb-0.5">Preferred contact</p>
                        <p className="text-sm font-medium">Email or WhatsApp</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {["React", "Spring Boot", "Docker", "Next.js"].map((tag) => (
                      <span key={tag} className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-white/10 border border-white/15">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-wider opacity-70 mb-3">Follow me</p>
                    <div className="flex gap-2">
                      {socialLinks.map(({ href, label, icon: Icon }) => (
                        <a
                          key={label}
                          href={href}
                          target="_blank"
                          rel="noreferrer"
                          className="w-10 h-10 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center hover:bg-white/20 transition-smooth"
                          aria-label={label}
                        >
                          <Icon className="w-4 h-4" />
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Form panel */}
              <div className="lg:col-span-3 bg-card/95 backdrop-blur-sm p-6 sm:p-8 lg:p-10">
                <div className="flex items-center gap-3 mb-6 pb-6 border-b border-border">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                    <Send className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Send a message</h3>
                    <p className="text-xs text-muted-foreground">Fill out the form and I'll reply via email</p>
                  </div>
                </div>

                <form
                  className="space-y-5"
                  onSubmit={(e) => {
                    e.preventDefault();
                    const form = e.currentTarget as HTMLFormElement;
                    const data = new FormData(form);
                    const subject = encodeURIComponent(
                      `[${data.get("projectType")}] Inquiry from ${data.get("name")}`,
                    );
                    const body = encodeURIComponent(
                      `${data.get("message")}\n\n— ${data.get("name")} (${data.get("email")})\nProject type: ${data.get("projectType")}`,
                    );
                    window.location.href = `mailto:sanjaivsbec@gmail.com?subject=${subject}&body=${body}`;
                  }}
                >
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="contact-name" className="text-sm font-medium text-foreground mb-1.5 block">
                        Your Name <span className="text-accent">*</span>
                      </label>
                      <input
                        id="contact-name"
                        required
                        name="name"
                        className={inputClass}
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-email" className="text-sm font-medium text-foreground mb-1.5 block">
                        Email <span className="text-accent">*</span>
                      </label>
                      <input
                        id="contact-email"
                        required
                        type="email"
                        name="email"
                        className={inputClass}
                        placeholder="you@company.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">Project Type</label>
                    <input type="hidden" name="projectType" value={projectType} />
                    <div className="flex flex-wrap gap-2">
                      {projectTypes.map((type) => (
                        <button
                          key={type}
                          type="button"
                          onClick={() => setProjectType(type)}
                          className={cn(
                            "px-3 py-1.5 rounded-full text-xs font-medium border transition-smooth",
                            projectType === type
                              ? "bg-accent text-accent-foreground border-accent"
                              : "bg-secondary/50 text-muted-foreground border-border hover:border-accent/40",
                          )}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="text-sm font-medium text-foreground mb-1.5 block">
                      Project Details <span className="text-accent">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      required
                      name="message"
                      rows={5}
                      className={cn(inputClass, "resize-none")}
                      placeholder="Describe your project, timeline, and goals..."
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center gap-4 pt-2">
                    <Button type="submit" variant="hero" size="lg" className="w-full sm:w-auto rounded-xl h-12 px-8">
                      Send Message <ArrowRight className="ml-1 w-4 h-4" />
                    </Button>
                    <p className="flex items-center gap-1.5 text-xs text-muted-foreground">
                      <CheckCircle2 className="w-3.5 h-3.5 text-accent shrink-0" />
                      No spam — your info stays private
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Contact;
