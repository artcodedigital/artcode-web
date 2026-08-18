'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import { CONTACT, PROJECTS, type Project } from '@/data/content';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';
import { cn } from '@/lib/utils';

const FILTERS = ['Todos', 'Site', 'App', 'Sistema', 'IA'] as const;

/* --------- CSS-drawn previews (no images needed) --------- */

function BrowserMock({ hue }: { hue: number }) {
  return (
    <div className="absolute inset-x-6 bottom-0 top-8 rounded-t-xl border border-b-0 border-white/10 bg-bg/70 shadow-2xl">
      <div className="flex items-center gap-1.5 border-b border-white/10 px-3 py-2">
        <span className="h-2 w-2 rounded-full bg-white/20" />
        <span className="h-2 w-2 rounded-full bg-white/20" />
        <span className="h-2 w-2 rounded-full bg-white/20" />
        <span className="ml-2 h-2 flex-1 rounded-full bg-white/10" />
      </div>
      <div className="grid grid-cols-3 gap-2 p-3">
        <div className="col-span-3 h-14 rounded-md" style={{ background: `linear-gradient(120deg, hsl(${hue} 90% 60% / .6), hsl(${hue + 40} 90% 65% / .25))` }} />
        <div className="h-16 rounded-md bg-white/10" />
        <div className="h-16 rounded-md bg-white/10" />
        <div className="h-16 rounded-md bg-white/10" />
        <div className="col-span-2 h-3 rounded bg-white/10" />
        <div className="h-3 rounded" style={{ background: `hsl(${hue} 90% 60% / .7)` }} />
      </div>
    </div>
  );
}

function PhoneMock({ hue }: { hue: number }) {
  return (
    <div className="absolute bottom-0 left-1/2 top-6 w-[150px] -translate-x-1/2 rounded-t-[1.6rem] border border-b-0 border-white/10 bg-bg/70 p-2 shadow-2xl">
      <div className="mx-auto mb-2 h-1.5 w-12 rounded-full bg-white/15" />
      <div className="h-20 rounded-xl" style={{ background: `linear-gradient(160deg, hsl(${hue} 90% 60% / .7), hsl(${hue + 50} 90% 60% / .3))` }} />
      <div className="mt-2 space-y-2">
        <div className="h-3 w-3/4 rounded bg-white/15" />
        <div className="h-3 w-1/2 rounded bg-white/10" />
        <div className="grid grid-cols-2 gap-2 pt-1">
          <div className="h-12 rounded-lg bg-white/10" />
          <div className="h-12 rounded-lg bg-white/10" />
        </div>
        <div className="h-8 rounded-full" style={{ background: `hsl(${hue} 90% 60% / .8)` }} />
      </div>
    </div>
  );
}

