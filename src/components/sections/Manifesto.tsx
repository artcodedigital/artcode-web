'use client';

import { useEffect, useRef } from 'react';
import { gsap, SplitText } from '@/lib/gsap';

const TEXT =
  'A gente não vende horas nem templates. Senta com você, entende o problema de verdade e constrói o software que vai rodar por anos — bonito por fora, sólido por dentro, e sem depender de ninguém além do seu time.';

/**
 * A single statement, word by word: each word goes from faint to full ink as
 * the reader scrolls through it. Reading pace = scroll pace.
 */
export function Manifesto() {
  const root = useRef<HTMLElement>(null);
  const para = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) return;
    const ctx = gsap.context(() => {
      document.fonts.ready.then(() => {
        SplitText.create(para.current!, {
          type: 'words',
          autoSplit: true,
          onSplit: (self) =>
            gsap.fromTo(
              self.words,
              { opacity: 0.14 },
              {
                opacity: 1,
                stagger: 0.06,
                ease: 'none',
                scrollTrigger: {
                  trigger: root.current,
                  start: 'top 70%',
                  end: 'bottom 55%',
                  scrub: 0.6,
                },
              },
            ),
        });
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} className="relative py-24 md:py-40">
      <div className="container-x grid gap-10 md:grid-cols-12">
        <div className="label md:col-span-3" data-reveal>
          <span className="flex items-center gap-4 border-t border-ink/15 pt-4">
            <span>01</span>
            <span className="h-px w-8 bg-ink/25" />
            <span>Manifesto</span>
          </span>
        </div>
        <p
          ref={para}
          className="display text-balance text-[1.9rem] leading-[1.18] tracking-[-0.02em] text-ink sm:text-4xl md:col-span-9 md:text-[3.1rem] md:leading-[1.12]">
          {TEXT}
        </p>
      </div>
    </section>
  );
}
