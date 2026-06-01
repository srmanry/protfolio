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
  { icon: "</>", title: "Clean Code", subtitle: "Maintainable & scalable with best practice" },
  { icon: "UI", title: "Pixel Perfect UI", subtitle: "Modern, responsive and user-friendly design" },
  { icon: ">>", title: "Fast Delivery", subtitle: "On-time delivery with high quality" },
  { icon: "24", title: "Reliable Support", subtitle: "Long-term support and clear communication" }
];

export default function HomePage() {
  return (
    <main className="pb-20">
      <section className="relative overflow-hidden pb-12">
        <div className="absolute inset-0 bg-[linear-gradient(145deg,#eff5fb_0%,#edf3fb_40%,#ddf0ff_100%)]" />
        <div className="absolute right-[-12%] top-[-15%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle,rgba(52,170,218,0.2),rgba(52,170,218,0.02)_72%)]" />
        <div className="absolute left-[-14%] bottom-[-28%] h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle,rgba(135,199,255,0.22),rgba(135,199,255,0.01)_72%)]" />
        <div className="absolute right-12 top-36 hidden h-24 w-24 bg-[radial-gradient(#9ec8e6_2px,transparent_2px)] [background-size:14px_14px] opacity-65 lg:block" />

        <header className="container-width relative pt-7 md:pt-9">
          <nav className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-b from-[#0d788c] to-[#01506a] text-4xl font-bold text-white shadow-[0_8px_20px_rgba(6,101,133,0.3)]">
                <span className="text-3xl">MS</span>
              </div>
              <div>
                <p className="text-5xl font-bold leading-none text-ink md:text-[46px]">Md. Srsuman</p>
                <p className="text-2xl leading-none text-[#51677f] md:mt-1 md:text-[38px]">
                  Flutter App <span className="text-[#118ea0]">Developer</span>
                </p>
              </div>
            </div>

            <div className="hidden items-center gap-10 text-3xl font-semibold text-[#12151e] lg:flex">
              <a href="#services" className="hover:text-[#118ea0]">Services</a>
              <a href="#experience" className="hover:text-[#118ea0]">Experience</a>
              <a href="#projects" className="hover:text-[#118ea0]">Projects</a>
              <a href="#contact" className="hover:text-[#118ea0]">Contact</a>
              <a
                href="#contact"
                className="rounded-2xl bg-gradient-to-r from-[#0a8ca1] to-[#066a89] px-10 py-4 text-white shadow-[0_10px_25px_rgba(8,123,152,0.28)]"
              >
                Hire Me
              </a>
            </div>
          </nav>
        </header>

        <div className="container-width relative pt-8 md:pt-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="grid items-center gap-9 xl:grid-cols-[1.08fr_0.92fr]"
          >
            <div className="relative z-10">
              <div className="inline-flex items-center gap-3 rounded-full border border-[#b8deea] bg-[#ddf4f5] px-5 py-3 text-lg font-semibold uppercase tracking-[0.05em] text-[#0a6d83] md:text-xl">
                <span className="h-3 w-3 rounded-full bg-[#10a5b0]" />
                Available for freelance work
              </div>

              <h1 className="mt-6 max-w-4xl text-6xl font-bold leading-[0.97] text-[#090f1d] md:text-8xl xl:text-[86px]">
                <span className="block">Professional</span>
                <span className="block">Mobile App Solutions</span>
                <span className="block">for <span className="text-[#0d869e]">Real Business Growth.</span></span>
              </h1>
              <div className="mt-2 h-1.5 w-56 rounded-full bg-gradient-to-r from-[#0c88a3] to-[#1395af]" />

              <p className="mt-7 max-w-3xl border-l-4 border-[#2091ab] pl-4 text-2xl leading-relaxed text-[#314760] md:text-[36px] md:leading-[1.35]">
                I build high-quality Flutter applications with clean code, strong UX, and reliable delivery.
                From startup MVP to enterprise features, I help teams ship faster with confidence.
              </p>

              <div className="mt-9 flex flex-wrap items-center gap-5">
                <a
                  href="#contact"
                  className="rounded-2xl bg-gradient-to-r from-[#0a7f96] to-[#075d78] px-10 py-4 text-3xl font-semibold text-white shadow-[0_12px_26px_rgba(5,112,142,0.28)]"
                >
                  Hire Me
                </a>
                <a
                  href="#projects"
                  className="rounded-2xl border-2 border-[#b4cce2] bg-white/80 px-10 py-4 text-3xl font-semibold text-[#111925]"
                >
                  Download CV
                </a>
              </div>

              <div className="mt-8 flex items-center gap-4 text-[#3f5872]">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#d8f0f5] text-2xl text-[#0b839c]">★</div>
                <p className="text-2xl font-medium md:text-[30px]">Available for New Projects</p>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-[700px] xl:mr-0">
              <div className="relative h-[460px] w-full overflow-visible md:h-[600px] xl:h-[760px]">
                <div className="absolute left-1/2 top-14 h-[360px] w-[360px] -translate-x-1/2 rounded-full border border-white/70 bg-[radial-gradient(circle,#30c0e4_0%,#0f93c8_56%,#136eaf_100%)] shadow-[0_20px_45px_rgba(37,133,199,0.35)] md:h-[470px] md:w-[470px] xl:h-[640px] xl:w-[640px]" />
                <div className="absolute left-1/2 top-5 h-[430px] w-[430px] -translate-x-1/2 rounded-full border-2 border-white/70 md:h-[560px] md:w-[560px] xl:h-[720px] xl:w-[720px]" />
                <div className="absolute right-6 top-28 rounded-full border border-[#d7e8f7] bg-white/85 px-5 py-3 text-2xl font-bold text-[#1695cf] shadow-[0_8px_18px_rgba(26,63,109,0.18)]">FL</div>
                <div className="absolute left-2 top-[44%] rounded-full border border-[#d7e8f7] bg-white/90 px-5 py-3 text-2xl font-bold text-[#0f7da4] shadow-[0_8px_18px_rgba(26,63,109,0.18)]">M</div>
                <div className="absolute bottom-16 right-4 rounded-full border border-[#d7e8f7] bg-white/90 px-5 py-3 text-2xl font-bold text-[#0f7da4] shadow-[0_8px_18px_rgba(26,63,109,0.18)]">&lt;/&gt;</div>

                <Image
                  src="/hero-cutout.png"
                  alt="Portrait of Md. Srsuman"
                  width={1200}
                  height={1200}
                  className="absolute bottom-0 left-1/2 z-10 h-[94%] w-auto max-w-none -translate-x-1/2 object-contain"
                  priority
                />
              </div>
            </div>
          </motion.div>

          <div className="relative z-20 mt-3 rounded-[28px] border border-[#d5e0ec] bg-white/95 p-5 shadow-[0_22px_40px_rgba(41,82,128,0.16)] md:p-8">
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {heroHighlights.map((item, index) => (
                <div key={item.title} className={`flex items-start gap-4 ${index < heroHighlights.length - 1 ? "xl:border-r xl:border-[#d5dfeb] xl:pr-6" : ""}`}>
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#d9eff4] text-xl font-bold text-[#0f7891]">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-3xl font-semibold text-[#101a2a]">{item.title}</p>
                    <p className="mt-1 text-xl leading-snug text-[#506782]">{item.subtitle}</p>
                  </div>
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
