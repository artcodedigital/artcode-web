import { Hero } from '@/components/sections/Hero';
import { TechMarquee } from '@/components/sections/TechMarquee';
import { Services } from '@/components/sections/Services';
import { Process } from '@/components/sections/Process';
import { Portfolio } from '@/components/sections/Portfolio';
import { Stats } from '@/components/sections/Stats';
import { Testimonials } from '@/components/sections/Testimonials';
import { FAQ } from '@/components/sections/FAQ';
import { Contact } from '@/components/sections/Contact';

export default function Home() {
  return (
    <>
      <Hero />
      <TechMarquee />
      <Services />
      <Process />
      <Portfolio />
      <Stats />
      <Testimonials />
      <FAQ />
      <Contact />
    </>
  );
}
