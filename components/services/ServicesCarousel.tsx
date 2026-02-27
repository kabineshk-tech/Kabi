'use client';

import { useState } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

const ASSETS = '/images/service%20page-1';

interface ServiceItem {
  id: number;
  title: string;
  image: string;
}

const SERVICES: ServiceItem[] = [
  {
    id: 1,
    title: 'Professional Painting Support',
    image: `${ASSETS}/images/thirdfold/Mask%20group1.png`,
  },
  {
    id: 2,
    title: 'Waterproofing Guidance Service',
    image: `${ASSETS}/images/thirdfold/Mask%20group2.png`,
  },
  {
    id: 3,
    title: 'Delivery & Logistics Service',
    image: `${ASSETS}/images/thirdfold/Mask%20group3.png`,
  },
  {
    id: 4,
    title: 'Contractor & Builder Support Services',
    image: `${ASSETS}/images/thirdfold/Mask%20group4.png`,
  },
];

const VISIBLE_DESKTOP = 4;
const VISIBLE_TABLET = 2;

export default function ServicesCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () =>
    setActiveIndex((prev) => Math.max(prev - 1, 0));
  const handleNext = () =>
    setActiveIndex((prev) =>
      Math.min(prev + 1, SERVICES.length - VISIBLE_TABLET)
    );

  return (
    <section className="bg-white py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        {/* Header row */}
        <div className="flex items-start justify-between mb-8 gap-4">
          <div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#12283F]">
              Services – Periyanayaki
            </h2>
            <p className="text-[#FD504F] text-sm md:text-base font-medium mt-1">
              More than products. Real guidance. Real support.
            </p>
          </div>

          {/* Navigation arrows */}
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={handlePrev}
              disabled={activeIndex === 0}
              className={cn(
                'w-11 h-11 rounded-full border-2 flex items-center justify-center transition-all min-h-[44px]',
                activeIndex === 0
                  ? 'border-gray-200 text-gray-300 cursor-not-allowed'
                  : 'border-[#FD504F] text-[#FD504F] hover:bg-[#FD504F] hover:text-white'
              )}
              aria-label="Previous service"
            >
              <Image
                src={`${ASSETS}/icons/secondfold/left%20Vector.svg`}
                alt=""
                width={16}
                height={16}
              />
            </button>
            <button
              onClick={handleNext}
              disabled={activeIndex >= SERVICES.length - VISIBLE_TABLET}
              className={cn(
                'w-11 h-11 rounded-full border-2 flex items-center justify-center transition-all min-h-[44px]',
                activeIndex >= SERVICES.length - VISIBLE_TABLET
                  ? 'border-gray-200 text-gray-300 cursor-not-allowed'
                  : 'border-[#FD504F] text-[#FD504F] hover:bg-[#FD504F] hover:text-white'
              )}
              aria-label="Next service"
            >
              <Image
                src={`${ASSETS}/icons/secondfold/right%20Vector.svg`}
                alt=""
                width={16}
                height={16}
              />
            </button>
          </div>
        </div>

        {/* Cards — show all 4 on desktop, slide on mobile/tablet */}
        <div className="hidden lg:grid lg:grid-cols-4 gap-5">
          {SERVICES.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        {/* Mobile / tablet slider */}
        <div className="lg:hidden overflow-hidden">
          <div
            className="flex gap-4 transition-transform duration-300 ease-in-out"
            style={{
              transform: `translateX(calc(-${activeIndex} * (50% + 8px)))`,
            }}
          >
            {SERVICES.map((service) => (
              <div key={service.id} className="w-[calc(50%-8px)] shrink-0 md:w-[calc(50%-8px)]">
                <ServiceCard service={service} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service }: { service: ServiceItem }) {
  return (
    <div className="rounded-2xl overflow-hidden shadow-sm border border-gray-100 bg-white hover:shadow-md transition-shadow">
      <div className="relative w-full h-48 md:h-52">
        <Image
          src={service.image}
          alt={service.title}
          fill
          quality={85}
          className="object-cover"
          sizes="(max-width: 768px) 50vw, 25vw"
        />
      </div>
      <div className="p-4">
        <p className="text-[#12283F] font-semibold text-sm md:text-base leading-snug">
          {service.title}
        </p>
      </div>
    </div>
  );
}
