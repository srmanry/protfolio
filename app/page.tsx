"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { SectionWrapper } from "@/components/section-wrapper";
import { projects } from "@/data/projects";

const skills = ["Flutter", "Dart", "Firebase", "REST API", "Clean Architecture", "CI/CD"];

const services = [
  "Full app development from idea to Play Store/App Store",
  "Modern UI implementation with responsive behavior",
  "Backend integration, auth, and push notifications",
  "Maintenance, bug fixes, and performance optimization"
];

const experiences = [
  {
    company: "Company Name 1",
    role: "Flutter Developer",
    duration: "Jan 2023 - Present",
    details: "Built and maintained production-grade Flutter apps with Firebase and REST API integration."
  },
  {
    company: "Company Name 2",
    role: "Junior Mobile App Developer",
    duration: "May 2021 - Dec 2022",
    details: "Implemented responsive UI screens, fixed bugs, and improved app performance across Android and iOS."
  }
];

const socials = [
  { label: "Facebook", link: "https://facebook.com" },
  { label: "LinkedIn", link: "https://linkedin.com" },
  { label: "GitHub", link: "https://github.com" },
  { label: "Gmail", link: "mailto:yourname@gmail.com" }
];

export default function HomePage() {
  return (
    <main className="pb-20">
      <header className="container-width pt-8 md:pt-10">
        <nav className="flex flex-wrap items-center justify-between gap-3 border-b border-black/10 pb-4">
          <div>
            <p className="text-2xl font-bold tracking-tight text-ink">Md. Srsuman</p>
            <p className="text-sm text-black/60">Flutter App Developer</p>
          </div>
          <div className="flex items-center gap-6 text-sm font-semibold text-black/75">
            <a href="#services" className="hover:text-black">Services</a>
            <a href="#experience" className="hover:text-black">Experience</a>
            <a href="#projects" className="hover:text-black">Projects</a>
            <a href="#contact" className="hover:text-black">Contact</a>
          </div>
        </nav>
      </header>

      <section className="container-width pt-10 md:pt-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="grid items-center gap-8 md:grid-cols-[1.25fr_0.75fr]"
        >
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-black/55">
              Available for freelance work
            </p>
            <h1 className="mt-4 max-w-3xl text-4xl font-bold leading-tight text-ink md:text-6xl">
              Professional Mobile App Solutions for Real Business Growth.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-black/70 md:text-lg">
              I build high-quality Flutter applications with clean code, strong UX, and reliable delivery.
              From startup MVP to enterprise features, I help teams ship faster with confidence.
            </p>
          </div>

          <div className="mx-auto w-full max-w-[320px]">
            <div className="mx-auto h-[260px] w-[260px] overflow-hidden rounded-full bg-transparent md:h-[300px] md:w-[300px]">
              <Image
                src="/profile.jpeg"
                alt="Portrait of Md. Srsuman"
                width={620}
                height={620}
                className="h-full w-full scale-[1.02] object-cover"
                priority
              />
            </div>
          </div>
        </motion.div>
      </section>

      <SectionWrapper id="services" className="container-width pt-14 md:pt-20">
        <h2 className="section-title">Services</h2>
        <ul className="mt-6 space-y-3 text-black/80">
          {services.map((item) => (
            <li key={item} className="border-l-2 border-accent pl-4 text-base leading-relaxed">
              {item}
            </li>
          ))}
        </ul>
      </SectionWrapper>

      <SectionWrapper className="container-width pt-14 md:pt-20">
        <h2 id="experience" className="section-title">Experience</h2>
        <div className="mt-6 space-y-4">
          {experiences.map((item) => (
            <article key={`${item.company}-${item.duration}`} className="rounded-xl border border-black/10 bg-white/60 p-5">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="text-lg font-semibold text-ink">{item.company}</h3>
                <p className="text-sm font-medium text-black/60">{item.duration}</p>
              </div>
              <p className="mt-1 text-sm font-semibold text-accent">{item.role}</p>
              <p className="mt-3 text-sm leading-relaxed text-black/75">{item.details}</p>
            </article>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper className="container-width pt-14 md:pt-20">
        <h2 className="section-title">Core Skills</h2>
        <p className="mt-5 text-base leading-relaxed text-black/80">{skills.join("  •  ")}</p>
      </SectionWrapper>

      <section id="projects" className="container-width pt-14 md:pt-20">
        <h2 className="section-title">Projects</h2>
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article key={project.slug} className="rounded-xl border border-black/10 bg-white/60 p-5">
              <Link href={`/projects/${project.slug}`} className="block">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{project.icon}</span>
                  <h3 className="text-lg font-semibold text-ink">{project.title}</h3>
                </div>
                <p className="mt-2 text-sm text-black/70">{project.summary}</p>
              </Link>

              <div className="mt-4 flex flex-wrap gap-2 text-xs font-semibold">
                {project.github ? (
                  <a href={project.github} target="_blank" rel="noreferrer" className="rounded-md border border-black/20 px-3 py-1.5 hover:bg-black/5">
                    GitHub
                  </a>
                ) : null}
                {project.playStore ? (
                  <a href={project.playStore} target="_blank" rel="noreferrer" className="rounded-md border border-black/20 px-3 py-1.5 hover:bg-black/5">
                    Play Store
                  </a>
                ) : null}
                {project.appStore ? (
                  <a href={project.appStore} target="_blank" rel="noreferrer" className="rounded-md border border-black/20 px-3 py-1.5 hover:bg-black/5">
                    App Store
                  </a>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </section>

      <SectionWrapper id="contact" className="container-width pt-14 md:pt-20">
        <h2 className="section-title">Contact</h2>
        <div className="mt-6 flex flex-wrap gap-3">
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.link}
              target={social.link.startsWith("http") ? "_blank" : undefined}
              rel={social.link.startsWith("http") ? "noreferrer" : undefined}
              className="rounded-lg border border-black/20 px-4 py-2 text-sm font-semibold text-ink hover:bg-black/5"
            >
              {social.label}
            </a>
          ))}
        </div>
      </SectionWrapper>
    </main>
  );
}
