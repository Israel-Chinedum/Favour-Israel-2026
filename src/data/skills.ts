export interface SkillCategory {
  id: string;
  title: string;
  blurb: string;
  icon: "layout" | "palette" | "server" | "database" | "wrench";
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: "frontend",
    title: "Frontend",
    blurb: "Interfaces that are responsive, accessible and easy to maintain.",
    icon: "layout",
    skills: ["HTML", "CSS", "JavaScript", "TypeScript", "React"],
  },
  {
    id: "styling",
    title: "Styling",
    blurb: "Utility-first design systems with consistent tokens.",
    icon: "palette",
    skills: ["Tailwind CSS", "Chakra UI"],
  },
  {
    id: "backend",
    title: "Backend",
    blurb: "APIs and server-side logic built with the Node.js ecosystem.",
    icon: "server",
    skills: ["Node.js", "Express.js", "NestJS"],
  },
  {
    id: "databases",
    title: "Databases",
    blurb: "Relational data modelling and hosted backend services.",
    icon: "database",
    skills: ["Supabase", "MongoDB", "MySQL"],
  },
  {
    id: "tools",
    title: "Tools & Workflow",
    blurb: "Version control and API-driven development.",
    icon: "wrench",
    skills: ["Git", "GitHub", "REST APIs"],
  },
];
