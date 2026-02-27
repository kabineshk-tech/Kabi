# components/

All UI components grouped by page/feature.

## Rules
- One subfolder per page/feature (e.g. home/, about/, contact/)
- Page-specific components go in their own folder
- Shared components used across 2+ pages go in layout/ or common/
- NO page.tsx files here — this is for components only
- All component files use PascalCase.tsx naming

## Structure
```
layout/     → Header, Footer, MobileMenu, NavLink (shared across all pages)
home/       → Components used only on the home page
about/      → Components used only on the about page
contact/    → Components used only on the contact page
<feature>/  → One folder per page/feature
```

## How to Add a New Component
1. Decide: page-specific → components/<page-slug>/ComponentName.tsx
           shared (2+ pages) → components/layout/ComponentName.tsx
2. Define a Props interface at the top (if the component takes props)
3. Add 'use client' ONLY if the component uses hooks or browser APIs
4. Use Tailwind classes + cn() for all styling
5. **Write mobile-first**: base class (mobile) → md: (tablet) → lg: (desktop). Every element must have responsive classes.
6. **Verify in DevTools** at 375px (mobile), 768px (tablet), 1280px (desktop) before committing.
7. Export as default
