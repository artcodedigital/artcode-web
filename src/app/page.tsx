import { Hero } from '@/components/sections/Hero';
import { Marquee } from '@/components/sections/Marquee';
import { Manifesto } from '@/components/sections/Manifesto';
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
      <div className="border-y border-ink/10">
        <Marquee />
      </div>
      <Manifesto />
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
