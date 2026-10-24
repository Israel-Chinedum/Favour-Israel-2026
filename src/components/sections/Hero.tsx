import { ArrowDown, Mail } from "lucide-react";
import { site } from "@/data/site";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SocialLinks } from "@/components/ui/SocialLinks";

const k = "text-orange-soft";
const s = "text-[#c9c9d1]";
const p = "text-dim";

function TerminalCard() {
  return (
    <div
      role="img"
      aria-label="Code-style summary: role Full-Stack Web Developer, with frontend, backend and data technologies"
      className="relative w-80 min-[470px]:w-full sm:w-full max-w-lg overflow-hidden rounded-2xl border border-line bg-card/90 shadow-2xl shadow-black/50"
    >
      <div className="flex items-center gap-2 border-b border-line bg-elevated/70 px-4 py-3">
        <span className="size-2.5 rounded-full bg-red-soft/80" />
        <span className="size-2.5 rounded-full bg-orange-soft/80" />
        <span className="size-2.5 rounded-full bg-white/20" />
        <span className="ml-3 font-mono text-xs text-dim">developer.ts</span>
      </div>
      <pre
        className="overflow-x-auto p-5 font-mono text-[0.72rem] leading-6 sm:p-6 sm:text-[0.82rem]"
        aria-hidden="true"
      >
        <code>
          <span className={k}>const</span>{" "}
          <span className="text-fg">developer</span>{" "}
          <span className={p}>=</span> {"{"}
          {"\n  "}role<span className={p}>:</span>{" "}
          <span className={s}>"Full-Stack Web Developer"</span>,{"\n  "}frontend
          <span className={p}>:</span> [<span className={s}>"React"</span>,{" "}
          <span className={s}>"TypeScript"</span>],
          {"\n  "}styling<span className={p}>:</span> [
          <span className={s}>"Tailwind CSS"</span>,{" "}
          <span className={s}>"Chakra UI"</span>
          ],
          {"\n  "}backend<span className={p}>:</span> [
          <span className={s}>"Node.js"</span>,{" "}
          <span className={s}>"NestJS"</span>],
          {"\n  "}data<span className={p}>:</span> [
          <span className={s}>"PostgreSQL"</span>,{" "}
          <span className={s}>"MySQL"</span>,{" "}
          <span className={s}>"Supabase"</span>,{" "}
          <span className={s}>"MongoDB"</span>],
          {"\n  "}focus<span className={p}>:</span>{" "}
          <span className={s}>"maintainable, practical web apps"</span>,{"\n"}
          {"}"}
          <span className={p}>;</span>
          {"\n\n"}
          <span className={p}>{"// "}</span>
          <span className="text-red-soft">●</span>{" "}
          <span className={p}>ready to build</span>
        </code>
      </pre>
    </div>
  );
}

export function Hero() {
  return (
    <section
      id="home"
      aria-labelledby="hero-title"
      className="relative overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 h-[34rem] w-[60rem] max-w-[160vw] -translate-x-1/2"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(255,106,0,0.12), rgba(229,57,53,0.04) 45%, transparent 70%)",
        }}
      />
      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-5 pt-32 pb-20 sm:px-8 lg:min-h-[100svh] lg:grid-cols-[1.1fr_0.9fr] lg:gap-10 lg:pt-28">
        <div>
          <Reveal>
            <p className="inline-flex items-center gap-2.5 rounded-full border border-line bg-white/[0.03] px-3.5 py-1.5 font-mono text-xs text-muted">
              <span
                className="size-2 animate-pulse-dot rounded-full bg-orange"
                aria-hidden="true"
              />
              Open to opportunities &amp; freelance work
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h1
              id="hero-title"
              className="mt-7 font-display text-[2rem] leading-[1.04] font-bold tracking-tight text-balance min-[470px]:text-5xl md:text-5xl xl:text-[4.2rem]"
            >
              {site.role} building{" "}
              <span className="text-brand">thoughtful interfaces</span> on
              reliable systems.
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-6 w-70 min-[400px]:w-90 min-[500px]:w-110 sm:w-150 lg:w-100 xl:w-150 min-[400px]:text-base text-wrap wrap-break-word text-[14px] text-muted sm:text-lg">
              I'm {site.name}. I build modern web applications — from responsive
              React frontends to APIs and databases — with a focus on clean,
              maintainable code.
            </p>
          </Reveal>
          <Reveal
            delay={240}
            className="mt-9 flex flex-col gap-3 min-[470px]:flex-row min-[420px]:flex-wrap"
          >
            <Button
              href="#projects"
              icon={<ArrowDown className="size-4" aria-hidden="true" />}
              className="w-50"
            >
              View projects
            </Button>
            <Button
              href="#contact"
              variant="secondary"
              icon={<Mail className="size-4" aria-hidden="true" />}
              className="w-50"
            >
              Get in touch
            </Button>
          </Reveal>
          <Reveal delay={320} className="mt-8">
            <SocialLinks only={["github", "linkedin"]} />
          </Reveal>
        </div>

        <Reveal delay={200} className="flex justify-center lg:justify-end">
          <div className="relative w-full max-w-lg">
            <div
              aria-hidden="true"
              className="absolute -inset-6 -z-10 rounded-[2rem] opacity-70 blur-2xl"
              style={{
                background:
                  "radial-gradient(circle at 70% 30%, rgba(255,106,0,0.18), transparent 65%)",
              }}
            />
            <TerminalCard />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
