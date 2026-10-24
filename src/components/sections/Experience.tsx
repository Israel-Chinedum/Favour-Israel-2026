import { experience } from "@/data/experience";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Experience() {
  return (
    <section id="experience" aria-labelledby="experience-title" className="border-y border-line bg-bg-alt">
      <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8 md:py-32">
        <Reveal>
          <SectionHeading
            id="experience-title"
            label="Experience"
            title="Where I've put the work in."
            description="Client work, internships and relevant development experience."
          />
        </Reveal>

        <ol className="relative mt-14 ml-3 space-y-8 border-l border-line sm:ml-4">
          {experience.map((item, i) => (
            <li key={item.id} className="relative pl-8 sm:pl-10">
              <span
                aria-hidden="true"
                className="absolute top-1.5 -left-[7px] size-3.5 rounded-full border-2 border-orange bg-bg-alt"
              />
              <Reveal delay={i * 80}>
                <div className="rounded-2xl border border-line bg-card p-6 transition-colors duration-300 hover:border-line-hover">
                  <p className="font-mono text-xs tracking-wider text-orange uppercase">{item.period}</p>
                  <h3 className="mt-2 font-display text-xl font-semibold">{item.title}</h3>
                  <p className="text-sm text-muted">{item.organization}</p>
                  <p className="mt-4 max-w-2xl text-sm text-muted sm:text-[0.95rem]">{item.description}</p>
                  {item.tags && (
                    <ul className="mt-4 flex flex-wrap gap-2">
                      {item.tags.map((t) => (
                        <li key={t} className="rounded-md border border-line bg-white/[0.03] px-2 py-1 font-mono text-[0.7rem] text-muted">
                          {t}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
