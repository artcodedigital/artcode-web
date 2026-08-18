'use client';

import Link from 'next/link';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { ArrowRight, ArrowUpRight, Sparkles } from 'lucide-react';
import { useEffect, useState, type MouseEvent } from 'react';
import { CONTACT } from '@/data/content';
import { Magnetic } from '@/components/ui/Magnetic';
import { HeroMock } from './HeroMock';

const HEADLINE = ['Software', 'sob', 'medida', 'que', 'faz', 'seu', 'negócio', 'crescer.'];

const wordVariants = {
  hidden: { opacity: 0, y: 40, rotateX: -40, filter: 'blur(8px)' },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    rotateX: 0,
    filter: 'blur(0px)',
    transition: { delay: 0.25 + i * 0.07, duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  }),
};

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
        <motion.div
          animate={{ x: [0, 40, -20, 0], y: [0, -30, 20, 0], scale: [1, 1.1, 0.95, 1] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -left-40 top-10 h-[520px] w-[520px] rounded-full bg-violet/30 blur-[140px]"
        />
        <motion.div
          animate={{ x: [0, -50, 30, 0], y: [0, 40, -20, 0], scale: [1, 0.9, 1.15, 1] }}
          transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -right-32 top-40 h-[460px] w-[460px] rounded-full bg-mint/15 blur-[140px]"
        />
        <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-bg to-transparent" />
      </div>

      <div className="container-x grid items-center gap-14 lg:grid-cols-[1.05fr_1fr] lg:gap-10">
        {/* Copy */}
        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-7 inline-flex items-center gap-2 rounded-full border border-line bg-surface/60 py-1.5 pl-1.5 pr-4 text-xs font-medium text-muted backdrop-blur">
            <span className="inline-flex items-center gap-1 rounded-full bg-violet/20 px-2 py-0.5 font-mono text-[0.65rem] uppercase tracking-widest text-violet-soft">
              <Sparkles size={11} /> Novo
            </span>
            Integração com IA em todos os projetos
          </motion.div>

          <h1
            className="display text-balance text-[2.6rem] leading-[0.98] sm:text-6xl md:text-7xl lg:text-[4.6rem] xl:text-[5.2rem]"
            style={{ perspective: 800 }}>
            {HEADLINE.map((w, i) => (
              <motion.span
                key={w + i}
                custom={i}
                variants={wordVariants}
                initial="hidden"
                animate="show"
                className={
                  'mr-[0.22em] inline-block will-change-transform ' +
                  (w === 'crescer.' ? 'gradient-text' : '')
                }>
                {w}
              </motion.span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.85 }}
            className="mt-7 max-w-[54ch] text-pretty text-base leading-relaxed text-muted md:text-lg">
            Sites, aplicativos e sistemas desenvolvidos do zero para o seu processo — com
            design cuidadoso, código sólido e Inteligência Artificial integrada. Do
            primeiro rascunho ao deploy, com um time que responde.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1 }}
            className="mt-9 flex flex-wrap items-center gap-3">
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
          </motion.div>

          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.25 }}
            className="mt-10 flex flex-wrap gap-x-7 gap-y-2 text-xs text-muted">
            {['Orçamento em 48h', 'Código 100% seu', 'Entregas semanais'].map((t) => (
              <li key={t} className="flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-mint" />
                {t}
              </li>
            ))}
          </motion.ul>
        </div>

        {/* Mock */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          style={{ perspective: 1400 }}
          className="relative z-10">
          <motion.div style={{ rotateX: rx, rotateY: ry, transformStyle: 'preserve-3d' }}>
            <HeroMock />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
