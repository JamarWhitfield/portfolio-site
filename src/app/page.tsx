"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import headshot from "../images/jamar-whitfield-866.jpg";

const skills = {
  languages: ["Python", "JavaScript/TypeScript", "Bash", "SQL", "C++"],
  frameworks: ["FastAPI", "React", "Docker", "Git", "AWS"],
  data: ["PostgreSQL", "Redis", "Spark/Databricks", "Kubernetes"]
};

const projects = [
  {
    title: "Real-Time Pipeline Monitoring",
    description: "Monitoring tooling for live ingestion workflows and sensor-driven analytics.",
    stack: ["Python", "FastAPI", "PostgreSQL", "Docker"],
    github: "https://github.com/JamarWhitfield"
  },
  {
    title: "ML Research Toolkit",
    description: "Reusable training and evaluation workflows for experimentation and model analysis.",
    stack: ["PyTorch", "Python", "Bash", "AWS"],
    github: "https://github.com/JamarWhitfield"
  },
  {
    title: "Data Ingestion Migration Tooling",
    description: "Automation for converting legacy pipeline configurations into standardized formats.",
    stack: ["Python", "TypeScript", "SQL", "AWS"],
    github: "https://github.com/JamarWhitfield"
  },
  {
    title: "Portfolio Platform",
    description: "A lightweight portfolio with developer-focused design and production deployment.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/JamarWhitfield",
    demo: "#"
  }
];

const experience = [
  {
    role: "SOC Analyst",
    org: "Louisiana State University | Baton Rouge, LA",
    period: "Aug 2025 – Present",
    highlights: [
      "Investigate security alerts and triage incidents across SOAR-driven workflows.",
      "Correlate logs in Splunk and track indicators with clear operational documentation.",
      "Improve repeatability in detection and response processes with structured playbooks."
    ]
  },
  {
    role: "Software Engineering Intern",
    org: "Blue Origin | Kent, WA",
    period: "May 2025 – Aug 2025",
    highlights: [
      "Built tooling to map legacy and modern ingestion configurations across internal systems.",
      "Automated migration paths that standardized pipeline settings and reduced manual work.",
      "Validated parity between old and new data flows before rollout."
    ]
  },
  {
    role: "Data Science Intern",
    org: "BASF Corporation | Geismar, LA",
    period: "May 2024 – Aug 2024",
    highlights: [
      "Built a real-time pipeline for 25+ industrial sensors to support lifecycle analysis.",
      "Shipped live monitoring tools for plant operators with production-facing visualization.",
      "Integrated predictive models to surface sensor risk earlier and improve response time."
    ]
  },
  {
    role: "Undergraduate Researcher - DeVision",
    org: "LSU Mathematics Department | Baton Rouge, LA",
    period: "May 2023 – May 2024",
    highlights: [
      "Developed CNN-based counting models for applied research workflows.",
      "Integrated custom tooling that made ML outputs more usable in domain-specific software.",
      "Optimized training on departmental compute resources and presented results externally."
    ]
  }
];

const experienceSummary = [
  "Builds ML systems with a bias toward reliable deployment and usable tooling.",
  "Works across ingestion pipelines, backend services, and data infrastructure.",
  "Brings research experience in model development and experimentation.",
  "Applies a security operations mindset to monitoring, incident handling, and system trust."
];

const shellClassName = "mx-auto w-full max-w-6xl px-6 sm:px-8 lg:px-10";
const sectionClassName = `${shellClassName} py-16 sm:py-20`;
const sectionTitleClassName = "text-xs uppercase tracking-[0.45em] text-slate-400";
const panelClassName = "rounded-3xl border border-slate-800/90 bg-slate-900/32 backdrop-blur-sm";

