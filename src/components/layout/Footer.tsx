import { ArrowUp } from "lucide-react";
import { site } from "@/data/site";
import { SocialLinks } from "@/components/ui/SocialLinks";

export function Footer() {
  return (
    <footer className="border-t border-line bg-bg">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 py-10 sm:px-8 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-display text-lg font-bold">{site.name}</p>
          <p className="mt-1 max-w-sm text-sm text-muted">
            {site.role} building modern web applications.
          </p>
        </div>
        <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:gap-6">
          <SocialLinks />
          <a
            href="#home"
            className="inline-flex h-11 items-center gap-2 rounded-lg px-1 text-sm text-muted transition-colors hover:text-orange"
          >
            Back to top <ArrowUp className="size-4" aria-hidden="true" />
          </a>
        </div>
      </div>
      <div className="border-t border-line">
        {/* <p className="mx-auto max-w-6xl px-5 py-5 text-xs text-dim sm:px-8">
          © {new Date().getFullYear()} {site.name}. All rights reserved.
        </p> */}
      </div>
    </footer>
  );
}
