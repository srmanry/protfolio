"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/section-wrapper";
import { projects } from "@/data/projects";
import {
  Code2,
  Monitor,
  Rocket,
  Headphones,
  CheckCircle2,
  Briefcase,
  Star,
  Send,
  Download,
  Mail,
  ArrowUpRight,
  Smartphone,
  Zap,
  Shield,
  Globe,
  ExternalLink,
  User,
  Link2,
} from "lucide-react";

/* ─── Data ─────────────────────────────────────── */

const skills = [
  { label: "Flutter", color: "bg-[#e0f5f5] text-[#0a7e86]" },
  { label: "Dart", color: "bg-[#e8f0fe] text-[#1a56db]" },
  { label: "Firebase", color: "bg-[#fff3e0] text-[#e65100]" },
  { label: "REST API", color: "bg-[#f3e8ff] text-[#7c3aed]" },
  { label: "Clean Architecture", color: "bg-[#fce7f3] text-[#be185d]" },
  { label: "CI/CD", color: "bg-[#ecfdf5] text-[#065f46]" },
  { label: "GetX", color: "bg-[#fef3c7] text-[#92400e]" },
  { label: "Bloc", color: "bg-[#e0f2fe] text-[#0369a1]" },
];

const services = [
  {
    icon: Smartphone,
    title: "Full App Development",
    desc: "End-to-end Flutter apps — from idea to Play Store & App Store launch.",
  },
  {
    icon: Monitor,
    title: "Pixel-Perfect UI",
    desc: "Modern, responsive interfaces that match every design detail.",
  },
  {
    icon: Globe,
    title: "Backend Integration",
    desc: "Firebase, REST APIs, Auth, push notifications, and real-time data.",
  },
  {
    icon: Shield,
    title: "Maintenance & Support",
    desc: "Bug fixes, performance tuning, and long-term technical support.",
  },
];

const experiences = [
  {
    company: "Company Name 1",
    role: "Flutter Developer",
    duration: "Jan 2023 – Present",
    details:
      "Built and maintained production-grade Flutter apps with Firebase and REST API integration. Led a team of 3 developers on a fintech product.",
    tags: ["Flutter", "Firebase", "REST API"],
  },
  {
    company: "Company Name 2",
    role: "Junior Mobile App Developer",
    duration: "May 2021 – Dec 2022",
    details:
      "Implemented responsive UI screens, fixed bugs, and improved app performance across Android and iOS.",
    tags: ["Flutter", "UI/UX", "Android", "iOS"],
  },
];

const socials = [
  { label: "Facebook", href: "https://facebook.com", Icon: Link2 },
  { label: "LinkedIn", href: "https://linkedin.com", Icon: Link2 },
  { label: "GitHub", href: "https://github.com", Icon: Code2 },
  { label: "Gmail", href: "mailto:yourname@gmail.com", Icon: Mail },
];

const highlights = [
  { Icon: Code2, title: "Clean Code", sub: "Maintainable & scalable\nwith best practice" },
  { Icon: Monitor, title: "Pixel Perfect UI", sub: "Modern, responsive &\nuser-friendly design" },
  { Icon: Rocket, title: "Fast Delivery", sub: "On-time delivery with\nhigh quality" },
  { Icon: Headphones, title: "Reliable Support", sub: "Long-term support &\nclear communication" },
];

