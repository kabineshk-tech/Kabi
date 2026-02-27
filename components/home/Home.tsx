'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

// ── Asset base constants ──────────────────────────────────────────────────────
const ICONS = '/images/homepage/icons';
const IMAGES = '/images/homepage/images';

// ── Interfaces ────────────────────────────────────────────────────────────────
interface AudienceItem {
  id: number;
  title: string;
  image: string;
}

interface Problem {
  text: string;
}

interface FailReason {
  icon: string;
  text: string;
}

interface ValueStep {
  number: string;
  icon: string;
  text: string;
  span?: boolean;
}

interface Solution {
  id: number;
  title: string;
  image: string;
}

interface ProcessStep {
  step: number;
  text: string;
}

interface TrustItem {
  text: string;
}

interface FAQItem {
  question: string;
  answer: string;
}

// ── Data constants ─────────────────────────────────────────────────────────────
const AUDIENCE_ITEMS: AudienceItem[] = [
  { id: 1, title: 'Renovating an old home', image: `${IMAGES}/fourth%20fold/Mask%20group1.png` },
  { id: 2, title: 'Repainting your house after many years', image: `${IMAGES}/fourth%20fold/Mask%20group2.png` },
  { id: 3, title: 'Worried about leakage, peeling, dampness', image: `${IMAGES}/fourth%20fold/Mask%20group3.png` },
  { id: 4, title: 'Confused about which materials to use', image: `${IMAGES}/second%20fold_image%202.png` },
];

const VISIBLE_TABLET = 2;

const PROBLEMS: Problem[] = [
  { text: 'Too many paint brands, no clear guidance' },
  { text: 'Shade looks different after painting' },
  { text: 'Contractor is pushing one brand only' },
  { text: 'Water leakage started after spending money' },
  { text: 'No one supports after billing' },
  { text: 'Budget crossed due to wrong choices' },
];

const FAIL_REASONS: FailReason[] = [
  { icon: `${ICONS}/secondfold/Vector1.svg`, text: 'Paint shops push brands, not solutions' },
  { icon: `${ICONS}/secondfold/Vector2.svg`, text: 'Contractors recommend based on commission' },
  { icon: `${ICONS}/secondfold/Vector3.svg`, text: 'Online research gives conflicting information' },
  { icon: `${ICONS}/secondfold/Vector4.svg`, text: 'No one takes full responsibility' },
];

const VALUE_STEPS: ValueStep[] = [
  { number: '01', icon: `${ICONS}/third%20fold/Vector1.svg`, text: 'Understand your home condition' },
  { number: '02', icon: `${ICONS}/third%20fold/Vector2.svg`, text: 'Explain options in simple language' },
  { number: '03', icon: `${ICONS}/third%20fold/Vector3.svg`, text: 'Match products to real usage' },
  { number: '04', icon: `${ICONS}/third%20fold/Vector4.svg`, text: 'Respect your budget' },
  { number: '05', icon: `${ICONS}/third%20fold/Vector5.svg`, text: 'Support you before, during and after purchase', span: true },
];

const SOLUTIONS: Solution[] = [
  { id: 1, title: 'Paint Selection (Interior & Exterior)', image: `${IMAGES}/sixth%20fold/Mask%20group1.png` },
  { id: 2, title: 'Waterproofing Solutions', image: `${IMAGES}/sixth%20fold/Mask%20group2.png` },
  { id: 3, title: 'Sanitary & Fittings', image: `${IMAGES}/sixth%20fold/Mask%20group3.png` },
  { id: 4, title: 'Delivery & Support', image: `${IMAGES}/sixth%20fold/Mask%20group4.png` },
];

const PROCESS_STEPS: ProcessStep[] = [
  { step: 1, text: 'You share your requirement (home / renovation / repainting)' },
  { step: 2, text: 'We inspect or understand the condition' },
  { step: 3, text: 'We explain clear options (no jargon)' },
  { step: 4, text: 'You choose confidently' },
  { step: 5, text: 'We support during execution' },
  { step: 6, text: 'We stand with you after purchase' },
];

const TRUST_ITEMS: TrustItem[] = [
  { text: '50+ years of trust in Coimbatore' },
  { text: 'Thousands of happy home owners' },
  { text: 'Honest guidance, not sales pressure' },
  { text: 'Genuine products only' },
  { text: 'Support beyond billing' },
];

