"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/section-wrapper";
import { projects } from "@/data/projects";
import {
  ArrowRight,
  Briefcase,
  ChevronUp,
  CloudCog,
  Code2,
  Database,
  Download,
  GraduationCap,
  Link2,
  Mail,
  MapPin,
  Menu,
  Send,
  Smartphone,
  UploadCloud,
  Workflow,
  X,
} from "lucide-react";

type Project = (typeof projects)[number];

const publishedProjects = projects.filter((project) => project.playStore || project.appStore);
const githubProjects = projects.filter((project) => project.github && !project.playStore && !project.appStore);

const socials = [
  { label: "GitHub", href: "https://github.com/srmanry", icon: Code2 },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/suman-roy-b4121a274", icon: Link2 },
  { label: "Email", href: "mailto:sumanry402@gmail.com", icon: Mail },
];

const navItems = [
  { label: "Home", href: "#top" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

const careerObjective =
  "A motivated Mobile & Application Developer with professional experience in designing, developing, testing, API integration, debugging, and deploying real-world applications. Specialized in Flutter and Dart, with practical experience in REST APIs, Firebase, local databases, state management, Git, Android/iOS release processes, and client-based development. Also experienced with n8n workflow automation, basic AI/API automation, social media promotion, and Facebook post boosting. Comfortable with problem-solving, technical troubleshooting, teamwork, and learning new technologies quickly.";

const personalInfo = [
  { label: "Date of Birth", value: "01/01/2001" },
  { label: "Present Address", value: "Thakurgaon, Dhaka, Bangladesh" },
  { label: "Permanent Address", value: "Thakurgaon, Dhaka, Bangladesh" },
  { label: "Language", value: "Bangla, English" },
];

const skillCategories = [
  {
    title: "Flutter Engineering",
    eyebrow: "Cross-platform product build",
    description:
      "Building polished, maintainable mobile applications with reusable UI systems and architecture that stays clean as products grow.",
    Icon: Smartphone,
    items: ["Flutter", "Dart", "OOP", "MVC", "Clean Architecture"],
    accent: "from-blue-500/20 via-sky-400/10 to-transparent",
  },
  {
    title: "State Management",
    eyebrow: "Reliable app behavior",
    description:
      "Designing predictable flows and scalable screen logic so features remain easy to extend, debug, and maintain over time.",
    Icon: Workflow,
    items: ["GetX"],
    accent: "from-cyan-500/18 via-blue-500/10 to-transparent",
  },
  {
    title: "API & Backend",
    eyebrow: "Connected app experiences",
    description:
      "Integrating APIs, remote data, and cloud services to power real-world app experiences with stable communication layers.",
    Icon: CloudCog,
    items: ["REST API", "Dio", "Firebase"],
    accent: "from-sky-500/18 via-blue-500/10 to-transparent",
  },
  {
    title: "Database & Storage",
    eyebrow: "Fast local persistence",
    description:
      "Handling offline-ready data, secure storage, and app preferences with practical persistence strategies for everyday production use.",
    Icon: Database,
    items: ["Hive", "Shared Preferences", "Flutter Secure Storage"],
    accent: "from-blue-600/16 via-cyan-500/10 to-transparent",
  },
  {
    title: "Deployment",
    eyebrow: "Store-ready release flow",
    description:
      "Preparing builds, release assets, and submission workflows for smooth publishing across both Android and iOS ecosystems.",
    Icon: UploadCloud,
    items: ["Google Play Store", "Apple Store"],
    accent: "from-cyan-400/16 via-blue-500/10 to-transparent",
  },
  {
    title: "Tools",
    eyebrow: "Everyday delivery stack",
    description:
      "Using modern development tools for coding, debugging, version control, collaboration, and continuous delivery support.",
    Icon: Code2,
    items: ["Android Studio", "VS Code", "Xcode", "Git", "GitHub", "Jira", "CI/CD"],
    accent: "from-blue-500/18 via-sky-500/10 to-transparent",
  },
];

const totalSkillItems = skillCategories.reduce((total, category) => total + category.items.length, 0);

const skillHighlights = [
  { value: `${skillCategories.length}+`, label: "Core areas" },
  { value: `${totalSkillItems}+`, label: "Tools & technologies" },
  { value: "Mobile-first", label: "Delivery focus" },
];

const experience = {
  company: "Scale Up Ads Agency",
  location: "43 Mohakhali C/A, Dhaka 1212",
  role: "Flutter Developer",
  duration: "20 Jul 2025 — Present",
  responsibilities: [
    "Develop and maintain cross-platform mobile applications using Flutter and Dart.",
    "Implement responsive, user-friendly interfaces based on Figma/UI requirements.",
    "Integrate REST APIs using Dio and handle JSON/API data.",
    "Implement state management using GetX and work with Firebase and local storage.",
    "Use Hive, Shared Preferences, and Flutter Secure Storage for local data and secure storage needs.",
    "Perform testing, debugging, error fixing, and application performance improvements.",
    "Manage release and publishing processes through Google Play Console, App Store Connect, and TestFlight.",
    "Collaborate with clients, designers, backend developers, and team members to deliver project requirements.",
    "Use Git/GitHub for source-code management and team collaboration.",
  ],
};

const additionalExperience = [
  "Contributed to multiple applications across different domains, including UI development, REST API integration, state management, local database, testing, debugging, and production deployment.",
  "Experienced in publishing and managing applications on Google Play Store and Apple App Store through Google Play Console, App Store Connect, and TestFlight.",
  "Worked with client requirements, application troubleshooting, third-party service integration, and remote team collaboration.",
];

const education = [
  {
    degree: "Diploma in Computer Engineering",
    institute: "Social Polytechnic Institute, Thakurgaon",
    duration: "2022",
    board: "Bangladesh Technical Education Board",
    result: "3.77 / 4.00",
  },
  {
    degree: "Secondary School Certificate (SSC)",
    institute: "Boshvanga Bosontopur High School",
    duration: "2018",
    board: "Dinajpur Board · Science",
    result: "3.28 / 5.00",
  },
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

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.article
      custom={index * 0.06}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
      variants={fadeUp}
      className="surface-card flex items-start gap-4 p-5"
    >
      <div
        className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border"
        style={{
          background: project.logoBackground,
          borderColor: "rgba(148, 163, 184, 0.18)",
        }}
      >
        <span className="text-base font-extrabold tracking-[-0.04em]" style={{ color: project.logoAccent }}>
          {project.logoText}
        </span>
      </div>

      <div className="min-w-0 flex-1">
        <h3 className="text-lg font-semibold text-white">{project.title}</h3>
        <p className="mt-1 text-sm text-ink-faint">{project.tagline}</p>

        <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1">
          {project.playStore ? (
            <a
              href={project.playStore}
              target="_blank"
              rel="noreferrer"
              className="text-sm font-medium text-blue-bright underline decoration-blue-bright/30 underline-offset-4 transition hover:decoration-blue-bright"
            >
              Google Play Store
            </a>
          ) : null}
          {project.appStore ? (
            <a
              href={project.appStore}
              target="_blank"
              rel="noreferrer"
              className="text-sm font-medium text-blue-bright underline decoration-blue-bright/30 underline-offset-4 transition hover:decoration-blue-bright"
            >
              Apple Store
            </a>
          ) : null}
          {project.github ? (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="text-sm font-medium text-blue-bright underline decoration-blue-bright/30 underline-offset-4 transition hover:decoration-blue-bright"
            >
              GitHub
            </a>
          ) : null}
        </div>
      </div>
    </motion.article>
  );
}

export default function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("#top");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = navItems.map((item) => item.href.replace("#", ""));
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <main id="top" className="relative overflow-x-hidden pb-20">
      <div className="site-background" aria-hidden="true">
        <div className="site-background__grid" />
        <div className="site-background__orb site-background__orb--left" />
        <div className="site-background__orb site-background__orb--right" />
      </div>

      <header className={`site-nav ${scrolled ? "site-nav--solid" : ""}`}>
        <div className="container-width relative flex items-center justify-between gap-6 py-4">
          <Link href="/" className="brand-mark flex items-center gap-2" aria-label="Suman Roy Home">
            Suman <span>Roy</span>
          </Link>

          <nav className="hidden items-center gap-8 md:flex lg:absolute lg:left-1/2 lg:-translate-x-1/2">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`nav-link ${activeSection === item.href ? "nav-link--active" : ""}`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex md:justify-end">
            <a href="#contact" className="btn-primary px-6 py-3 text-sm">
              <Send size={16} /> Let&apos;s Talk
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
            <div className="rounded-2xl border border-white/10 bg-navy/95 p-4 backdrop-blur-xl">
              <div className="flex flex-col gap-3">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="rounded-xl border border-transparent px-3 py-2 text-sm font-medium text-ink-muted transition hover:border-white/10 hover:bg-white/5 hover:text-white"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
                <a href="#contact" className="btn-primary mt-2 justify-center" onClick={() => setMobileMenuOpen(false)}>
                  <Send size={16} /> Let&apos;s Talk
                </a>
              </div>
            </div>
          </div>
        ) : null}
      </header>

      {/* ---------- HERO ---------- */}
      <section className="container-width relative z-10 pt-32 md:pt-36">
        <div className="grid items-center gap-10 md:grid-cols-[1.05fr_0.95fr] md:gap-12">
          <motion.div initial="hidden" animate="show" variants={fadeUp}>
            <p className="hero-copy max-w-xl">{careerObjective}</p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a href="#projects" className="btn-primary">
                <ArrowRight size={16} /> View My Projects
              </a>
              <a href="/resume.pdf" download="Suman-Roy-Resume.pdf" className="btn-secondary">
                <Download size={16} /> Download Resume
              </a>
            </div>

            <div className="mt-9 flex flex-wrap gap-3">
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
            className="relative mx-auto w-full max-w-sm"
          >
            <div className="hero-visual__halo" />
            <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-b from-white/[0.06] to-transparent shadow-[0_40px_90px_-40px_rgba(37,99,235,0.45)]">
              <Image
                src="/hero-cutout.png"
                alt="Suman Roy, Flutter Developer"
                width={1448}
                height={1086}
                priority
                className="h-auto w-full object-contain object-top"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ---------- ABOUT ---------- */}
      <SectionWrapper id="about" className="container-width relative z-10 pt-24 md:pt-32">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={fadeUp}>
            <span className="section-label">Additional Project Experience</span>
            <div className="mt-5 space-y-4">
              {additionalExperience.map((paragraph) => (
                <p key={paragraph} className="section-copy">
                  {paragraph}
                </p>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            custom={0.1}
            className="surface-card relative overflow-hidden p-6 md:p-7"
          >
            <span className="accent-line" aria-hidden="true" />
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-bright">Personal Info</h3>

            <div className="mt-5 space-y-4">
              {personalInfo.map((item) => (
                <div key={item.label} className="border-b border-white/10 pb-3 last:border-b-0 last:pb-0">
                  <p className="text-xs uppercase tracking-[0.14em] text-ink-faint">{item.label}</p>
                  <p className="mt-1 text-sm text-white">{item.value}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </SectionWrapper>

      {/* ---------- EXPERIENCE ---------- */}
      <SectionWrapper id="experience" className="container-width relative z-10 pt-24 md:pt-32">
        <SectionHeading kicker="Experience" title="Professional Experience" />

        <div className="relative mt-12 before:absolute before:left-[9px] before:top-3 before:h-[calc(100%-1.5rem)] before:w-px before:bg-[linear-gradient(180deg,rgba(56,189,248,0.5),transparent)]">
          <motion.article
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.18 }}
            variants={fadeUp}
            className="relative pl-10"
          >
            <div className="timeline-dot absolute left-0 top-7" />
            <div className="surface-card relative overflow-hidden p-6 md:p-8">
              <span className="accent-line" aria-hidden="true" />
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-blue/10 text-blue-bright">
                    <Briefcase size={20} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white md:text-2xl">{experience.role}</h3>
                    <p className="mt-1 text-sm font-medium text-ink-muted">{experience.company}</p>
                    <p className="mt-0.5 flex items-center gap-1.5 text-xs text-ink-faint">
                      <MapPin size={12} /> {experience.location}
                    </p>
                  </div>
                </div>
                <span className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.08em] text-blue-bright">
                  {experience.duration}
                </span>
              </div>

              <ul className="mt-5 space-y-2">
                {experience.responsibilities.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-ink-muted">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-blue-bright" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.article>
        </div>
      </SectionWrapper>

      {/* ---------- PROJECTS ---------- */}
      <SectionWrapper id="projects" className="container-width relative z-10 pt-24 md:pt-32">
        <SectionHeading kicker="Projects" title="Projects" />

        <span className="section-label mt-10 block">Published Project</span>
        <div className="mt-5 grid gap-4 md:grid-cols-2">
          {publishedProjects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>

        {githubProjects.length ? (
          <>
            <span className="section-label mt-10 block">GitHub Project</span>
            <div className="mt-5 grid gap-4 md:grid-cols-2">
              {githubProjects.map((project, index) => (
                <ProjectCard key={project.slug} project={project} index={index} />
              ))}
            </div>
          </>
        ) : null}
      </SectionWrapper>

      {/* ---------- SKILLS ---------- */}
      <SectionWrapper id="skills" className="container-width relative z-10 pt-24 md:pt-32">
        <SectionHeading
          kicker="Skills"
          title="Technical Skills"
          copy="A practical mobile development toolkit shaped around building, shipping, and maintaining production-ready Flutter applications."
        />

        <div className="skills-panel mt-10">
          <div className="max-w-2xl">
            <p className="skills-panel__eyebrow">Built for scalable app delivery</p>
            <h3 className="skills-panel__title">From clean Flutter architecture to release-ready deployment workflows.</h3>
            <p className="skills-panel__copy">
              My workflow covers interface development, state handling, backend integration, local storage, and store publishing,
              with an emphasis on clarity, consistency, and dependable delivery.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            {skillHighlights.map((item) => (
              <div key={item.label} className="skills-stat">
                <p className="skills-stat__value">{item.value}</p>
                <p className="skills-stat__label">{item.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {skillCategories.map(({ title, eyebrow, description, Icon, items, accent }, index) => (
            <motion.article
              key={title}
              custom={index * 0.06}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
              className={`skill-card group ${index === 0 ? "xl:col-span-2" : ""}`}
            >
              <div className={`skill-card__glow bg-gradient-to-br ${accent}`} aria-hidden="true" />
              <div className="skill-card__header">
                <div className="skill-card__icon">
                  <Icon size={20} />
                </div>
                <span className="skill-card__meta">
                  {items.length} {items.length === 1 ? "skill" : "skills"}
                </span>
              </div>
              <p className="skill-card__eyebrow">{eyebrow}</p>
              <h3 className="skill-card__title">{title}</h3>
              <p className="skill-card__copy">{description}</p>
              <div className="mt-5 flex flex-wrap gap-2.5">
                {items.map((item) => (
                  <span key={item} className="skill-tag">
                    {item}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </SectionWrapper>

      {/* ---------- EDUCATION ---------- */}
      <SectionWrapper className="container-width relative z-10 pt-24 md:pt-28">
        <SectionHeading kicker="Education" title="Education" />

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {education.map((item, index) => (
            <motion.article
              key={item.degree}
              custom={index * 0.08}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
              className="surface-card p-5 md:p-6"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-blue/10 text-blue-bright">
                    <GraduationCap size={18} />
                  </div>
                  <div>
                    <h4 className="text-base font-semibold text-white">{item.degree}</h4>
                    <p className="mt-1 text-sm text-ink-muted">{item.institute}</p>
                  </div>
                </div>
                <span className="shrink-0 text-xs font-semibold uppercase tracking-[0.08em] text-blue-bright">
                  {item.duration}
                </span>
              </div>
              <div className="mt-4 flex items-center justify-between border-t border-white/10 pt-3 text-xs">
                <span className="text-ink-faint">{item.board}</span>
                <span className="font-semibold text-blue-bright">{item.result}</span>
              </div>
            </motion.article>
          ))}
        </div>
      </SectionWrapper>

      {/* ---------- CONTACT ---------- */}
      <SectionWrapper id="contact" className="container-width relative z-10 pt-24 md:pt-32">
        <div className="contact-shell">
          <div>
            <span className="section-label">Contact</span>
            <h2 className="section-title max-w-xl">Suman Roy</h2>
            <p className="section-copy mt-4 max-w-xl">Flutter Developer</p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#contact-form" className="btn-primary">
                <Send size={16} /> Let&apos;s Talk
              </a>
              <a href="mailto:sumanry402@gmail.com" className="btn-secondary">
                <Mail size={16} /> Email Me
              </a>
            </div>
          </div>

          <form id="contact-form" className="surface-card p-6 md:p-7" aria-label="Contact form">
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

      <footer className="container-width relative z-10 mt-24 border-t border-white/10 pt-10">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="brand-mark">
              Suman <span>Roy</span>
            </p>
            <p className="mt-1 text-sm text-ink-faint">Flutter Developer</p>
          </div>

          <nav className="flex flex-wrap gap-x-6 gap-y-2">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="nav-link">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            {socials.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noreferrer" : undefined}
                aria-label={label}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-ink-muted transition hover:border-blue-bright/40 hover:text-blue-bright"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-white/10 py-6 text-center text-sm text-ink-faint md:flex-row">
          <p>© 2026 Suman Roy. All rights reserved.</p>
          <a href="#top" className="inline-flex items-center gap-2 text-ink-faint transition hover:text-blue-bright">
            <ChevronUp size={15} /> Back to top
          </a>
        </div>
      </footer>
    </main>
  );
}
