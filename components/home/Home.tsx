'use client';

import { motion } from 'framer-motion';

// ── Responsive pattern (mandatory for all components) ─────────────────────────
// Base class  → mobile  (375px, no prefix)
// md: class   → tablet  (≥ 768px)
// lg: class   → desktop (≥ 1024px)
// ─────────────────────────────────────────────────────────────────────────────

export default function Home() {
  return (
    // Standard responsive container — use this on every section/page wrapper
    <section className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-12 md:py-16 lg:py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="text-center"
      >
        {/* Fluid heading: mobile → tablet → desktop */}
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-[#12283F] mb-4 md:mb-6">
          Welcome
        </h1>
        {/* Fluid body text */}
        <p className="text-base md:text-lg lg:text-xl text-gray-700 max-w-xl md:max-w-2xl mx-auto">
          Your new Next.js 15 website is ready. Start building!
        </p>
      </motion.div>
    </section>
  );
}
