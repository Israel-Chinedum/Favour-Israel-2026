export interface Service {
  id: string;
  title: string;
  description: string;
  icon: "layout" | "server" | "layers" | "smartphone";
}

export const services: Service[] = [
  {
    id: "frontend",
    title: "Frontend Development",
    description:
      "Component-driven interfaces in React and TypeScript, built to be fast, accessible and easy to extend.",
    icon: "layout",
  },
  {
    id: "backend",
    title: "Backend API Development",
    description:
      "REST APIs with Node.js, Express.js or NestJS, backed by PostgreSQL, Supabase, MySQL or MongoDB.",
    icon: "server",
  },
  {
    id: "fullstack",
    title: "Full-Stack Web Development",
    description:
      "End-to-end builds that connect the interface, the API and the database in one coherent product.",
    icon: "layers",
  },
  {
    id: "responsive",
    title: "Responsive Website Development",
    description:
      "Websites that adapt cleanly from small phones to large desktop screens.",
    icon: "smartphone",
  },
];
