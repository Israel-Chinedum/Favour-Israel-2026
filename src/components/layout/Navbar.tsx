import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navItems, site } from "@/data/site";
import { useActiveSection } from "@/hooks/useActiveSection";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";

const ids = navItems.map((n) => n.id);
const links = navItems.filter((n) => n.id !== "contact");

export function Navbar() {
  const active = useActiveSection(ids);
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300",
        scrolled || open
          ? "border-line bg-bg/85 backdrop-blur-md"
          : "border-transparent bg-transparent",
      )}
    >
      <nav aria-label="Primary" className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <a
          href="#home"
          onClick={() => setOpen(false)}
          className="flex items-center gap-2.5 font-display text-lg font-bold tracking-tight"
        >
          <span className="grid size-8 place-items-center rounded-lg bg-brand font-mono text-sm font-bold text-bg" aria-hidden="true">
            {site.name.charAt(0)}
          </span>
          {site.name}
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {links.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                aria-current={active === item.id ? "page" : undefined}
                className={cn(
                  "relative rounded-lg px-3 py-2 text-sm transition-colors duration-300",
                  active === item.id ? "text-orange" : "text-muted hover:text-fg",
                )}
              >
                {item.label}
                <span
                  aria-hidden="true"
                  className={cn(
                    "absolute inset-x-3 -bottom-px h-px bg-orange transition-opacity duration-300",
                    active === item.id ? "opacity-100" : "opacity-0",
                  )}
                />
              </a>
            </li>
          ))}
          <li className="ml-3">
            <Button href="#contact" size="sm">
              Contact me
            </Button>
          </li>
        </ul>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
          className="grid size-11 place-items-center rounded-lg border border-line bg-white/[0.03] text-fg transition-colors hover:border-line-hover lg:hidden"
        >
          {open ? <X className="size-5" aria-hidden="true" /> : <Menu className="size-5" aria-hidden="true" />}
        </button>
      </nav>

      <div
        id="mobile-menu"
        className={cn(
          "grid transition-all duration-300 ease-out lg:hidden",
          open ? "visible grid-rows-[1fr] opacity-100" : "invisible grid-rows-[0fr] opacity-0",
        )}
      >
        <div className="overflow-hidden">
          <ul className="mx-auto flex max-w-6xl flex-col gap-1 px-5 pb-5 sm:px-8">
            {links.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={() => setOpen(false)}
                  aria-current={active === item.id ? "page" : undefined}
                  className={cn(
                    "flex h-12 items-center rounded-lg px-3 text-base transition-colors",
                    active === item.id ? "bg-orange/10 text-orange" : "text-muted hover:bg-white/[0.04] hover:text-fg",
                  )}
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="flex h-12 items-center justify-center rounded-xl bg-brand font-semibold text-bg"
              >
                Contact me
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
