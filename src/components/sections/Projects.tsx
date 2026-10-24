import { useMemo, useState } from "react";
import { projects, type ProjectCategory } from "@/data/projects";
import { cn } from "@/lib/utils";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

type Filter = "All" | ProjectCategory;

export function Projects() {
  const [filter, setFilter] = useState<Filter>("All");

  const filters = useMemo<Filter[]>(
    () => ["All", ...Array.from(new Set(projects.map((p) => p.category)))],
    [],
  );
  const visible = useMemo(
    () => (filter === "All" ? projects : projects.filter((p) => p.category === filter)),
    [filter],
  );

  return (
    <section id="projects" aria-labelledby="projects-title" className="relative">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[28rem]"
        style={{ background: "radial-gradient(ellipse 60% 100% at 80% 0%, rgba(255,106,0,0.07), transparent 70%)" }}
      />
      <div className="relative mx-auto max-w-6xl px-5 py-24 sm:px-8 md:py-32">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <Reveal>
            <SectionHeading
              id="projects-title"
              label="Featured Projects"
              title="Work that shows how I build."
              description="Project details below are editable placeholders — I'll keep them updated as links and screenshots become available."
            />
          </Reveal>

          <div role="group" aria-label="Filter projects by category" className="flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f}
                type="button"
                aria-pressed={filter === f}
                onClick={() => setFilter(f)}
                className={cn(
                  "h-10 rounded-lg border px-4 text-sm transition-colors duration-300",
                  filter === f
                    ? "border-orange/60 bg-orange/15 text-orange"
                    : "border-line bg-white/[0.03] text-muted hover:border-line-hover hover:text-fg",
                )}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <p className="sr-only" role="status" aria-live="polite">
          Showing {visible.length} {visible.length === 1 ? "project" : "projects"}
        </p>

        <ul className="mt-12 grid gap-6 md:grid-cols-2">
          {visible.map((project, i) => (
            <li key={project.id}>
              <Reveal delay={(i % 2) * 90} className="h-full">
                <ProjectCard project={project} />
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
