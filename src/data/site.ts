/**
 * Personal details — edit this file.
 * Leave a value as "" and the matching link/button is hidden automatically.
 */
export interface SiteConfig {
  name: string;
  role: string;
  tagline: string;
  email: string;
  github: string;
  linkedin: string;
  /** Digits only, with country code, e.g. "2348012345678" */
  whatsapp: string;
}

export const site: SiteConfig = {
  name: "Favour",
  role: "Full-Stack Web Developer",
  tagline:
    "Modern web applications with thoughtful interfaces and reliable backend systems.",
  email: "fastarfavour@gmail.com",
  github: "https://github.com/Israel-Chinedum",
  linkedin: "https://www.linkedin.com/in/favour-israel-6a91a0321/",
  whatsapp: "+2348159651054",
};

export interface NavItem {
  id: string;
  label: string;
}

export const navItems: NavItem[] = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "services", label: "Services" },
  { id: "contact", label: "Contact" },
];
