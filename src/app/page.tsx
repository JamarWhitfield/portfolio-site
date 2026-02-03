"use client";

import { useRef, useState } from "react";

const skills = {
  languages: ["Python", "JavaScript/TypeScript", "Bash", "SQL", "C++"],
  frameworks: ["FastAPI", "React", "Docker", "Git", "AWS"],
  data: ["PostgreSQL", "Redis", "Spark/Databricks", "Kubernetes"]
};

const projects = [
  {
    title: "Graph Theory Visualizer",
    description: "Interactive algorithms and graph layouts for education and experimentation."
  },
  {
    title: "Research Toolkit",
    description: "Reusable math utilities for modeling, simulation, and analysis."
  },
  {
    title: "Portfolio Platform",
    description: "A sleek, data-driven web presence with custom visualization." 
  }
];

const experience = [
  {
    role: "SOC Analyst",
    org: "Louisiana State University | Baton Rouge, LA",
    period: "Aug 2025 – Present",
    highlights: [
      "Monitor, triage, and investigate security alerts in SOAR using structured playbooks.",
      "Correlate log data in Splunk and track IOCs (IPs, domains, hashes) with documented outcomes.",
      "Maintain thorough case documentation and refine alerting workflows with the team."
    ]
  },
  {
    role: "Software Engineering Intern",
    org: "Blue Origin | Kent, WA",
    period: "May 2025 – Aug 2025",
    highlights: [
      "Automated mapping of configuration classes across legacy and modern ingestion frameworks.",
      "Built migration tooling to convert legacy configurations and standardize settings.",
      "Executed validation workflows to ensure parity between legacy and new pipelines."
    ]
  },
  {
    role: "Data Science Intern",
    org: "BASF Corporation | Geismar, LA",
    period: "May 2024 – Aug 2024",
    highlights: [
      "Built a real-time data pipeline for 25+ sensors to enable lifecycle analysis.",
      "Deployed a Streamlit app for live monitoring in the DNT Unit with advanced visualization.",
      "Integrated ML models to predict sensor failures and improve response time."
    ]
  },
  {
    role: "Undergraduate Researcher - DeVision",
    org: "LSU Mathematics Department | Baton Rouge, LA",
    period: "May 2023 – May 2024",
    highlights: [
      "Developed CNN models for frog egg counting at 99% accuracy.",
      "Integrated a custom plugin for AGGRC to support ML adoption.",
      "Optimized training using department supercomputers and presented findings to industry."
    ]
  }
];

