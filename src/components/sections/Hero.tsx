'use client';

import Link from 'next/link';
import { useEffect, useRef } from 'react';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { CONTACT } from '@/data/content';
import { INFINITY_PATH } from '@/components/ui/Logo';
import { gsap, SplitText } from '@/lib/gsap';

export function Hero() {
  const root = useRef<HTMLElement>(null);
  const h1 = useRef<HTMLHeadingElement>(null);
  const mark = useRef<SVGSVGElement>(null);
  const path = useRef<SVGPathElement>(null);

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const ctx = gsap.context(() => {
      const meta = gsap.utils.toArray<HTMLElement>('[data-hero-meta]');
      const p = path.current!;
      const len = p.getTotalLength();

      if (reduce) return;

      // --- Load: the ∞ draws itself while the headline rises line by line ---
      gsap.set(p, { strokeDasharray: len, strokeDashoffset: len });
      gsap.set(meta, { y: 18, opacity: 0 });

      const tl = gsap.timeline({ defaults: { ease: 'expo.out' } });
      tl.to(p, { strokeDashoffset: 0, duration: 2, ease: 'power2.inOut' }, 0);

      document.fonts.ready.then(() => {
        SplitText.create(h1.current!, {
          type: 'lines',
          mask: 'lines',
          linesClass: 'line',
          autoSplit: true,
          onSplit: (self) =>
            gsap.from(self.lines, {
              yPercent: 110,
              duration: 1.3,
              stagger: 0.09,
              ease: 'expo.out',
              delay: 0.15,
            }),
        });
        tl.to(meta, { y: 0, opacity: 1, duration: 1, stagger: 0.08 }, 0.7);
      });

      // --- Scroll: headline drifts up + fades, the mark rotates & sinks -----
      gsap.to(h1.current, {
        yPercent: -18,
        opacity: 0.15,
        ease: 'none',
        scrollTrigger: { trigger: root.current, start: 'top top', end: 'bottom top', scrub: true },
      });
      gsap.to(mark.current, {
        rotate: 60,
        yPercent: 30,
        ease: 'none',
        scrollTrigger: { trigger: root.current, start: 'top top', end: 'bottom top', scrub: true },
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="top"
      ref={root}
      className="relative flex min-h-[100svh] flex-col overflow-hidden pt-28 md:pt-36">
      {/* Oversized outline mark bleeding off the right edge */}
      <svg
        ref={mark}
        viewBox="0 0 100 56"
        fill="none"
        aria-hidden
        className="pointer-events-none absolute -right-[18vw] top-[8vh] w-[78vw] max-w-[1100px] md:-right-[10vw] md:top-[4vh] md:w-[62vw]"
        style={{ transformOrigin: '50% 50%' }}>
        <path
          ref={path}
          d={INFINITY_PATH}
          stroke="hsl(var(--violet))"
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
          strokeWidth="1.5"
        />
      </svg>

      <div className="container-x relative flex flex-1 flex-col">
        <div className="label flex flex-wrap items-center gap-x-6 gap-y-2" data-hero-meta>
          <span className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-violet" />
            Estúdio de software
          </span>
          <span>Recife · Brasil</span>
          <span className="hidden sm:inline">Sites · Apps · Sistemas · IA</span>
        </div>

        <h1
          ref={h1}
          className="display mt-10 max-w-[13ch] text-[13vw] leading-[0.92] text-ink sm:text-[11vw] md:mt-14 lg:max-w-none lg:text-[6.4rem] xl:text-[7.4rem]">
          Software sob medida para negócios que não cabem <span className="accent text-violet">na prateleira.</span>
        </h1>

        <div className="mt-auto grid gap-8 pb-10 pt-16 md:grid-cols-[1fr_auto] md:items-end md:pb-14">
          <p
            data-hero-meta
            className="max-w-[46ch] text-pretty text-base leading-relaxed text-ink-2 md:text-lg">
            Sites, aplicativos, sistemas e integrações com IA — desenhados e desenvolvidos
            do primeiro rascunho ao deploy, por um time que fala a sua língua.
          </p>

          <div data-hero-meta className="flex flex-wrap items-center gap-3">
            <Link
              href={CONTACT.whatsappWithMessage('Olá! Quero conversar sobre um projeto com a ArtCode.')}
              target="_blank"
              rel="noopener noreferrer"
              className="btn">
              Começar um projeto <ArrowUpRight size={16} />
            </Link>
            <Link href="#trabalhos" className="btn-outline">
              Ver trabalhos
            </Link>
          </div>
        </div>

        <div data-hero-meta className="label flex items-center gap-3 pb-8">
          <span className="relative block h-10 w-px overflow-hidden bg-ink/15">
            <span className="animate-scroll-hint absolute inset-0 bg-ink" />
          </span>
          <span className="flex items-center gap-1.5">
            Role para explorar <ArrowDown size={12} />
          </span>
        </div>
      </div>
    </section>
  );
}
