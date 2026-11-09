"use client";

import Image from "next/image";
import Link from "next/link";
import { FormEvent, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { projects } from "@/data/projects";
import {
  additionalExperience,
  education,
  experience,
  features,
  highlights,
  profile,
  skillGroups,
} from "@/data/profile";
import {
  ArrowUpRight,
  Briefcase,
  CreditCard,
  Download,
  FileText,
  FolderGit2,
  GraduationCap,
  KeyRound,
  Layers,
  Mail,
  MapPin,
  Megaphone,
  Send,
  Sparkles,
  User,
  Video,
} from "lucide-react";

// lucide-react no longer ships brand icons, so these two are drawn inline.
function GithubIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.28 1.19-3.08-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.78 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.8 1.19 1.82 1.19 3.08 0 4.41-2.69 5.38-5.26 5.67.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5Z" />
    </svg>
  );
}

function LinkedinIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
    </svg>
  );
}

function WhatsappIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12.04 2a9.84 9.84 0 0 0-8.49 14.78L2 22l5.36-1.5A9.96 9.96 0 1 0 12.04 2Zm0 17.91a8.09 8.09 0 0 1-4.12-1.13l-.3-.18-3.18.89.85-3.1-.2-.32a8.01 8.01 0 1 1 6.95 3.84Zm4.44-6.04c-.24-.12-1.44-.71-1.66-.79-.22-.08-.38-.12-.55.12-.16.24-.62.79-.76.95-.14.16-.28.18-.52.06-.24-.12-1.03-.38-1.96-1.21a7.3 7.3 0 0 1-1.36-1.69c-.14-.24-.02-.37.11-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.2-.47-.4-.4-.55-.41h-.46c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.69 2.58 4.1 3.62.57.25 1.02.4 1.37.51.58.18 1.1.16 1.51.1.46-.07 1.44-.59 1.64-1.16.2-.57.2-1.06.14-1.16-.06-.1-.22-.16-.46-.28Z" />
    </svg>
  );
}

const tabs = [
  { id: "me", label: "Me", mobileLabel: "Me", Icon: User },
  { id: "experience", label: "Experience", mobileLabel: "Work", Icon: Briefcase },
  { id: "projects", label: "Projects", mobileLabel: "Projects", Icon: FolderGit2 },
  { id: "skills", label: "Skills", mobileLabel: "Skills", Icon: Layers },
  { id: "contact", label: "Contact", mobileLabel: "Contact", Icon: Mail },
] as const;

type TabId = (typeof tabs)[number]["id"];

const featureIcons = {
  maps: MapPin,
  subscription: CreditCard,
  ads: Megaphone,
  call: Video,
  ai: Sparkles,
  auth: KeyRound,
};

const publishedProjects = projects.filter((project) => project.playStore || project.appStore);

