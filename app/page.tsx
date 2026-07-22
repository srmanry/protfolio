"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/section-wrapper";
import { projects } from "@/data/projects";
import {
  ArrowRight,
  Briefcase,
  Bot,
  CheckCircle2,
  ChevronUp,
  Code2,
  Download,
  ExternalLink,
  Mail,
  MapPin,
  Menu,
  MessageSquareQuote,
  MonitorSmartphone,
  Rocket,
  Search,
  Send,
  ShieldCheck,
  Smartphone,
  Workflow,
  X,
} from "lucide-react";

const navItems = [
  { label: "Services", href: "#services" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const services = [
  {
    Icon: Smartphone,
    title: "Flutter App Development",
    description:
      "Custom Flutter app development for Android and iOS with clean UI, structured architecture, API integration, and smooth user experience.",
    span: "lg:col-span-4",
  },
  {
    Icon: Rocket,
    title: "Google Play & App Store Publishing",
    description:
      "End-to-end support for app release, store listing setup, screenshots, signing, versioning, and publishing on both Google Play and the Apple App Store.",
    span: "lg:col-span-5",
  },
  {
    Icon: ShieldCheck,
    title: "Closed Testing Setup",
    description:
      "Help with Google Play closed testing requirements, including the 14-day testing flow, tester management, release preparation, and submission guidance.",
    span: "lg:col-span-3",
  },
  {
    Icon: Search,
    title: "ASO Optimization",
    description:
      "App Store Optimization for better visibility with stronger titles, keywords, descriptions, visuals, and conversion-focused store presentation.",
    span: "lg:col-span-6",
  },
  {
    Icon: Bot,
    title: "AI Feature Integration",
    description:
      "AI-powered features such as smart assistants, content generation, automation, recommendation flows, and modern AI-assisted product experiences.",
    span: "lg:col-span-3",
  },
  {
    Icon: Workflow,
    title: "Ongoing App Support",
    description:
      "Post-launch improvements, bug fixing, performance tuning, store update handling, and practical support to keep the app stable and growing.",
    span: "lg:col-span-3",
  },
  {
    Icon: MonitorSmartphone,
    title: "Product Planning & Execution",
    description:
      "From idea to release, I help shape app flow, plan features, refine execution, and move the product forward with clarity and quality.",
    span: "lg:col-span-6",
  },
  {
    Icon: Briefcase,
    title: "Client-Friendly Delivery",
    description:
      "Clear communication, status updates, documentation, and professional handling throughout the full app development and publishing process.",
    span: "lg:col-span-6",
  },
];

const stats = [
  { value: "05", label: "Completed Projects" },
  { value: "04+", label: "Years of Active Learning" },
  { value: "2024", label: "Published App Releases" },
  { value: "Remote + Office", label: "Preferred Work Modes" },
];

const experiences = [
  {
    company: "Current Role",
    role: "Software & Operations Contributor",
    duration: "2023 — Present",
    description:
      "Contributing to software delivery, communication, and day-to-day execution with a focus on dependable output, coordination, and product quality.",
    bullets: ["Product support", "Workflow ownership", "Cross-team communication"],
  },
  {
    company: "Previous Role",
    role: "Project Support Assistant",
    duration: "2021 — 2022",
    description:
      "Supported evolving business and technical work through documentation, task follow-through, and practical digital execution in collaborative settings.",
    bullets: ["Digital operations", "Documentation", "Adaptable execution"],
  },
];

const skills = [
  { label: "Communication", value: 94, detail: "Clear updates, calm collaboration, and professional alignment." },
  { label: "Problem Solving", value: 91, detail: "Practical decision-making with a structured and thoughtful mindset." },
  { label: "Project Ownership", value: 89, detail: "Following tasks through with responsibility and consistency." },
  { label: "Digital Tools", value: 87, detail: "Comfortable with product workflows, software tools, and online systems." },
];

const testimonials = [
  {
    title: "Work Style",
    body:
      "I aim to bring clarity, sincerity, and dependable execution to every piece of work, whether the role is technical or not.",
  },
  {
    title: "Collaboration",
    body:
      "Strong communication, thoughtful planning, and respect for deadlines are the standards I hold myself to in every team environment.",
  },
  {
    title: "References",
    body:
      "Professional references, deeper work history, and additional details can be shared during the hiring or collaboration process.",
  },
];

const socials = [
  { label: "GitHub", href: "https://github.com", icon: Code2 },
  { label: "Email", href: "mailto:yourname@gmail.com", icon: Mail },
  { label: "Location", href: "#contact", icon: MapPin },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: "easeOut" },
  }),
};

