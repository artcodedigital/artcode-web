'use client';

import { useEffect, useRef } from 'react';
import { STATS } from '@/data/content';
import { gsap } from '@/lib/gsap';
import { Marquee } from './Marquee';

export function Stats() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('[data-count]').forEach((el) => {
        const target = Number(el.dataset.count);
        const obj = { v: 0 };
        gsap.to(obj, {
          v: target,
          duration: 1.8,
          ease: 'expo.out',
          snap: { v: 1 },
          onUpdate: () => (el.textContent = String(Math.round(obj.v))),
          scrollTrigger: { trigger: el, start: 'top 85%', once: true },
        });
        // Net: never leave a zero on screen if the tween can't run.
        setTimeout(() => {
          if (el.textContent === '0' && el.getBoundingClientRect().top < window.innerHeight)
            el.textContent = String(target);
        }, 4000);
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} className="relative overflow-hidden border-y border-ink/10 bg-paper-2">
      <div className="container-x grid grid-cols-2 gap-y-12 pb-8 pt-20 md:grid-cols-4 md:pt-28">
        {STATS.map((s) => (
          <div key={s.label} data-reveal className="border-l border-ink/15 pl-5 md:pl-7">
            <div className="display text-[3.2rem] leading-none tracking-[-0.05em] md:text-[4.8rem]">
              <span data-count={s.value}>0</span>
              <span className="text-violet">{s.suffix}</span>
            </div>
            <p className="label mt-3">{s.label}</p>
          </div>
        ))}
      </div>
      <Marquee />
    </section>
  );
}
