import type { CSSProperties, ReactNode } from "react";
import { useReveal } from "@/hooks/useReveal";
import { cn } from "@/lib/utils";

interface RevealProps {
  children: ReactNode;
  className?: string;
  /** Stagger delay in ms */
  delay?: number;
}

export function Reveal({ children, className, delay = 0 }: RevealProps) {
  const ref = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={cn("reveal", className)}
      style={{ "--reveal-delay": `${delay}ms` } as CSSProperties}
    >
      {children}
    </div>
  );
}
