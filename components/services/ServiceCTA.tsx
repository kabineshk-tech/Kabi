'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const ASSETS = '/images/service%20page-1';

export default function ServiceCTA() {
  return (
    <section className="bg-[#12283F] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        <div className="flex flex-col md:flex-row items-end md:items-center gap-0 md:gap-10">
          {/* Left — Person image (sits at bottom, bleeds to top) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full md:w-auto flex justify-center md:justify-start shrink-0"
          >
            <Image
              src={`${ASSETS}/images/seventhfold_image.png`}
              alt="Periyanayaki service expert"
              width={380}
              height={360}
              quality={85}
              className="object-contain max-h-[280px] md:max-h-[340px] lg:max-h-[360px] w-auto"
            />
          </motion.div>

          {/* Right — Text + buttons */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex-1 py-10 md:py-14 text-center md:text-left"
          >
            <h2 className="text-2xl md:text-4xl lg:text-[42px] font-bold text-white leading-tight mb-4">
              Not sure which service you need?
              <span className="block">Start with a conversation.</span>
            </h2>
            <p className="text-gray-300 text-sm md:text-base mb-8 max-w-lg mx-auto md:mx-0">
              Our team will guide you honestly even if it means not selling
              immediately.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center md:items-start gap-3 justify-center md:justify-start">
              <button className="inline-flex items-center gap-3 bg-[#12283F] border border-white text-white px-7 py-3.5 rounded-full font-medium text-sm md:text-base hover:bg-white hover:text-[#12283F] transition-colors min-h-[44px] w-full sm:w-auto justify-center">
                Book a consultation
                <Image
                  src={`${ASSETS}/icons/seventhfold_arrowvector.svg`}
                  alt=""
                  width={18}
                  height={18}
                  className="flex-shrink-0"
                />
              </button>
              <button className="inline-flex items-center gap-3 bg-[#FD504F] text-white px-7 py-3.5 rounded-full font-medium text-sm md:text-base hover:bg-red-600 transition-colors min-h-[44px] w-full sm:w-auto justify-center">
                WhatsApp our expert
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
