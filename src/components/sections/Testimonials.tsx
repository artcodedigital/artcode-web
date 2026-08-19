import { TESTIMONIALS } from '@/data/content';
import { SectionHeading } from '@/components/ui/SectionHeading';

export function Testimonials() {
  return (
    <section id="depoimentos" className="relative scroll-mt-20 py-24 md:py-32">
      <div className="container-x">
        <SectionHeading
          index="05"
          label="Quem trabalhou com a gente"
          title={
            <>
              Clientes falam melhor <span className="accent text-violet">do que a gente.</span>
            </>
          }
        />
        <div className="grid gap-x-12 gap-y-14 md:grid-cols-2">
          {TESTIMONIALS.map((t, i) => (
            <figure key={t.name} data-reveal className={i % 2 === 1 ? 'md:mt-16' : ''}>
              <span className="display block text-[4rem] leading-[0.7] text-violet" aria-hidden>
                “
              </span>
              <blockquote className="display mt-4 text-pretty text-xl leading-snug tracking-[-0.01em] text-ink md:text-[1.6rem]">
                {t.quote}
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-4 border-t border-ink/10 pt-4 text-sm">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-ink font-display text-xs font-semibold text-paper">
                  {t.name.split(' ').map((n) => n[0]).slice(0, 2).join('')}
                </span>
                <span>
                  <span className="block font-medium text-ink">{t.name}</span>
                  <span className="text-muted">{t.role}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
