# public/images/

Static image assets. Served at /images/<folder>/<filename>.

## Rules
- Always use .webp format for photographs (convert with scripts/convert-to-webp.js)
- Use .svg for logos, icons, simple graphics
- Use .png only if .webp is not suitable and transparency is required
- Never commit raw .jpg files for photos
- One subfolder per page

## Structure
```
header/     → Logo, header-specific assets
footer/     → Footer-specific assets
home/       → Home page images
about/      → About page images
blog/       → Blog thumbnails and featured images
<page>/     → One folder per page
```

## Usage in Components
```tsx
import Image from 'next/image';

<Image
  src="/images/home/hero-banner.webp"
  alt="Descriptive alt text"
  width={1200}
  height={600}
  quality={80}
  priority        // Add only for above-the-fold images
  className="w-full h-auto"
/>
```

## Converting Images
Run before every commit that adds new images:
```bash
npm run convert-images        # Convert and keep originals
npm run convert-images:clean  # Convert and delete originals
```
