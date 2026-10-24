import type { PreviewVariant } from "@/data/projects";
import { cn } from "@/lib/utils";

/** Simple CSS wireframes — illustrative placeholders, not screenshots. */

const bar = "rounded-full bg-white/[0.08]";

function Dashboard() {
  return (
    <div className="flex h-full gap-2">
      <div className="flex w-9 flex-col gap-2 rounded-md bg-white/[0.04] p-2">
        <span className="size-5 rounded bg-brand" />
        <span className={cn(bar, "h-1.5")} />
        <span className={cn(bar, "h-1.5")} />
        <span className={cn(bar, "h-1.5")} />
      </div>
      <div className="flex flex-1 flex-col gap-2">
        <div className="flex items-center justify-between">
          <span className={cn(bar, "h-2 w-1/3")} />
          <span className="h-5 w-14 rounded-md bg-orange/80" />
        </div>
        {[70, 55, 80, 45].map((w, i) => (
          <div key={i} className="flex items-center gap-2 rounded-md border border-line bg-white/[0.03] px-2 py-1.5">
            <span className={cn("size-4 rounded", i === 0 ? "bg-orange/70" : "bg-white/10")} />
            <span className={cn(bar, "h-1.5")} style={{ width: `${w}%` }} />
            <span className={cn("ml-auto h-3 w-6 rounded-full", i === 0 ? "bg-orange/60" : "bg-white/10")} />
          </div>
        ))}
      </div>
    </div>
  );
}

function Reports() {
  return (
    <div className="flex h-full gap-2">
      <div className="flex w-[42%] flex-col gap-1.5">
        {[true, false, false, false].map((active, i) => (
          <div
            key={i}
            className={cn(
              "flex items-center gap-2 rounded-md border px-2 py-1.5",
              active ? "border-red-soft/50 bg-red/10" : "border-line bg-white/[0.03]",
            )}
          >
            <span className={cn("size-2 rounded-full", active ? "bg-red-soft" : i === 2 ? "bg-orange" : "bg-white/20")} />
            <span className={cn(bar, "h-1.5 flex-1")} />
          </div>
        ))}
      </div>
      <div className="flex flex-1 flex-col gap-2 rounded-md border border-line bg-white/[0.03] p-2.5">
        <span className={cn(bar, "h-2 w-2/5")} />
        <span className="h-4 rounded bg-white/[0.06]" />
        <span className="h-4 rounded bg-white/[0.06]" />
        <span className="h-10 rounded bg-white/[0.06]" />
        <span className="mt-auto ml-auto h-5 w-16 rounded-md bg-red-soft/80" />
      </div>
    </div>
  );
}

function Grades() {
  const rows = 5;
  const cols = 4;
  return (
    <div className="flex h-full flex-col gap-1.5">
      <div className="grid grid-cols-4 gap-1.5">
        {Array.from({ length: cols }).map((_, c) => (
          <span key={c} className={cn("h-2.5 rounded", c === 0 ? "bg-orange/70" : "bg-white/[0.1]")} />
        ))}
      </div>
      {Array.from({ length: rows }).map((_, r) => (
        <div key={r} className="grid flex-1 grid-cols-4 gap-1.5">
          {Array.from({ length: cols }).map((_, c) => (
            <span
              key={c}
              className={cn(
                "rounded border border-line",
                c === 0 ? "bg-white/[0.06]" : "bg-white/[0.025]",
                r === 2 && c === 2 && "border-orange-soft/60 bg-orange-soft/20",
                c === cols - 1 && r % 2 === 0 && "bg-orange/15",
              )}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

function Website() {
  return (
    <div className="flex h-full flex-col gap-2">
      <div className="flex items-center gap-2">
        <span className="size-3 rounded-full bg-brand" />
        <span className={cn(bar, "h-1.5 w-8")} />
        <span className={cn(bar, "h-1.5 w-8")} />
        <span className={cn(bar, "h-1.5 w-8")} />
        <span className="ml-auto h-3.5 w-10 rounded bg-orange/80" />
      </div>
      <div className="flex flex-1 items-center gap-3 rounded-md bg-gradient-to-br from-orange/15 via-white/[0.03] to-red/10 p-3">
        <div className="flex flex-1 flex-col gap-1.5">
          <span className="h-2.5 w-4/5 rounded-full bg-white/25" />
          <span className="h-2.5 w-3/5 rounded-full bg-white/25" />
          <span className={cn(bar, "mt-1 h-1.5 w-full")} />
          <span className="mt-1 h-4 w-14 rounded bg-orange/80" />
        </div>
        <span className="h-full w-1/3 rounded-md border border-line bg-white/[0.05]" />
      </div>
      <div className="grid grid-cols-3 gap-2">
        {[0, 1, 2].map((i) => (
          <span key={i} className="h-8 rounded-md border border-line bg-white/[0.04]" />
        ))}
      </div>
    </div>
  );
}

const glows: Record<PreviewVariant, string> = {
  dashboard: "radial-gradient(ellipse 70% 60% at 85% 0%, rgba(255,106,0,0.22), transparent 70%)",
  reports: "radial-gradient(ellipse 70% 60% at 10% 100%, rgba(229,57,53,0.22), transparent 70%)",
  grades: "radial-gradient(ellipse 70% 60% at 100% 100%, rgba(255,138,36,0.18), transparent 70%)",
  website: "radial-gradient(ellipse 80% 60% at 0% 0%, rgba(255,106,0,0.16), rgba(229,57,53,0.06) 55%, transparent 80%)",
};

interface ProjectPreviewProps {
  variant: PreviewVariant;
  className?: string;
}

export function ProjectPreview({ variant, className }: ProjectPreviewProps) {
  return (
    <div
      aria-hidden="true"
      className={cn("relative h-full w-full bg-bg-alt", className)}
      style={{ backgroundImage: glows[variant] }}
    >
      <div className="absolute inset-4 rounded-lg border border-line bg-card/90 p-3 shadow-2xl shadow-black/40 sm:inset-5">
        {variant === "dashboard" && <Dashboard />}
        {variant === "reports" && <Reports />}
        {variant === "grades" && <Grades />}
        {variant === "website" && <Website />}
      </div>
    </div>
  );
}
