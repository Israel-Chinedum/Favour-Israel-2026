import { Database, GitBranch, Layout, Palette, Server } from "lucide-react";
import type { ComponentType } from "react";
import { skillCategories, type SkillCategory } from "@/data/skills";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SkillBadge } from "@/components/ui/SkillBadge";

const icons: Record<SkillCategory["icon"], ComponentType<{ className?: string }>> = {
  layout: Layout,
  palette: Palette,
  server: Server,
  database: Database,
  wrench: GitBranch,
};

export function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-title" className="border-y border-line bg-bg-alt">
      <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8 md:py-32">
        <Reveal>
          <SectionHeading
            id="skills-title"
            label="Skills & Technologies"
            title="The tools I build with."
            description="Grouped by where they fit in a project, from the interface to the database."
          />
        </Reveal>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
          {skillCategories.map((cat, i) => {
            const Icon = icons[cat.icon];
            return (
              <Reveal
                key={cat.id}
                delay={i * 70}
                className={cn(
                  "lg:col-span-2",
                  // 5 items on a 6-col grid: first row 3 cards, second row 2 wider cards
                  i >= 3 && "lg:col-span-3",
                )}
              >
                <section
                  aria-labelledby={`skill-${cat.id}`}
                  className="h-full rounded-2xl border border-line bg-card p-6 transition-colors duration-300 hover:border-line-hover"
                >
                  <div className="flex items-center gap-3">
                    <span className="grid size-10 place-items-center rounded-lg border border-orange/25 bg-orange/10 text-orange">
                      <Icon className="size-5" />
                    </span>
                    <h3 id={`skill-${cat.id}`} className="font-display text-lg font-semibold">
                      {cat.title}
                    </h3>
                  </div>
                  <p className="mt-4 text-sm text-muted">{cat.blurb}</p>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {cat.skills.map((s) => (
                      <SkillBadge key={s} name={s} />
                    ))}
                  </ul>
                </section>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
