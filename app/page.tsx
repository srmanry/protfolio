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

const heroHighlights = [
  { title: "Clean Code", subtitle: "Maintainable & Scalable" },
  { title: "Pixel Perfect UI", subtitle: "Modern & Responsive" },
  { title: "Fast Delivery", subtitle: "On-time, Every Time" },
  { title: "Reliable Support", subtitle: "Long-term Partnership" }
];

export default function HomePage() {
  return (
    <main className="pb-20">
      <section className="relative overflow-hidden pb-12">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_18%,rgba(159,231,223,0.38),transparent_34%),radial-gradient(circle_at_92%_16%,rgba(255,225,178,0.55),transparent_34%),linear-gradient(120deg,#fdfcf8_0%,#f7f9f9_55%,#fdf5e9_100%)]" />
        <div className="absolute -bottom-24 left-0 right-0 h-40 bg-[radial-gradient(ellipse_at_center,rgba(126,207,202,0.22),transparent_70%)]" />
        <div className="absolute left-10 top-[62%] hidden h-16 w-24 bg-[radial-gradient(#9ad1cc_1.5px,transparent_1.5px)] [background-size:12px_12px] opacity-50 md:block" />
        <div className="absolute right-10 top-[66%] hidden h-16 w-24 bg-[radial-gradient(#e7b774_1.5px,transparent_1.5px)] [background-size:12px_12px] opacity-50 md:block" />

        <header className="container-width relative pt-8 md:pt-10">
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

        <div className="container-width relative pt-10 md:pt-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="grid items-center gap-8 md:grid-cols-[1.15fr_0.85fr]"
          >
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#0a7e86]">
                Available for freelance work
              </p>
              <h1 className="mt-4 max-w-3xl text-4xl font-bold leading-[1.02] text-ink md:text-7xl">
                <span className="block">Professional Mobile</span>
                <span className="block">App Solutions for</span>
                <span className="block text-[#0f8c96]">Real Business</span>
                <span className="block text-[#0f8c96]">Growth.</span>
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-black/70 md:text-[1.08rem]">
                I build high-quality Flutter applications with clean code, strong UX, and reliable delivery.
                From startup MVP to enterprise features, I help teams ship faster with confidence.
              </p>

              <div className="mt-7 flex flex-wrap items-center gap-4">
                <a
                  href="#contact"
                  className="rounded-xl bg-gradient-to-r from-[#0a7e86] to-[#0f969d] px-8 py-3 text-sm font-semibold text-white shadow-[0_10px_28px_rgba(11,131,140,0.25)] transition hover:-translate-y-0.5"
                >
                  Hire Me
                </a>
                <a
                  href="#projects"
                  className="rounded-xl border border-[#4ca6ad] bg-white/60 px-8 py-3 text-sm font-semibold text-[#0a6f77] transition hover:bg-white"
                >
                  Download CV
                </a>
              </div>
            </div>

            <div className="mx-auto w-full max-w-[430px]">
              <div className="relative mx-auto h-[300px] w-[300px] md:h-[500px] md:w-[430px]">
                <div className="absolute left-1/2 top-4 h-[250px] w-[250px] -translate-x-1/2 rounded-full bg-[#f8ead3] md:h-[410px] md:w-[410px]" />
                <Image
                  src="/profile-me1.png"
                  alt="Portrait of Md. Srsuman"
                  width={900}
                  height={1300}
                  className="relative z-10 mx-auto h-full w-full object-contain object-bottom"
                  priority
                />
              </div>
            </div>
          </motion.div>

          <div className="relative z-10 mt-8 rounded-2xl border border-black/10 bg-white/80 p-4 shadow-[0_14px_30px_rgba(28,36,36,0.07)] backdrop-blur md:p-6">
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {heroHighlights.map((item) => (
                <div key={item.title} className="border-black/10 lg:border-r lg:pr-4 last:border-none">
                  <p className="text-lg font-semibold text-ink">{item.title}</p>
                  <p className="text-sm text-black/60">{item.subtitle}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
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
                {project.published && project.publishedDate ? (
                  <p className="mt-2 text-xs font-semibold text-black/55">
                    Published: {project.publishedDate}
                  </p>
                ) : null}
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
