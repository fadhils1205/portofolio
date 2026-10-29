# ROADMAP — Portofolio Fadhil (Fullstack Developer)

> Dokumen ini adalah **sumber kebenaran** untuk pengerjaan project.
> Setiap batch dikerjakan terpisah (bisa dengan model AI berbeda).
> Sebelum mengerjakan batch, **baca juga [`AGENTS.md`](./AGENTS.md)**.

---

## 1. Ringkasan Project

Website portofolio **single page** (scroll) dengan halaman **detail proyek** terpisah.

- **Gaya:** minimalis, gelap, elegan, interaktif tapi halus (inspirasi: Linear, Supabase, Vercel)
- **Bahasa:** Indonesia (default) & Inggris → URL `/id/...` dan `/en/...`
- **Mode:** gelap saja (tidak ada light mode)
- **Jumlah proyek awal:** 5

### Struktur halaman
```
/[locale]                     → Home (single page)
  #hero                       → Nama, role, tagline, CTA, status "Available for work"
  #about                      → Foto, ringkasan, tech stack (Frontend/Backend/Database/Tools)
  #projects                   → 5 kartu proyek (layout bento)
  #experience                 → Timeline pengalaman
  #contact                    → Email & sosial media
/[locale]/projects/[slug]     → Detail proyek (case study)
```

---

## 2. Tech Stack (terpasang)

| Bagian | Paket | Catatan |
|---|---|---|
| Framework | `next@16` (App Router) + TypeScript | Middleware sekarang bernama **`proxy.ts`** |
| UI | `react@19` | |
| Styling | `tailwindcss@4` + `@tailwindcss/postcss` | Token warna di `@theme` pada `globals.css` (tanpa `tailwind.config`) |
| i18n | `next-intl@4` | Lihat `src/i18n/*` |
| Animasi | `motion` (import dari `motion/react`) | |
| Smooth scroll | `lenis` (import dari `lenis/react`) | |
| Ikon | `lucide-react` | |
| Font | `geist` (GeistSans, GeistMono) | Font lokal, tanpa Google Fonts |
| Konten detail | `@next/mdx`, `@mdx-js/loader`, `@mdx-js/react` | Disetup di Batch 5 |
| Util | `clsx` + `tailwind-merge` → `cn()` di `src/lib/utils.ts` | |

Komponen bergaya shadcn/ui ditulis **manual** di `src/components/ui/` (tanpa CLI).

---

## 3. Design System

### Warna — *Cyber Emerald / Mint*
| Token Tailwind | Nilai | Pemakaian |
|---|---|---|
| `background` | `#0B0F10` | Latar utama (hitam ber-tint hijau) |
| `surface` | `#11171A` | Kartu, panel |
| `surface-2` | `#172024` | Hover kartu, input |
| `border` | `#1F2A2E` | Garis & border |
| `foreground` | `#EDEDED` | Teks utama |
| `muted` | `#A1A1A1` | Teks sekunder |
| `subtle` | `#737373` | Label, caption |
| `accent` | `#10B981` | **Aksen utama:** CTA, link, badge |
| `accent-neon` | `#00F5A0` | **Highlight:** status "Available", metrik, glow |
| `accent-glow` | `rgba(16,185,129,0.15)` | Glow / border lembut |

Contoh kelas: `bg-surface`, `text-muted`, `border-border`, `text-accent`, `bg-accent-glow`.

### Tipografi
- Teks: `font-sans` (Geist Sans) · Label/kode/angka: `font-mono` (Geist Mono)
- Heading: `font-semibold tracking-tight`
- Label section: `font-mono text-xs uppercase tracking-widest text-accent`

### Prinsip interaksi
- Halus & cepat (durasi 0.3–0.6s, easing `[0.22, 1, 0.36, 1]`)
- Hormati `prefers-reduced-motion`
- Glow emerald hanya untuk elemen penting (jangan berlebihan)

---

## 4. Daftar Batch

Legenda status: ⬜ belum · 🟨 sedang dikerjakan · ✅ selesai
Rekomendasi model: **Ringan** (model cepat/murah) · **Sedang** · **Berat** (model paling kuat)

