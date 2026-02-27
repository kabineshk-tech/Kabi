'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const ASSETS = '/images/service%20page-1';

interface Feature {
  icon: string;
  label: string;
}

const FEATURES: Feature[] = [
  { icon: `${ASSETS}/icons/sixthfold/Vector1.svg`, label: 'No sales pressure' },
  { icon: `${ASSETS}/icons/sixthfold/Vector2.svg`, label: 'Simple explanations' },
  { icon: `${ASSETS}/icons/sixthfold/Vector3.svg`, label: 'Practical site-based advice' },
  { icon: `${ASSETS}/icons/sixthfold/Vector4.svg`, label: 'Long-term thinking' },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, delay: i * 0.1, ease: 'easeOut' },
  }),
};

export default function WhyDifferent() {
  return (
    <section className="bg-[#FFF5EE] py-12 md:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        {/* Outer card */}
        <div className="bg-[#FFF0E8] rounded-3xl px-6 py-10 md:px-10 md:py-14">
          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-2xl md:text-4xl lg:text-5xl font-bold text-[#12283F] text-center mb-10 md:mb-14"
          >
            Why Our Consultation
            <span className="block">Is Different</span>
          </motion.h2>

          {/* Feature cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-10 md:mb-12">
            {FEATURES.map((feature, index) => (
              <motion.div
                key={feature.label}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-5 md:p-7 flex flex-col items-center gap-4 shadow-sm"
              >
                <div className="w-14 h-14 md:w-16 md:h-16 flex items-center justify-center">
                  <Image
                    src={feature.icon}
                    alt=""
                    width={56}
                    height={56}
                    className="object-contain"
                  />
                </div>
                <p className="text-[#12283F] text-sm md:text-base font-medium text-center leading-snug">
                  {feature.label}
                </p>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex justify-center"
          >
            <button className="inline-flex items-center gap-3 bg-[#12283F] text-white px-8 py-4 rounded-full font-medium text-sm md:text-base hover:bg-[#0d1d2e] transition-colors min-h-[44px]">
              Book a consultation
              <Image
                src={`${ASSETS}/icons/sixthfold/arrowvector.svg`}
                alt=""
                width={18}
                height={18}
                className="flex-shrink-0"
              />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
