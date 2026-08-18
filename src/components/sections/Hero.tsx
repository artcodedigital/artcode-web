'use client';

import Link from 'next/link';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { ArrowRight, ArrowUpRight, Sparkles } from 'lucide-react';
import { useEffect, useState, type MouseEvent } from 'react';
import { CONTACT } from '@/data/content';
import { Magnetic } from '@/components/ui/Magnetic';
import { HeroMock } from './HeroMock';

const HEADLINE = ['Software', 'sob', 'medida', 'que', 'faz', 'seu', 'negócio', 'crescer.'];

export function Hero() {
  // Parallax tilt for the mock, based on cursor over the hero.
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useSpring(useTransform(my, [-0.5, 0.5], [6, -6]), { stiffness: 80, damping: 20 });
  const ry = useSpring(useTransform(mx, [-0.5, 0.5], [-8, 8]), { stiffness: 80, damping: 20 });
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1024px) and (hover: hover)');
    const update = () => setIsDesktop(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  const onMove = (e: MouseEvent<HTMLElement>) => {
    if (!isDesktop) return;
    const r = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };
  const onLeave = () => {
    mx.set(0);
    my.set(0);
  };

  return (
    <section
      id="top"
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className="noise relative isolate overflow-hidden pb-20 pt-24 md:pb-28 md:pt-28">
      {/* Background layers */}
      <div className="grid-bg absolute inset-0 -z-20" aria-hidden />
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden" aria-hidden>
        <div className="animate-orb-a absolute -left-40 top-10 h-[520px] w-[520px] rounded-full bg-violet/30 blur-[140px]" />
        <div className="animate-orb-b absolute -right-32 top-40 h-[460px] w-[460px] rounded-full bg-mint/15 blur-[140px]" />
        <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-bg to-transparent" />
      </div>

      <div className="container-x grid items-center gap-14 lg:grid-cols-[1.05fr_1fr] lg:gap-10">
        {/* Copy */}
        <div className="relative z-10">
          <div
            className="anim-enter mb-7 inline-flex items-center gap-2 rounded-full border border-line bg-surface/60 py-1.5 pl-1.5 pr-4 text-xs font-medium text-muted backdrop-blur"
            style={{ animationDelay: '0.1s', animationDuration: '0.6s', '--enter-y': '16px' } as React.CSSProperties}>
            <span className="inline-flex items-center gap-1 rounded-full bg-violet/20 px-2 py-0.5 font-mono text-[0.65rem] uppercase tracking-widest text-violet-soft">
              <Sparkles size={11} /> Novo
            </span>
            Integração com IA em todos os projetos
          </div>

          <h1
            className="display text-balance text-[2.6rem] leading-[0.98] sm:text-6xl md:text-7xl lg:text-[4.6rem] xl:text-[5.2rem]"
            style={{ perspective: 800 }}>
            {HEADLINE.map((w, i) => (
              <span
                key={w + i}
                style={{ animationDelay: `${0.25 + i * 0.07}s` }}
                className={
                  'anim-word mr-[0.22em] inline-block will-change-transform ' +
                  (w === 'crescer.' ? 'gradient-text' : '')
                }>
                {w}
              </span>
            ))}
          </h1>

          <p
            className="anim-enter mt-7 max-w-[54ch] text-pretty text-base leading-relaxed text-muted md:text-lg"
            style={{ animationDelay: '0.85s' }}>
            Sites, aplicativos e sistemas desenvolvidos do zero para o seu processo — com
            design cuidadoso, código sólido e Inteligência Artificial integrada. Do
            primeiro rascunho ao deploy, com um time que responde.
          </p>

          <div
            className="anim-enter mt-9 flex flex-wrap items-center gap-3"
            style={{ animationDelay: '1s' }}>
            <Magnetic>
              <Link
                href={CONTACT.whatsappWithMessage(
                  'Olá! Quero conversar sobre um projeto com a ArtCode.',
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary !px-7 !py-3.5 text-[0.95rem]">
                Começar meu projeto
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-0.5" />
              </Link>
            </Magnetic>
            <Link href="#portfolio" className="btn-ghost !py-3.5">
              Ver portfólio <ArrowUpRight size={16} />
            </Link>
          </div>

          <ul
            className="anim-fade mt-10 flex flex-wrap gap-x-7 gap-y-2 text-xs text-muted"
            style={{ animationDelay: '1.25s' }}>
            {['Orçamento em 48h', 'Código 100% seu', 'Entregas semanais'].map((t) => (
              <li key={t} className="flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-mint" />
                {t}
              </li>
            ))}
          </ul>
        </div>

        {/* Mock */}
        <div
          className="anim-mock relative z-10"
          style={{ perspective: 1400, animationDelay: '0.5s' }}>
          <motion.div style={{ rotateX: rx, rotateY: ry, transformStyle: 'preserve-3d' }}>
            <HeroMock />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