/* ─── Animations ────────────────────────────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.08, ease: "easeOut" } }),
};

/* ─── Component ─────────────────────────────────── */
export default function HomePage() {
  return (
    <main className="overflow-x-hidden pb-24">
      {/* ═══ HERO ════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#e8f7f8] via-[#f0f6f7] to-[#fdf6ec]">
        {/* background blobs */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-24 -top-24 h-[500px] w-[500px] rounded-full bg-[#b2e8e6]/30 blur-3xl" />
          <div className="absolute right-0 top-0 h-[400px] w-[400px] rounded-full bg-[#ffd89b]/25 blur-3xl" />
          <div className="absolute bottom-0 left-1/2 h-[300px] w-[600px] -translate-x-1/2 rounded-full bg-[#7ec8c4]/15 blur-3xl" />
          <div className="dot-grid absolute left-8 bottom-32 h-28 w-36 opacity-40" />
          <div className="dot-grid absolute right-8 top-40 h-28 w-36 opacity-30" />
        </div>

        {/* ── Navbar ── */}
        <header className="container-width relative z-20 pt-7">
          <nav className="flex flex-wrap items-center justify-between gap-4 border-b border-[#0a7e86]/10 pb-5">
            {/* brand */}
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#0a7e86] to-[#0ea3ac] text-sm font-bold text-white shadow-md">
                MS
              </div>
              <div>
                <p className="text-[1.05rem] font-bold leading-none text-[#0d1f22]">Md. Srsuman</p>
                <p className="text-xs text-black/50">Flutter App Developer</p>
              </div>
            </div>

            {/* links */}
            <div className="hidden items-center gap-7 text-sm font-medium text-black/65 md:flex">
              {["Services", "Experience", "Projects", "Contact"].map((l) => (
                <a key={l} href={`#${l.toLowerCase()}`} className="transition hover:text-[#0a7e86]">
                  {l}
                </a>
              ))}
            </div>

            {/* CTA */}
            <a href="#contact" className="btn-primary text-xs">
              <Send size={13} /> Hire Me
            </a>
          </nav>
        </header>

        {/* ── Hero body ── */}
        <div className="container-width relative z-10 pb-10 pt-12 md:pt-16">
          <div className="grid items-center gap-10 md:grid-cols-[1.1fr_0.9fr]">
            {/* left */}
            <motion.div initial="hidden" animate="show" variants={fadeUp}>
              {/* badge */}
              <span className="inline-flex items-center gap-2 rounded-full border border-[#0a7e86]/20 bg-white/80 px-4 py-1.5 text-xs font-semibold text-[#0a7e86] shadow-sm backdrop-blur">
                <span className="h-2 w-2 animate-pulse rounded-full bg-[#0a7e86]" />
                Available for Freelance Work
              </span>

              <h1 className="mt-5 text-4xl font-extrabold leading-[1.05] tracking-tight text-[#0d1f22] md:text-[3.75rem]">
                Professional
                <br />
                Mobile App Solutions
                <br />
                for{" "}
                <span className="relative inline-block text-[#0a7e86]">
                  Real Business Growth.
                  <svg
                    className="absolute -bottom-1.5 left-0 w-full"
                    viewBox="0 0 400 8"
                    preserveAspectRatio="none"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2 5.5 C100 1.5, 200 7.5, 398 3"
                      stroke="#0a7e86"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </h1>

              <p className="mt-6 max-w-xl border-l-[3px] border-[#0a7e86]/40 pl-4 text-[0.97rem] leading-relaxed text-black/65">
                I build high-quality Flutter applications with clean code, strong UX, and reliable delivery.
                From startup MVP to enterprise features, I help teams ship faster with confidence.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a href="#contact" className="btn-primary">
                  <User size={15} /> Hire Me
                </a>
                <a href="#" className="btn-outline">
                  <Download size={15} /> Download CV
                </a>
              </div>

              <div className="mt-6 flex items-center gap-2 text-sm text-black/55">
                <Star size={15} className="text-[#f59e0b]" fill="#f59e0b" />
                Available for New Projects
                <svg width="36" height="20" viewBox="0 0 36 20" fill="none" className="ml-1 opacity-50">
                  <path d="M2 17 C8 4, 28 0, 34 9" stroke="#0a7e86" strokeWidth="1.5" strokeLinecap="round" />
                  <path d="M30 6 L34 9 L31 13" stroke="#0a7e86" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </motion.div>

            {/* right – profile photo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.93 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="relative mx-auto flex items-center justify-center"
            >
              {/* outer glow ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#7ec8c4]/40 to-[#b2e8e6]/30 blur-2xl" />

              {/* teal circle bg */}
              <div className="relative h-[300px] w-[300px] md:h-[420px] md:w-[420px]">
                <div className="absolute inset-4 rounded-full bg-gradient-to-br from-[#0a7e86] to-[#0ea3ac] opacity-85" />

                {/* photo */}
                <Image
                  src="/profile-me1.png"
                  alt="Md. Srsuman"
                  width={900}
                  height={1300}
                  className="relative z-10 h-full w-full object-contain object-bottom drop-shadow-2xl"
                  priority
                />

                {/* floating badges */}
                <div className="absolute -right-4 top-[18%] z-20 flex items-center gap-2 rounded-2xl bg-white px-3.5 py-2.5 shadow-[0_8px_28px_rgba(0,0,0,0.12)]">
                  <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#e0f5f5]">
                    <svg width="18" height="18" viewBox="0 0 50 50" fill="none">
                      <path d="M25 5L5 45h40L25 5z" fill="#0a7e86" opacity="0.15" />
                      <path d="M25 5L5 45h40L25 5z" stroke="#0a7e86" strokeWidth="3" strokeLinejoin="round" />
                      <path d="M14 35l11-20 11 20" stroke="#0a7e86" strokeWidth="2.5" strokeLinecap="round" />
                    </svg>
                  </div>
                  <span className="text-xs font-semibold text-[#0d1f22]">Flutter</span>
                </div>

                <div className="absolute -left-5 top-[40%] z-20 flex items-center justify-center rounded-2xl bg-white p-3 shadow-[0_8px_28px_rgba(0,0,0,0.12)]">
                  <Smartphone size={20} className="text-[#0a7e86]" />
                </div>

                <div className="absolute -right-6 bottom-[28%] z-20 flex items-center justify-center rounded-2xl bg-white p-3 shadow-[0_8px_28px_rgba(0,0,0,0.12)]">
                  <Code2 size={20} className="text-[#0a7e86]" />
                </div>
              </div>
            </motion.div>
          </div>

          {/* ── Highlights bar ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="mt-12 rounded-2xl border border-[#0a7e86]/10 bg-white/80 p-5 shadow-[0_8px_32px_rgba(10,126,134,0.08)] backdrop-blur md:p-6"
          >
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {highlights.map(({ Icon, title, sub }, i) => (
                <div
                  key={title}
                  className={`flex items-start gap-4 ${i < highlights.length - 1 ? "lg:border-r lg:border-black/8 lg:pr-6" : ""}`}
                >
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-[#e0f5f5]">
                    <Icon size={18} className="text-[#0a7e86]" />
                  </div>
                  <div>
                    <p className="text-[0.9rem] font-semibold text-[#0d1f22]">{title}</p>
                    <p className="mt-0.5 whitespace-pre-line text-xs leading-snug text-black/55">{sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══ SERVICES ════════════════════════════════ */}
      <SectionWrapper id="services" className="container-width pt-20 md:pt-28">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}>
          <span className="section-label">What I Do</span>
          <h2 className="section-title">Services</h2>
        </motion.div>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              custom={i}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeUp}
              className="card group flex flex-col gap-4 p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_12px_36px_rgba(10,126,134,0.13)]"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#e0f5f5] transition group-hover:bg-[#0a7e86]">
                <Icon size={20} className="text-[#0a7e86] transition group-hover:text-white" />
              </div>
              <div>
                <h3 className="text-[0.95rem] font-semibold text-[#0d1f22]">{title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-black/60">{desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      {/* ═══ EXPERIENCE ══════════════════════════════ */}
      <SectionWrapper className="container-width pt-20 md:pt-28">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}>
          <span className="section-label">Career</span>
          <h2 id="experience" className="section-title">Experience</h2>
        </motion.div>
        <div className="relative mt-8 space-y-5">
          {/* vertical line */}
          <div className="absolute left-[18px] top-2 h-[calc(100%-1rem)] w-px bg-gradient-to-b from-[#0a7e86]/40 to-transparent" />

          {experiences.map((item, i) => (
            <motion.article
              key={`${item.company}-${item.duration}`}
              custom={i}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeUp}
              className="relative pl-12"
            >
              {/* dot */}
              <div className="absolute left-[11px] top-5 h-4 w-4 rounded-full border-2 border-[#0a7e86] bg-white" />
              <div className="card p-6">
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <div>
                    <h3 className="text-base font-bold text-[#0d1f22]">{item.company}</h3>
                    <p className="mt-0.5 text-sm font-semibold text-[#0a7e86]">{item.role}</p>
                  </div>
                  <span className="flex items-center gap-1.5 rounded-lg bg-[#e0f5f5] px-3 py-1 text-xs font-medium text-[#0a7e86]">
                    <Briefcase size={11} /> {item.duration}
                  </span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-black/65">{item.details}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {item.tags.map((t) => (
                    <span key={t} className="rounded-md bg-[#f0f6f7] px-2.5 py-1 text-xs font-medium text-[#0a7e86]">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </SectionWrapper>

      {/* ═══ SKILLS ══════════════════════════════════ */}
      <SectionWrapper className="container-width pt-20 md:pt-28">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}>
          <span className="section-label">Expertise</span>
          <h2 className="section-title">Core Skills</h2>
        </motion.div>
        <div className="mt-8 flex flex-wrap gap-3">
          {skills.map(({ label, color }, i) => (
            <motion.span
              key={label}
              custom={i}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeUp}
              className={`${color} flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold shadow-sm transition hover:scale-105`}
            >
              <CheckCircle2 size={14} />
              {label}
            </motion.span>
          ))}
        </div>
      </SectionWrapper>

      {/* ═══ PROJECTS ════════════════════════════════ */}
      <section id="projects" className="container-width pt-20 md:pt-28">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}>
          <span className="section-label">Portfolio</span>
          <h2 className="section-title">Projects</h2>
        </motion.div>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
          {projects.map((project, i) => (
            <motion.article
              key={project.slug}
              custom={i}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeUp}
              className="card group flex flex-col overflow-hidden transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_12px_36px_rgba(10,126,134,0.13)]"
            >
              {/* screenshot */}
              {project.screenshots[0] && (
                <div className="relative h-48 w-full overflow-hidden bg-gradient-to-br from-[#e0f5f5] to-[#f0f6f7]">
                  <Image
                    src={project.screenshots[0]}
                    alt={project.title}
                    fill
                    className="object-cover object-top transition duration-300 group-hover:scale-105"
                  />
                </div>
              )}
              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">{project.icon}</span>
                  <div>
                    <Link href={`/projects/${project.slug}`} className="group/link flex items-center gap-1">
                      <h3 className="text-[0.95rem] font-bold text-[#0d1f22] group-hover/link:text-[#0a7e86]">
                        {project.title}
                      </h3>
                      <ArrowUpRight size={14} className="opacity-0 transition group-hover/link:opacity-100 text-[#0a7e86]" />
                    </Link>
                    {project.published && project.publishedDate && (
                      <p className="mt-0.5 text-xs font-medium text-[#0a7e86]/60">
                        Published: {project.publishedDate}
                      </p>
                    )}
                  </div>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-black/65">{project.summary}</p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.stack.map((s) => (
                    <span key={s} className="rounded-md bg-[#f0f6f7] px-2.5 py-1 text-xs font-medium text-[#0a7e86]">
                      {s}
                    </span>
                  ))}
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-1.5 rounded-lg border border-black/15 bg-white px-3.5 py-1.5 text-xs font-semibold text-[#0d1f22] transition hover:border-[#0a7e86] hover:text-[#0a7e86]"
                    >
                      <Code2 size={12} /> GitHub
                    </a>
                  )}
                  {project.playStore && (
                    <a
                      href={project.playStore}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-1.5 rounded-lg border border-black/15 bg-white px-3.5 py-1.5 text-xs font-semibold text-[#0d1f22] transition hover:border-[#0a7e86] hover:text-[#0a7e86]"
                    >
                      <ExternalLink size={12} /> Play Store
                    </a>
                  )}
                  {project.appStore && (
                    <a
                      href={project.appStore}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-1.5 rounded-lg border border-black/15 bg-white px-3.5 py-1.5 text-xs font-semibold text-[#0d1f22] transition hover:border-[#0a7e86] hover:text-[#0a7e86]"
                    >
                      <ExternalLink size={12} /> App Store
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* ═══ CONTACT ═════════════════════════════════ */}
      <SectionWrapper id="contact" className="container-width pt-20 md:pt-28">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
          className="rounded-3xl bg-gradient-to-br from-[#0a7e86] to-[#0ea3ac] p-10 md:p-14"
        >
          <div className="mx-auto max-w-xl text-center">
            <span className="inline-block rounded-full bg-white/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-white/90">
              Let&apos;s Work Together
            </span>
            <h2 className="mt-4 text-3xl font-extrabold text-white md:text-4xl">
              Have a project in mind?
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-white/75">
              I&apos;m available for freelance projects, contract work, and long-term collaborations.
              Feel free to reach out anytime.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-3">
              {socials.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noreferrer" : undefined}
                  className="flex items-center gap-2 rounded-xl bg-white/15 px-5 py-2.5 text-sm font-semibold text-white backdrop-blur transition hover:bg-white hover:text-[#0a7e86]"
                >
                  <Icon size={15} /> {label}
                </a>
              ))}
            </div>

            <a
              href="mailto:yourname@gmail.com"
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-white px-8 py-3.5 text-sm font-bold text-[#0a7e86] shadow-[0_8px_24px_rgba(0,0,0,0.12)] transition hover:shadow-[0_12px_32px_rgba(0,0,0,0.18)]"
            >
              <Zap size={15} fill="#0a7e86" /> Get in Touch
            </a>
          </div>
        </motion.div>
      </SectionWrapper>

      {/* ═══ FOOTER ══════════════════════════════════ */}
      <footer className="container-width mt-16 border-t border-black/8 py-6 text-center text-xs text-black/40">
        © {new Date().getFullYear()} Md. Srsuman · Built with Next.js & Flutter passion
      </footer>
    </main>
  );
}
