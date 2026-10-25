import { Briefcase, GraduationCap, BadgeCheck } from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionHeader from "@/components/SectionHeader";

const timeline = [

   {
    type: "work",
    icon: Briefcase,
    title: "Network Engineer",
    org: "C-Drive Solutions, Coimbatore",
    period: "Aug 2026 – Nov 2026",
    points: [
      "My journey as a Network Engineer has given me valuable hands-on experience in network infrastructure deployment, system installation, configuration, and troubleshooting.",
      " At C-Drive Solutions, I have worked on an infrastructure project at Avera Heart Hospital, Coimbatore, where I contributed to setting up and maintaining essential networking and integrated hospital systems",
      "My responsibilities include network rack setup, installing and configuring routers and switches, access control systems, IP camera configuration, safety systems, and nurse calling systems.",
      "I have also gained practical experience troubleshooting hardware and software issues, diagnosing connectivity problems, and ensuring that connected systems function reliably.",
      
    ],
  },
  {
    type: "work",
    icon: Briefcase,
    title: "Full Stack Developer",
    org: "Buynoe Technologies, Banglore",
    period: "Dec 2025 – july 2026",
    points: [
      "My journey as a Full Stack Developer has been driven by my passion for building modern web applications and solving real-world problems through technology.Developing full-stack features using React.js and Node.js",
      "With hands-on experience at Buynoe Technologies, I have worked on developing full-stack applications across e-commerce and Learning management domains, gaining practical experience in frontend development, backend engineering, database management, and application deployment.",
      "On the frontend, I work with React.js, Next.js, JavaScript, HTML5, and CSS3 to build responsive and interactive user interfaces.",
      "On the backend, I develop RESTful APIs using Node.js with MySQL and MongoDB for data management. I have also implemented JWT authentication and role-based access control to improve application security.",
      "During my professional journey, I contributed to an e-commerce platform featuring product catalogs, shopping carts, checkout, and order management. I also worked on an HR Management System designed to support employee onboarding, payroll, attendance, and offboarding.",
      "Contributing to manual testing cycles and defect tracking",
      "I have experience working with Git, GitHub, CI/CD workflows, Docker, and Agile development practices. I enjoy learning new technologies, improving application performance, and building scalable solutions that deliver practical value."
    ],
  },
  {
    type: "education",
    icon: GraduationCap,
    title: "B.E. Electronics & Communication Engineering",
    org: "V.S.B Engineering College, Karur",
    period: "Aug 2020 – May 2024 • CGPA 7.8/10",
    points: [
      "Coursework: Data Structures, Algorithms, DBMS, OOP, Computer Networks",
      "Built strong analytical and problem-solving fundamentals",
    ],
  },
  {
    type: "cert",
    icon: BadgeCheck,
    title: "Java Full Stack Development",
    org: "Qspiders, Vadapalani",
    period: "Mar – Nov 2025",
    points: [
      "My Java Full Stack Development training at QSpiders provided me with a strong foundation in modern web application development, covering both frontend and backend technologies.",
      "Throughout the course, I developed my technical skills in building interactive user interfaces, implementing server-side business logic, managing databases, and integrating applications through RESTful APIs.",
      "The training covered core Java programming, object-oriented programming (OOP), SQL, HTML5, CSS3, JavaScript, React.js, Hibernate, and Spring Boot. ",
      "I gained knowledge of frontend development, backend architecture, database connectivity, and the fundamentals of building end-to-end web applications.",
      "Through practical learning and coding exercises, I strengthened my understanding of application development, database operations, API integration, and debugging. ",
      "This training helped me build a foundation for developing full-stack applications and prepared me to apply these technologies in real-world software development projects.",

    ],
    
  },
  {
    type: "cert",
    icon: BadgeCheck,
    title: "Pega Certified System Architect (CSA & SSA) v8.8",
    org: "Pegasystems",
    period: "Mar 2023 – Feb 2024",
    points: ["Enterprise app dev, case management & business rule engine"],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="section-padding relative">
      <div className="container">
        <Reveal>
          <SectionHeader
            label="Career"
            align="center"
            title={
              <>
                Experience & <span className="text-gradient">Credentials</span>
              </>
            }
            description="A track record of learning, building, and delivering across enterprise and startup contexts."
          />
        </Reveal>

        <div className="max-w-3xl mx-auto relative px-1 sm:px-0">
          <div className="absolute left-[1.125rem] sm:left-6 top-0 bottom-0 w-px bg-gradient-to-b from-accent/60 via-border to-transparent" aria-hidden />

          <div className="space-y-6 sm:space-y-8">
            {timeline.map((item, idx) => {
              const Icon = item.icon;
              return (
                <Reveal key={idx} delay={idx * 80}>
                  <div className="relative pl-12 sm:pl-16 md:pl-20">
                    <div className="absolute left-0 top-0 w-9 h-9 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl glass-card border-2 border-accent/30 flex items-center justify-center shadow-card">
                      <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-accent" />
                    </div>
                    <div className="glass-card rounded-xl sm:rounded-2xl p-4 sm:p-6 card-interactive">
                      <div className="flex flex-col sm:flex-row sm:flex-wrap sm:items-baseline sm:justify-between gap-1 sm:gap-2 mb-1">
                        <h3 className="text-base sm:text-lg font-semibold leading-snug">{item.title}</h3>
                        <span className="text-[10px] sm:text-xs font-mono text-muted-foreground bg-secondary px-2 sm:px-2.5 py-1 rounded-full w-fit">
                          {item.period}
                        </span>
                      </div>
                      <p className="text-accent text-xs sm:text-sm font-medium mb-2 sm:mb-3">{item.org}</p>
                      <ul className="space-y-1.5">
                        {item.points.map((p) => (
                          <li key={p} className="text-xs sm:text-sm text-muted-foreground flex gap-2">
                            <span className="text-accent shrink-0">▸</span>
                            <span>{p}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