function DashboardMock({ hue }: { hue: number }) {
  const bars = [30, 55, 45, 75, 60, 90, 70, 85];
  return (
    <div className="absolute inset-x-6 bottom-0 top-8 rounded-t-xl border border-b-0 border-white/10 bg-bg/70 shadow-2xl">
      <div className="grid grid-cols-[52px_1fr] gap-3 p-3">
        <div className="space-y-2">
          <div className="h-6 w-6 rounded-md" style={{ background: `hsl(${hue} 90% 60%)` }} />
          {[0, 1, 2, 3].map((i) => (
            <div key={i} className="h-3 w-full rounded bg-white/10" />
          ))}
        </div>
        <div className="space-y-2">
          <div className="grid grid-cols-3 gap-2">
            {[0, 1, 2].map((i) => (
              <div key={i} className="rounded-md bg-white/10 p-2">
                <div className="h-2 w-1/2 rounded bg-white/15" />
                <div className="mt-1.5 h-3 w-3/4 rounded" style={{ background: `hsl(${hue} 90% 65% / ${0.5 + i * 0.2})` }} />
              </div>
            ))}
          </div>
          <div className="flex h-16 items-end gap-1 rounded-md bg-white/5 p-2">
            {bars.map((h, i) => (
              <div key={i} className="flex-1 rounded-t-sm" style={{ height: `${h}%`, background: `hsl(${hue} 90% 62% / ${0.35 + (i / bars.length) * 0.6})` }} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function ProjectCard({ p, index }: { p: Project; index: number }) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, scale: 0.94, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.94, y: 10 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1], delay: index * 0.04 }}
      className="group card flex flex-col transition-all duration-500 hover:-translate-y-1.5 hover:border-violet-soft/40 hover:shadow-[0_30px_80px_-30px_rgba(0,0,0,.9)]">
      {/* Preview */}
      <div
        className="relative h-56 overflow-hidden border-b border-line"
        style={{
          background: `radial-gradient(120% 90% at 50% 110%, hsl(${p.hue} 90% 60% / .35), transparent 60%), hsl(var(--surface-2))`,
        }}>
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="absolute inset-0 transition-transform duration-700 ease-[cubic-bezier(.22,1,.36,1)] group-hover:-translate-y-2 group-hover:scale-[1.03]">
          {p.mock === 'browser' && <BrowserMock hue={p.hue} />}
          {p.mock === 'phone' && <PhoneMock hue={p.hue} />}
          {p.mock === 'dashboard' && <DashboardMock hue={p.hue} />}
        </div>
        <span className="absolute left-4 top-4 rounded-full border border-white/10 bg-bg/70 px-2.5 py-1 font-mono text-[0.65rem] uppercase tracking-widest text-text backdrop-blur">
          {p.category}
        </span>
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="display text-xl">{p.name}</h3>
            <p className="mt-0.5 text-xs text-muted">{p.segment}</p>
          </div>
          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-line text-muted transition-all duration-300 group-hover:rotate-45 group-hover:border-violet-soft/50 group-hover:text-text">
            <ArrowUpRight size={16} />
          </span>
        </div>
        <p className="mt-3 text-sm leading-relaxed text-muted">{p.summary}</p>
        <div className="mb-5 mt-5 flex flex-wrap gap-1.5">
          {p.stack.map((s) => (
            <span key={s} className="rounded-md bg-bg/60 px-2 py-0.5 font-mono text-[0.65rem] text-muted">
              {s}
            </span>
          ))}
        </div>
        <div className="mt-auto border-t border-line pt-4 text-sm">
          <span className="font-mono text-[0.65rem] uppercase tracking-widest text-muted">Resultado</span>
          <div className="mt-1 font-semibold text-mint">{p.result}</div>
        </div>
      </div>
    </motion.article>
  );
}

export function Portfolio() {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>('Todos');
  const list = filter === 'Todos' ? PROJECTS : PROJECTS.filter((p) => p.category === filter);

  return (
    <section id="portfolio" className="relative scroll-mt-24 py-24 md:py-32">
      <div className="container-x">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="Portfólio"
            title={
              <>
                Projetos que saíram do papel{' '}
                <span className="text-muted">e foram para produção.</span>
              </>
            }
            description="Uma seleção do que construímos para clientes de saúde, varejo, logística, serviços financeiros e food service."
            className="mb-0"
          />
          <Reveal className="md:mb-2">
            <div className="flex flex-wrap gap-1.5 rounded-full border border-line bg-surface/50 p-1.5">
              {FILTERS.map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={cn(
                    'relative rounded-full px-4 py-1.5 text-xs font-medium transition-colors',
                    filter === f ? 'text-bg' : 'text-muted hover:text-text',
                  )}>
                  {filter === f && (
                    <motion.span
                      layoutId="portfolio-filter"
                      className="absolute inset-0 rounded-full bg-mint"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="relative">{f}</span>
                </button>
              ))}
            </div>
          </Reveal>
        </div>

        <motion.div layout className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {list.map((p, i) => (
              <ProjectCard key={p.id} p={p} index={i} />
            ))}
          </AnimatePresence>
        </motion.div>

        <Reveal className="mt-12 text-center">
          <p className="text-sm text-muted">
            Quer ver um case parecido com o seu negócio?{' '}
            <Link
              href={CONTACT.whatsappWithMessage('Olá! Gostaria de ver cases parecidos com o meu negócio.')}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-text underline decoration-violet-soft/60 underline-offset-4 transition-colors hover:decoration-mint">
              Chama a gente no WhatsApp
            </Link>
            .
          </p>
        </Reveal>
      </div>
    </section>
  );
}
