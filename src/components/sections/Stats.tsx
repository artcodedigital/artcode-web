'use client';

import { useEffect, useRef, useState } from 'react';
import { animate, useInView } from 'motion/react';
import { STATS } from '@/data/content';
import { Reveal } from '@/components/ui/Reveal';

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-20% 0px' });
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, {
      duration: 1.8,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setN(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, value]);

  return (
    <span ref={ref} className="tabular-nums">
      {n}
      <span className="text-violet-soft">{suffix}</span>
    </span>
  );
}

export function Stats() {
  return (
    <section className="relative py-10">
      <div className="container-x">
        <Reveal>
          <div className="glass grid grid-cols-2 divide-line rounded-3xl md:grid-cols-4 md:divide-x">
            {STATS.map((s, i) => (
              <div
                key={s.label}
                className={
                  'flex flex-col items-center gap-1 px-6 py-8 text-center md:py-10 ' +
                  (i < 2 ? 'border-b border-line md:border-b-0' : '') +
                  (i % 2 === 0 ? ' border-r border-line md:border-r-0' : '')
                }>
                <span className="display text-4xl md:text-5xl">
                  <Counter value={s.value} suffix={s.suffix} />
                </span>
                <span className="text-xs text-muted md:text-sm">{s.label}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