export default function Home() {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [formStatus, setFormStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (formStatus === "sending") return;

    const form = event.currentTarget;
    const formData = new FormData(form);

    setFormStatus("sending");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          Accept: "application/json"
        },
        body: formData
      });

      if (response.ok) {
        setFormStatus("success");
        formRef.current?.reset();
      } else {
        setFormStatus("error");
      }
    } catch {
      setFormStatus("error");
    }
  };

  return (
    <main className="relative pb-16 sm:pb-20">
      <header className={`${shellClassName} py-8 sm:py-10`}>
        <nav aria-label="Primary" className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800/80 pb-6 text-sm text-slate-300 sm:pb-7">
          <span className="text-xs uppercase tracking-[0.45em] text-slate-400">JKWJR.</span>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <a href="#skills" className="transition hover:text-white">Skills</a>
            <a href="#experience" className="transition hover:text-white">Experience</a>
            <a href="#projects" className="transition hover:text-white">Projects</a>
            <a href="#contact" className="transition hover:text-white">Contact</a>
          </div>
        </nav>
      </header>

      <section className={`${sectionClassName} pt-6 sm:pt-8`}>
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.2fr)_22rem] lg:items-center lg:gap-16">
          <div className="max-w-3xl space-y-8">
            <div className="space-y-4">
              <p className="text-xs uppercase tracking-[0.42em] text-slate-400">Jamar Whitfield Jr.</p>
              <div className="space-y-3">
                <h1 className="text-4xl font-semibold leading-tight tracking-[-0.03em] text-white sm:text-5xl lg:text-6xl">
                  I build machine learning systems and data infrastructure.
                </h1>
                <p className="max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
                  Computer Science and Mathematics student focused on ML systems, backend engineering, and production-grade data platforms.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 text-sm font-medium">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full bg-white px-5 py-3 text-slate-950 transition hover:bg-slate-200"
              >
                Contact me
              </a>
              <a
                href="resume/Jamar_Keon_Whitfield_Jr_Resume_Spring2026_V4.pdf"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-slate-700 px-5 py-3 text-slate-200 transition hover:border-slate-500 hover:text-white"
              >
                View Resume
              </a>
              <a
                href="https://github.com/JamarWhitfield"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-slate-700 px-5 py-3 text-slate-200 transition hover:border-slate-500 hover:text-white"
              >
                View GitHub
              </a>
            </div>

            <div className="grid gap-3 text-sm text-slate-300 sm:grid-cols-3">
              <div className={`${panelClassName} rounded-2xl px-4 py-4`}>
                <p className="text-xs uppercase tracking-[0.28em] text-slate-500">Focus</p>
                <p className="mt-2 text-sm leading-6 text-slate-200">ML systems, data tooling, and backend platforms.</p>
              </div>
              <div className={`${panelClassName} rounded-2xl px-4 py-4`}>
                <p className="text-xs uppercase tracking-[0.28em] text-slate-500">Stack</p>
                <p className="mt-2 text-sm leading-6 text-slate-200">Python, TypeScript, SQL, Docker, AWS.</p>
              </div>
              <div className={`${panelClassName} rounded-2xl px-4 py-4`}>
                <p className="text-xs uppercase tracking-[0.28em] text-slate-500">Interests</p>
                <p className="mt-2 text-sm leading-6 text-slate-200">Computer vision, data engineering, ML systems, and real-time software.</p>
              </div>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-sm">
            <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-slate-700/40 via-slate-600/10 to-transparent blur-2xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-slate-700/70 bg-slate-900/60 p-3 shadow-2xl shadow-black/20 backdrop-blur-sm">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem]">
                <Image
                  src={headshot}
                  alt="Jamar Keon Whitfield Jr"
                  fill
                  sizes="(min-width: 1024px) 22rem, (min-width: 768px) 20rem, 80vw"
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className={`${sectionClassName} border-t border-slate-800/70`}>
        <h2 className={sectionTitleClassName}>Skills</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <div className={`${panelClassName} p-5 sm:p-6`}>
            <h3 className="text-sm font-semibold text-white">Languages</h3>
            <ul className="mt-3 space-y-2 text-sm text-slate-300">
              {skills.languages.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>
          <div className={`${panelClassName} p-5 sm:p-6`}>
            <h3 className="text-sm font-semibold text-white">Frameworks & Tech</h3>
            <ul className="mt-3 space-y-2 text-sm text-slate-300">
              {skills.frameworks.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>
          <div className={`${panelClassName} p-5 sm:p-6`}>
            <h3 className="text-sm font-semibold text-white">Data & Infra</h3>
            <ul className="mt-3 space-y-2 text-sm text-slate-300">
              {skills.data.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section id="experience" className={`${sectionClassName} border-t border-slate-800/70`}>
        <div className="grid gap-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-start">
          <div className="space-y-5">
            <div className="space-y-3">
              <h2 className={sectionTitleClassName}>Experience</h2>
              <p className="max-w-xl text-base leading-7 text-slate-300">
                Experience spanning ML research, production data systems, infrastructure migration, and security operations.
              </p>
            </div>
            <ul className="grid gap-3">
              {experienceSummary.map((item) => (
                <li
                  key={item}
                  className={`${panelClassName} rounded-2xl px-4 py-4 text-sm leading-6 text-slate-200`}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {experience.map((item) => (
              <article
                key={`${item.role}-${item.org}`}
                className={`${panelClassName} space-y-3 rounded-2xl p-5`}
              >
                <div className="space-y-2">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="text-base font-semibold text-white">{item.role}</h3>
                    <span className="text-[11px] uppercase tracking-[0.24em] text-slate-500">
                      {item.period}
                    </span>
                  </div>
                  <p className="text-sm text-slate-300">{item.org}</p>
                </div>
                <ul className="space-y-2 text-sm leading-6 text-slate-200">
                  {item.highlights.map((highlight) => (
                    <li key={highlight} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-500" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className={`${sectionClassName} border-t border-slate-800/70`}>
        <h2 className={sectionTitleClassName}>Projects</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className={`${panelClassName} group flex h-full flex-col justify-between gap-5 rounded-2xl p-5 transition duration-200 hover:-translate-y-1 hover:border-slate-600 hover:bg-slate-900/55`}
            >
              <div className="space-y-4">
                <div className="space-y-2">
                  <h3 className="text-base font-semibold text-white">{project.title}</h3>
                  <p className="text-sm leading-6 text-slate-300">{project.description}</p>
                </div>
                <ul className="flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-slate-700 px-2.5 py-1 text-[11px] font-medium uppercase tracking-[0.14em] text-slate-300"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-wrap items-center gap-4 text-sm font-medium text-slate-300">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 transition group-hover:text-white hover:text-white"
                  >
                    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 fill-current">
                      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.25.8-.6v-2.1c-3.2.7-3.9-1.4-3.9-1.4-.5-1.2-1.2-1.5-1.2-1.5-1-.7.1-.7.1-.7 1.1.1 1.7 1.2 1.7 1.2 1 .1.8 1.9 2.7 2.1.1-.8.4-1.3.7-1.6-2.6-.3-5.3-1.3-5.3-5.9 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.3 1.2 1-.3 2-.4 3-.4s2 .1 3 .4c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8.1 3.1.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.4 5.9.4.4.8 1.1.8 2.2v3.2c0 .3.2.7.8.6 4.6-1.5 7.9-5.8 7.9-10.9C23.5 5.65 18.35.5 12 .5Z" />
                    </svg>
                    GitHub
                  </a>
                )}
                {project.demo && project.demo !== "#" && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 transition group-hover:text-white hover:text-white"
                  >
                    Live demo
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="contact" className={`${sectionClassName} border-t border-slate-800/70`}>
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:items-start">
          <div className="space-y-5">
            <div className="space-y-3">
              <h2 className={sectionTitleClassName}>Contact</h2>
              <h3 className="text-3xl font-semibold text-white sm:text-4xl">Let&apos;s connect.</h3>
              <p className="max-w-lg text-base leading-7 text-slate-300">
                Reach out for internships, software engineering roles, ML systems work, or collaboration on data-driven products.
              </p>
            </div>
          </div>

          <form ref={formRef} className={`${panelClassName} grid gap-4 p-5 sm:p-6`} onSubmit={handleSubmit}>
            <input type="hidden" name="access_key" value="49cd1fe2-5206-46db-a18d-48362a69afe2" />
            <div className="grid gap-4 md:grid-cols-2">
              <label className="flex flex-col gap-2 text-sm text-slate-300">
                Name
                <input
                  name="name"
                  autoComplete="name"
                  required
                  className="rounded-xl border border-slate-700 bg-transparent px-4 py-3 text-base text-white outline-none ring-accent/40 transition focus:border-slate-500 focus:ring"
                  placeholder="Your name"
                />
              </label>
              <label className="flex flex-col gap-2 text-sm text-slate-300">
                Email
                <input
                  type="email"
                  name="email"
                  autoComplete="email"
                  required
                  className="rounded-xl border border-slate-700 bg-transparent px-4 py-3 text-base text-white outline-none ring-accent/40 transition focus:border-slate-500 focus:ring"
                  placeholder="you@example.com"
                />
              </label>
              <label className="flex flex-col gap-2 text-sm text-slate-300">
                Subject
                <input
                  name="subject"
                  autoComplete="off"
                  required
                  className="rounded-xl border border-slate-700 bg-transparent px-4 py-3 text-base text-white outline-none ring-accent/40 transition focus:border-slate-500 focus:ring"
                  placeholder="Subject"
                />
              </label>
            </div>
            <label className="flex flex-col gap-2 text-sm text-slate-300">
              Message
              <textarea
                name="message"
                autoComplete="off"
                required
                rows={5}
                className="rounded-xl border border-slate-700 bg-transparent px-4 py-3 text-base text-white outline-none ring-accent/40 transition focus:border-slate-500 focus:ring"
                placeholder="Write your message..."
              />
            </label>
            <button
              type="submit"
              className="w-full rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-200 disabled:cursor-not-allowed disabled:opacity-70 sm:w-fit"
              disabled={formStatus === "sending"}
            >
              {formStatus === "sending" ? "Sending..." : "Send Message →"}
            </button>
            <p className="min-h-5 text-sm text-slate-400" aria-live="polite">
              {formStatus === "success" && "Message sent. I’ll get back to you soon."}
              {formStatus === "error" && "Something went wrong. Please try again."}
            </p>
          </form>
        </div>
      </section>

      <footer className={`${shellClassName} border-t border-slate-800/70 pt-8 text-xs uppercase tracking-[0.35em] text-slate-500`}>
        2026 © JKWJR.
      </footer>
    </main>
  );
}
