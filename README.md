# Portofolio — Fadhil Sulton (Fullstack Developer)

Website portofolio bilingual (**Indonesia** & **Inggris**) bertema **Cyber Emerald** gelap minimalis, dilengkapi halaman studi kasus proyek berbasis **MDX**.

## Tech Stack
- **Framework:** Next.js 16 (App Router) + TypeScript
- **Styling:** Tailwind CSS v4 (`@theme` tokens di `src/app/globals.css`)
- **Internasionalisasi (i18n):** `next-intl` (`/id` dan `/en`)
- **Animasi & Interaksi:** `motion` (`motion/react`) + Smooth Scroll `lenis` (`lenis/react`)
- **Konten Proyek:** `@next/mdx` (`content/projects/{id,en}/*.mdx`)

## Menjalankan Secara Lokal

```bash
npm install
npm run dev
```

Buka `http://localhost:3000` (otomatis diarahkan ke `/id`).

## Struktur Konten (Untuk Mengubah Data)
- **Profil & Sosial Media:** `src/data/profile.ts`
- **Tech Stack:** `src/data/tech-stack.ts`
- **Daftar Proyek:** `src/data/projects.ts`
- **Studi Kasus Detail Proyek (MDX):** `content/projects/id/*.mdx` & `content/projects/en/*.mdx`
- **Pengalaman (Timeline):** `src/data/experience.ts`
- **Teks Antarmuka (UI):** `messages/id.json` & `messages/en.json`
- **File CV:** taruh file PDF Anda di `public/cv.pdf`

---

## Panduan Deploy ke Vercel

1. **Pastikan seluruh perubahan sudah di-push ke GitHub:**
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push
   ```
2. **Buka Dashboard Vercel:**
   - Masuk ke [https://vercel.com/new](https://vercel.com/new) menggunakan akun GitHub Anda.
   - Pilih repository GitHub project portofolio ini lalu klik **Import**.
3. **Konfigurasi Project di Vercel:**
   - **Framework Preset:** Next.js (terdeteksi otomatis)
   - **Root Directory:** `./` (default)
   - **Build Command:** `next build` (default)
   - **Environment Variables (Opsional tapi disarankan untuk SEO/Sitemap):**
     - Key: `NEXT_PUBLIC_SITE_URL`
     - Value: URL domain Anda, misalnya `https://fadhil.my.id` atau `https://nama-project.vercel.app` (tanpa garis miring `/` di akhir).
4. **Klik Deploy:**
   - Tunggu sekitar 1–2 menit hingga proses build selesai, dan website langsung aktif.
   - Setiap kali Anda melakukan `git push` ke branch `main`, Vercel akan otomatis mem-build ulang dan memperbarui website Anda.

