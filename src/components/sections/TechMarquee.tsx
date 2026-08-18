import { TECH_STACK } from '@/data/content';

export function TechMarquee() {
  const items = [...TECH_STACK, ...TECH_STACK];
  return (
    <section aria-label="Tecnologias que usamos" className="relative py-6">
      <div className="hairline" />
      <div className="container-x flex flex-col items-center gap-4 py-8 md:flex-row md:gap-10">
        <p className="shrink-0 font-mono text-[0.7rem] uppercase tracking-[0.2em] text-muted">
          Stack que dominamos
        </p>
        <div className="marquee-mask w-full overflow-hidden">
          <div
            className="animate-marquee flex w-max items-center gap-3"
            style={{ ['--marquee-duration' as string]: '55s' }}>
            {items.map((t, i) => (
              <span
                key={t + i}
                className="whitespace-nowrap rounded-full border border-line bg-surface/50 px-4 py-1.5 font-mono text-xs text-muted transition-colors hover:border-violet-soft/40 hover:text-text">
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="hairline" />
    </section>
  );
}
