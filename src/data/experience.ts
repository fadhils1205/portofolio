export type ExperienceItem = {
  id: string;
  current?: boolean;
  period: { id: string; en: string };
  role: { id: string; en: string };
  company: string;
  location: { id: string; en: string };
  type: { id: string; en: string };
  description: { id: string; en: string };
  highlights: { id: string[]; en: string[] };
  stack: string[];
};

export const experiences: ExperienceItem[] = [
  {
    id: "fullstack-freelance",
    current: true,
    period: {
      id: "2025 — Sekarang",
      en: "2025 — Present",
    },
    role: {
      id: "Fullstack Web Developer",
      en: "Fullstack Web Developer",
    },
    company: "Independent / Freelance",
    location: {
      id: "Jakarta, Indonesia · Remote",
      en: "Jakarta, Indonesia · Remote",
    },
    type: {
      id: "Proyek & Konsultasi",
      en: "Contract & Consulting",
    },
    description: {
      id: "Merancang dan mengembangkan aplikasi web kustom, portal internal, serta layanan middleware untuk kebutuhan operasional bisnis dari tahap arsitektur hingga produksi.",
      en: "Designing and building custom web applications, internal portals, and middleware services for business operations from architecture to production.",
    },
    highlights: {
      id: [
        "Membangun Portal Single Sign-On (SSO) terpusat dengan RBAC dan manajemen sesi lintas aplikasi.",
        "Merancang middleware antrean pesan WhatsApp berbasis Node.js, Redis, dan PostgreSQL dengan tingkat keberhasilan pengiriman 99,4%.",
        "Mengembangkan dashboard pemantauan sesi real-time menggunakan React, TypeScript, dan WebSocket.",
      ],
      en: [
        "Built a centralized Single Sign-On (SSO) portal with granular RBAC and multi-app session management.",
        "Engineered a Node.js, Redis, and PostgreSQL WhatsApp tracking middleware achieving a 99.4% delivery rate.",
        "Developed a real-time session observability dashboard using React, TypeScript, and WebSocket.",
      ],
    },
    stack: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Prisma", "Redis"],
  },
  {
    id: "enterprise-systems-intern",
    current: false,
    period: {
      id: "2024 — 2025",
      en: "2024 — 2025",
    },
    role: {
      id: "Fullstack Developer (Internal Systems)",
      en: "Fullstack Developer (Internal Systems)",
    },
    company: "Industrial Manufacturing Operations",
    location: {
      id: "Jakarta, Indonesia · On-site",
      en: "Jakarta, Indonesia · On-site",
    },
    type: {
      id: "Magang & Proyek Industri",
      en: "Internship & Industrial Project",
    },
    description: {
      id: "Berfokus pada digitalisasi alur kerja operasional pabrik dan administrasi perusahaan melalui sistem web terintegrasi.",
      en: "Focused on digitalizing plant floor workflows and corporate administrative processes through integrated internal web systems.",
    },
    highlights: {
      id: [
        "Mengembangkan Sistem Pemantauan Stok Opname berbasis OCR yang mempercepat rekonsiliasi stok fisik ke ERP hingga 2,5×.",
        "Membangun Sistem Digitalisasi Master Budget untuk menyatukan pengajuan dan persetujuan anggaran multi-departemen.",
        "Berkoordinasi langsung dengan supervisor gudang dan tim keuangan untuk menerjemahkan kebutuhan operasional menjadi fitur sistem.",
      ],
      en: [
        "Developed an OCR-powered Stock Opname Monitoring System that accelerated ERP inventory reconciliation by 2.5×.",
        "Built a Digitalized Master Budget System unifying multi-department budget planning and approval workflows.",
        "Collaborated directly with warehouse supervisors and finance teams to translate operational requirements into production software.",
      ],
    },
    stack: ["Laravel", "MySQL", "REST API", "OCR API", "Tailwind CSS"],
  },
  {
    id: "academic-lab-dev",
    current: false,
    period: {
      id: "2023 — 2024",
      en: "2023 — 2024",
    },
    role: {
      id: "Web Developer & Riset Sistem Informasi",
      en: "Web Developer & Information Systems Research",
    },
    company: "Campus Software Engineering Lab",
    location: {
      id: "Jakarta, Indonesia",
      en: "Jakarta, Indonesia",
    },
    type: {
      id: "Akademik & Organisasi",
      en: "Academic & Organization",
    },
    description: {
      id: "Aktif mengembangkan proyek sistem informasi terapan, pemodelan basis data relasional, serta eksplorasi analitik data dan sistem pendukung keputusan.",
      en: "Actively developed applied information system projects, relational database models, and decision support analytics tools.",
    },
    highlights: {
      id: [
        "Merancang skema database relasional dan REST API untuk berbagai studi kasus sistem informasi industri.",
        "Mempelajari dan menerapkan praktik terbaik rekayasa perangkat lunak, kontrol versi Git, dan deployment server Linux.",
      ],
      en: [
        "Designed normalized relational database schemas and REST APIs for industrial information system case studies.",
        "Applied software engineering best practices, Git workflows, and Linux server deployment.",
      ],
    },
    stack: ["TypeScript", "React", "Express.js", "MySQL", "Git", "Linux"],
  },
];

