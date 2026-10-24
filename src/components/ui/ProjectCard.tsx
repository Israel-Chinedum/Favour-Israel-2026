import { ArrowUpRight, Github } from "lucide-react";
import type { Project } from "@/data/projects";
import { cn } from "@/lib/utils";
import { Button } from "./Button";
import { ProjectPreview } from "./ProjectPreview";

interface ProjectCardProps {
  project: Project;
  className?: string;
}

export function ProjectCard({ project, className }: ProjectCardProps) {
  const {
    name,
    description,
    category,
    stack,
    preview,
    image,
    imageAlt,
    demoUrl,
    sourceUrl,
    backendSrcUrl,
    featured,
    status,
  } = project;
  const hasLinks = Boolean(demoUrl || sourceUrl || backendSrcUrl);

  return (
    <article
      className={cn(
        "group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-card transition-all duration-300",
        "hover:-translate-y-1 hover:border-line-hover hover:shadow-[0_20px_60px_-30px_rgba(255,106,0,0.35)]",
        "focus-within:border-line-hover",
        className,
      )}
    >
      <div className="relative aspect-[16/10] overflow-hidden border-b border-line">
        {image ? (
          <img
            src={image}
            alt={imageAlt ?? `${name} screenshot`}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
        ) : (
          <ProjectPreview
            variant={preview}
            className="transition-transform duration-500 group-hover:scale-[1.03]"
          />
        )}
        <div className="absolute inset-x-3 top-3 flex items-start justify-between gap-2">
          {featured ? (
            <span className="rounded-md bg-orange px-2 py-1 font-mono text-[0.65rem] font-medium tracking-wider text-bg uppercase">
              Featured
            </span>
          ) : (
            <span />
          )}
          {status && (
            <span className="rounded-md border border-line bg-bg/80 px-2 py-1 font-mono text-[0.65rem] tracking-wider text-muted uppercase backdrop-blur">
              {status}
            </span>
          )}
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <p className="font-mono text-[0.7rem] tracking-[0.18em] text-orange uppercase">
          {category}
        </p>
        <h3 className="mt-2 font-display text-xl font-semibold break-words text-fg sm:text-2xl">
          {name}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-muted sm:text-[0.95rem]">
          {description}
        </p>

        <ul
          className="mt-5 flex flex-wrap gap-2"
          aria-label={`${name} technologies`}
        >
          {stack.map((tech) => (
            <li
              key={tech}
              className="rounded-md border border-line bg-white/[0.03] px-2 py-1 font-mono text-[0.7rem] text-muted"
            >
              {tech}
            </li>
          ))}
        </ul>

        <div className="mt-auto flex flex-wrap items-center gap-3 pt-6">
          {demoUrl && (
            <Button
              href={demoUrl}
              size="sm"
              icon={<ArrowUpRight className="size-4" aria-hidden="true" />}
            >
              <span>
                Live demo<span className="sr-only"> — {name}</span>
              </span>
            </Button>
          )}
          {sourceUrl && (
            <Button
              href={sourceUrl}
              size="sm"
              variant="secondary"
              icon={<Github className="size-4" aria-hidden="true" />}
            >
              <span>
                Source<span className="sr-only"> code — {name}</span>
              </span>
            </Button>
          )}
          {backendSrcUrl && (
            <Button
              href={backendSrcUrl}
              size="sm"
              variant="secondary"
              icon={<Github className="size-4" aria-hidden="true" />}
            >
              <span>
                Backend src<span className="sr-only"> code — {name}</span>
              </span>
            </Button>
          )}
          {!hasLinks && (
            <p className="font-mono text-xs text-dim">Links coming soon</p>
          )}
        </div>
      </div>
    </article>
  );
}