| # | Batch | Status | Rekomendasi model |
|---|---|---|---|
| 1 | Setup project | ✅ | — |
| 2 | Layout dasar & navigasi | ✅ | Sedang |
| 3 | Hero & About | ✅ | Sedang |
| 4 | Projects section (home) | ✅ | Sedang |
| 5 | Halaman detail proyek (MDX) | ✅ | Berat |
| 6 | Experience & Contact | ✅ | Ringan |
| 7 | Animasi & polish | ✅ | Berat |
| 8 | SEO & persiapan deploy | ✅ | Ringan |
| 9 | Isi konten asli | ⬜ | Ringan |

---

### ✅ Batch 1 — Setup project
- Next.js 16 + TypeScript + Tailwind v4 + next-intl (`id`, `en`) + font Geist
- `src/proxy.ts` (redirect locale), `src/i18n/{routing,navigation,request}.ts`
- `messages/{id,en}.json`, token warna di `src/app/globals.css`
- Halaman placeholder di `src/app/[locale]/page.tsx`

---

### ✅ Batch 2 — Layout dasar & navigasi
**Tujuan:** kerangka halaman yang bisa di-scroll dengan navigasi lengkap.

Tugas:
- [x] `src/components/layout/navbar.tsx` — sticky, latar blur saat di-scroll, link ke `#about #projects #experience #contact`, indikator section aktif, menu mobile (hamburger)
- [x] `src/components/layout/language-switcher.tsx` — toggle `ID / EN` memakai `useRouter`/`usePathname` dari `@/i18n/navigation` (tetap di halaman & hash yang sama)
- [x] `src/components/providers/smooth-scroll.tsx` — Lenis (`lenis/react`), klik link anchor scroll halus
- [x] `src/components/layout/footer.tsx` — copyright, link sosial
- [x] `src/components/ui/container.tsx` & `src/components/ui/section.tsx` (wrapper dengan `id`, padding, label section)
- [x] Kerangka kosong semua section di `src/components/sections/` lalu dirangkai di `page.tsx`
- [x] Semua teks via `messages/*.json` (namespace `Nav`, `Footer`)

Selesai jika: navigasi & ganti bahasa berfungsi di desktop + mobile, build sukses.

---

### ✅ Batch 3 — Hero & About
Tugas:
- [x] **Hero:** nama, role "Fullstack Developer", tagline, CTA (*Lihat Proyek* → `#projects`, *Download CV* → `/cv.pdf`), ikon GitHub/LinkedIn/Email
- [x] Badge status **"Available for work"** dengan titik `accent-neon` berdenyut
- [x] Latar Hero: grid/dot pattern halus + spotlight emerald mengikuti kursor
- [x] **About:** foto (placeholder), 2–3 paragraf, beberapa metrik (mis. tahun pengalaman, jumlah proyek) dengan `font-mono text-accent-neon`
- [x] Tech stack dikelompokkan: Frontend / Backend / Database / Tools (data di `src/data/tech-stack.ts`)
- [x] Data profil di `src/data/profile.ts` (nama, email, sosial, URL CV)

Selesai jika: Hero & About tampil rapi di mobile dan desktop dalam dua bahasa.

---

### ✅ Batch 4 — Projects section (home)
Tugas:
- [x] Model data di `src/data/projects.ts`:
  ```ts
  type Project = {
    slug: string;
    year: number;
    featured: boolean;           
    cover: string;                
    stack: string[];
    links: { demo?: string; repo?: string };
    title: { id: string; en: string };
    summary: { id: string; en: string };
    role: { id: string; en: string };
  };
  ```
- [x] 5 proyek **dummy** (gambar placeholder di `public/images/projects/`)
- [x] `project-card.tsx` — cover, judul, ringkasan, badge stack; hover: zoom cover + border glow emerald
- [x] Grid **bento** (proyek featured lebih besar), responsif
- [x] Klik kartu → `Link` ke `/projects/[slug]` (dari `@/i18n/navigation`)

Selesai jika: 5 kartu tampil, link mengarah ke URL detail yang benar.

---

