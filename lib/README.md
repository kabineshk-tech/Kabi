# lib/

Shared utilities, helpers, and API logic.

## Rules
- Pure utility functions only — no React components here
- No side effects at module level
- All exports must be typed (no `any`)

## Files
```
utils.ts    → cn() helper (clsx + tailwind-merge). Import this for ALL conditional Tailwind classes.
```

## Usage
```ts
import { cn } from '@/lib/utils';

<div className={cn('base-class', isActive && 'active-class')} />
```

## How to Add a New Utility
1. If it's a general helper → add to utils.ts (named export)
2. If it's domain-specific (e.g. blog fetching) → create lib/blogApi.ts
3. Always export as named exports (not default)
4. Define TypeScript types for all parameters and return values
