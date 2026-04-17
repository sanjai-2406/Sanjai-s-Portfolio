import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";

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
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-hero-gradient opacity-50 pointer-events-none" aria-hidden />
      <div className="container relative">
        <div className="max-w-4xl mx-auto bg-card-gradient border border-border rounded-3xl p-8 md:p-12 shadow-elegant">
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <span className="text-primary font-mono text-sm"> let's connect</span>
              <h2 className="text-3xl md:text-5xl font-bold mt-2 mb-4">
                Have a project <span className="text-gradient">in mind?</span>
              </h2>
              <p className="text-muted-foreground mb-8">
                I'm currently available for projects, contract work, and collaborations. Let's build something great together.
              </p>

              <div className="space-y-4">
                <a
                  href="mailto:sanjaivsbec@gmail.com"
                  className="flex items-center gap-3 text-foreground hover:text-primary transition-smooth group"
                >
                  <span className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-smooth">
                    <Mail className="w-4 h-4 text-primary" />
                  </span>
                  <span className="font-mono text-sm">sanjaivsbec@gmail.com</span>
                </a>
                <a
                  href="https://wa.me/919345457374"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 text-foreground hover:text-primary transition-smooth group"
                >
                  <span className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-smooth">
                    <WhatsappIcon className="w-4 h-4 text-primary" />
                  </span>
                  <span className="font-mono text-sm">WhatsApp: +91 9345457374</span>
                </a>
                <a
                  href="tel:+919345457374"
                  className="flex items-center gap-3 text-foreground hover:text-primary transition-smooth group"
                >
                  <span className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-smooth">
                    <Phone className="w-4 h-4 text-primary" />
                  </span>
                  <span className="font-mono text-sm">+91 9345457374</span>
                </a>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <span className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <MapPin className="w-4 h-4 text-primary" />
                  </span>
                  <span className="font-mono text-sm">Bengaluru, Karnataka, India</span>
                </div>
              </div>

              <div className="flex gap-3 mt-8">
                <a
                  href="https://github.com/sanjaivsbec"
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-lg border border-border flex items-center justify-center hover:border-primary/50 hover:text-primary transition-smooth"
                  aria-label="GitHub"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
                <a
                  href="https://www.linkedin.com/in/sanjai-saravanan-2559a323b/"
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-lg border border-border flex items-center justify-center hover:border-primary/50 hover:text-primary transition-smooth"
                  aria-label="LinkedIn"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
                <a
                  href="https://www.instagram.com/_sanjaiii.i/"
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-lg border border-border flex items-center justify-center hover:border-primary/50 hover:text-primary transition-smooth"
                  aria-label="Instagram"
                >
                  <InstagramIcon className="w-4 h-4" />
                </a>
                <a
                  href="https://wa.me/919345457374"
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 rounded-lg border border-border flex items-center justify-center hover:border-primary/50 hover:text-primary transition-smooth"
                  aria-label="WhatsApp"
                >
                  <WhatsappIcon className="w-4 h-4" />
                </a>
              </div>
            </div>

            <form
              className="space-y-4"
              onSubmit={(e) => {
                e.preventDefault();
                const form = e.currentTarget as HTMLFormElement;
                const data = new FormData(form);
                const subject = encodeURIComponent(`Project inquiry from ${data.get("name")}`);
                const body = encodeURIComponent(`${data.get("message")}\n\n— ${data.get("name")} (${data.get("email")})`);
                window.location.href = `mailto:sanjaivsbec@gmail.com?subject=${subject}&body=${body}`;
              }}
            >
              <div>
                <label className="text-sm text-muted-foreground mb-1.5 block">Your Name</label>
                <input
                  required
                  name="name"
                  className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-primary transition-smooth"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="text-sm text-muted-foreground mb-1.5 block">Email</label>
                <input
                  required
                  type="email"
                  name="email"
                  className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-primary transition-smooth"
                  placeholder="you@company.com"
                />
              </div>
              <div>
                <label className="text-sm text-muted-foreground mb-1.5 block">Project Details</label>
                <textarea
                  required
                  name="message"
                  rows={5}
                  className="w-full bg-secondary border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-primary transition-smooth resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>
              <Button type="submit" variant="hero" size="lg" className="w-full">
                Send Message <ArrowRight className="ml-1 w-4 h-4" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
