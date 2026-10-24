export interface ExperienceEntry {
  id: string;
  title: string;
  organization: string;
  /** Replace the placeholder once you have exact dates. */
  period: string;
  description: string;
  tags?: string[];
}

export const experience: ExperienceEntry[] = [
  {
    id: "cedars",
    title: "Website Developer",
    organization: "Cedars Productivity Centre",
    period: "jun 2025 - feb 2026",
    description: `Developed an official website for Cedars Productivity Centre by implementing the website's pages, layouts, and functionality based on an existing design. Worked on the frontend development to bring the website to life and ensure its features function as intended. Frontend development, page implementation, styling, and interactive functionality.`,
    tags: ["Web development"],
  },
  {
    id: "backend-internship",
    title: "Backend Internship",
    organization: "Mintpoint SoftPOS",
    period: "july 2025 - sept 2025",
    description: `Gained hands-on experience in backend development at a fintech startup, working with RESTful APIs and contributing to backend development tasks within an existing codebase.`,
    tags: ["Backend", "APIs"],
  },
  {
    id: "other-work",
    title: "Frontend Development Tutor",
    organization: "Private Client | Home Tutoring",
    period: "jun 2023 - jun 2024",
    description: `Provided practical frontend development training to three students, teaching HTML and CSS fundamentals and guiding them through beginner web development projects.`,
    tags: ["HTML", "CSS"],
  },
];
