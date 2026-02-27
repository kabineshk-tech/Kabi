# types/

Global TypeScript type definitions shared across 2+ components.

## Rules
- Only define types here if they are used in 2+ files
- Types used in only 1 file should be defined inline in that file
- Use `interface` for object shapes
- Use `type` for unions, aliases, and mapped types
- No `any` — ever

## Naming
```
blog.ts       → BlogPost, BlogCategory interfaces
contact.ts    → ContactFormData interface
nav.ts        → NavItem interface
```

## How to Add New Types
1. Create types/<domain>.ts
2. Export all interfaces/types as named exports
3. Import in components: import type { BlogPost } from '@/types/blog';
