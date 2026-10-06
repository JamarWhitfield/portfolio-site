import Image from "next/image";
import headshot from "../images/jamar-whitfield-866.jpg";
import ContactForm from "@/components/ContactForm";
import { experience, mathQuant, projects, research, skills } from "@/data/portfolio";

const shellClassName = "mx-auto w-full max-w-6xl px-6 sm:px-8 lg:px-10";
const sectionClassName = `${shellClassName} py-16 sm:py-20`;
const sectionTitleClassName = "text-xs uppercase tracking-[0.45em] text-slate-400";
const panelClassName = "rounded-3xl border border-slate-800/90 bg-slate-900/32 backdrop-blur-sm";

export default function Home() {
  return (
    <main className="relative pb-16 sm:pb-20">
      <header className={`${shellClassName} py-8 sm:py-10`}>
        <nav aria-label="Primary" className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800/80 pb-6 text-sm text-slate-300 sm:pb-7">
          <a href="#top" className="text-xs uppercase tracking-[0.45em] text-slate-400 transition hover:text-white">JKWJR.</a>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <a href="#about" className="transition hover:text-white">About</a>
            <a href="#experience" className="transition hover:text-white">Experience</a>
            <a href="#research" className="transition hover:text-white">Research</a>
            <a href="#projects" className="transition hover:text-white">Projects</a>
            <a href="#quant" className="transition hover:text-white">Math / Quant</a>
            <a href="#contact" className="transition hover:text-white">Contact</a>
          </div>
        </nav>
      </header>

      <section id="top" className={`${sectionClassName} pt-6 sm:pt-8`}>
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.2fr)_22rem] lg:items-center lg:gap-16">
          <div className="max-w-3xl space-y-8">
            <div className="space-y-4">
              <p className="text-xs uppercase tracking-[0.42em] text-slate-400">Jamar Whitfield Jr.</p>
              <div className="space-y-4">
                <h1 className="text-4xl font-semibold leading-tight tracking-[-0.03em] text-white sm:text-5xl lg:text-6xl">
                  Computer scientist building ML systems, research software, and quantitative tools.
                </h1>
                <p className="max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
                  Computer Science graduate and Mathematics student at LSU with experience across production data systems, backend engineering, computer vision research, and scientific machine learning.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 text-sm font-medium">
              <a href="#projects" className="inline-flex items-center justify-center rounded-full bg-white px-5 py-3 text-slate-950 transition hover:bg-slate-200">
                View Projects
              </a>
              <a href="resume/Jamar_Keon_Whitfield_Jr_Resume_Spring2026_V4.pdf" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-full border border-slate-700 px-5 py-3 text-slate-200 transition hover:border-slate-500 hover:text-white">
                Resume
              </a>
              <a href="https://github.com/JamarWhitfield" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-full border border-slate-700 px-5 py-3 text-slate-200 transition hover:border-slate-500 hover:text-white">
                GitHub
              </a>
              <a href="https://linkedin.com/in/jamar-k-whitfield-jr-64b408237" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-full border border-slate-700 px-5 py-3 text-slate-200 transition hover:border-slate-500 hover:text-white">
                LinkedIn
              </a>
            </div>

            <div className="grid gap-3 text-sm text-slate-300 sm:grid-cols-3">
              <div className={`${panelClassName} rounded-2xl px-4 py-4`}>
                <p className="text-xs uppercase tracking-[0.28em] text-slate-500">Engineering</p>
                <p className="mt-2 text-sm leading-6 text-slate-200">ML systems, backend platforms, and data infrastructure.</p>
              </div>
              <div className={`${panelClassName} rounded-2xl px-4 py-4`}>
                <p className="text-xs uppercase tracking-[0.28em] text-slate-500">Research</p>
                <p className="mt-2 text-sm leading-6 text-slate-200">Computer vision, motion perception, and scientific ML.</p>
              </div>
              <div className={`${panelClassName} rounded-2xl px-4 py-4`}>
                <p className="text-xs uppercase tracking-[0.28em] text-slate-500">Direction</p>
                <p className="mt-2 text-sm leading-6 text-slate-200">Mathematical computing and quantitative software.</p>
              </div>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-sm">
            <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-slate-700/40 via-slate-600/10 to-transparent blur-2xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-slate-700/70 bg-slate-900/60 p-3 shadow-2xl shadow-black/20 backdrop-blur-sm">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem]">
                <Image src={headshot} alt="Jamar Keon Whitfield Jr" fill sizes="(min-width: 1024px) 22rem, (min-width: 768px) 20rem, 80vw" className="object-cover" priority />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className={`${sectionClassName} border-t border-slate-800/70`}>
        <div className="grid gap-8 lg:grid-cols-[0.65fr_1.35fr] lg:items-start">
          <div>
            <h2 className={sectionTitleClassName}>About</h2>
          </div>
          <div className={`${panelClassName} p-6 sm:p-8`}>
            <p className="text-lg leading-8 text-slate-200">
              I like problems that sit between software engineering, mathematics, and experimentation. My work has ranged from production data migration and sensor pipelines to computer-vision research and document intelligence systems. I am especially interested in building reliable systems where modeling quality, data quality, and engineering decisions all matter.
            </p>
          </div>
        </div>
      </section>

      <section id="experience" className={`${sectionClassName} border-t border-slate-800/70`}>
        <div className="space-y-8">
          <div className="max-w-2xl space-y-3">
            <h2 className={sectionTitleClassName}>Experience</h2>
            <p className="text-base leading-7 text-slate-300">
              Engineering and research experience spanning production data systems, infrastructure migration, scientific software, and machine learning.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {experience.map((item) => (
              <article key={`${item.role}-${item.org}`} className={`${panelClassName} space-y-3 rounded-2xl p-5`}>
                <div className="space-y-2">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="text-base font-semibold text-white">{item.role}</h3>
                    <span className="text-[11px] uppercase tracking-[0.24em] text-slate-500">{item.period}</span>
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

      <section id="research" className={`${sectionClassName} border-t border-slate-800/70`}>
        <div className="space-y-8">
          <div className="max-w-2xl space-y-3">
            <h2 className={sectionTitleClassName}>Research</h2>
            <p className="text-base leading-7 text-slate-300">
              Selected research themes connecting perception, machine learning, scientific computing, and robust evaluation.
            </p>
          </div>
          <div className="grid gap-4 lg:grid-cols-3">
            {research.map((item) => (
              <article key={item.title} className={`${panelClassName} flex h-full flex-col gap-4 rounded-2xl p-5`}>
                <div>
                  <p className="text-xs uppercase tracking-[0.24em] text-slate-500">{item.subtitle}</p>
                  <h3 className="mt-2 text-lg font-semibold text-white">{item.title}</h3>
                </div>
                <p className="text-sm leading-6 text-slate-300">{item.body}</p>
                <ul className="mt-auto flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <li key={tag} className="rounded-full border border-slate-700 px-2.5 py-1 text-[11px] font-medium uppercase tracking-[0.14em] text-slate-300">{tag}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className={`${sectionClassName} border-t border-slate-800/70`}>
        <div className="space-y-8">
          <div className="max-w-2xl space-y-3">
            <h2 className={sectionTitleClassName}>Featured Work</h2>
            <p className="text-base leading-7 text-slate-300">
              A smaller set of projects that show how I approach systems, research tooling, data workflows, and applied machine learning.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {projects.map((project) => (
              <article key={project.title} className={`${panelClassName} group flex h-full flex-col justify-between gap-5 rounded-2xl p-5 transition duration-200 hover:-translate-y-1 hover:border-slate-600 hover:bg-slate-900/55`}>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <h3 className="text-base font-semibold text-white">{project.title}</h3>
                      {project.period && <span className="text-[11px] uppercase tracking-[0.24em] text-slate-500">{project.period}</span>}
                    </div>
                    <p className="text-sm leading-6 text-slate-300">{project.description}</p>
                  </div>
                  <ul className="space-y-2 text-sm leading-6 text-slate-200">
                    {project.highlights.map((highlight) => (
                      <li key={highlight} className="flex gap-2">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-500" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                  <ul className="flex flex-wrap gap-2">
                    {project.stack.map((item) => (
                      <li key={item} className="rounded-full border border-slate-700 px-2.5 py-1 text-[11px] font-medium uppercase tracking-[0.14em] text-slate-300">{item}</li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-wrap items-center gap-4 text-sm font-medium text-slate-300">
                  {"github" in project && project.github && <a href={project.github} target="_blank" rel="noreferrer" className="transition group-hover:text-white hover:text-white">GitHub</a>}
                  {"viewSite" in project && project.viewSite && <a href={project.viewSite} target="_blank" rel="noreferrer" className="transition group-hover:text-white hover:text-white">View Site</a>}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="quant" className={`${sectionClassName} border-t border-slate-800/70`}>
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="space-y-3">
            <h2 className={sectionTitleClassName}>Mathematics / Quantitative</h2>
            <h3 className="text-3xl font-semibold text-white sm:text-4xl">CS + mathematics as one toolkit.</h3>
            <p className="max-w-xl text-base leading-7 text-slate-300">
              I am extending my software and ML background with deeper mathematical training, with a long-term interest in quantitative modeling and engineering.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className={`${panelClassName} rounded-2xl p-5 sm:col-span-2`}>
              <h4 className="text-sm font-semibold text-white">Education</h4>
              <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-300">
                {mathQuant.education.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>
            <div className={`${panelClassName} rounded-2xl p-5`}>
              <h4 className="text-sm font-semibold text-white">Current coursework</h4>
              <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-300">
                {mathQuant.coursework.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>
            <div className={`${panelClassName} rounded-2xl p-5`}>
              <h4 className="text-sm font-semibold text-white">Interests</h4>
              <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-300">
                {mathQuant.interests.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className={`${sectionClassName} border-t border-slate-800/70`}>
        <h2 className={sectionTitleClassName}>Skills</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <div className={`${panelClassName} p-5 sm:p-6`}>
            <h3 className="text-sm font-semibold text-white">Languages</h3>
            <ul className="mt-3 flex flex-wrap gap-2 text-sm text-slate-300">
              {skills.languages.map((skill) => <li key={skill} className="rounded-full border border-slate-700 px-3 py-1.5">{skill}</li>)}
            </ul>
          </div>
          <div className={`${panelClassName} p-5 sm:p-6`}>
            <h3 className="text-sm font-semibold text-white">ML & Data</h3>
            <ul className="mt-3 flex flex-wrap gap-2 text-sm text-slate-300">
              {skills.mlData.map((skill) => <li key={skill} className="rounded-full border border-slate-700 px-3 py-1.5">{skill}</li>)}
            </ul>
          </div>
          <div className={`${panelClassName} p-5 sm:p-6`}>
            <h3 className="text-sm font-semibold text-white">Systems & Web</h3>
            <ul className="mt-3 flex flex-wrap gap-2 text-sm text-slate-300">
              {skills.systemsWeb.map((skill) => <li key={skill} className="rounded-full border border-slate-700 px-3 py-1.5">{skill}</li>)}
            </ul>
          </div>
        </div>
      </section>

      <section id="contact" className={`${sectionClassName} border-t border-slate-800/70`}>
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:items-start">
          <div className="space-y-5">
            <div className="space-y-3">
              <h2 className={sectionTitleClassName}>Contact</h2>
              <h3 className="text-3xl font-semibold text-white sm:text-4xl">Let&apos;s connect.</h3>
              <p className="max-w-lg text-base leading-7 text-slate-300">
                Reach out about software engineering, ML systems, research collaboration, or quantitative technology opportunities.
              </p>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>

      <footer className={`${shellClassName} border-t border-slate-800/70 pt-8 text-xs uppercase tracking-[0.35em] text-slate-500`}>
        2026 © JKWJR.
      </footer>
    </main>
  );
}