function SectionHeading({
  kicker,
  title,
  copy,
}: {
  kicker: string;
  title: string;
  copy?: string;
}) {
  return (
    <div className="max-w-3xl">
      <span className="section-label">{kicker}</span>
      <h2 className="section-title">{title}</h2>
      {copy ? <p className="section-copy mt-4">{copy}</p> : null}
    </div>
  );
}

function AppMockup({ title, accent, align }: { title: string; accent: string; align?: "left" | "right" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24, rotate: align === "right" ? 8 : -8 }}
      animate={{ opacity: 1, y: 0, rotate: align === "right" ? 6 : -6 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`phone-shell ${align === "right" ? "ml-auto" : ""}`}
    >
        <div className="phone-screen">
          <div className="flex items-center justify-between">
            <div>
            <p className="text-[0.62rem] uppercase tracking-[0.26em] text-emerald-950/35">Interface</p>
            <h3 className="mt-1 text-sm font-semibold text-emerald-950">{title}</h3>
          </div>
          <div className="h-8 w-8 rounded-full border border-emerald-900/10 bg-white/80" />
        </div>
        <div className={`mt-5 h-24 rounded-[1.25rem] ${accent}`} />
        <div className="mt-4 grid grid-cols-2 gap-3">
          <div className="mockup-block h-20" />
          <div className="mockup-block h-20" />
        </div>
        <div className="mt-4 space-y-3">
          <div className="mockup-line w-[72%]" />
          <div className="mockup-line w-full" />
          <div className="mockup-line w-[58%]" />
        </div>
        <div className="mt-5 flex items-center gap-2">
          <div className="mockup-chip">UX</div>
          <div className="mockup-chip">Flow</div>
          <div className="mockup-chip">Quality</div>
        </div>
      </div>
    </motion.div>
  );
}

function getProjectAvailability(project: (typeof projects)[number]) {
  return [
    project.playStore ? "Google Play" : null,
    project.appStore ? "App Store" : null,
    project.github ? "GitHub" : null,
  ].filter(Boolean) as string[];
}

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[number];
  index: number;
}) {
  const availability = getProjectAvailability(project);

  return (
    <motion.article
      custom={index * 0.08}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
      variants={fadeUp}
      className="surface-card group flex h-full flex-col p-5 md:p-6"
    >
      <div className="flex items-start gap-4">
        <div
          className="flex h-16 w-16 shrink-0 items-center justify-center rounded-[1.35rem] border shadow-[0_16px_36px_rgba(31,138,84,0.12)]"
          style={{
            background: project.logoBackground,
            borderColor: "rgba(21, 91, 56, 0.1)",
          }}
        >
          <span className="text-lg font-extrabold tracking-[-0.04em]" style={{ color: project.logoAccent }}>
            {project.logoText}
          </span>
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="text-xl font-semibold text-emerald-950">{project.title}</h3>
            {project.published ? (
              <span className="rounded-full border border-emerald-900/10 bg-white/80 px-2.5 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-emerald-700/80">
                Published
              </span>
            ) : null}
          </div>
          <p className="mt-1 text-sm text-emerald-900/55">
            {availability.length ? `Available on ${availability.join(", ")}` : "Private case study"}
          </p>
          <p className="mt-1 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700/70">
            Project {String(index + 1).padStart(2, "0")}
          </p>
        </div>
      </div>

      <p className="mt-4 min-h-[5.5rem] text-sm leading-6 text-emerald-900/68">{project.cardSummary}</p>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.stack.slice(0, 3).map((item) => (
          <span key={item} className="skill-tag">
            {item}
          </span>
        ))}
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.playStore ? (
          <a href={project.playStore} target="_blank" rel="noreferrer" className="btn-secondary px-4 py-2 text-xs">
            <ExternalLink size={14} /> Google Play
          </a>
        ) : null}
        {project.appStore ? (
          <a href={project.appStore} target="_blank" rel="noreferrer" className="btn-secondary px-4 py-2 text-xs">
            <ExternalLink size={14} /> App Store
          </a>
        ) : null}
        {project.github ? (
          <a href={project.github} target="_blank" rel="noreferrer" className="btn-secondary px-4 py-2 text-xs">
            <Code2 size={14} /> GitHub
          </a>
        ) : null}
        <Link href={`/projects/${project.slug}`} className="btn-primary px-4 py-2 text-xs">
          <ArrowRight size={14} /> Details
        </Link>
      </div>

      <div className="mt-4 border-t border-emerald-900/8 pt-4 text-sm text-emerald-900/56">
        <span className="font-medium text-emerald-800/80">Where published:</span>{" "}
        {availability.length ? availability.join(", ") : "Not publicly linked"}
      </div>
    </motion.article>
  );
}

