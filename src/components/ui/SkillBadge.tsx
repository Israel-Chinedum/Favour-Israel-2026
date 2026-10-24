import { cn } from "@/lib/utils";

interface SkillBadgeProps {
  name: string;
  className?: string;
}

export function SkillBadge({ name, className }: SkillBadgeProps) {
  return (
    <li
      className={cn(
        "inline-flex items-center gap-2 rounded-lg border border-line bg-white/[0.03] px-3 py-1.5 text-sm text-fg transition-colors duration-300 hover:border-line-hover hover:bg-orange/10",
        className,
      )}
    >
      <span className="size-1.5 rounded-full bg-orange" aria-hidden="true" />
      {name}
    </li>
  );
}