function MePanel() {
  return (
    <div className="grid gap-4">
      <div className="surface-card p-6 md:p-7">
        <p className="panel-title">About</p>
        <p className="mt-3 text-[0.95rem] leading-7 text-ink-muted">{profile.summary}</p>
      </div>

      <div className="surface-card p-6 md:p-7">
        <p className="panel-title">What I build into apps</p>
        <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ key, title, copy }) => {
            const Icon = featureIcons[key];
            return (
              <div key={key} className="flex items-start gap-3">
                <span className="feature-icon">
                  <Icon size={18} />
                </span>
                <div>
                  <p className="text-sm font-semibold text-ink">{title}</p>
                  <p className="mt-0.5 text-sm leading-6 text-ink-faint">{copy}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {education.map((item) => (
          <div key={item.degree} className="surface-card flex items-start gap-3 p-5">
            <span className="feature-icon">
              <GraduationCap size={18} />
            </span>
            <div className="min-w-0 flex-1">
              <p className="text-sm font-semibold text-ink">{item.degree}</p>
              <p className="mt-0.5 text-sm text-ink-faint">{item.institute}</p>
              <p className="mt-2 text-xs font-semibold text-blue-bright">
                {item.year} · Result {item.result}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ExperiencePanel() {
  return (
    <div className="grid gap-4">
      <div className="surface-card p-6 md:p-7">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div className="flex items-start gap-3">
            <span className="feature-icon">
              <Briefcase size={18} />
            </span>
            <div>
              <h3 className="text-lg font-bold text-ink">{experience.role}</h3>
              <p className="text-sm font-medium text-ink-muted">{experience.company}</p>
              <p className="mt-0.5 text-xs text-ink-faint">{experience.location}</p>
            </div>
          </div>
          <span className="rounded-lg bg-surface-soft px-3 py-1.5 text-xs font-semibold text-blue-bright">
            {experience.duration}
          </span>
        </div>

        <ul className="mt-5 grid gap-2.5 md:grid-cols-2 md:gap-x-8">
          {experience.responsibilities.map((item) => (
            <li key={item} className="flex items-start gap-2.5 text-sm leading-6 text-ink-muted">
              <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="surface-card p-6 md:p-7">
        <p className="panel-title">Additional project experience</p>
        <ul className="mt-4 grid gap-3">
          {additionalExperience.map((item) => (
            <li key={item} className="flex items-start gap-2.5 text-sm leading-6 text-ink-muted">
              <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function StoreLink({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center gap-1 text-xs font-semibold text-blue-bright hover:underline"
    >
      {label} <ArrowUpRight size={13} />
    </a>
  );
}

function ProjectsPanel() {
  return (
    <div className="grid gap-4">
      <div className="grid gap-4 sm:grid-cols-2">
        {publishedProjects.map((project) => (
          <div key={project.slug} className="surface-card card-link flex flex-col p-5">
            <div className="flex items-start gap-3">
              <div
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl"
                style={{ background: project.logoBackground }}
              >
                <span className="text-sm font-extrabold tracking-[-0.04em]" style={{ color: project.logoAccent }}>
                  {project.logoText}
                </span>
              </div>
              <div className="min-w-0">
                <Link href={`/projects/${project.slug}`} className="font-bold text-ink hover:text-blue-bright">
                  {project.title}
                </Link>
                <p className="text-sm text-ink-faint">{project.tagline}</p>
              </div>
            </div>
            <p className="mt-3 flex-1 text-sm leading-6 text-ink-muted">{project.cardSummary}</p>
            <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-line pt-3">
              {project.playStore ? <StoreLink href={project.playStore} label="Google Play" /> : null}
              {project.appStore ? <StoreLink href={project.appStore} label="App Store" /> : null}
              <Link href={`/projects/${project.slug}`} className="ml-auto text-xs font-semibold text-ink-faint hover:text-ink">
                Details →
              </Link>
            </div>
          </div>
        ))}
      </div>

      <a href={profile.github} target="_blank" rel="noreferrer" className="surface-card card-link flex items-center gap-4 p-5">
        <span className="feature-icon">
          <GithubIcon />
        </span>
        <div className="min-w-0 flex-1">
          <p className="font-bold text-ink">More on GitHub</p>
          <p className="text-sm text-ink-faint">Source code, Flutter projects, experiments, and development work.</p>
        </div>
        <ArrowUpRight size={18} className="text-ink-faint" />
      </a>
    </div>
  );
}

function SkillsPanel() {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {skillGroups.map((group) => (
        <div key={group.title} className="surface-card p-5">
          <p className="panel-title">{group.title}</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {group.items.map((item) => (
              <span key={item} className="skill-tag">
                {item}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function ContactPanel() {
  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const subject = String(data.get("subject") || "Hello from your portfolio");
    const body = `${data.get("message") || ""}\n\n— ${data.get("name") || ""} (${data.get("email") || ""})`;
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div className="grid gap-4">
      <div className="surface-card flex flex-wrap items-center gap-4 p-5">
        <span className="feature-icon">
          <FileText size={18} />
        </span>
        <div className="min-w-[13rem] flex-1">
          <p className="font-bold text-ink">Job Application CV</p>
          <p className="text-sm text-ink-faint">One-page general CV for Flutter and mobile developer roles.</p>
        </div>
        <a href="/resume-general.pdf" download="Suman-Roy-Flutter-Developer-CV.pdf" className="btn-secondary w-full justify-center sm:w-auto">
          <Download size={16} /> Download
        </a>
      </div>

      <form onSubmit={onSubmit} className="surface-card grid gap-4 p-6" aria-label="Contact form">
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="input-shell">
            <span>Name</span>
            <input type="text" name="name" placeholder="Your name" required />
          </label>
          <label className="input-shell">
            <span>Email</span>
            <input type="email" name="email" placeholder="you@example.com" required />
          </label>
        </div>
        <label className="input-shell">
          <span>Subject</span>
          <input type="text" name="subject" placeholder="How can we work together?" />
        </label>
        <label className="input-shell">
          <span>Message</span>
          <textarea name="message" rows={4} placeholder="Write a short message..." required />
        </label>
        <button type="submit" className="btn-primary justify-center">
          <Send size={16} /> Send Message
        </button>
      </form>
    </div>
  );
}

const panels: Record<TabId, () => JSX.Element> = {
  me: MePanel,
  experience: ExperiencePanel,
  projects: ProjectsPanel,
  skills: SkillsPanel,
  contact: ContactPanel,
};

function isTabId(value: string): value is TabId {
  return tabs.some((tab) => tab.id === value);
}

export default function HomePage() {
  const [active, setActive] = useState<TabId>("me");

  // Keep the open tab in the URL hash so links like /#projects land on the right panel.
  useEffect(() => {
    const syncFromHash = () => {
      const hash = window.location.hash.replace("#", "");
      if (isTabId(hash)) setActive(hash);
    };
    syncFromHash();
    window.addEventListener("hashchange", syncFromHash);
    return () => window.removeEventListener("hashchange", syncFromHash);
  }, []);

  const selectTab = (id: TabId) => {
    setActive(id);
    history.replaceState(null, "", `#${id}`);
    if (window.matchMedia("(max-width: 767px)").matches) {
      requestAnimationFrame(() => {
        document.getElementById("portfolio-panel")?.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    }
  };

  const Panel = panels[active];

  return (
    <main className="relative min-h-screen pb-28 md:pb-16">
      <div className="site-background" aria-hidden="true" />

      <div className="container-width relative z-10 pt-5 md:pt-20">
        {/* ---------- PROFILE CARD ---------- */}
        <motion.section
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="surface-card mx-auto max-w-3xl overflow-hidden rounded-[1.75rem] md:rounded-2xl"
        >
          <div className="profile-cover h-24 md:h-28" />

          <div className="px-4 pb-5 sm:px-6 sm:pb-6 md:px-8 md:pb-8">
            <div className="-mt-12 flex flex-col items-center gap-4 text-center md:-mt-16 md:flex-row md:items-end md:gap-5 md:text-left">
              <div className="relative shrink-0">
                <div className="h-24 w-24 overflow-hidden rounded-full border-4 border-surface bg-surface-soft shadow-lg md:h-32 md:w-32">
                  <Image src="/profile-nav.png" alt={profile.name} width={256} height={256} priority className="h-full w-full object-cover" />
                </div>
                <span
                  className="absolute bottom-1.5 right-1.5 h-4 w-4 rounded-full border-2 border-surface bg-[var(--success)] md:bottom-2 md:right-2"
                  title="Available for work"
                />
              </div>

              <div className="min-w-0 flex-1">
                <h1 className="text-2xl font-extrabold tracking-[-0.02em] text-ink md:text-3xl">{profile.name}</h1>
                <p className="mt-1.5 inline-flex items-center gap-1.5 text-sm text-ink-faint">
                  <MapPin size={14} /> {profile.location}
                </p>
              </div>

              <div className="grid w-full max-w-[19rem] grid-cols-[repeat(4,2.5rem)_minmax(4.75rem,1fr)] items-center justify-center gap-2 md:flex md:w-auto md:max-w-none">
                <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="icon-btn">
                  <GithubIcon />
                </a>
                <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="icon-btn">
                  <LinkedinIcon />
                </a>
                <a href={`mailto:${profile.email}`} aria-label="Email" className="icon-btn">
                  <Mail size={18} />
                </a>
                <a
                  href={profile.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="WhatsApp"
                  className="icon-btn"
                >
                  <WhatsappIcon />
                </a>
                <a href="/resume.pdf" download="Suman-Roy-Resume.pdf" className="btn-primary justify-center px-3 md:px-5">
                  <Download size={16} /> CV
                </a>
              </div>
            </div>

            <div className="mt-5 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line md:mt-7 md:grid-cols-4 md:rounded-xl">
              {highlights.map((item) => (
                <div key={item.label} className="flex min-h-20 flex-col justify-center bg-surface-soft px-2 py-3 text-center md:min-h-0 md:px-3 md:py-4">
                  <p className="text-base font-extrabold text-ink md:text-lg">{item.value}</p>
                  <p className="mt-0.5 text-xs text-ink-faint">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* ---------- TABS ---------- */}
        <div className="mobile-tab-dock fixed inset-x-3 bottom-3 z-40 mx-auto max-w-3xl md:sticky md:inset-x-auto md:bottom-auto md:top-5 md:mt-8">
          <nav className="tab-bar" aria-label="Portfolio sections" role="tablist">
            {tabs.map(({ id, label, mobileLabel, Icon }) => {
              const selected = active === id;
              return (
                <button
                  key={id}
                  type="button"
                  role="tab"
                  aria-selected={selected}
                  onClick={() => selectTab(id)}
                  className={`tab-btn ${selected ? "tab-btn--active" : ""}`}
                >
                  {selected ? (
                    <motion.span layoutId="tab-pill" className="tab-pill" transition={{ type: "spring", stiffness: 420, damping: 34 }} />
                  ) : null}
                  <span className="relative z-10 flex flex-col items-center gap-1 md:flex-row md:gap-2">
                    <Icon size={16} />
                    <span className="md:hidden">{mobileLabel}</span>
                    <span className="hidden md:inline">{label}</span>
                  </span>
                </button>
              );
            })}
          </nav>
        </div>

        {/* ---------- PANEL ---------- */}
        <div id="portfolio-panel" className="mx-auto mt-5 max-w-3xl scroll-mt-4 md:mt-6 md:scroll-mt-24">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              role="tabpanel"
            >
              <Panel />
            </motion.div>
          </AnimatePresence>
        </div>

        <footer className="mx-auto mt-14 max-w-3xl border-t border-line pt-6 text-center text-sm text-ink-faint">
          © 2026 {profile.name} · {profile.role}
        </footer>
      </div>
    </main>
  );
}
