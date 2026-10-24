import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  label: string;
  title: string;
  description?: string;
  id?: string;
  className?: string;
}

export function SectionHeading({ label, title, description, id, className }: SectionHeadingProps) {
  return (
    <div className={cn("max-w-2xl", className)}>
      <p className="mb-4 flex items-center gap-3 font-mono text-xs tracking-[0.2em] text-orange uppercase">
        <span className="h-px w-8 bg-orange/60" aria-hidden="true" />
        {label}
      </p>
      <h2
        id={id}
        className="font-display text-3xl leading-[1.1] font-bold tracking-tight text-balance sm:text-4xl md:text-5xl"
      >
        {title}
      </h2>
      {description && (
        <p className="mt-5 max-w-xl text-base text-muted sm:text-lg">{description}</p>
      )}
    </div>
  );
}