const FAQ_ITEMS: FAQItem[] = [
  {
    question: 'Will the shade look exactly the same?',
    answer:
      "Not always — and that's something we help you understand upfront. Shades can vary based on wall texture, lighting, and application method. Our experts walk you through shade selection with actual swatches and real-room examples so you make an informed choice before the first stroke.",
  },
  {
    question: 'What if leakage happens later?',
    answer:
      "We don't disappear after billing. If you face leakage issues after using products recommended by us, reach out and we will guide you through the right remediation steps. Our commitment to you extends beyond the purchase.",
  },
  {
    question: 'Is expensive paint always better?',
    answer:
      "No — and we will tell you that honestly. The best paint for your home depends on the surface condition, usage, exposure, and your budget. We match products to your actual needs, not your willingness to spend.",
  },
  {
    question: 'Will you support after purchase?',
    answer:
      "Absolutely. Our relationship doesn't end at billing. Whether you have questions during painting, want to track quality, or face issues post-completion, we are here to support you every step of the way.",
  },
];

// ── Animation variants ────────────────────────────────────────────────────────
const problemsListVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};
const problemsItemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: 'easeOut' as const } },
};

const failListVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};
const failItemVariants = {
  hidden: { opacity: 0, x: 20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: 'easeOut' as const } },
};

const stepsListVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};
const stepsItemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' as const } },
};

const solutionsGridVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};
const solutionsCardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' as const } },
};

const processGridVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};
const processCardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' as const } },
};

const trustListVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};
const trustItemVariants = {
  hidden: { opacity: 0, x: 20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: 'easeOut' as const } },
};

