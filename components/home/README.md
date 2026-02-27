# components/home/

Components used exclusively on the home page.

## Rules
- Only home-page-specific components belong here
- If a component is reused on another page, move it to components/common/
- All components must be mobile-first responsive

## Files
```
Home.tsx    → Main home page section (motion animated hero)
```

## How to Add New Home Components
1. Create ComponentName.tsx in this folder
2. Import and render it inside Home.tsx
3. Mobile-first: write base classes first, then md: and lg: overrides
4. Verify at 375px, 768px, 1280px in browser DevTools
