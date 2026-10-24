import { Mail } from "lucide-react";
import { site } from "@/data/site";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { getSocialLinks } from "@/components/ui/SocialLinks";

export function Contact() {
  const links = getSocialLinks().filter((l) => l.id !== "email");
  const configured = Boolean(site.email) || links.length > 0;

  return (
    <section id="contact" aria-labelledby="contact-title" className="relative overflow-hidden border-t border-line">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 70% at 50% 100%, rgba(255,106,0,0.14), rgba(229,57,53,0.05) 50%, transparent 75%)",
        }}
      />
      <div className="relative mx-auto max-w-3xl px-5 py-24 text-center sm:px-8 md:py-36">
        <Reveal>
          <p className="font-mono text-xs tracking-[0.2em] text-orange uppercase">Contact</p>
          <h2
            id="contact-title"
            className="mt-5 font-display text-4xl leading-[1.08] font-bold tracking-tight text-balance sm:text-5xl md:text-6xl"
          >
            Have a project in mind or looking for a developer?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base text-muted sm:text-lg">
            I'd like to hear about it. Send a short message about what you're building and we can take it from there.
          </p>
        </Reveal>

        <Reveal delay={120} className="mt-10 flex flex-col items-center gap-6">
          {site.email && (
            <Button href={`mailto:${site.email}`} icon={<Mail className="size-4" aria-hidden="true" />}>
              {site.email}
            </Button>
          )}
          {links.length > 0 && (
            <ul className="flex flex-wrap justify-center gap-3">
              {links.map((l) => (
                <li key={l.id}>
                  <Button href={l.href} variant="secondary" size="sm" icon={l.icon}>
                    {l.label}
                  </Button>
                </li>
              ))}
            </ul>
          )}
          {!configured && (
            <p className="rounded-xl border border-dashed border-line px-5 py-4 text-sm text-muted">
              {import.meta.env.DEV
                ? "Add your email and social links in src/data/site.ts and they'll appear here."
                : "Contact details are coming soon."}
            </p>
          )}
        </Reveal>
      </div>
    </section>
  );
}
