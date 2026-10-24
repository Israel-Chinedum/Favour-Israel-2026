import { Layers, Layout, Server, Smartphone } from "lucide-react";
import type { ComponentType } from "react";
import { services, type Service } from "@/data/services";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

const icons: Record<Service["icon"], ComponentType<{ className?: string }>> = {
  layout: Layout,
  server: Server,
  layers: Layers,
  smartphone: Smartphone,
};

export function Services() {
  return (
    <section id="services" aria-labelledby="services-title" className="mx-auto max-w-6xl px-5 py-24 sm:px-8 md:py-32">
      <Reveal>
        <SectionHeading
          id="services-title"
          label="Services"
          title="How we could work together."
          description="Whether you need an interface, an API or the whole product, here's what I can help with."
        />
      </Reveal>
      <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((s, i) => {
          const Icon = icons[s.icon];
          return (
            <li key={s.id}>
              <Reveal delay={i * 70} className="h-full">
                <div className="group h-full rounded-2xl border border-line bg-card p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-line-hover">
                  <Icon className="size-6 text-orange transition-transform duration-300 group-hover:scale-110" />
                  <h3 className="mt-6 font-display text-lg font-semibold">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted">{s.description}</p>
                </div>
              </Reveal>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
