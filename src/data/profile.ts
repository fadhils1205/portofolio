export const profile = {
  name: "Fadhil Sulton",
  shortName: "Fadhil",
  handle: "fadhil.dev",
  role: "Fullstack Developer",
  location: "Indonesia",
  email: "hello@fadhil.dev",
  cvUrl: "/cv.pdf",
  avatar: "/images/profile-placeholder.svg",
  socials: {
    github: "https://github.com/fadhils",
    linkedin: "https://linkedin.com/in/fadhils",
    email: "mailto:hello@fadhil.dev",
  },
  metrics: [
    { key: "projects", value: "5+" },
    { key: "experience", value: "2+" },
    { key: "stack", value: "16+" },
    { key: "commitment", value: "100%" },
  ],
} as const;

export type MetricKey = (typeof profile.metrics)[number]["key"];

