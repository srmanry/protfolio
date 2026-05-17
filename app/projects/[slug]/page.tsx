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

  return (
    <main className="container-width py-10 md:py-14">
      <Link href="/#projects" className="text-sm font-semibold text-black/70 hover:text-black">
        &larr; Back to Projects
      </Link>

      <div className="mt-5 flex items-start gap-3">
        <span className="text-3xl">{project.icon}</span>
        <div>
          <h1 className="text-3xl font-bold text-ink md:text-4xl">{project.title}</h1>
          <p className="mt-3 max-w-3xl text-black/75">{project.details}</p>
        </div>
      </div>

      <div className="mt-6 flex flex-wrap gap-2 text-xs font-semibold">
        {project.stack.map((item) => (
          <span key={item} className="rounded-full border border-black/15 px-3 py-1.5">
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
            className="h-auto w-full rounded-xl border border-black/10"
          />
        ))}
      </div>

      <div className="mt-8 flex flex-wrap gap-3 text-sm font-semibold">
        {project.github ? (
          <a href={project.github} target="_blank" rel="noreferrer" className="rounded-lg border border-black/20 px-4 py-2 hover:bg-black/5">
            GitHub
          </a>
        ) : null}
        {project.playStore ? (
          <a href={project.playStore} target="_blank" rel="noreferrer" className="rounded-lg border border-black/20 px-4 py-2 hover:bg-black/5">
            Play Store
          </a>
        ) : null}
        {project.appStore ? (
          <a href={project.appStore} target="_blank" rel="noreferrer" className="rounded-lg border border-black/20 px-4 py-2 hover:bg-black/5">
            App Store
          </a>
        ) : null}
      </div>
    </main>
  );
}
