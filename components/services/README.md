# components/services/

Page-level section components for the `/services/` route.

## Structure

| File | Section | Fold |
|---|---|---|
| `ServiceHero.tsx` | Hero — heading + CTA + engineer image | 1st fold |
| `ServicesCarousel.tsx` | Services list — 4 service type cards with nav arrows | 2nd fold |
| `ServiceFor.tsx` | Who This Service Is For — 3 person cards | 2nd fold |
| `ProblemsSolved.tsx` | Problems — red bg + image + 5 problem icons | 3rd fold |
| `HowItWorks.tsx` | How Consultation Works — 5 numbered steps + image | 4th fold |
| `WhyDifferent.tsx` | Why Different — 4 feature cards + CTA | 5th fold |
| `ServiceCTA.tsx` | CTA Banner — dark navy + person + 2 buttons | 6th/7th fold |

## Assets used

```
public/images/service page-1/
├── images/
│   ├── firstfold_image.png       → ServiceHero
│   ├── secondfold/Mask group2-4  → ServiceFor cards
│   ├── thirdfold/Mask group1-4   → ServicesCarousel cards
│   ├── fourthfold_image.png      → HowItWorks right image
│   ├── fifthfold_image.png       → ProblemsSolved left image
│   └── seventhfold_image.png     → ServiceCTA person image
└── icons/
    ├── firstfold_arrowvector.svg  → ServiceHero CTA arrow
    ├── secondfold/left+right      → ServicesCarousel nav + ServiceFor deco
    ├── fifthfold/no1-5.svg        → ProblemsSolved problem icons
    ├── fourthfold/Vector1-5.svg   → HowItWorks step icons
    ├── sixthfold/Vector1-4.svg    → WhyDifferent feature icons
    ├── sixthfold/arrowvector.svg  → WhyDifferent CTA arrow
    └── seventhfold_arrowvector.svg→ ServiceCTA button arrow
```

## How to add a new section

1. Create `ComponentName.tsx` in this folder
2. Use `'use client'` only if interactive or animated
3. Import at `app/services/page.tsx`
4. Use `viewport={{ once: true }}` on all `whileInView` animations
