import { Github, Linkedin, Mail, MessageCircle } from "lucide-react";
import type { ReactNode } from "react";
import { site } from "@/data/site";
import { cn } from "@/lib/utils";

export interface SocialLink {
  id: string;
  label: string;
  href: string;
  icon: ReactNode;
}

const iconClass = "size-5";

/** Only returns channels that have been configured in src/data/site.ts */
export function getSocialLinks(): SocialLink[] {
  const all: (SocialLink | null)[] = [
    site.github
      ? { id: "github", label: "GitHub", href: site.github, icon: <Github className={iconClass} aria-hidden="true" /> }
      : null,
    site.linkedin
      ? { id: "linkedin", label: "LinkedIn", href: site.linkedin, icon: <Linkedin className={iconClass} aria-hidden="true" /> }
      : null,
    site.whatsapp
      ? {
          id: "whatsapp",
          label: "WhatsApp",
          href: `https://wa.me/${site.whatsapp.replace(/\D/g, "")}`,
          icon: <MessageCircle className={iconClass} aria-hidden="true" />,
        }
      : null,
    site.email
      ? { id: "email", label: "Email", href: `mailto:${site.email}`, icon: <Mail className={iconClass} aria-hidden="true" /> }
      : null,
  ];
  return all.filter((l): l is SocialLink => l !== null);
}

interface SocialLinksProps {
  className?: string;
  /** Exclude email (e.g. hero shows only GitHub / LinkedIn) */
  only?: string[];
}

export function SocialLinks({ className, only }: SocialLinksProps) {
  const links = getSocialLinks().filter((l) => !only || only.includes(l.id));
  if (links.length === 0) return null;
  return (
    <ul className={cn("flex items-center gap-2", className)}>
      {links.map((l) => (
        <li key={l.id}>
          <a
            href={l.href}
            aria-label={l.label}
            {...(l.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            className="grid size-11 place-items-center rounded-xl border border-line bg-white/[0.03] text-muted transition-all duration-300 hover:border-line-hover hover:bg-orange/10 hover:text-orange"
          >
            {l.icon}
          </a>
        </li>
      ))}
    </ul>
  );
}
