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
      <header className="mx-auto w-full max-w-5xl px-8 py-10">
        <nav className="flex flex-wrap items-center justify-between gap-4 text-sm text-slate-300">
          <span className="text-xs uppercase tracking-[0.45em] text-slate-400">JKW</span>
          <div className="flex flex-wrap items-center gap-6">
            <a href="#about" className="transition hover:text-white">About</a>
            <a href="#skills" className="transition hover:text-white">Skills</a>
            <a href="#experience" className="transition hover:text-white">Experience</a>
            <a href="#projects" className="transition hover:text-white">Projects</a>
            <a href="#contact" className="transition hover:text-white">Contact</a>
          </div>
        </nav>
      </header>

      <section className="mx-auto w-full max-w-5xl px-8 py-16">
        <div className="flex flex-col-reverse items-start justify-between gap-10 md:flex-row md:items-center">
          <div className="space-y-5">
            <p className="text-xs uppercase tracking-[0.4em] text-slate-400">Portfolio</p>
            <h1 className="text-4xl font-semibold leading-tight text-white sm:text-6xl">
              Jamar Keon Whitfield Jr
            </h1>
            <p className="text-lg text-slate-300">
              Technical builder focused on security, data systems, and graph-inspired interfaces.
              I study computer science and mathematics at LSU and enjoy making complex ideas
              feel simple and useful.
            </p>
            <div className="flex flex-wrap items-center gap-4 text-sm text-slate-300">
              <a href="#about" className="text-accent transition hover:text-white">More about me →</a>
              <a href="#contact" className="transition hover:text-white">Get in touch →</a>
            </div>
          </div>
          <div className="flex h-20 w-20 items-center justify-center border border-slate-700 text-sm text-slate-300">
            JKW
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto w-full max-w-5xl px-8 py-12">
        <h2 className="text-xs uppercase tracking-[0.45em] text-slate-400">About</h2>
        <div className="mt-6 space-y-6 text-slate-200">
          <p className="text-lg">
            I focus on building systems where mathematical rigor meets human-centered design.
            My work spans security operations, software engineering, data science, and research.
          </p>
          <div className="grid gap-8 pt-4 md:grid-cols-2">
            <div className="text-sm text-slate-300">
              <p className="text-xs uppercase tracking-[0.45em] text-slate-400">Focus</p>
              <ul className="mt-3 space-y-2">
                <li>Graph optimization and visualization</li>
                <li>Algorithm design and analysis</li>
                <li>Interactive web engineering</li>
              </ul>
            </div>
            <div className="text-sm text-slate-300">
              <p className="text-xs uppercase tracking-[0.45em] text-slate-400">Leadership</p>
              <ul className="mt-3 space-y-2">
                {leadership.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="mx-auto w-full max-w-5xl px-8 py-12">
        <h2 className="text-xs uppercase tracking-[0.45em] text-slate-400">Skills</h2>
        <div className="mt-6 grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="text-sm font-semibold text-white">Languages</h3>
            <ul className="mt-3 space-y-2 text-sm text-slate-300">
              {skills.languages.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-white">Frameworks & Tech</h3>
            <ul className="mt-3 space-y-2 text-sm text-slate-300">
              {skills.frameworks.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-white">Data & Infra</h3>
            <ul className="mt-3 space-y-2 text-sm text-slate-300">
              {skills.data.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section id="experience" className="mx-auto w-full max-w-5xl px-8 py-12">
        <h2 className="text-xs uppercase tracking-[0.45em] text-slate-400">Experience</h2>
        <div className="mt-6 space-y-8">
          {experience.map((item) => (
            <article key={`${item.role}-${item.org}`} className="space-y-3">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-lg font-semibold text-white">{item.role}</h3>
                <span className="text-xs uppercase tracking-[0.35em] text-slate-500">
                  {item.period}
                </span>
              </div>
              <p className="text-sm text-slate-300">{item.org}</p>
              <ul className="space-y-2 text-sm text-slate-200">
                {item.highlights.map((highlight) => (
                  <li key={highlight}>• {highlight}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section id="projects" className="mx-auto w-full max-w-5xl px-8 py-12">
        <h2 className="text-xs uppercase tracking-[0.45em] text-slate-400">Highlighted Projects</h2>
        <div className="mt-6 space-y-6">
          {projects.map((project) => (
            <article key={project.title} className="space-y-2">
              <h3 className="text-lg font-semibold text-white">{project.title}</h3>
              <p className="text-sm text-slate-300">{project.description}</p>
              <button className="text-sm font-semibold text-accent">Learn more →</button>
            </article>
          ))}
        </div>
      </section>

      <section id="contact" className="mx-auto w-full max-w-5xl px-8 py-12">
        <h2 className="text-xs uppercase tracking-[0.45em] text-slate-400">Contact</h2>
        <div className="mt-6 space-y-6">
          <p className="text-lg text-slate-200">
            Send a message for collaborations, internship opportunities, or software engineering roles.
          </p>
          <div className="flex flex-wrap gap-4 text-sm text-slate-300">
            <a
              href="https://www.linkedin.com/in/jamar-k-whitfield-jr/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 border border-slate-700 px-4 py-2 transition hover:border-slate-500 hover:text-white"
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
              className="inline-flex items-center gap-2 border border-slate-700 px-4 py-2 transition hover:border-slate-500 hover:text-white"
            >
              <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 fill-current">
                <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.25.8-.6v-2.1c-3.2.7-3.9-1.4-3.9-1.4-.5-1.2-1.2-1.5-1.2-1.5-1-.7.1-.7.1-.7 1.1.1 1.7 1.2 1.7 1.2 1 .1.8 1.9 2.7 2.1.1-.8.4-1.3.7-1.6-2.6-.3-5.3-1.3-5.3-5.9 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.3 1.2 1-.3 2-.4 3-.4s2 .1 3 .4c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.8.1 3.1.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.4 5.9.4.4.8 1.1.8 2.2v3.2c0 .3.2.7.8.6 4.6-1.5 7.9-5.8 7.9-10.9C23.5 5.65 18.35.5 12 .5Z" />
              </svg>
              GitHub
            </a>
            <a
              href="mailto:jamarinternship@gmail.com"
              className="inline-flex items-center gap-2 border border-slate-700 px-4 py-2 transition hover:border-slate-500 hover:text-white"
            >
              <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 fill-current">
                <path d="M4 5h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Zm0 2v.5l8 5 8-5V7H4Zm16 10V9.6l-7.4 4.6a1 1 0 0 1-1.2 0L4 9.6V17h16Z" />
              </svg>
              Email
            </a>
          </div>
          <form ref={formRef} className="grid gap-4" onSubmit={handleSubmit}>
            <input type="hidden" name="access_key" value="49cd1fe2-5206-46db-a18d-48362a69afe2" />
            <div className="grid gap-4 md:grid-cols-2">
              <label className="flex flex-col gap-2 text-sm text-slate-300">
                Name
                <input
                  name="name"
                  required
                  className="border border-slate-700 bg-transparent px-4 py-3 text-base text-white outline-none ring-accent/40 focus:ring"
                  placeholder="Your name"
                />
              </label>
              <label className="flex flex-col gap-2 text-sm text-slate-300">
                Subject
                <input
                  name="subject"
                  required
                  className="border border-slate-700 bg-transparent px-4 py-3 text-base text-white outline-none ring-accent/40 focus:ring"
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
                className="border border-slate-700 bg-transparent px-4 py-3 text-base text-white outline-none ring-accent/40 focus:ring"
                placeholder="Write your message..."
              />
            </label>
            <button
              type="submit"
              className="w-fit text-sm font-semibold text-accent disabled:cursor-not-allowed disabled:opacity-70"
              disabled={formStatus === "sending"}
            >
              {formStatus === "sending" ? "Sending..." : "Send Message →"}
            </button>
            <p className="text-sm text-slate-400" aria-live="polite">
              {formStatus === "success" && "Message sent. I’ll get back to you soon."}
              {formStatus === "error" && "Something went wrong. Please try again."}
            </p>
          </form>
        </div>
      </section>

      <footer className="mx-auto w-full max-w-5xl px-8 pb-12 text-xs uppercase tracking-[0.35em] text-slate-500">
        2026 © JKW
      </footer>
    </main>
  );
}