// ── Main export ───────────────────────────────────────────────────────────────
export default function Home() {
  const [audienceIndex, setAudienceIndex] = useState(0);
  const [faqIndex, setFaqIndex] = useState<number | null>(null);

  const handleAudiencePrev = () => setAudienceIndex((prev) => Math.max(prev - 1, 0));
  const handleAudienceNext = () =>
    setAudienceIndex((prev) => Math.min(prev + 1, AUDIENCE_ITEMS.length - VISIBLE_TABLET));

  const handleFaqToggle = (index: number) => {
    setFaqIndex((prev) => (prev === index ? null : index));
  };

  return (
    <main>
      {/* ── Section 1: Hero ──────────────────────────────────────────────── */}
      <section className="relative bg-[#FFF5EE] overflow-hidden">
        {/* Decorative bg vector */}
        <div className="absolute inset-0 pointer-events-none opacity-20">
          <Image
            src={`${ICONS}/firstfold/bg%20vectors.svg`}
            alt=""
            fill
            className="object-cover"
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 pt-12 md:pt-16 lg:pt-20 pb-8 flex flex-col md:flex-row items-center gap-8 lg:gap-4">
          {/* Left — heading + CTAs */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="flex-1 pb-8 md:pb-16"
          >
            <h1 className="text-3xl md:text-5xl lg:text-[52px] font-bold text-[#12283F] leading-tight mb-5">
              Choosing the right paint and materials for your home should be simple.
            </h1>
            <p className="text-sm md:text-base text-gray-600 max-w-md mb-8 leading-relaxed">
              At Periyanayaki Paints, we help home owners choose the right paints, waterproofing,
              sanitary and fittings based on your home, your usage and your budget. No sales
              pressure. No confusion. No wrong decisions.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <button className="inline-flex items-center gap-3 bg-[#12283F] text-white px-6 py-3.5 rounded-full font-medium text-sm md:text-base hover:bg-[#0d1f31] transition-colors min-h-[44px]">
                Book a free expert consultation
                <Image
                  src={`${ICONS}/firstfold/arrow_vector.svg`}
                  alt=""
                  width={18}
                  height={18}
                  className="flex-shrink-0"
                />
              </button>
              <button className="inline-flex items-center justify-center border-2 border-[#12283F] text-[#12283F] px-6 py-3.5 rounded-full font-medium text-sm md:text-base hover:bg-[#12283F] hover:text-white transition-colors min-h-[44px]">
                Visit our store →
              </button>
            </div>
          </motion.div>

          {/* Right — main image + small circular image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
            className="flex-1 flex justify-center md:justify-end relative"
          >
            <div className="relative">
              <Image
                src={`${IMAGES}/first%20fold/first%20fold%20image1.png`}
                alt="Woman with paint samples"
                width={540}
                height={480}
                quality={85}
                className="object-contain w-full max-w-[540px]"
                priority
              />
              {/* Small decorative circular image — top-right */}
              <div className="absolute -top-4 -right-4 w-20 h-20 md:w-28 md:h-28 rounded-full overflow-hidden border-4 border-white shadow-lg">
                <Image
                  src={`${IMAGES}/first%20fold/first%20fold%20image%202.png`}
                  alt=""
                  fill
                  quality={85}
                  className="object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Section 2: Audience carousel ─────────────────────────────────── */}
      <section className="bg-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
          {/* Header row */}
          <div className="flex items-start justify-between mb-8 gap-4">
            <div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#12283F]">
                Who this page is for
              </h2>
              <p className="text-[#FD504F] text-sm md:text-base font-medium mt-1">
                This page is for you if you are:
              </p>
            </div>

            {/* Nav arrows — visible on mobile/tablet only */}
            <div className="flex items-center gap-2 shrink-0 lg:hidden">
              <button
                onClick={handleAudiencePrev}
                disabled={audienceIndex === 0}
                className={cn(
                  'w-11 h-11 rounded-full border-2 flex items-center justify-center transition-all min-h-[44px]',
                  audienceIndex === 0
                    ? 'border-gray-200 opacity-40 cursor-not-allowed'
                    : 'border-[#FD504F] hover:bg-[#FD504F]'
                )}
                aria-label="Previous"
              >
                <Image
                  src={`${ICONS}/sixthfold/left%20Vector.svg`}
                  alt=""
                  width={14}
                  height={14}
                />
              </button>
              <button
                onClick={handleAudienceNext}
                disabled={audienceIndex >= AUDIENCE_ITEMS.length - VISIBLE_TABLET}
                className={cn(
                  'w-11 h-11 rounded-full border-2 flex items-center justify-center transition-all min-h-[44px]',
                  audienceIndex >= AUDIENCE_ITEMS.length - VISIBLE_TABLET
                    ? 'border-gray-200 opacity-40 cursor-not-allowed'
                    : 'border-[#FD504F] hover:bg-[#FD504F]'
                )}
                aria-label="Next"
              >
                <Image
                  src={`${ICONS}/sixthfold/right%20Vector.svg`}
                  alt=""
                  width={14}
                  height={14}
                />
              </button>
            </div>
          </div>

          {/* Desktop — all 4 cards */}
          <div className="hidden lg:grid lg:grid-cols-4 gap-5">
            {AUDIENCE_ITEMS.map((item) => (
              <AudienceCard key={item.id} item={item} />
            ))}
          </div>

          {/* Mobile / tablet slider */}
          <div className="lg:hidden overflow-hidden">
            <div
              className="flex gap-4 transition-transform duration-300 ease-in-out"
              style={{
                transform: `translateX(calc(-${audienceIndex} * (50% + 8px)))`,
              }}
            >
              {AUDIENCE_ITEMS.map((item) => (
                <div key={item.id} className="w-[calc(50%-8px)] shrink-0">
                  <AudienceCard item={item} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 3: Problems ───────────────────────────────────────────── */}
      <section className="bg-[#FFF5EE] py-12 md:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">
            {/* Left — title + problems list */}
            <div className="flex-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#12283F] mb-2">
                  Common problems home owners face
                </h2>
                <p className="text-[#FD504F] font-medium mb-8 text-sm md:text-base">
                  Do any of these sound familiar?
                </p>
              </motion.div>

              <motion.ul
                variants={problemsListVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex flex-col gap-3"
              >
                {PROBLEMS.map((problem, index) => (
                  <motion.li
                    key={index}
                    variants={problemsItemVariants}
                    className="flex items-start gap-3 bg-white rounded-xl px-4 py-3.5 shadow-sm"
                  >
                    <span className="text-[#FD504F] text-xl font-bold leading-none mt-0.5 shrink-0">
                      &ldquo;
                    </span>
                    <p className="text-[#12283F] font-medium text-sm md:text-base">{problem.text}</p>
                  </motion.li>
                ))}
              </motion.ul>
            </div>

            {/* Right — room image with overlay card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex-1 w-full relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-lg aspect-[4/3] lg:h-[480px]">
                <Image
                  src={`${IMAGES}/third%20fold/third%20fold.jpg`}
                  alt="Room interior"
                  fill
                  quality={85}
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                {/* Dark blue overlay card */}
                <div className="absolute bottom-0 left-0 right-0 bg-[#12283F] bg-opacity-95 p-5 md:p-6">
                  <p className="text-white text-sm md:text-base leading-relaxed mb-4">
                    &ldquo;These problems happen because decisions are made without expert
                    guidance.&rdquo;
                  </p>
                  <button className="inline-flex items-center gap-2 bg-[#FD504F] text-white px-5 py-2.5 rounded-full font-medium text-sm hover:bg-red-600 transition-colors min-h-[44px]">
                    Book expert consultation →
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Section 4: Why options fail ───────────────────────────────────── */}
      <section className="bg-white py-12 md:py-16 lg:py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center">
            {/* Left — paint spill image with overlay */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex-1 w-full relative"
            >
              {/* Decorative bg vector */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
                <Image
                  src={`${ICONS}/third%20fold/bgVector.svg`}
                  alt=""
                  width={480}
                  height={480}
                  className="object-contain"
                />
              </div>

              <div className="relative rounded-2xl overflow-hidden shadow-lg aspect-[4/3] lg:h-[420px]">
                <Image
                  src={`${IMAGES}/fourth%20fold/fourth%20fold%20image.jpg`}
                  alt="Paint spill representing poor decisions"
                  fill
                  quality={85}
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                {/* Result overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-[#12283F] bg-opacity-90 p-5">
                  <p className="text-white font-bold text-lg mb-3">Result?</p>
                  <div className="flex flex-wrap gap-2">
                    {['Rework', 'Regret', 'Extra cost'].map((chip) => (
                      <span
                        key={chip}
                        className="bg-white text-[#12283F] text-xs md:text-sm font-semibold px-3 py-1.5 rounded-full"
                      >
                        {chip}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right — title + icon list */}
            <div className="flex-1">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#12283F] mb-8"
              >
                Why existing options fail
              </motion.h2>

              <motion.ul
                variants={failListVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex flex-col gap-4"
              >
                {FAIL_REASONS.map((reason, index) => (
                  <motion.li
                    key={index}
                    variants={failItemVariants}
                    className="flex items-center gap-4 p-4 rounded-xl border border-gray-100 hover:border-gray-200 transition-colors"
                  >
                    <div className="w-10 h-10 shrink-0 flex items-center justify-center bg-[#FFF5EE] rounded-lg">
                      <Image
                        src={reason.icon}
                        alt=""
                        width={24}
                        height={24}
                        className="object-contain"
                      />
                    </div>
                    <p className="text-[#12283F] font-medium text-sm md:text-base">{reason.text}</p>
                  </motion.li>
                ))}
              </motion.ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 5: Value proposition ──────────────────────────────────── */}
      <section className="bg-[#FFF5EE] py-12 md:py-16 lg:py-20 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute right-0 top-0 bottom-0 pointer-events-none opacity-10">
          <Image
            src={`${ICONS}/fifthfold_bgVector.svg`}
            alt=""
            width={400}
            height={600}
            className="object-contain h-full w-auto"
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-10"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#12283F] mb-2">
              The Periyanayaki way{' '}
              <span className="text-base md:text-lg font-normal text-gray-500">
                (Our value proposition)
              </span>
            </h2>
            <p className="text-[#FD504F] font-medium text-sm md:text-base">
              We guide you to choose right, the first time.
            </p>
          </motion.div>

          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">
            {/* Left — numbered steps card */}
            <motion.div
              variants={stepsListVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex-1 bg-white rounded-2xl p-6 md:p-8 shadow-sm"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {VALUE_STEPS.map((step) => (
                  <motion.div
                    key={step.number}
                    variants={stepsItemVariants}
                    className={cn('flex items-start gap-3', step.span && 'md:col-span-2')}
                  >
                    <div className="w-10 h-10 shrink-0 flex items-center justify-center bg-[#FFF5EE] rounded-lg">
                      <Image
                        src={step.icon}
                        alt=""
                        width={24}
                        height={24}
                        className="object-contain"
                      />
                    </div>
                    <div>
                      <span className="text-[#FD504F] text-xs font-bold block">{step.number}</span>
                      <p className="text-[#12283F] font-semibold text-sm md:text-base leading-snug">
                        {step.text}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right — store image + badge */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex-1 w-full relative pb-8"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-lg aspect-[4/3] lg:h-[420px]">
                <Image
                  src={`${IMAGES}/fifth%20fold_image5.png`}
                  alt="Periyanayaki store"
                  fill
                  quality={85}
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              {/* Dark blue badge */}
              <div className="absolute -bottom-0 left-4 right-4 bg-[#12283F] rounded-xl p-4 shadow-lg">
                <p className="text-white text-sm md:text-base font-semibold text-center">
                  We don&apos;t sell products. We guide decisions.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Section 6: Solutions grid ─────────────────────────────────────── */}
      <section className="bg-white py-12 md:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-8 md:mb-10"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#12283F]">
              Solutions for home owners
            </h2>
          </motion.div>

          <motion.div
            variants={solutionsGridVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4 md:gap-5"
          >
            {SOLUTIONS.map((solution) => (
              <motion.div
                key={solution.id}
                variants={solutionsCardVariants}
                className="relative rounded-2xl overflow-hidden shadow-sm aspect-[4/3] md:aspect-[3/2] cursor-pointer group"
              >
                <Image
                  src={solution.image}
                  alt={solution.title}
                  fill
                  quality={85}
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                {/* Label */}
                <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4">
                  <p className="text-white font-semibold text-xs md:text-sm leading-snug">
                    {solution.title}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Arrow CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex justify-end mt-6"
          >
            <button className="inline-flex items-center gap-2 text-[#12283F] font-semibold text-sm md:text-base hover:text-[#FD504F] transition-colors min-h-[44px]">
              Explore all services
              <Image
                src={`${ICONS}/sixthfold/arrowvector.svg`}
                alt=""
                width={20}
                height={20}
              />
            </button>
          </motion.div>
        </div>
      </section>

      {/* ── Section 7: Process steps ──────────────────────────────────────── */}
      <section className="bg-[#FD504F] py-12 md:py-16 lg:py-20 relative overflow-hidden">
        {/* Decorative bg */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-10">
          <Image
            src={`${ICONS}/seventhfold/bgVector.svg`}
            alt=""
            fill
            className="object-cover"
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 relative">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-10 md:mb-12"
          >
            How the process works
          </motion.h2>

          <motion.div
            variants={processGridVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5"
          >
            {PROCESS_STEPS.map((step) => (
              <motion.div
                key={step.step}
                variants={processCardVariants}
                className="bg-white rounded-2xl p-5 md:p-6 shadow-sm"
              >
                <span className="inline-block text-[#FD504F] font-bold text-sm mb-2">
                  Step {step.step}
                </span>
                <p className="text-[#12283F] font-semibold text-sm md:text-base leading-relaxed">
                  {step.text}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Section 8: Trust ──────────────────────────────────────────────── */}
      <section className="bg-white py-12 md:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center">
            {/* Left — handshake image with overlay */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex-1 w-full relative pb-8"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-lg aspect-[4/3] lg:h-[420px] border-4 border-[#FD504F]">
                <Image
                  src={`${IMAGES}/eightthfold_image.png`}
                  alt="Handshake representing trust and partnership"
                  fill
                  quality={85}
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              {/* Dark blue quote card */}
              <div className="absolute -bottom-0 left-4 right-4 bg-[#12283F] rounded-xl p-4 shadow-lg">
                <p className="text-white text-sm md:text-base font-semibold text-center italic">
                  &ldquo;Families come back to us, again and again.&rdquo;
                </p>
              </div>
            </motion.div>

            {/* Right — title + checklist */}
            <div className="flex-1 pt-4 lg:pt-0">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#12283F] mb-8"
              >
                Why home owners trust Periyanayaki Paints
              </motion.h2>

              <motion.ul
                variants={trustListVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex flex-col gap-4"
              >
                {TRUST_ITEMS.map((item, index) => (
                  <motion.li
                    key={index}
                    variants={trustItemVariants}
                    className="flex items-center gap-3"
                  >
                    {/* Red tick */}
                    <div className="w-6 h-6 shrink-0 flex items-center justify-center bg-[#FD504F] rounded-full">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="white"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-3.5 h-3.5"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <p className="text-[#12283F] font-medium text-sm md:text-base">{item.text}</p>
                  </motion.li>
                ))}
              </motion.ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 9: FAQ accordion ──────────────────────────────────────── */}
      <section className="bg-[#FFF5EE] py-12 md:py-16 lg:py-20 relative overflow-hidden">
        {/* Decorative background image */}
        <div className="absolute right-0 top-0 bottom-0 w-1/3 pointer-events-none opacity-10">
          <Image
            src={`${IMAGES}/ninethfold_image.png`}
            alt=""
            fill
            className="object-cover object-left"
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 relative">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#12283F] mb-8 md:mb-10"
          >
            Frequent questions
          </motion.h2>

          <div className="max-w-3xl flex flex-col gap-3">
            {FAQ_ITEMS.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="bg-white rounded-xl shadow-sm overflow-hidden"
              >
                <button
                  onClick={() => handleFaqToggle(index)}
                  className={cn(
                    'w-full flex items-center justify-between p-4 md:p-5 text-left transition-colors min-h-[44px]',
                    faqIndex === index ? 'bg-[#12283F]' : 'hover:bg-gray-50'
                  )}
                >
                  <span
                    className={cn(
                      'font-semibold text-sm md:text-base pr-4',
                      faqIndex === index ? 'text-white' : 'text-[#12283F]'
                    )}
                  >
                    {item.question}
                  </span>
                  <span
                    className={cn(
                      'shrink-0 w-7 h-7 flex items-center justify-center rounded-full text-lg font-bold leading-none',
                      faqIndex === index
                        ? 'bg-white text-[#12283F]'
                        : 'bg-[#FD504F] text-white'
                    )}
                  >
                    {faqIndex === index ? '−' : '+'}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {faqIndex === index && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <p className="px-4 md:px-5 pb-4 md:pb-5 text-gray-600 text-sm md:text-base leading-relaxed">
                        {item.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 10: Final CTA ─────────────────────────────────────────── */}
      <section className="bg-[#FFF5EE] py-12 md:py-16 lg:py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-0">
            {/* Left house image — desktop only */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="hidden lg:block flex-1 relative h-72"
            >
              <Image
                src={`${IMAGES}/tenthfold_image.png`}
                alt=""
                fill
                quality={85}
                className="object-cover object-right"
              />
            </motion.div>

            {/* Centre — text + CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex-1 text-center px-0 lg:px-8"
            >
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#12283F] mb-4 leading-tight">
                Don&apos;t guess. Don&apos;t regret.
                <br className="hidden md:block" /> Get expert guidance.
              </h2>
              <p className="text-gray-600 text-sm md:text-base mb-8 max-w-md mx-auto leading-relaxed">
                Your home is a once-in-years investment. Make the right decision with clarity and
                confidence.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <button className="inline-flex items-center justify-center gap-2 bg-[#12283F] text-white px-6 py-3.5 rounded-full font-medium text-sm md:text-base hover:bg-[#0d1f31] transition-colors min-h-[44px]">
                  Book a free site visit
                  <Image
                    src={`${ICONS}/tenthfold_arrowvector.svg`}
                    alt=""
                    width={18}
                    height={18}
                    className="flex-shrink-0"
                  />
                </button>
                <button className="inline-flex items-center justify-center gap-2 bg-[#FD504F] text-white px-6 py-3.5 rounded-full font-medium text-sm md:text-base hover:bg-red-600 transition-colors min-h-[44px]">
                  Call us now
                </button>
              </div>
            </motion.div>

            {/* Right house image — desktop only, mirrored */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="hidden lg:block flex-1 relative h-72"
            >
              <Image
                src={`${IMAGES}/tenthfold_image.png`}
                alt=""
                fill
                quality={85}
                className="object-cover object-left scale-x-[-1]"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}

// ── AudienceCard sub-component (used in carousel) ────────────────────────────
function AudienceCard({ item }: { item: AudienceItem }) {
  return (
    <div className="rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
      <div className="relative w-full h-48 md:h-52">
        <Image
          src={item.image}
          alt={item.title}
          fill
          quality={85}
          className="object-cover"
          sizes="(max-width: 768px) 50vw, 25vw"
        />
      </div>
      <div className="p-4 bg-white">
        <p className="text-[#12283F] font-semibold text-sm md:text-base leading-snug">
          {item.title}
        </p>
      </div>
    </div>
  );
}