const leadership = [
  "LSU Vision Lab | Undergraduate Researcher",
  "Applied Cybersecurity Lab | Undergraduate Researcher",
  "National Society of Black Engineers | Member",
  "Residential Assistant | Azalea Hall",
  "TX-LA Mathematics Conference | Talk: Deep Learning for Frog Eggs Quantification (March 2024)"
];

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
    } catch (error) {
      setFormStatus("error");
    }
  };

  return (
    <main className="relative">
      <header className="mx-auto w-full max-w-6xl px-8 py-8">
        <nav className="flex items-center justify-between">
          <span className="text-sm uppercase tracking-[0.3em] text-slate-400">JKW</span>
          <div className="flex items-center gap-3 text-sm">
            <a
              href="#about"
              className="group relative overflow-hidden rounded-full border border-slate-700 bg-slate-900/70 px-4 py-2 text-slate-100 shadow-sm shadow-blue-500/20 transition hover:-translate-y-0.5 hover:border-slate-500"
            >
              <span className="relative z-10">About</span>
              <span className="absolute inset-0 -z-0 bg-gradient-to-r from-accent/30 via-transparent to-accent-2/30 opacity-0 transition group-hover:opacity-100" />
            </a>
            <a
              href="#experience"
              className="rounded-full border border-transparent px-4 py-2 text-slate-300 transition hover:border-slate-700 hover:text-white"
            >
              Experience
            </a>
            <a
              href="#projects"
              className="rounded-full border border-transparent px-4 py-2 text-slate-300 transition hover:border-slate-700 hover:text-white"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="rounded-full border border-transparent px-4 py-2 text-slate-300 transition hover:border-slate-700 hover:text-white"
            >
              Contact
            </a>
          </div>
        </nav>
      </header>
      <section className="mx-auto flex min-h-screen w-full max-w-6xl flex-col justify-center px-8 py-24">
        <div className="max-w-3xl space-y-6">
          <p className="text-sm uppercase tracking-[0.3em] text-slate-300">
            Portfolio
          </p>
          <h1 className="text-4xl font-semibold leading-tight text-white sm:text-6xl">
            Jamar Keon Whitfield Jr
          </h1>
          <p className="text-lg text-slate-200 sm:text-xl">
            Dual degree in mathematics and computer science. I build elegant, performant
            systems and visual experiences inspired by graph theory, optimization, and
            modern web technology.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="#projects"
              className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-slate-900 shadow-lg shadow-blue-500/30"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="rounded-full border border-slate-500/60 px-6 py-3 text-sm font-semibold text-slate-100"
            >
              Contact Me
            </a>
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto w-full max-w-6xl px-8 py-20">
        <div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-5">
            <h2 className="text-2xl font-semibold">About</h2>
            <p className="text-slate-200">
              I focus on building systems where mathematical rigor meets human-centered
              design. From algorithmic research to full-stack engineering, I aim to make
              complex ideas feel intuitive and beautiful.
            </p>
            <div className="space-y-2 text-sm text-slate-300">
              <p>Louisiana State University — Baton Rouge, LA</p>
              <p>B.S. Computer Science | B.S. Mathematics (Dec 2026)</p>
              <p>GPA: 3.55</p>
            </div>
            <div className="flex flex-wrap gap-3 text-sm text-slate-300">
              <span>225-301-3315</span>
              <span>jamarinternship@gmail.com</span>
              <a
                href="https://www.linkedin.com/in/jamar-k-whitfield-jr/"
                className="text-accent hover:text-white"
              >
                linkedin.com/in/jamar-k-whitfield-jr
              </a>
            </div>
          </div>
          <div className="rounded-3xl border border-slate-800 bg-surface-2/70 p-6">
            <h3 className="text-sm uppercase tracking-[0.25em] text-slate-400">
              Focus Areas
            </h3>
            <ul className="mt-4 space-y-3 text-slate-200">
              <li>Graph optimization and visualization</li>
              <li>Algorithm design and analysis</li>
              <li>Interactive web engineering</li>
            </ul>
            <div className="mt-6 text-sm text-slate-300">
              <p className="text-xs uppercase tracking-[0.25em] text-slate-400">
                Leadership & Talks
              </p>
              <ul className="mt-3 space-y-2">
                {leadership.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-8 py-20">
        <h2 className="text-2xl font-semibold">Skills</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <div className="rounded-3xl border border-slate-800 bg-surface-2/70 p-6">
            <h3 className="text-sm uppercase tracking-[0.25em] text-slate-400">Languages</h3>
            <div className="mt-4 flex flex-wrap gap-3">
              {skills.languages.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-slate-700 bg-surface px-4 py-2 text-sm text-slate-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div className="rounded-3xl border border-slate-800 bg-surface-2/70 p-6">
            <h3 className="text-sm uppercase tracking-[0.25em] text-slate-400">Frameworks & Tech</h3>
            <div className="mt-4 flex flex-wrap gap-3">
              {skills.frameworks.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-slate-700 bg-surface px-4 py-2 text-sm text-slate-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div className="rounded-3xl border border-slate-800 bg-surface-2/70 p-6">
            <h3 className="text-sm uppercase tracking-[0.25em] text-slate-400">Data & Infra</h3>
            <div className="mt-4 flex flex-wrap gap-3">
              {skills.data.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-slate-700 bg-surface px-4 py-2 text-sm text-slate-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="experience" className="mx-auto w-full max-w-6xl px-8 py-20 overflow-visible">
        <h2 className="text-3xl font-semibold">Experience</h2>
        <div className="mt-8 -mx-8 flex gap-6 overflow-x-auto px-8 pb-6 snap-x snap-mandatory">
          {experience.map((item) => (
            <article
              key={`${item.role}-${item.org}`}
              className="min-w-[280px] snap-start rounded-3xl border border-slate-800 bg-surface-2/70 p-6 sm:min-w-[360px] md:min-w-[420px]"
            >
              <p className="text-sm uppercase tracking-[0.2em] text-slate-400">
                {item.period}
              </p>
              <h3 className="mt-3 text-2xl font-semibold text-white">{item.role}</h3>
              <p className="text-base text-slate-200">{item.org}</p>
              <ul className="mt-4 space-y-3 text-base text-slate-200">
                {item.highlights.map((highlight) => (
                  <li key={highlight}>• {highlight}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section id="projects" className="mx-auto w-full max-w-6xl px-8 py-20">
        <h2 className="text-2xl font-semibold">Selected Projects</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="rounded-3xl border border-slate-800 bg-surface-2/70 p-6"
            >
              <h3 className="text-lg font-semibold text-white">{project.title}</h3>
              <p className="mt-3 text-sm text-slate-300">{project.description}</p>
              <button className="mt-6 text-sm font-semibold text-accent">Learn more</button>
            </article>
          ))}
        </div>
      </section>

      <section id="contact" className="mx-auto w-full max-w-6xl px-8 py-20">
        <div className="rounded-3xl border border-slate-800 bg-surface-2/80 p-8">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-semibold">Contact</h2>
            <p className="mt-3 text-slate-300">
              Send a message for collaborations, internship opportunities, or software engineering roles.
            </p>
          </div>
          <div className="mt-6 flex flex-wrap gap-4 text-sm text-slate-300">
            <a
              href="https://www.linkedin.com/in/jamar-k-whitfield-jr/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-surface-2/70 px-4 py-2 transition hover:border-slate-500 hover:text-white"
            >
              <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 fill-current">
                <path d="M4.98 3.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5ZM3 9h4v12H3V9Zm7 0h3.6v1.7h.05c.5-.9 1.75-1.85 3.6-1.85 3.85 0 4.55 2.4 4.55 5.55V21h-4v-5.2c0-1.25-.02-2.85-1.75-2.85-1.75 0-2 1.35-2 2.75V21h-4V9Z" />
              </svg>
              LinkedIn
            </a>
            <a
              href="https://github.com/JamarWhitfield"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-surface-2/70 px-4 py-2 transition hover:border-slate-500 hover:text-white"
            >
              <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 fill-current">
                <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.25.8-.6v-2.1c-3.2.7-3.9-1.4-3.9-1.4-.5-1.2-1.2-1.5-1.2-1.5-1-.7.1-.7.1-.7 1.1.1 1.7 1.2 1.7 1.2 1 .1.8 1.9 2.7 2.1.1-.8.4-1.3.7-1.6-2.6-.3-5.3-1.3-5.3-5.9 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.3 1.2 1-.3 2-.4 3-.4s2 .1 3 .4c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8.1 3.1.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.4 5.9.4.4.8 1.1.8 2.2v3.2c0 .3.2.7.8.6 4.6-1.5 7.9-5.8 7.9-10.9C23.5 5.65 18.35.5 12 .5Z" />
              </svg>
              GitHub
            </a>
            <a
              href="mailto:jamarinternship@gmail.com"
              className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-surface-2/70 px-4 py-2 transition hover:border-slate-500 hover:text-white"
            >
              <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 fill-current">
                <path d="M4 5h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Zm0 2v.5l8 5 8-5V7H4Zm16 10V9.6l-7.4 4.6a1 1 0 0 1-1.2 0L4 9.6V17h16Z" />
              </svg>
              Email
            </a>
          </div>
          <form
            ref={formRef}
            className="mt-8 grid gap-4"
            onSubmit={handleSubmit}
          >
            <input type="hidden" name="access_key" value="49cd1fe2-5206-46db-a18d-48362a69afe2" />
            <div className="grid gap-4 md:grid-cols-2">
              <label className="flex flex-col gap-2 text-sm text-slate-300">
                Name
                <input
                  name="name"
                  required
                  className="rounded-2xl border border-slate-700 bg-surface px-4 py-3 text-base text-white outline-none ring-accent/40 focus:ring"
                  placeholder="Your name"
                />
              </label>
              <label className="flex flex-col gap-2 text-sm text-slate-300">
                Subject
                <input
                  name="subject"
                  required
                  className="rounded-2xl border border-slate-700 bg-surface px-4 py-3 text-base text-white outline-none ring-accent/40 focus:ring"
                  placeholder="Subject"
                />
              </label>
            </div>
            <label className="flex flex-col gap-2 text-sm text-slate-300">
              Message
              <textarea
                name="message"
                required
                rows={5}
                className="rounded-2xl border border-slate-700 bg-surface px-4 py-3 text-base text-white outline-none ring-accent/40 focus:ring"
                placeholder="Write your message..."
              />
            </label>
            <button
              type="submit"
              className="mt-2 w-fit rounded-full bg-accent-2 px-6 py-3 text-sm font-semibold text-slate-900 disabled:cursor-not-allowed disabled:opacity-70"
              disabled={formStatus === "sending"}
            >
              {formStatus === "sending" ? "Sending..." : "Send Message"}
            </button>
            <p className="text-sm text-slate-300" aria-live="polite">
              {formStatus === "success" && "Message sent. I’ll get back to you soon."}
              {formStatus === "error" && "Something went wrong. Please try again."}
            </p>
          </form>
        </div>
      </section>

      <footer className="mx-auto w-full max-w-6xl px-8 pb-12 text-sm text-slate-500">
        Built with graph-inspired motion and modern web tooling.
      </footer>
    </main>
  );
}
