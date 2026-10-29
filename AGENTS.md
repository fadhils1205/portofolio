# AGENTS.md — Aturan untuk AI Agent

Baca [`ROADMAP.md`](./ROADMAP.md) terlebih dahulu: berisi konteks, design system, dan daftar batch.

## Cara kerja
1. Kerjakan **hanya batch yang diminta** user. Jangan mengerjakan batch lain.
2. Setelah selesai: centang tugas, ubah status batch, dan tambah baris di *Log Perubahan* pada `ROADMAP.md`.
3. Pastikan build lolos: `npx next build` (jika Turbopack error di lingkungan sandbox, pakai `npx next build --webpack`).
4. **Jangan** menjalankan `git commit` / `git push`. Git dikelola sendiri oleh user.

## Konvensi kode
- Next.js 16 App Router + TypeScript strict. `params` adalah `Promise` → `await params` atau `use(params)`.
- Middleware bernama **`src/proxy.ts`** (konvensi Next.js 16), bukan `middleware.ts`.
- Dokumentasi Next.js versi terpasang ada di `node_modules/next/dist/docs/`, cek di sana bila ragu.
- Alias import: `@/*` → `src/*`.
- **i18n:** semua teks UI di `messages/id.json` & `messages/en.json` (kunci harus sama di kedua file). Gunakan `Link`, `useRouter`, `usePathname` dari `@/i18n/navigation`, bukan dari `next/link` / `next/navigation`. Panggil `setRequestLocale(locale)` di setiap page/layout server.
- **Styling:** Tailwind v4, pakai token dari `@theme` di `src/app/globals.css` (`bg-background`, `bg-surface`, `text-muted`, `border-border`, `text-accent`, `text-accent-neon`, `bg-accent-glow`). Jangan hardcode warna hex di komponen.
- Gabungkan class dengan `cn()` dari `@/lib/utils`.
- Komponen interaktif diberi `"use client"`; usahakan sisanya tetap Server Component.
- Animasi: `motion/react`. Smooth scroll: `lenis/react`. Ikon: `lucide-react`.
- Penamaan file: kebab-case (`project-card.tsx`), komponen: PascalCase.

## Struktur folder
```
src/
  app/[locale]/            → halaman
  components/layout/       → navbar, footer, language switcher
  components/sections/     → hero, about, projects, experience, contact
  components/ui/           → komponen dasar (button, badge, container, ...)
  components/providers/    → provider client (smooth scroll, dll)
  data/                    → data statis (profile, projects, experience, tech-stack)
  i18n/                    → konfigurasi next-intl
  lib/                     → utilitas
messages/                  → teks UI per bahasa
content/projects/{id,en}/  → konten MDX detail proyek
public/images/             → gambar
```

