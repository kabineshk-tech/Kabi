# app/

Next.js App Router — all pages, layouts, and API routes live here.

## Rules
- This folder contains ONLY: page.tsx, layout.tsx, loading.tsx, error.tsx, route.ts
- NO UI components defined inline — all UI lives in /components/
- Every page.tsx imports its component from /components/<page-slug>/
- Every page.tsx exports a `metadata` object (or `generateMetadata()`)

## Structure
```
layout.tsx          → Root layout (Header, Footer, fonts, metadata)
page.tsx            → Home page → imports components/home/Home.tsx
globals.css         → Tailwind v4 @import + CSS custom properties
api/<endpoint>/
  route.ts          → API route handler (POST/GET)
<page-slug>/
  page.tsx          → Route page → imports components/<page-slug>/PageName.tsx
```

## How to Add a New Page
1. Create app/<page-slug>/page.tsx
2. Import and render the component from @/components/<page-slug>/PageName.tsx
3. Export metadata with title and description
4. Add route to navigation in components/layout/Header.tsx
