'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { CONTACT, PROJECTS, type Project } from '@/data/content';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { gsap } from '@/lib/gsap';

/* ---------- Screen mocks, drawn in CSS on a dark "device" ---------- */

function BrowserMock({ hue }: { hue: number }) {
  return (
    <div className="absolute inset-x-[8%] bottom-0 top-[14%] rounded-t-lg border border-white/10 bg-[#171b3d] shadow-2xl">
      <div className="flex items-center gap-1.5 border-b border-white/10 px-3 py-2">
        <span className="h-2 w-2 rounded-full bg-white/20" />
        <span className="h-2 w-2 rounded-full bg-white/20" />
        <span className="ml-2 h-2 flex-1 rounded-full bg-white/10" />
      </div>
      <div className="grid grid-cols-3 gap-2 p-3">
        <div className="col-span-3 h-16 rounded-md" style={{ background: `linear-gradient(120deg, hsl(${hue} 80% 60% / .75), hsl(${hue + 40} 80% 65% / .3))` }} />
        <div className="h-14 rounded-md bg-white/10" />
        <div className="h-14 rounded-md bg-white/10" />
        <div className="h-14 rounded-md bg-white/10" />
        <div className="col-span-2 h-3 rounded bg-white/10" />
        <div className="h-3 rounded" style={{ background: `hsl(${hue} 80% 60% / .8)` }} />
      </div>
    </div>
  );
}

function PhoneMock({ hue }: { hue: number }) {
  return (
    <div className="absolute bottom-0 left-1/2 top-[10%] w-[42%] max-w-[190px] -translate-x-1/2 rounded-t-[1.6rem] border border-white/10 bg-[#171b3d] p-2.5 shadow-2xl">
      <div className="mx-auto mb-2 h-1.5 w-12 rounded-full bg-white/15" />
      <div className="h-24 rounded-xl" style={{ background: `linear-gradient(160deg, hsl(${hue} 80% 60% / .8), hsl(${hue + 50} 80% 60% / .35))` }} />
      <div className="mt-2 space-y-2">
        <div className="h-3 w-3/4 rounded bg-white/15" />
        <div className="h-3 w-1/2 rounded bg-white/10" />
        <div className="grid grid-cols-2 gap-2 pt-1">
          <div className="h-12 rounded-lg bg-white/10" />
          <div className="h-12 rounded-lg bg-white/10" />
        </div>
        <div className="h-8 rounded-full" style={{ background: `hsl(${hue} 80% 60% / .85)` }} />
      </div>
    </div>
  );
}

function DashboardMock({ hue }: { hue: number }) {
  const bars = [30, 55, 45, 75, 60, 90, 70, 85];
  return (
    <div className="absolute inset-x-[8%] bottom-0 top-[14%] rounded-t-lg border border-white/10 bg-[#171b3d] shadow-2xl">
      <div className="grid grid-cols-[48px_1fr] gap-3 p-3">
        <div className="space-y-2">
          <div className="h-6 w-6 rounded-md" style={{ background: `hsl(${hue} 80% 60%)` }} />
          {[0, 1, 2, 3].map((i) => (
            <div key={i} className="h-3 w-full rounded bg-white/10" />
          ))}
        </div>
        <div className="space-y-2">
          <div className="grid grid-cols-3 gap-2">
            {[0, 1, 2].map((i) => (
              <div key={i} className="rounded-md bg-white/10 p-2">
                <div className="h-2 w-1/2 rounded bg-white/15" />
                <div className="mt-1.5 h-3 w-3/4 rounded" style={{ background: `hsl(${hue} 80% 65% / ${0.5 + i * 0.2})` }} />
              </div>
            ))}
          </div>
          <div className="flex h-16 items-end gap-1 rounded-md bg-white/5 p-2">
            {bars.map((h, i) => (
              <div key={i} className="flex-1 rounded-t-sm" style={{ height: `${h}%`, background: `hsl(${hue} 80% 62% / ${0.35 + (i / bars.length) * 0.6})` }} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function ProjectCard({ p }: { p: Project }) {
  return (
    <article className="group">
      <Link
        href={CONTACT.whatsappWithMessage(`Olá! Vi o case "${p.name}" no site e quero saber mais.`)}
        target="_blank"
        rel="noopener noreferrer"
        className="block">
        <div data-reveal>
          <figure
            className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-ink/10 bg-paper-2"
            style={{
              backgroundImage: `radial-gradient(90% 70% at 50% 100%, hsl(${p.hue} 70% 60% / .28), transparent 65%)`,
            }}>
            <div data-parallax className="absolute inset-0 transition-transform duration-700 ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-[1.03]">
              {p.mock === 'browser' && <BrowserMock hue={p.hue} />}
              {p.mock === 'phone' && <PhoneMock hue={p.hue} />}
              {p.mock === 'dashboard' && <DashboardMock hue={p.hue} />}
            </div>
            <figcaption className="label absolute left-4 top-4 rounded-full border border-ink/15 bg-paper/70 px-2.5 py-1 !text-ink backdrop-blur">
              {p.category}
            </figcaption>
          </figure>
        </div>
        <div data-reveal className="mt-5 flex items-start justify-between gap-4 border-b border-ink/10 pb-5">
          <div>
            <h3 className="display text-xl text-ink md:text-2xl">{p.name}</h3>
            <p className="mt-1 text-sm text-muted">{p.segment} — {p.summary}</p>
            <p className="mt-3 text-sm font-medium text-violet-deep">{p.result}</p>
          </div>
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-ink/15 text-ink transition-all duration-300 group-hover:rotate-45 group-hover:bg-ink group-hover:text-paper">
            <ArrowUpRight size={16} />
          </span>
        </div>
      </Link>
    </article>
  );
}

export function Portfolio() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    const mm = gsap.matchMedia();
    mm.add('(prefers-reduced-motion: no-preference)', () => {
      // Each screen drifts inside its frame at a different pace than the page.
      gsap.utils.toArray<HTMLElement>('[data-parallax]').forEach((el) => {
        gsap.fromTo(
          el,
          { yPercent: -7 },
          {
            yPercent: 7,
            ease: 'none',
            scrollTrigger: { trigger: el, start: 'top bottom', end: 'bottom top', scrub: true },
          },
        );
      });
    });
    return () => mm.revert();
  }, []);

  return (
    <section id="trabalhos" ref={root} className="relative scroll-mt-20 py-24 md:py-32">
      <div className="container-x">
        <SectionHeading
          index="04"
          label="Trabalhos"
          title={
            <>
              Projetos que saíram do papel <span className="accent text-violet">e foram pra produção.</span>
            </>
          }
          description="Uma seleção do que construímos para saúde, varejo, logística, serviços financeiros e food service."
        />

        <div className="grid gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((p) => (
            <ProjectCard key={p.id} p={p} />
          ))}
        </div>

        <p data-reveal className="mt-20 text-center text-sm text-muted">
          Quer ver um case parecido com o seu negócio?{' '}
          <Link
            href={CONTACT.whatsappWithMessage('Olá! Gostaria de ver cases parecidos com o meu negócio.')}
            target="_blank"
            rel="noopener noreferrer"
            className="link-u font-medium text-ink">
            Chama a gente no WhatsApp.
          </Link>
        </p>
      </div>
    </section>
  );
}
