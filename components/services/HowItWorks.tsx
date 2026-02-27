'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const ASSETS = '/images/service%20page-1';

interface Step {
  number: string;
  icon: string;
  text: string;
}

const STEPS: Step[] = [
  { number: '01', icon: `${ASSETS}/icons/fourthfold/Vector1.svg`, text: 'Understand your requirement' },
  { number: '02', icon: `${ASSETS}/icons/fourthfold/Vector2.svg`, text: 'Study usage, surface & environment' },
  { number: '03', icon: `${ASSETS}/icons/fourthfold/Vector3.svg`, text: 'Explain clear options (budget / mid / premium)' },
  { number: '04', icon: `${ASSETS}/icons/fourthfold/Vector4.svg`, text: 'Help you make a confident decision' },
  { number: '05', icon: `${ASSETS}/icons/fourthfold/Vector5.svg`, text: 'Support during execution if needed' },
];

const stepVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.45, delay: i * 0.1, ease: 'easeOut' },
  }),
};

export default function HowItWorks() {
  return (
    <section className="bg-white py-12 md:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-2xl md:text-4xl font-bold text-[#12283F] text-center mb-10 md:mb-16"
        >
          How our consultation works
        </motion.h2>

        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          {/* Left — Steps */}
          <div className="w-full lg:flex-1 relative">
            {/* Dotted connector line */}
            <div className="absolute left-5 top-6 bottom-6 w-px border-l-2 border-dashed border-gray-200 hidden md:block" />

            <div className="flex flex-col gap-4">
              {STEPS.map((step, index) => (
                <motion.div
                  key={step.number}
                  custom={index}
                  variants={stepVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="flex items-center gap-4"
                >
                  {/* Number badge */}
                  <div className="w-11 h-11 rounded-full bg-[#FD504F] flex items-center justify-center shrink-0 shadow-md z-10">
                    <span className="text-white text-xs font-bold">{step.number}</span>
                  </div>

                  {/* Step card */}
                  <div className="flex-1 flex items-center gap-3 bg-gray-50 rounded-xl px-4 py-3.5 border border-gray-100">
                    <Image
                      src={step.icon}
                      alt=""
                      width={28}
                      height={28}
                      className="object-contain shrink-0 opacity-70"
                    />
                    <p className="text-[#12283F] text-sm md:text-base font-medium">
                      {step.text}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right — Image with soft blob */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full lg:flex-1 flex justify-center"
          >
            <div className="relative w-full max-w-md">
              {/* Soft blob background */}
              <div className="absolute inset-0 -m-6 rounded-[60%_40%_30%_70%_/_60%_30%_70%_40%] bg-[#FFF0EB] opacity-70" />
              {/* Image with border */}
              <div className="relative rounded-2xl overflow-hidden border-4 border-white shadow-xl aspect-[4/3]">
                <Image
                  src={`${ASSETS}/images/fourthfold_image.png`}
                  alt="Consultation in progress"
                  fill
                  quality={85}
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 45vw"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
