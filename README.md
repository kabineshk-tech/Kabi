# Periyanayaki

Built with Next.js 15 · React 19 · TypeScript · Tailwind CSS v4 · Framer Motion

## Quick Start

```bash
npm install
npm run dev          # Start development server (http://localhost:3000)
npm run build        # Build for production (static export to /out)
```

## Scripts

| Command                        | Description                                       |
|--------------------------------|---------------------------------------------------|
| `npm run dev`                  | Start development server                          |
| `npm run build`                | Build for production                              |
| `npm run start`                | Start production server                           |
| `npm run lint`                 | Run ESLint                                        |
| `npm run type-check`           | TypeScript check (no emit)                        |
| `npm run convert-images`       | Convert JPG/PNG → WebP at 80% (keep originals)   |
| `npm run convert-images:clean` | Convert JPG/PNG → WebP at 80% + delete originals |

## Project Structure

```
app/              → Pages, layouts, API routes (Next.js App Router)
components/       → All UI components, grouped by page/feature
lib/              → Shared utilities (cn(), API helpers)
types/            → Global TypeScript interfaces
public/images/    → Static images (.webp format)
scripts/          → Build/utility scripts
reference/        → Design references, brand assets (not imported by source)
```

## Key Rules

- All UI is in `components/` — pages only import components
- Tailwind CSS only — no CSS Modules, no inline styles
- Use `cn()` from `lib/utils.ts` for conditional classes
- Use `<Image>` for all images, `<Link>` for all internal navigation
- All internal hrefs end with trailing slash: `href="/about/"`
- `'use client'` only when hooks/browser APIs are required
- No TypeScript `any`

## Responsive Breakpoints (Mobile-First)

| Breakpoint | Width  | Tailwind prefix |
|------------|--------|-----------------|
| Mobile     | 375px  | base (no prefix)|
| Tablet     | 768px  | `md:`           |
| Desktop    | 1280px | `lg:`           |

Every component must be verified at all three breakpoints in browser DevTools before shipping.

## Tech Stack

| Package           | Purpose                       |
|-------------------|-------------------------------|
| `next@15`         | Framework                     |
| `react@19`        | UI library                    |
| `typescript`      | Type safety                   |
| `tailwindcss@4`   | Styling                       |
| `framer-motion`   | Animations                    |
| `lucide-react`    | Icons                         |
| `clsx`            | Conditional class utility     |
| `tailwind-merge`  | Tailwind class deduplication  |
