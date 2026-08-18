'use client';

import { useRef } from 'react';
import { motion, useScroll, useSpring } from 'motion/react';
import { PROCESS } from '@/data/content';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';

export function Process() {
  const ref = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 70%', 'end 60%'],
  });
  const line = useSpring(scrollYProgress, { stiffness: 90, damping: 24 });

  return (
    <section id="processo" className="relative scroll-mt-24 overflow-hidden py-24 md:py-32">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-violet/10 blur-[160px]"
      />
      <div className="container-x grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <SectionHeading
            eyebrow="Como trabalhamos"
            title={
              <>
                Um processo claro,{' '}
                <span className="gradient-text">sem caixa-preta.</span>
              </>
            }
            description="Você sabe o que está sendo feito, por quem e quando fica pronto. Entregas semanais, ambiente de testes desde o início e comunicação direta."
            className="mb-0"
          />
          <Reveal delay={0.15} className="mt-8 hidden lg:block">
            <div className="glass inline-flex items-center gap-4 rounded-2xl p-4">
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-violet/20 font-display text-xl font-bold text-violet-soft">
                6–12
              </div>
              <div className="text-sm">
                <div className="font-semibold">semanas em média</div>
                <div className="text-muted">do kick-off ao lançamento</div>
              </div>
            </div>
          </Reveal>
        </div>

        <ol ref={ref} className="relative">
          {/* Track */}
          <div className="absolute bottom-6 left-[19px] top-6 w-px bg-line md:left-[23px]" aria-hidden />
          <motion.div
            style={{ scaleY: line }}
            className="absolute bottom-6 left-[19px] top-6 w-px origin-top bg-gradient-to-b from-violet via-violet-soft to-mint md:left-[23px]"
            aria-hidden
          />

          {PROCESS.map((p, i) => (
            <Reveal as="li" key={p.step} delay={i * 0.05} className="relative pl-16 pb-12 last:pb-0 md:pl-20">
              <span className="absolute left-0 top-0 grid h-10 w-10 place-items-center rounded-full border border-line bg-bg font-mono text-xs text-violet-soft md:h-12 md:w-12 md:text-sm">
                {p.step}
                <span className="absolute inset-0 -z-10 rounded-full bg-violet/30 blur-md" />
              </span>
              <div className="card p-6 transition-colors duration-500 hover:border-violet-soft/40">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="display text-xl md:text-2xl">{p.title}</h3>
                  <span className="rounded-full border border-line px-2.5 py-0.5 font-mono text-[0.68rem] text-muted">
                    {p.duration}
                  </span>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-muted md:text-[0.95rem]">
                  {p.description}
                </p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
