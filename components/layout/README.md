# components/layout/

Shared layout components used across all pages: Header, Footer, and navigation elements.

## Rules
- Only place components here that appear on every page (or nearly every page)
- Page-specific components belong in components/<page-slug>/
- Header and Footer are server-compatible except where hooks are needed

## Files
```
Header.tsx    → Sticky header with logo, desktop nav, mobile hamburger menu
Footer.tsx    → Site footer with copyright
```

## Adding New Layout Components
1. Create ComponentName.tsx in this folder
2. Add 'use client' only if hooks/browser APIs are required
3. Import and render in app/layout.tsx
4. Write mobile-first Tailwind classes (base → md: → lg:)
