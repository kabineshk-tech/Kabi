# scripts/

Build and utility scripts for the project.

## Rules
- Node.js ESM scripts only (use `import` syntax, not `require`)
- Must be invocable via `node scripts/<name>.js`
- Register frequently used scripts as npm run scripts in package.json

## Files
```
convert-to-webp.js    → Converts JPG/PNG in public/images/ to WebP at 80% quality
```

## Usage
```bash
npm run convert-images           # Convert images, keep originals
npm run convert-images:clean     # Convert images, delete originals
node scripts/convert-to-webp.js  # Run directly
```

## How to Add a New Script
1. Create scripts/<script-name>.js
2. Use ESM syntax: `import { ... } from '...'`
3. Add a corresponding entry to package.json "scripts" block
4. Document it in this README
