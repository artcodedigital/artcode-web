import { Quote, Star } from 'lucide-react';
import { TESTIMONIALS } from '@/data/content';
import { SectionHeading } from '@/components/ui/SectionHeading';

function Card({ t }: { t: (typeof TESTIMONIALS)[number] }) {
  return (
    <figure className="card w-[340px] shrink-0 p-6 md:w-[420px]">
      <Quote size={20} className="text-violet-soft" />
      <blockquote className="mt-4 text-pretty text-sm leading-relaxed text-text md:text-[0.95rem]">
        “{t.quote}”
      </blockquote>
      <figcaption className="mt-6 flex items-center gap-3">
        <span
          aria-hidden
          className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-violet to-mint font-display text-sm font-bold text-bg">
          {t.name
            .split(' ')
            .map((n) => n[0])
            .slice(0, 2)
            .join('')}
        </span>
        <div className="text-sm">
          <div className="font-semibold">{t.name}</div>
          <div className="text-xs text-muted">{t.role}</div>
        </div>
        <span className="ml-auto flex gap-0.5 text-amber" aria-label="5 estrelas">
          {[0, 1, 2, 3, 4].map((i) => (
            <Star key={i} size={12} fill="currentColor" />
          ))}
        </span>
      </figcaption>
    </figure>
  );
}

export function Testimonials() {
  const rowA = [...TESTIMONIALS, ...TESTIMONIALS];
  const rowB = [...TESTIMONIALS.slice().reverse(), ...TESTIMONIALS.slice().reverse()];

  return (
    <section id="depoimentos" className="relative scroll-mt-24 overflow-hidden py-24 md:py-32">
      <div className="container-x">
        <SectionHeading
          align="center"
          eyebrow="Depoimentos"
          title={
            <>
              Quem já construiu com a gente{' '}
              <span className="text-muted">recomenda.</span>
            </>
          }
        />
      </div>

      <div className="marquee-mask space-y-5">
        <div
          className="animate-marquee flex w-max gap-5"
          style={{ ['--marquee-duration' as string]: '60s' }}>
          {rowA.map((t, i) => (
            <Card key={i} t={t} />
          ))}
        </div>
        <div
          className="animate-marquee flex w-max gap-5 [animation-direction:reverse]"
          style={{ ['--marquee-duration' as string]: '70s' }}>
          {rowB.map((t, i) => (
            <Card key={i} t={t} />
          ))}
        </div>
      </div>
    </section>
  );
}
