export type TechCategoryKey = "frontend" | "backend" | "database" | "tools";

export type TechItem = {
  name: string;
  tag?: string;
};

export type TechGroup = {
  category: TechCategoryKey;
  items: TechItem[];
};

export const techStack: TechGroup[] = [
  {
    category: "frontend",
    items: [
      { name: "Next.js", tag: "App Router" },
      { name: "React", tag: "v19" },
      { name: "TypeScript", tag: "Strict" },
      { name: "Tailwind CSS", tag: "v4" },
      { name: "Motion", tag: "UI" },
    ],
  },
  {
    category: "backend",
    items: [
      { name: "Node.js", tag: "Runtime" },
      { name: "Express.js", tag: "REST" },
      { name: "Laravel", tag: "PHP" },
      { name: "RESTful API", tag: "JSON" },
      { name: "NextAuth / JWT", tag: "Auth" },
    ],
  },
  {
    category: "database",
    items: [
      { name: "PostgreSQL", tag: "SQL" },
      { name: "MySQL", tag: "SQL" },
      { name: "Prisma", tag: "ORM" },
      { name: "Redis", tag: "Cache" },
    ],
  },
  {
    category: "tools",
    items: [
      { name: "Git & GitHub", tag: "VCS" },
      { name: "Docker", tag: "Container" },
      { name: "Linux / Nginx", tag: "Server" },
      { name: "Vercel", tag: "Deploy" },
    ],
  },
];

