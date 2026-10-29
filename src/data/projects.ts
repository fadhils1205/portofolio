export type Project = {
  slug: string;
  year: number;
  featured: boolean; // kartu besar di bento
  cover: string; // /images/projects/<slug>/cover.svg
  stack: string[];
  links: { demo?: string; repo?: string };
  title: { id: string; en: string };
  summary: { id: string; en: string };
  role: { id: string; en: string };
};

export const projects: Project[] = [
  {
    slug: "enterprise-sso-portal",
    year: 2026,
    featured: true,
    cover: "/images/projects/enterprise-sso-portal/cover.svg",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "NextAuth", "PostgreSQL"],
    links: {
      demo: "https://example.com",
      repo: "https://github.com/fadhils",
    },
    title: {
      id: "Portal Autentikasi Terpusat (SSO)",
      en: "Centralized Enterprise SSO Portal",
    },
    summary: {
      id: "Sistem Single Sign-On terpusat dengan kontrol akses berbasis peran (RBAC), manajemen sesi multi-aplikasi, dan audit log keamanan real-time untuk ekosistem internal perusahaan.",
      en: "Centralized Single Sign-On platform featuring role-based access control (RBAC), multi-app session management, and real-time security audit logs for internal enterprise ecosystems.",
    },
    role: {
      id: "Fullstack Developer",
      en: "Fullstack Developer",
    },
  },
  {
    slug: "stock-ocr-monitoring",
    year: 2025,
    featured: true,
    cover: "/images/projects/stock-ocr-monitoring/cover.svg",
    stack: ["Laravel", "MySQL", "OCR API", "Tailwind CSS", "REST API"],
    links: {
      demo: "https://example.com",
      repo: "https://github.com/fadhils",
    },
    title: {
      id: "Sistem Pemantauan Stok Opname OCR",
      en: "Stock Opname OCR Monitoring System",
    },
    summary: {
      id: "Otomatisasi pencatatan dan validasi stok gudang menggunakan ekstraksi label berbasis OCR, memangkas waktu rekonsiliasi data fisik ke sistem ERP secara signifikan.",
      en: "Automated warehouse stock validation and logging powered by OCR label extraction, significantly reducing reconciliation time between physical inventory and ERP records.",
    },
    role: {
      id: "Fullstack Developer",
      en: "Fullstack Developer",
    },
  },
  {
    slug: "whatsapp-tracking-middleware",
    year: 2025,
    featured: false,
    cover: "/images/projects/whatsapp-tracking-middleware/cover.svg",
    stack: ["Node.js", "Express.js", "PostgreSQL", "Prisma", "Redis"],
    links: {
      repo: "https://github.com/fadhils",
    },
    title: {
      id: "Headless WhatsApp Tracking Middleware",
      en: "Headless WhatsApp Tracking Middleware",
    },
    summary: {
      id: "Layanan antrean pesan dan webhook berkinerja tinggi untuk melacak pengiriman notifikasi operasional, retry otomatis, dan analitik status pesan.",
      en: "High-throughput message queue and webhook middleware for tracking operational notifications, automated retries, and delivery analytics.",
    },
    role: {
      id: "Backend Engineer",
      en: "Backend Engineer",
    },
  },
  {
    slug: "realtime-session-dashboard",
    year: 2025,
    featured: false,
    cover: "/images/projects/realtime-session-dashboard/cover.svg",
    stack: ["React", "TypeScript", "Tailwind CSS", "WebSocket", "REST API"],
    links: {
      demo: "https://example.com",
      repo: "https://github.com/fadhils",
    },
    title: {
      id: "Dashboard Pemantauan Sesi Real-time",
      en: "Real-time Session Monitoring Dashboard",
    },
    summary: {
      id: "Antarmuka observabilitas untuk memantau kesehatan worker, metrik latensi API, serta pemulihan sesi instan dari satu panel kontrol.",
      en: "Observability interface for monitoring worker health, API latency metrics, and instant session recovery from a unified control panel.",
    },
    role: {
      id: "Frontend Developer",
      en: "Frontend Developer",
    },
  },
  {
    slug: "digital-budget-planning",
    year: 2024,
    featured: false,
    cover: "/images/projects/digital-budget-planning/cover.svg",
    stack: ["Laravel", "MySQL", "Tailwind CSS", "Chart.js"],
    links: {
      demo: "https://example.com",
    },
    title: {
      id: "Sistem Digitalisasi Master Budget",
      en: "Digitalized Master Budget System",
    },
    summary: {
      id: "Platform perencanaan dan persetujuan anggaran multi-departemen dengan pelacakan realisasi biaya serta laporan varians otomatis.",
      en: "Multi-department budget planning and approval workflow platform featuring expense realization tracking and automated variance reporting.",
    },
    role: {
      id: "Fullstack Developer",
      en: "Fullstack Developer",
    },
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

