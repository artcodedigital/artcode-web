'use client';

import { useEffect, useRef } from 'react';
import { gsap, ScrollTrigger } from '@/lib/gsap';
import { cn } from '@/lib/utils';

const WORDS = ['Sites', 'Aplicativos', 'Sistemas', 'Integração com IA', 'UX/UI', 'Cloud'];

/**
 * Two rows of oversized type that drift in opposite directions and speed up,
 * skew and reverse with the scroll velocity — the page feels physically pushed.
 */
export function Marquee({ dark = false }: { dark?: boolean }) {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) return;

    const ctx = gsap.context(() => {
      const rows = gsap.utils.toArray<HTMLElement>('[data-row]');
      const tweens = rows.map((row, i) =>
        gsap.to(row, {
          xPercent: i % 2 === 0 ? -50 : 0,
          startAt: { xPercent: i % 2 === 0 ? 0 : -50 },
          duration: 40,
          ease: 'none',
          repeat: -1,
        }),
      );

      const skewSetter = gsap.quickTo(root.current, 'skewX', { duration: 0.6, ease: 'power3' });
      const clamp = gsap.utils.clamp(-14, 14);

      ScrollTrigger.create({
        onUpdate: (self) => {
          const v = self.getVelocity();
          const speed = gsap.utils.clamp(-6, 6, v / 350);
          const dir = v < 0 ? -1 : 1;
          tweens.forEach((t) => {
            gsap.to(t, { timeScale: dir * (1 + Math.abs(speed)), duration: 0.5, overwrite: true });
          });
          skewSetter(clamp(v / 250));
          gsap.delayedCall(0.15, () => skewSetter(0));
        },
      });
    }, root);

    return () => ctx.revert();
  }, []);

  const Row = ({ outline }: { outline: boolean }) => (
    <div data-row className="flex w-max items-center whitespace-nowrap will-change-transform">
      {[...WORDS, ...WORDS].map((w, i) => (
        <span key={i} className="flex items-center">
          <span
            className={cn(
              'display px-5 text-[11vw] leading-none tracking-[-0.04em] md:px-8 md:text-[7.5vw]',
              outline ? 'text-outline' : dark ? 'text-paper' : 'text-ink',
            )}>
            {w}
          </span>
          <span className="block h-[0.9vw] w-[0.9vw] min-h-[6px] min-w-[6px] rounded-full bg-violet" />
        </span>
      ))}
    </div>
  );

  return (
    <div
      ref={root}
      className={cn('overflow-hidden py-10 md:py-16')}
      aria-hidden>
      <Row outline={false} />
      <Row outline />
    </div>
  );
}