### ✅ Batch 5 — Halaman detail proyek (MDX)
Tugas:
- [x] Aktifkan `@next/mdx` di `next.config.ts` (gabung dengan plugin next-intl) + `mdx-components.tsx` di root/`src` dengan styling tipografi gelap
- [x] Konten: `content/projects/{id,en}/<slug>.mdx` — bagian Overview, Problem, Solution, Fitur, Arsitektur, Hasil
- [x] `src/app/[locale]/projects/[slug]/page.tsx` — import MDX dinamis, `generateStaticParams` (semua locale × slug), `dynamicParams = false`, `generateMetadata`
- [x] Header detail: cover, judul, tahun, peran, badge stack, tombol Demo/Repo, tombol kembali
- [x] Komponen galeri screenshot
- [x] Navigasi proyek sebelumnya / berikutnya
- [x] Halaman `not-found` bergaya sama

Selesai jika: kelima proyek punya halaman detail statis di dua bahasa.

---

### ✅ Batch 6 — Experience & Contact
Tugas:
- [x] Data `src/data/experience.ts` (periode, posisi, perusahaan, deskripsi — bilingual)
- [x] Timeline vertikal dengan garis & titik emerald
- [x] Contact: ajakan singkat, email (tombol salin ke clipboard), link sosial, CTA besar

Selesai jika: kedua section lengkap & responsif.

---

### ✅ Batch 7 — Animasi & polish
Tugas:
- [x] Komponen `reveal.tsx` (fade + slide saat masuk viewport, `motion/react`)
- [x] Stagger untuk kartu proyek & tech stack
- [x] Efek spotlight/glow pada kartu mengikuti kursor
- [x] Transisi kartu → halaman detail (mis. View Transitions API atau `layoutId`)
- [x] Progress bar scroll di atas halaman (opsional)
- [x] Cek `prefers-reduced-motion`, fokus keyboard, kontras, ukuran mobile

Selesai jika: animasi terasa halus, tidak ada layout shift, Lighthouse performa ≥ 90.

---

### ✅ Batch 8 — SEO & persiapan deploy
Tugas:
- [x] Metadata lengkap per halaman & bahasa (`alternates.languages` untuk hreflang)
- [x] Open Graph image (`opengraph-image.tsx`)
- [x] `sitemap.ts` & `robots.ts`
- [x] Favicon / ikon
- [x] Panduan deploy Vercel di README

---

### ⬜ Batch 9 — Isi konten asli
- [ ] Ganti data profil, foto, CV, tech stack
- [ ] Ganti 5 proyek dummy dengan proyek asli + screenshot + MDX (ID & EN)
- [ ] Isi pengalaman
- [ ] Final review teks kedua bahasa

---

## 5. Log Perubahan
| Tanggal | Batch | Catatan |
|---|---|---|
| 2026-10-29 | 1 | Setup selesai, palet Cyber Emerald diterapkan |
| 2026-10-29 | 2 | Layout dasar, Navbar sticky + active spy, Language Switcher, Smooth Scroll (Lenis), Footer & kerangka semua section selesai |
| 2026-10-29 | 3 | Hero (badge neon, grid + cursor spotlight, CTA, system card) & About (foto placeholder, bio, metrik neon, tech stack 4 kategori) selesai |
| 2026-10-29 | 4 | Data 5 proyek bilingual (`projects.ts`), ilustrasi cover SVG, `ProjectCard` (hover zoom + emerald glow), & Bento Grid responsif selesai |
| 2026-10-29 | 5 | Integrasi `@next/mdx`, `mdx-components.tsx`, 10 file MDX studi kasus (`id` & `en`), halaman detail `/projects/[slug]`, galeri screenshot + lightbox, navigasi prev/next, & halaman `not-found` selesai |
| 2026-10-29 | 6 | Data `experience.ts`, `ExperienceSection` (timeline vertikal emerald), `ContactSection` (CTA besar, kanal sosial, & `CopyEmailButton` ke clipboard) selesai |
| 2026-10-29 | 7 | Animasi & polish: `Reveal`/`StaggerGroup` (`motion/react`), `SpotlightCard`, transisi cover `layoutId` (`SharedProjectCover`), `ScrollProgress` bar, focus ring & `prefers-reduced-motion` selesai |
| 2026-10-29 | 8 | SEO lengkap (`alternates.languages`, OpenGraph, Twitter Card), `opengraph-image.tsx`, `sitemap.ts`, `robots.ts`, `icon.svg`, & panduan deploy Vercel di `README.md` selesai |

