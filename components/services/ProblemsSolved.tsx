'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const ASSETS = '/images/service%20page-1';

interface Problem {
  icon: string;
  text: string;
}

const PROBLEMS: Problem[] = [
  { icon: `${ASSETS}/icons/fifthfold/no1.svg`, text: 'Confusion between brands and options' },
  { icon: `${ASSETS}/icons/fifthfold/no2.svg`, text: 'Wrong material selection' },
  { icon: `${ASSETS}/icons/fifthfold/no3.svg`, text: 'Shade mismatch' },
  { icon: `${ASSETS}/icons/fifthfold/no4.svg`, text: 'Budget overshoot' },
  { icon: `${ASSETS}/icons/fifthfold/no5.svg`, text: 'Rework and complaints' },
];

const listVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, x: 20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: 'easeOut' } },
};

export default function ProblemsSolved() {
  return (
    <section className="bg-[#FD504F] py-12 md:py-16 lg:py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-2xl md:text-4xl font-bold text-white text-center mb-10 md:mb-14"
        >
          Problems this service solves
        </motion.h2>

        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
          {/* Left — Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full md:flex-1 relative"
          >
            {/* Decorative BG vector behind image */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
              <Image
                src={`${ASSETS}/icons/thirdfold_bgvector.svg`}
                alt=""
                width={480}
                height={480}
                className="object-contain"
              />
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-lg aspect-[4/3] md:aspect-auto md:h-[420px]">
              <Image
                src={`${ASSETS}/images/fifthfold_image.png`}
                alt="Choosing the right paint material"
                fill
                quality={85}
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </motion.div>

          {/* Right — Problem list */}
          <motion.div
            variants={listVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="w-full md:flex-1 flex flex-col gap-3"
          >
            {PROBLEMS.map((problem, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex items-center gap-4 bg-white rounded-xl px-4 py-3.5 shadow-sm"
              >
                <div className="w-10 h-10 shrink-0 flex items-center justify-center">
                  <Image
                    src={problem.icon}
                    alt=""
                    width={36}
                    height={36}
                    className="object-contain"
                  />
                </div>
                <p className="text-[#12283F] font-medium text-sm md:text-base">
                  {problem.text}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
