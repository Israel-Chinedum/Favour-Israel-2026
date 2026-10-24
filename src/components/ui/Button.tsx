import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost";
type Size = "sm" | "md";

interface ButtonProps {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  icon?: ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit";
}

const variants: Record<Variant, string> = {
  primary:
    "bg-brand text-bg font-semibold shadow-[0_8px_30px_-10px_rgba(255,106,0,0.7)] hover:shadow-[0_10px_36px_-8px_rgba(255,106,0,0.85)] hover:brightness-110",
  secondary:
    "border border-line bg-white/[0.03] text-fg hover:border-line-hover hover:bg-orange/10",
  ghost: "text-muted hover:text-orange",
};

const sizes: Record<Size, string> = {
  sm: "h-10 px-4 text-sm",
  md: "h-12 px-6 text-[0.95rem]",
};

export function Button({
  children,
  variant = "primary",
  size = "md",
  icon,
  className,
  href,
  onClick,
  type = "button",
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-xl font-medium whitespace-nowrap transition-all duration-300 active:scale-[0.97]",
    variants[variant],
    sizes[size],
    className,
  );
  const content = (
    <>
      {children}
      {icon}
    </>
  );

  if (href) {
    const external = /^https?:\/\//.test(href);
    return (
      <a
        href={href}
        className={classes}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {content}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {content}
    </button>
  );
}
