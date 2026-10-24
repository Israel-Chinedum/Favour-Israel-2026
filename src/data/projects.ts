export type ProjectCategory = "SaaS" | "Web App" | "Website";
export type PreviewVariant = "dashboard" | "reports" | "grades" | "website";
import chatAppImg from "../assets/images/chat-app.png";
import cedarsWebImg from "../assets/images/cedars.png";
import cbtImg from "../assets/images/cbt.jpg";
import crsImg from "../assets/images/crs.png";

export interface Project {
  id: string;
  name: string;
  description: string;
  category: ProjectCategory;
  /** Placeholder stacks — replace with what each project actually uses. */
  stack: string[];
  preview: PreviewVariant;
  /** Optional screenshot: drop a file in src/assets/images and import it, or use a /public path. */
  image?: string;
  imageAlt?: string;
  /** Leave undefined (or "") and the button is hidden. */
  demoUrl?: string;
  backendSrcUrl?: string;
  sourceUrl?: string;
  featured?: boolean;
  status?: string;
}

export const projects: Project[] = [
  {
    id: "cedars-website",
    name: "Cedars Website",
    description: `Developed an organizational website during my internship at Cedars Productivity Centre, where I gained hands-on experience with React and Chakra UI. The project was a significant part of my learning journey, exposing me to the realities of building and maintaining a real-world website. Along the way, I made plenty of mistakes, experimented with different approaches, and learned valuable lessons about component structure, folder organization, code readability, and maintainability. The experience helped me understand the importance of writing clean, scalable code and organizing projects in a way that makes collaboration and future development easier.`,
    category: "Website",
    stack: ["React", "Chakra UI"],
    image: cedarsWebImg,
    demoUrl: "https://cedarsprohub.com/",
    preview: "website",
  },
  {
    id: "chat-app",
    name: "Chat Application",
    description: `A full-stack real-time chat application with a separate frontend and backend, built to explore and get hands-on experience of real-time communication and event-driven architecture. The backend uses Node.js and Socket.IO through a WebSocket Gateway to handle real-time messaging and communication between connected clients, while the frontend provides the user interface for interacting with the application.`,
    category: "Web App",
    stack: ["React", "Tailwind CSS", "Node.js", "Socket.IO", "MongoDB"],
    image: chatAppImg,
    sourceUrl: "https://github.com/Israel-Chinedum/Chat-app.git",
    backendSrcUrl: "https://github.com/Israel-Chinedum/Chat-app-server.git",
    preview: "grades",
  },
  {
    id: "fpog-crime-reporting",
    name: "FPOG Crime Reporting System",
    description: `A full-stack crime reporting and tracking system developed as a final-year project for a student. The system enables users to submit crime reports, attach evidence, track report status, and identify nearby security stations. It integrates geolocation and Geolib for location-based features, Redis for efficient data handling, and a WebSocket gateway for real-time communication and admin notifications. The administrative dashboard supports report management, status updates, and weekly reporting trends.`,
    category: "Web App",
    stack: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "NestJS",
      "socket.IO",
      "Supabase",
      "Redis",
    ],
    image: crsImg,
    demoUrl: "https://crime-reporting-system-k3lz.onrender.com/",
    sourceUrl: "https://github.com/Israel-Chinedum/Crime-Reporting-System.git",
    backendSrcUrl:
      "https://github.com/Israel-Chinedum/Crime-Reporting-System-Server.git",
    preview: "reports",
  },
  {
    id: "cbt-system-server",
    name: "CBT System Server",
    description: `A backend server developed for a Computer-Based Testing (CBT) application, providing user registration, authentication, and structured access to question banks across four different subjects (English, Mathematics, Physics, Chemistry). Where each subject contains approximately 3,000 questions sourced from GitHub, allowing the application to manage and serve a large collection of questions for computer-based examinations. The project focuses on building RESTful APIs, handling user authentication, organizing question data, and creating a reliable backend foundation that a CBT frontend can communicate with to support examination-related operations. It demonstrates practical experience in backend development, API design, authentication workflows, and managing structured data for educational applications.`,
    category: "SaaS",
    stack: ["TypeScript", "Node.js", "MongoDB"],
    image: cbtImg,
    sourceUrl: "https://github.com/Israel-Chinedum/CBT-SYSTEM-SERVER.git",
    preview: "dashboard",
  },
];
