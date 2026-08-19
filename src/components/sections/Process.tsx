'use client';

import { useEffect, useRef } from 'react';
import { PROCESS } from '@/data/content';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { gsap } from '@/lib/gsap';
import { cn } from '@/lib/utils';

/**
 * Cards are `position: sticky` and stack under each other. GSAP shrinks and
 * dims each card as the next one slides over it, so the pile reads as depth.
 */
export function Process() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    const mm = gsap.matchMedia();
    mm.add('(prefers-reduced-motion: no-preference)', () => {
      const cards = gsap.utils.toArray<HTMLElement>('[data-card]');
      cards.forEach((card, i) => {
        const next = cards[i + 1];
        if (!next) return;
        const st = { trigger: next, start: 'top bottom', end: 'top top+=96', scrub: true };
        gsap.to(card, { scale: 0.94, ease: 'none', scrollTrigger: st });
        // A paper-coloured veil instead of opacity: the card stays opaque, so
        // the one underneath can't ghost through it.
        gsap.to(card.querySelector('[data-veil]'), { opacity: 0.55, ease: 'none', scrollTrigger: st });
      });
    });
    return () => mm.revert();
  }, []);

  return (
    <section id="processo" ref={root} className="relative scroll-mt-20 py-24 md:py-32">
      <div className="container-x">
        <SectionHeading
          index="03"
          label="Como trabalhamos"
          title={
            <>
              Um processo claro, <span className="accent text-violet">sem caixa-preta.</span>
            </>
          }
          description="Você sabe o que está sendo feito, por quem e quando fica pronto. Entregas semanais, ambiente de testes desde o início e comunicação direta."
        />

        <div className="relative">
          {PROCESS.map((p, i) => {
            const last = i === PROCESS.length - 1;
            return (
              <article
                key={p.step}
                data-card
                style={{ top: `calc(88px + ${i * 14}px)` }}
                className={cn(
                  'sticky mb-6 origin-top overflow-hidden rounded-2xl border p-7 will-change-transform md:p-10',
                  last ? 'border-violet/60 bg-paper-2' : 'border-ink/12 bg-paper-2',
                )}>
                <div className="grid gap-6 md:grid-cols-[120px_1fr_auto] md:items-start">
                  <span
                    className={cn(
                      'display text-[3.5rem] leading-none tracking-[-0.05em] md:text-[4.5rem]',
                      last ? 'text-violet' : 'text-ink/15',
                    )}>
                    {p.step}
                  </span>
                  <div>
                    <h3 className="display text-2xl md:text-4xl">{p.title}</h3>
                    <p
                      className={cn(
                        'mt-3 max-w-[56ch] text-pretty text-[0.95rem] leading-relaxed md:text-lg',
                        'text-muted',
                      )}>
                      {p.description}
                    </p>
                  </div>
                  <span
                    className={cn(
                      'label rounded-full border px-3 py-1.5',
                      last ? 'border-violet/50 text-violet' : 'border-ink/15',
                    )}>
                    {p.duration}
                  </span>
                </div>
                <div className={cn('mt-8 h-24 md:h-32', last && 'md:h-40')} aria-hidden />
                {!last && <span data-veil className="pointer-events-none absolute inset-0 rounded-2xl bg-paper opacity-0" aria-hidden />}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
