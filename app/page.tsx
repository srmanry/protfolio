"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/section-wrapper";
import { LifecycleSection } from "@/components/lifecycle-section";
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
  { label: "Flutter", color: "bg-[#1a1200] text-[#F59E0B]" },
  { label: "Dart", color: "bg-[#0a0f1e] text-[#60A5FA]" },
  { label: "Firebase", color: "bg-[#1a0d00] text-[#FB923C]" },
  { label: "REST API", color: "bg-[#130a1e] text-[#C084FC]" },
  { label: "Clean Architecture", color: "bg-[#1a0a10] text-[#F472B6]" },
  { label: "CI/CD", color: "bg-[#041a0e] text-[#34D399]" },
  { label: "GetX", color: "bg-[#1a1200] text-[#FCD34D]" },
  { label: "Bloc", color: "bg-[#041018] text-[#38BDF8]" },
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
      <section className="relative overflow-hidden bg-[#0a0a0a]">
        {/* background blobs */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-24 -top-24 h-[500px] w-[500px] rounded-full bg-[#F59E0B]/10 blur-3xl" />
          <div className="absolute right-0 top-0 h-[400px] w-[400px] rounded-full bg-[#FBBF24]/8 blur-3xl" />
          <div className="absolute bottom-0 left-1/2 h-[300px] w-[600px] -translate-x-1/2 rounded-full bg-[#F59E0B]/6 blur-3xl" />
          <div className="dot-grid absolute left-8 bottom-32 h-28 w-36 opacity-20" />
          <div className="dot-grid absolute right-8 top-40 h-28 w-36 opacity-15" />
        </div>

        {/* ── Navbar ── */}
        <header className="container-width relative z-20 pt-7">
          <nav className="flex flex-wrap items-center justify-between gap-4 border-b border-white/[0.07] pb-5">
            {/* brand */}
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#F59E0B] to-[#FBBF24] text-sm font-bold text-black shadow-md">
                MS
              </div>
              <div>
                <p className="text-[1.05rem] font-bold leading-none text-white">Md. Srsuman</p>
                <p className="text-xs text-white/40">Flutter App Developer</p>
              </div>
            </div>

            {/* links */}
            <div className="hidden items-center gap-7 text-sm font-medium text-white/50 md:flex">
              {["Services", "Experience", "Projects", "Contact"].map((l) => (
                <a key={l} href={`#${l.toLowerCase()}`} className="transition hover:text-[#F59E0B]">
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
              <span className="inline-flex items-center gap-2 rounded-full border border-[#F59E0B]/25 bg-[#F59E0B]/10 px-4 py-1.5 text-xs font-semibold text-[#F59E0B] backdrop-blur">
                <span className="h-2 w-2 animate-pulse rounded-full bg-[#F59E0B]" />
                Available for Freelance Work
              </span>

              <h1 className="mt-5 text-4xl font-extrabold leading-[1.05] tracking-tight text-white md:text-[3.75rem]">
                Professional
                <br />
                Mobile App Solutions
                <br />
                for{" "}
                <span className="relative inline-block text-[#F59E0B]">
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
                      stroke="#F59E0B"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </h1>

              <p className="mt-6 max-w-xl border-l-[3px] border-[#F59E0B]/40 pl-4 text-[0.97rem] leading-relaxed text-white/55">
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

              <div className="mt-6 flex items-center gap-2 text-sm text-white/40">
                <Star size={15} className="text-[#F59E0B]" fill="#F59E0B" />
                Available for New Projects
                <svg width="36" height="20" viewBox="0 0 36 20" fill="none" className="ml-1 opacity-40">
                  <path d="M2 17 C8 4, 28 0, 34 9" stroke="#F59E0B" strokeWidth="1.5" strokeLinecap="round" />
                  <path d="M30 6 L34 9 L31 13" stroke="#F59E0B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
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
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#F59E0B]/20 to-[#FBBF24]/10 blur-2xl" />

              {/* dark circle bg */}
              <div className="relative h-[300px] w-[300px] md:h-[420px] md:w-[420px]">
                <div className="absolute inset-4 rounded-full bg-gradient-to-br from-[#1a1000] to-[#2a1f00] border border-[#F59E0B]/20" />

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
                <div className="absolute -right-4 top-[18%] z-20 flex items-center gap-2 rounded-2xl bg-[#111111] border border-white/[0.07] px-3.5 py-2.5 shadow-[0_8px_28px_rgba(0,0,0,0.5)]">
                  <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#F59E0B]/15">
                    <svg width="18" height="18" viewBox="0 0 50 50" fill="none">
                      <path d="M25 5L5 45h40L25 5z" fill="#F59E0B" opacity="0.15" />
                      <path d="M25 5L5 45h40L25 5z" stroke="#F59E0B" strokeWidth="3" strokeLinejoin="round" />
                      <path d="M14 35l11-20 11 20" stroke="#F59E0B" strokeWidth="2.5" strokeLinecap="round" />
                    </svg>
                  </div>
                  <span className="text-xs font-semibold text-white">Flutter</span>
                </div>

                <div className="absolute -left-5 top-[40%] z-20 flex items-center justify-center rounded-2xl bg-[#111111] border border-white/[0.07] p-3 shadow-[0_8px_28px_rgba(0,0,0,0.5)]">
                  <Smartphone size={20} className="text-[#F59E0B]" />
                </div>

                <div className="absolute -right-6 bottom-[28%] z-20 flex items-center justify-center rounded-2xl bg-[#111111] border border-white/[0.07] p-3 shadow-[0_8px_28px_rgba(0,0,0,0.5)]">
                  <Code2 size={20} className="text-[#F59E0B]" />
                </div>
              </div>
            </motion.div>
          </div>

          {/* ── Highlights bar ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="mt-12 rounded-2xl border border-white/[0.07] bg-[#111111] p-5 shadow-[0_8px_32px_rgba(245,158,11,0.06)] md:p-6"
          >
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {highlights.map(({ Icon, title, sub }, i) => (
                <div
                  key={title}
                  className={`flex items-start gap-4 ${i < highlights.length - 1 ? "lg:border-r lg:border-white/[0.06] lg:pr-6" : ""}`}
                >
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-[#F59E0B]/15">
                    <Icon size={18} className="text-[#F59E0B]" />
                  </div>
                  <div>
                    <p className="text-[0.9rem] font-semibold text-white">{title}</p>
                    <p className="mt-0.5 whitespace-pre-line text-xs leading-snug text-white/40">{sub}</p>
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
              className="card group flex flex-col gap-4 p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_12px_36px_rgba(245,158,11,0.12)] hover:border-[#F59E0B]/20"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#F59E0B]/15 transition group-hover:bg-[#F59E0B]">
                <Icon size={20} className="text-[#F59E0B] transition group-hover:text-black" />
              </div>
              <div>
                <h3 className="text-[0.95rem] font-semibold text-white">{title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-white/50">{desc}</p>
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
          <div className="absolute left-[18px] top-2 h-[calc(100%-1rem)] w-px bg-gradient-to-b from-[#F59E0B]/40 to-transparent" />

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
              <div className="absolute left-[11px] top-5 h-4 w-4 rounded-full border-2 border-[#F59E0B] bg-[#0a0a0a]" />
              <div className="card p-6">
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <div>
                    <h3 className="text-base font-bold text-white">{item.company}</h3>
                    <p className="mt-0.5 text-sm font-semibold text-[#F59E0B]">{item.role}</p>
                  </div>
                  <span className="flex items-center gap-1.5 rounded-lg bg-[#F59E0B]/15 px-3 py-1 text-xs font-medium text-[#F59E0B]">
                    <Briefcase size={11} /> {item.duration}
                  </span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-white/55">{item.details}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {item.tags.map((t) => (
                    <span key={t} className="rounded-md bg-white/[0.06] px-2.5 py-1 text-xs font-medium text-[#F59E0B]">
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
              className={`${color} flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold shadow-sm transition hover:scale-105 border border-white/[0.05]`}
            >
              <CheckCircle2 size={14} />
              {label}
            </motion.span>
          ))}
        </div>
      </SectionWrapper>

      {/* ═══ LIFECYCLE ═══════════════════════════════ */}
      <LifecycleSection />

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
              className="card group flex flex-col overflow-hidden transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_12px_36px_rgba(245,158,11,0.12)] hover:border-[#F59E0B]/20"
            >
              {/* screenshot */}
              {project.screenshots[0] && (
                <div className="relative h-48 w-full overflow-hidden bg-[#161616]">
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
                      <h3 className="text-[0.95rem] font-bold text-white group-hover/link:text-[#F59E0B]">
                        {project.title}
                      </h3>
                      <ArrowUpRight size={14} className="opacity-0 transition group-hover/link:opacity-100 text-[#F59E0B]" />
                    </Link>
                    {project.published && project.publishedDate && (
                      <p className="mt-0.5 text-xs font-medium text-[#F59E0B]/50">
                        Published: {project.publishedDate}
                      </p>
                    )}
                  </div>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-white/55">{project.summary}</p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.stack.map((s) => (
                    <span key={s} className="rounded-md bg-white/[0.06] px-2.5 py-1 text-xs font-medium text-[#F59E0B]">
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
                      className="flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/[0.04] px-3.5 py-1.5 text-xs font-semibold text-white/70 transition hover:border-[#F59E0B]/40 hover:text-[#F59E0B]"
                    >
                      <Code2 size={12} /> GitHub
                    </a>
                  )}
                  {project.playStore && (
                    <a
                      href={project.playStore}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/[0.04] px-3.5 py-1.5 text-xs font-semibold text-white/70 transition hover:border-[#F59E0B]/40 hover:text-[#F59E0B]"
                    >
                      <ExternalLink size={12} /> Play Store
                    </a>
                  )}
                  {project.appStore && (
                    <a
                      href={project.appStore}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/[0.04] px-3.5 py-1.5 text-xs font-semibold text-white/70 transition hover:border-[#F59E0B]/40 hover:text-[#F59E0B]"
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
          className="rounded-3xl bg-gradient-to-br from-[#F59E0B] to-[#FBBF24] p-10 md:p-14"
        >
          <div className="mx-auto max-w-xl text-center">
            <span className="inline-block rounded-full bg-black/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-black/70">
              Let&apos;s Work Together
            </span>
            <h2 className="mt-4 text-3xl font-extrabold text-black md:text-4xl">
              Have a project in mind?
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-black/60">
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
                  className="flex items-center gap-2 rounded-xl bg-black/15 px-5 py-2.5 text-sm font-semibold text-black/80 backdrop-blur transition hover:bg-black hover:text-[#F59E0B]"
                >
                  <Icon size={15} /> {label}
                </a>
              ))}
            </div>

            <a
              href="mailto:yourname@gmail.com"
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-black px-8 py-3.5 text-sm font-bold text-[#F59E0B] shadow-[0_8px_24px_rgba(0,0,0,0.3)] transition hover:shadow-[0_12px_32px_rgba(0,0,0,0.45)]"
            >
              <Zap size={15} fill="#F59E0B" /> Get in Touch
            </a>
          </div>
        </motion.div>
      </SectionWrapper>

      {/* ═══ FOOTER ══════════════════════════════════ */}
      <footer className="container-width mt-16 border-t border-white/[0.06] py-6 text-center text-xs text-white/25">
        © {new Date().getFullYear()} Md. Srsuman · Built with Next.js & Flutter passion
      </footer>
    </main>
  );
}
