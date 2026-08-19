'use client';

import { useEffect, useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import { CONTACT, SERVICES } from '@/data/content';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { gsap, ScrollTrigger } from '@/lib/gsap';

/**
 * Desktop: the panel track is pinned and scrolls sideways as the page scrolls
 * down — one service at a time, with a progress line underneath.
 * Below 1024px it's an ordinary vertical list; no pinning on touch devices.
 */
export function Services() {
  const root = useRef<HTMLElement>(null);
  const pin = useRef<HTMLDivElement>(null);
  const track = useRef<HTMLDivElement>(null);
  const bar = useRef<HTMLDivElement>(null);
  const counter = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const mm = gsap.matchMedia();
    mm.add('(min-width: 1024px) and (prefers-reduced-motion: no-preference)', () => {
      const distance = () => track.current!.scrollWidth - window.innerWidth;
      const tween = gsap.to(track.current, {
        x: () => -distance(),
        ease: 'none',
        scrollTrigger: {
          trigger: pin.current,
          start: 'top top',
          end: () => `+=${distance()}`,
          pin: true,
          scrub: 1,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            if (bar.current) bar.current.style.transform = `scaleX(${self.progress})`;
            if (counter.current) {
              const i = Math.min(SERVICES.length, Math.floor(self.progress * SERVICES.length) + 1);
              counter.current.textContent = String(i).padStart(2, '0');
            }
          },
        },
      });
      // Panels lift slightly as they enter the viewport horizontally. The
      // first two are already on screen before the pin engages, so they use a
      // plain vertical trigger — a containerAnimation trigger only starts
      // evaluating once the pinned tween is active.
      gsap.utils.toArray<HTMLElement>('[data-panel]').forEach((panel, i) => {
        gsap.from(panel.querySelector('[data-panel-inner]'), {
          y: 40,
          opacity: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger:
            i < 2
              ? { trigger: pin.current, start: 'top 70%', toggleActions: 'play none none reverse' }
              : {
                  trigger: panel,
                  containerAnimation: tween,
                  start: 'left 85%',
                  toggleActions: 'play none none reverse',
                },
        });
      });
      return () => ScrollTrigger.refresh();
    });
    return () => mm.revert();
  }, []);

  return (
    <section id="servicos" ref={root} className="relative scroll-mt-20 pt-24 md:pt-32">
      <div className="container-x">
        <SectionHeading
          index="02"
          label="O que fazemos"
          title={
            <>
              Tudo que o seu produto digital precisa, <span className="accent text-violet">num lugar só.</span>
            </>
          }
          description="Do site institucional ao sistema com IA. Você fala com um time só, e a gente cuida de design, código, infraestrutura e evolução."
          className="mb-8 md:mb-10"
        />
      </div>

      <div ref={pin} className="relative overflow-hidden lg:flex lg:h-screen lg:flex-col lg:justify-center">
        <div
          ref={track}
          className="flex flex-col lg:flex-row lg:items-stretch lg:pl-[max(4vw,calc((100vw-1360px)/2))] lg:pr-[10vw]">
          {SERVICES.map((s, i) => (
            <article
              key={s.id}
              data-panel
              className="group border-t border-ink/12 py-10 lg:w-[min(46vw,620px)] lg:shrink-0 lg:border-l lg:border-t-0 lg:px-8 lg:py-6 xl:w-[min(40vw,640px)]">
              <div data-panel-inner className="container-x lg:mx-0 lg:w-auto lg:pr-6">
                <div className="flex items-baseline justify-between">
                  <span className="display text-[3.4rem] leading-none tracking-[-0.05em] text-ink/[0.13] transition-colors duration-500 group-hover:text-violet lg:text-[5.5rem]">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="label">{s.bullets.length} frentes</span>
                </div>
                <h3 className="display mt-6 text-2xl text-ink md:text-3xl lg:mt-10">{s.title}</h3>
                <p className="mt-4 max-w-[44ch] text-pretty text-[0.95rem] leading-relaxed text-muted md:text-base">
                  {s.description}
                </p>
                <ul className="mt-6 max-w-[44ch] divide-y divide-ink/10 border-y border-ink/10 text-sm">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex items-center justify-between py-2.5">
                      <span>{b}</span>
                      <span className="h-1.5 w-1.5 rounded-full bg-violet" />
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}

          {/* Closing panel */}
          <article
            data-panel
            className="border-t border-ink/12 py-10 lg:flex lg:w-[min(38vw,520px)] lg:shrink-0 lg:flex-col lg:justify-center lg:border-l lg:border-t-0 lg:px-8 lg:py-6">
            <div data-panel-inner className="container-x lg:mx-0 lg:w-auto">
              <p className="display text-3xl leading-[1.05] text-ink md:text-4xl">
                Não achou o seu caso aqui? <span className="accent text-violet">Provavelmente</span> a gente já
                fez parecido.
              </p>
              <Link
                href={CONTACT.whatsappWithMessage('Olá! Tenho uma demanda um pouco diferente e queria conversar.')}
                target="_blank"
                rel="noopener noreferrer"
                className="btn mt-8">
                Contar sobre o projeto <ArrowUpRight size={16} />
              </Link>
            </div>
          </article>
        </div>

        {/* Progress — desktop only */}
        <div className="container-x mt-6 hidden items-center gap-5 lg:flex">
          <span className="label tabular-nums">
            <span ref={counter}>01</span> / {String(SERVICES.length).padStart(2, '0')}
          </span>
          <div className="relative h-px flex-1 bg-ink/10">
            <div ref={bar} className="absolute inset-0 origin-left scale-x-0 bg-ink" />
          </div>
        </div>
      </div>
    </section>
  );
}
