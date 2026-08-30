import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProjectBySlug, projects } from "@/data/projects";

type Props = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default function ProjectDetailsPage({ params }: Props) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  const availability = [
    project.playStore ? "Android" : null,
    project.appStore ? "iOS" : null,
    project.github ? "GitHub" : null,
  ].filter(Boolean) as string[];
  const isPublishingOnly = project.category === "publishing";

  return (
    <main className="container-width relative z-10 py-10 md:py-14">
      <div className="site-background" aria-hidden="true">
        <div className="site-background__grid" />
        <div className="site-background__orb site-background__orb--left" />
        <div className="site-background__orb site-background__orb--right" />
      </div>

      <Link href="/#projects" className="text-sm font-semibold text-ink-faint transition hover:text-blue-bright">
        &larr; Back to Projects
      </Link>

      <div className="mt-5 flex items-start gap-4">
        <div
          className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border"
          style={{
            background: project.logoBackground,
            borderColor: "rgba(148, 163, 184, 0.18)",
          }}
        >
          <span className="text-lg font-extrabold tracking-[-0.04em]" style={{ color: project.logoAccent }}>
            {project.logoText}
          </span>
        </div>
        <div>
          <h1 className="text-3xl font-bold text-white md:text-4xl">{project.title}</h1>
          <p className="mt-3 max-w-3xl text-ink-muted">{project.details}</p>
          {isPublishingOnly ? (
            <p className="mt-3 text-sm font-medium text-blue-bright">{project.roleSummary}</p>
          ) : (
            <p className="mt-3 text-sm text-ink-faint">
              {availability.length ? `Available on ${availability.join(", ")}` : "Private case study"}
            </p>
          )}
          {project.published && project.publishedDate ? (
            <p className="mt-2 text-sm font-semibold text-blue-bright">Published: {project.publishedDate}</p>
          ) : null}
        </div>
      </div>

      <div className="mt-6 flex flex-wrap gap-2 text-xs font-semibold">
        {project.stack.map((item) => (
          <span key={item} className="skill-tag">
            {item}
          </span>
        ))}
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {project.screenshots.map((shot) => (
          <Image
            key={shot}
            src={shot}
            alt={`${project.title} screenshot`}
            width={720}
            height={1600}
            className="h-auto w-full rounded-xl border border-white/10"
          />
        ))}
      </div>

      <div className="mt-8 flex flex-wrap gap-3 text-sm font-semibold">
        {project.github ? (
          <a href={project.github} target="_blank" rel="noreferrer" className="btn-secondary px-4 py-2 text-sm">
            GitHub
          </a>
        ) : null}
        {project.playStore ? (
          <a href={project.playStore} target="_blank" rel="noreferrer" className="btn-secondary px-4 py-2 text-sm">
            Play Store
          </a>
        ) : null}
        {project.appStore ? (
          <a href={project.appStore} target="_blank" rel="noreferrer" className="btn-secondary px-4 py-2 text-sm">
            App Store
          </a>
        ) : null}
      </div>
    </main>
  );
}