export default function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <main className="relative overflow-x-hidden pb-20">
      <div className="site-background" aria-hidden="true">
        <div className="site-background__noise" />
        <div className="site-background__grid" />
        <div className="site-background__orb site-background__orb--left" />
        <div className="site-background__orb site-background__orb--right" />
      </div>

      <header className={`site-nav ${scrolled ? "site-nav--solid" : ""}`}>
        <div className="container-width flex items-center justify-between gap-6 py-4">
          <Link href="/" className="flex items-center gap-3" aria-label="Md. Srsuman Home">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#1F8A54] text-sm font-extrabold text-white shadow-[0_10px_30px_rgba(31,138,84,0.24)]">
              MS
            </div>
            <div>
              <p className="text-lg font-semibold tracking-tight text-emerald-950">Md. Srsuman</p>
              <p className="text-sm text-emerald-950/42">Professional Portfolio</p>
            </div>
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="nav-link">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:block">
            <a href="#contact" className="btn-primary">
              <Send size={16} /> Hire Me
            </a>
          </div>

          <button
            type="button"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            className="nav-toggle md:hidden"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {mobileMenuOpen ? (
          <div className="container-width pb-4 md:hidden">
            <div className="rounded-[1.5rem] border border-emerald-900/10 bg-white/85 p-4 backdrop-blur-xl">
              <div className="flex flex-col gap-3">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="rounded-xl border border-transparent px-3 py-2 text-sm font-medium text-emerald-900/75 transition hover:border-emerald-900/10 hover:bg-emerald-50 hover:text-emerald-950"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
                <a href="#contact" className="btn-primary mt-2 justify-center" onClick={() => setMobileMenuOpen(false)}>
                  <Send size={16} /> Hire Me
                </a>
              </div>
            </div>
          </div>
        ) : null}
      </header>

      <section className="container-width relative z-10 pt-32 md:pt-40">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div initial="hidden" animate="show" variants={fadeUp}>
            <div className="inline-flex items-center gap-3 rounded-full border border-emerald-900/10 bg-white/80 px-4 py-2 text-sm font-medium text-emerald-900/70 backdrop-blur-xl">
              <span className="h-2.5 w-2.5 rounded-full bg-[#1F8A54] shadow-[0_0_18px_rgba(31,138,84,0.42)]" />
              Available for Opportunities
            </div>

            <h1 className="mt-8 max-w-4xl text-5xl font-semibold leading-[1.02] tracking-[-0.04em] text-emerald-950 sm:text-6xl xl:text-[5.2rem]">
              Build Digital Experiences
              <br />
              That Create Real Impact.
            </h1>

            <p className="hero-copy mt-7 max-w-2xl">
              Every piece of work begins with a clear purpose, thoughtful planning, and a dedicated mindset. I believe
              meaningful work makes people&apos;s lives easier and opens the door to new possibilities. Guided by this
              belief, I approach everything I do with sincerity, responsibility, and an unwavering commitment to
              quality.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a href="#contact" className="btn-primary">
                <Send size={16} /> Hire Me
              </a>
              <a href="#" className="btn-secondary">
                <Download size={16} /> Download Resume
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              {socials.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  className="social-pill"
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noreferrer" : undefined}
                >
                  <Icon size={15} />
                  {label}
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: "easeOut", delay: 0.1 }}
            className="relative"
          >
            <div className="hero-visual-shell">
              <div className="hero-visual__halo" />
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute left-2 top-12 z-20 hidden xl:block"
              >
                <AppMockup title="Experience" accent="bg-[linear-gradient(180deg,rgba(31,138,84,0.24),rgba(31,138,84,0.05))]" />
              </motion.div>
              <motion.div
                animate={{ y: [0, 14, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
                className="relative z-30 mx-auto max-w-[21rem]"
              >
                <AppMockup title="Product Vision" accent="bg-[linear-gradient(180deg,rgba(103,196,141,0.32),rgba(103,196,141,0.08))]" />
              </motion.div>
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
                className="absolute bottom-6 right-0 z-10 hidden xl:block"
              >
                <AppMockup title="Execution" accent="bg-[linear-gradient(180deg,rgba(214,241,223,0.95),rgba(255,255,255,0.72))]" align="right" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <SectionWrapper id="about" className="container-width relative z-10 pt-24 md:pt-32">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeading
            kicker="About"
            title="A modern portfolio built around quality, trust, and thoughtful execution."
            copy="This website is designed to present a broader professional identity — one that reflects digital capability, responsibility, adaptability, and a strong commitment to meaningful work."
          />

          <div className="grid gap-4 sm:grid-cols-2">
            {stats.map((item, index) => (
              <motion.div
                key={item.label}
                custom={index * 0.08}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeUp}
                className="surface-card p-6"
              >
                <p className="text-3xl font-semibold tracking-[-0.04em] text-emerald-950">{item.value}</p>
                <p className="mt-3 text-sm leading-6 text-emerald-900/58">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper id="services" className="container-width relative z-10 pt-24 md:pt-32">
        <SectionHeading
          kicker="Services"
          title="Flutter app services built around development, publishing, growth, and long-term support."
          copy="This section now highlights practical app-focused services: Flutter development, Google Play and App Store publishing, closed testing support, ASO, AI-powered features, and ongoing product improvement."
        />

        <div className="mt-10 grid gap-4 lg:grid-cols-12">
          {services.map(({ Icon, title, description, span }, index) => (
            <motion.article
              key={title}
              custom={index * 0.06}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.18 }}
              variants={fadeUp}
              className={`surface-card group p-6 transition duration-300 hover:-translate-y-1 hover:border-[#1F8A54]/25 ${span}`}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-emerald-900/10 bg-emerald-50 text-[#1F8A54] transition duration-300 group-hover:border-[#1F8A54]/25 group-hover:bg-[#1F8A54]/10">
                <Icon size={22} />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-emerald-950">{title}</h3>
              <p className="mt-4 text-sm leading-7 text-emerald-900/60">{description}</p>
            </motion.article>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper id="experience" className="container-width relative z-10 pt-24 md:pt-32">
        <SectionHeading
          kicker="Experience"
          title="A clear, thoughtful timeline of professional growth."
          copy="The emphasis is on steady execution, learning, and the ability to support meaningful outcomes in both technical and broader work contexts."
        />

        <div className="relative mt-12 space-y-6 before:absolute before:left-[18px] before:top-3 before:h-[calc(100%-1.5rem)] before:w-px before:bg-[linear-gradient(180deg,rgba(31,138,84,0.35),transparent)]">
          {experiences.map((item, index) => (
            <motion.article
              key={item.role}
              custom={index * 0.08}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.18 }}
              variants={fadeUp}
              className="relative pl-14"
            >
              <div className="absolute left-[9px] top-7 h-5 w-5 rounded-full border border-[#1F8A54]/45 bg-[#f5faf6] shadow-[0_0_0_6px_rgba(31,138,84,0.08)]" />
              <div className="surface-card p-6 md:p-7">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <p className="text-sm uppercase tracking-[0.24em] text-emerald-700/75">{item.duration}</p>
                    <h3 className="mt-2 text-2xl font-semibold text-emerald-950">{item.role}</h3>
                    <p className="mt-1 text-sm text-emerald-950/42">{item.company}</p>
                  </div>
                  <div className="rounded-full border border-emerald-900/10 bg-white/80 px-4 py-2 text-sm text-emerald-900/60">
                    Vertical Timeline
                  </div>
                </div>
                <p className="mt-5 max-w-3xl text-sm leading-7 text-emerald-900/60">{item.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {item.bullets.map((bullet) => (
                    <span key={bullet} className="skill-tag">
                      {bullet}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper id="projects" className="container-width relative z-10 pt-24 md:pt-32">
        <SectionHeading
          kicker="Projects"
          title="Compact project cards with logo, short details, and direct store links."
          copy="Each card now keeps the important things visible at a glance: app logo, short summary, publishing platforms, and quick links to Google Play, App Store, GitHub, or details."
        />

        <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper id="skills" className="container-width relative z-10 pt-24 md:pt-32">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeading
            kicker="Skills"
            title="A modern capability layer focused on communication, ownership, and digital execution."
            copy="The skills section is intentionally minimal and refined. It highlights the strengths that carry across technical, support, and professional environments."
          />

          <div className="grid gap-4">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.label}
                custom={index * 0.08}
                initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
              className="surface-card p-5"
            >
              <div className="flex items-end justify-between gap-3">
                <div>
                    <h3 className="text-lg font-semibold text-emerald-950">{skill.label}</h3>
                    <p className="mt-1 text-sm text-emerald-950/50">{skill.detail}</p>
                  </div>
                  <span className="text-sm font-semibold text-[#1F8A54]">{skill.value}%</span>
                </div>
                <div className="mt-4 h-2 overflow-hidden rounded-full bg-emerald-900/10">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.value}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.1, ease: "easeOut", delay: index * 0.08 }}
                    className="h-full rounded-full bg-[linear-gradient(90deg,#1F8A54,#67C48D)]"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper className="container-width relative z-10 pt-24 md:pt-32">
        <SectionHeading
          kicker="Testimonials"
          title="A refined section for professional impression, collaboration, and credibility."
          copy="Rather than inventing generic praise, this section communicates the standards, working style, and professionalism behind the work."
        />

        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <motion.article
              key={item.title}
              custom={index * 0.08}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.18 }}
              variants={fadeUp}
              className="surface-card p-6"
            >
              <MessageSquareQuote size={22} className="text-[#1F8A54]" />
              <h3 className="mt-5 text-xl font-semibold text-emerald-950">{item.title}</h3>
              <p className="mt-4 text-sm leading-7 text-emerald-900/60">{item.body}</p>
            </motion.article>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper id="contact" className="container-width relative z-10 pt-24 md:pt-32">
        <div className="contact-shell">
          <div>
            <span className="section-label">Contact</span>
            <h2 className="section-title max-w-xl">Let&apos;s Build Something Great Together</h2>
            <p className="section-copy mt-4 max-w-xl">
              Open to opportunities across technical work, digital collaboration, support roles, and modern
              professional environments. If the work values clarity, sincerity, and quality, I would love to connect.
            </p>

            <div className="mt-8 space-y-4 text-sm text-emerald-900/62">
              <a href="mailto:yourname@gmail.com" className="contact-meta">
                <Mail size={16} className="text-[#1F8A54]" />
                yourname@gmail.com
              </a>
              <div className="contact-meta">
                <MapPin size={16} className="text-[#1F8A54]" />
                Available for remote and office opportunities
              </div>
            </div>
          </div>

          <form className="surface-card p-6 md:p-7" aria-label="Contact form">
            <div className="grid gap-4 md:grid-cols-2">
              <label className="input-shell">
                <span>Name</span>
                <input type="text" name="name" placeholder="Your name" />
              </label>
              <label className="input-shell">
                <span>Email</span>
                <input type="email" name="email" placeholder="you@example.com" />
              </label>
            </div>
            <label className="input-shell mt-4">
              <span>Subject</span>
              <input type="text" name="subject" placeholder="How can we work together?" />
            </label>
            <label className="input-shell mt-4">
              <span>Message</span>
              <textarea name="message" rows={5} placeholder="Write a short message..." />
            </label>
            <button type="submit" className="btn-primary mt-6 w-full justify-center">
              <Send size={16} /> Send Message
            </button>
          </form>
        </div>
      </SectionWrapper>

      <footer className="container-width relative z-10 mt-20 flex flex-col items-center justify-between gap-4 border-t border-emerald-900/10 py-8 text-center text-sm text-emerald-900/42 md:flex-row">
        <p>© {new Date().getFullYear()} Md. Srsuman. Crafted with care for a premium digital presence.</p>
        <div className="flex items-center gap-4">
          {socials.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noreferrer" : undefined}
              className="inline-flex items-center gap-2 rounded-full border border-emerald-900/10 bg-white/75 px-3 py-2 text-emerald-900/60 transition hover:border-[#1F8A54]/30 hover:text-[#1F8A54]"
            >
              <Icon size={14} />
              {label}
            </a>
          ))}
          <a href="#top" className="inline-flex items-center gap-2 text-emerald-900/60 transition hover:text-[#1F8A54]">
            <ChevronUp size={15} /> Back to top
          </a>
        </div>
      </footer>
    </main>
  );
}
