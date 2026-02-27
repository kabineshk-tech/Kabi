'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const ASSETS = '/images/service%20page-1';

export default function ServiceHero() {
  return (
    <section className="relative bg-[#FFF5EE] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 pt-12 md:pt-16 lg:pt-20 flex flex-col md:flex-row items-center gap-8 lg:gap-4">
        {/* Left — heading + CTA */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="flex-1 pb-8 md:pb-20"
        >
          <h1 className="text-3xl md:text-5xl lg:text-[56px] font-bold text-[#12283F] leading-tight mb-5">
            Confused about paints, waterproofing, or fittings?{' '}
            <span className="block">Don&apos;t decide alone.</span>
          </h1>
          <p className="text-sm md:text-base text-gray-600 max-w-md mb-8 leading-relaxed">
            Our expert consultation helps you choose the right materials based on
            your home, usage and budget, not based on brand pushing.
          </p>
          <button className="inline-flex items-center gap-3 bg-[#FD504F] text-white px-7 py-3.5 rounded-full font-medium text-sm md:text-base hover:bg-red-600 transition-colors min-h-[44px]">
            Book expert consultation
            <Image
              src={`${ASSETS}/icons/firstfold_arrowvector.svg`}
              alt=""
              width={18}
              height={18}
              className="flex-shrink-0"
            />
          </button>
        </motion.div>

        {/* Right — engineer image */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
          className="flex-1 flex justify-center md:justify-end"
        >
          <Image
            src={`${ASSETS}/images/firstfold_image.png`}
            alt="Expert paint consultant with clipboard"
            width={580}
            height={500}
            quality={85}
            className="object-contain w-full max-w-[580px]"
            priority
          />
        </motion.div>
      </div>

      {/* Wave transition to white */}
      <div className="relative -mb-px">
        <svg
          viewBox="0 0 1440 72"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="w-full block"
        >
          <path
            d="M0,36 C180,72 360,0 540,36 C720,72 900,0 1080,36 C1260,72 1350,18 1440,28 L1440,72 L0,72 Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}
