import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import TechMarquee from "@/components/TechMarquee";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Projects from "@/components/Projects";
import WhyWorkWithMe from "@/components/WhyWorkWithMe";
import Experience from "@/components/Experience";
import CtaBand from "@/components/CtaBand";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen text-foreground overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <StatsBar />
        <TechMarquee />
        <About />
        <Skills />
        <Services />
        <Process />
        <Projects />
        <WhyWorkWithMe />
        <Experience />
        <CtaBand />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
