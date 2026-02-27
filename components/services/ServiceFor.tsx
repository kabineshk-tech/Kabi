'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const ASSETS = '/images/service%20page-1';

interface PersonCard {
  image: string;
  label: string;
}

const CARDS: PersonCard[] = [
  {
    image: `${ASSETS}/images/secondfold/Mask%20group2.png`,
    label: 'Home owners (new construction / renovation / repainting)',
  },
  {
    image: `${ASSETS}/images/secondfold/Mask%20group3.png`,
    label: 'Builders planning finishing materials',
  },
  {
    image: `${ASSETS}/images/secondfold/Mask%20group4.png`,
    label: 'Contractors facing execution doubts',
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

export default function ServiceFor() {
  return (
    <section className="bg-white py-12 md:py-16 lg:py-20 relative overflow-hidden">
      {/* Decorative left vector */}
      <div className="absolute left-0 top-1/4 opacity-20 pointer-events-none hidden lg:block">
        <Image
          src={`${ASSETS}/icons/secondfold/left%20Vector.svg`}
          alt=""
          width={80}
          height={160}
        />
      </div>
      {/* Decorative right vector */}
      <div className="absolute right-0 bottom-1/4 opacity-20 pointer-events-none hidden lg:block">
        <Image
          src={`${ASSETS}/icons/secondfold/right%20Vector.svg`}
          alt=""
          width={80}
          height={160}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-2xl md:text-4xl lg:text-5xl font-bold text-[#12283F] text-center mb-10 md:mb-14"
        >
          Who This Service
          <span className="block">Is For</span>
        </motion.h2>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
        >
          {CARDS.map((card, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm bg-white hover:shadow-md transition-shadow"
            >
              <div className="relative w-full h-56 md:h-64">
                <Image
                  src={card.image}
                  alt={card.label}
                  fill
                  quality={85}
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-4 md:p-5">
                <p className="text-[#12283F] text-sm md:text-base leading-snug">
                  {card.label}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
