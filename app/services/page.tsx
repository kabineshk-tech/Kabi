import type { Metadata } from 'next';
import ServiceHero from '@/components/services/ServiceHero';
import ServicesCarousel from '@/components/services/ServicesCarousel';
import ServiceFor from '@/components/services/ServiceFor';
import ProblemsSolved from '@/components/services/ProblemsSolved';
import HowItWorks from '@/components/services/HowItWorks';
import WhyDifferent from '@/components/services/WhyDifferent';
import ServiceCTA from '@/components/services/ServiceCTA';

export const metadata: Metadata = {
  title: 'Periyanayaki | Services',
  description:
    'Expert consultation for paints, waterproofing, and fittings. Choose the right materials for your home based on usage and budget — not brand pushing.',
};

export default function ServicesPage() {
  return (
    <>
      <ServiceHero />
      <ServicesCarousel />
      <ServiceFor />
      <ProblemsSolved />
      <HowItWorks />
      <WhyDifferent />
      <ServiceCTA />
    </>
  );
}
