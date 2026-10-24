import { Blocks, Database, MonitorSmartphone, Server } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

const focusAreas = [
  {
    icon: MonitorSmartphone,
    title: "Frontend & UX",
    text: "Responsive interfaces built with React, TypeScript and Tailwind CSS or Chakra UI.",
  },
  {
    icon: Server,
    title: "Backend & APIs",
    text: "REST APIs and server logic with Node.js, Express.js and NestJS.",
  },
  {
    icon: Database,
    title: "Data integration",
    text: "Working with Supabase or MongoDB to connect interfaces to real data.",
  },
  {
    icon: Blocks,
    title: "Maintainable code",
    text: "Typed, component-based code that's easy to read, change and extend.",
  },
];

export function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="mx-auto max-w-6xl px-5 py-24 sm:px-8 md:py-32"
    >
      <div className="grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
        <Reveal>
          <SectionHeading
            id="about-title"
            label="About"
            title="Practical software, built with care."
          />
          <div className="mt-8 space-y-5 text-muted">
            <p>
              I'm a full-stack web developer who enjoys turning real problems
              into practical web applications. On the frontend I care about
              clear interfaces and good user experience; on the backend I focus
              on APIs and data that stay reliable as a product grows.
            </p>
            <p>
              I write code to be maintained, not just shipped, and I treat every
              project as a chance to learn something and improve how I build.
            </p>
          </div>
        </Reveal>

        <ul className="grid gap-4 sm:grid-cols-2">
          {focusAreas.map(({ icon: Icon, title, text }, i) => (
            <li key={title}>
              <Reveal delay={i * 80} className="h-full">
                <div className="h-full rounded-2xl border border-line bg-card p-6 transition-colors duration-300 hover:border-line-hover">
                  <span className="grid size-10 place-items-center rounded-lg border border-orange/25 bg-orange/10 text-orange">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 font-display text-lg font-semibold">
                    {title}
                  </h3>
                  <p className="mt-2 text-sm text-muted">{text}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
