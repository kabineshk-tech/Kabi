# components/home/

Components used exclusively on the home page.

## Rules
- Only home-page-specific components belong here
- If a component is reused on another page, move it to components/common/
- All components must be mobile-first responsive

## Files
```
Home.tsx    → All 10 home page sections merged into one file:
              Hero · Audience carousel · Problems · Why options fail ·
              Value proposition · Solutions grid · Process steps ·
              Trust · FAQ accordion · Final CTA
```

## How to Add New Home Sections
1. Add a new `<section>` block inside `Home.tsx` (inline, no separate file)
2. Define data constants and interfaces at the top of `Home.tsx`
3. Add any new `useState` hooks at the top of `Home()` (React rules of hooks)
4. Mobile-first: write base classes first, then `md:` and `lg:` overrides
5. Verify at 375px, 768px, 1280px in browser DevTools
