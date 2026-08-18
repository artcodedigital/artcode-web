'use client';

import { Globe, Smartphone, Layers, Sparkles, PenTool, Cloud, Check } from 'lucide-react';
import { SERVICES, type Service } from '@/data/content';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Stagger, StaggerItem } from '@/components/ui/Reveal';
import { SpotlightCard } from '@/components/ui/SpotlightCard';
import { cn } from '@/lib/utils';

const ICONS = {
  globe: Globe,
  smartphone: Smartphone,
  layers: Layers,
  sparkles: Sparkles,
  pen: PenTool,
  cloud: Cloud,
} as const;

function ServiceCard({ s, index }: { s: Service; index: number }) {
  const Icon = ICONS[s.icon];
  return (
    <SpotlightCard
      as="article"
      className="flex h-full flex-col p-6 md:p-7">
      {/* decorative index */}
      <span className="pointer-events-none absolute -right-2 -top-6 select-none font-display text-[7rem] font-bold leading-none text-line/35 transition-colors duration-500 group-hover:text-violet/20">
        {String(index + 1).padStart(2, '0')}
      </span>

      <div className="relative mb-5 grid h-12 w-12 place-items-center rounded-xl border border-line bg-bg/60 text-violet-soft transition-all duration-500 group-hover:border-violet-soft/40 group-hover:shadow-glow">
        <Icon size={22} />
      </div>
      <h3 className="display relative text-xl md:text-2xl">{s.title}</h3>
      <p className="relative mt-3 text-sm leading-relaxed text-muted md:text-[0.95rem]">
        {s.description}
      </p>
      <ul className="relative mt-5 flex flex-wrap gap-2">
        {s.bullets.map((b) => (
          <li
            key={b}
            className="inline-flex items-center gap-1.5 rounded-full border border-line bg-bg/40 px-2.5 py-1 text-[0.72rem] text-muted">
            <Check size={12} className="text-mint" />
            {b}
          </li>
        ))}
      </ul>

      {s.span === 'tall' && (
        <div className="relative mt-auto pt-8">
          <MiniDashboard />
        </div>
      )}
      {s.id === 'ia' && (
        <div className="relative mt-auto pt-6">
          <MiniChat />
        </div>
      )}
    </SpotlightCard>
  );
}

function MiniDashboard() {
  const bars = [42, 68, 55, 80, 62, 92, 74];
  return (
    <div className="rounded-xl border border-line bg-bg/50 p-4">
      <div className="mb-3 flex items-center justify-between font-mono text-[0.62rem] uppercase tracking-wider text-muted">
        <span>Faturamento</span>
        <span className="text-mint">+24%</span>
      </div>
      <div className="flex h-24 items-end gap-1.5">
        {bars.map((h, i) => (
          <div
            key={i}
            className="flex-1 rounded-t-sm bg-gradient-to-t from-violet/60 to-violet-soft transition-all duration-500 group-hover:from-violet group-hover:to-mint"
            style={{ height: `${h}%`, transitionDelay: `${i * 40}ms` }}
          />
        ))}
      </div>
    </div>
  );
}

function MiniChat() {
  return (
    <div className="space-y-2 text-xs">
      <div className="ml-auto w-fit max-w-[80%] rounded-2xl rounded-br-sm bg-violet/25 px-3 py-2 text-text">
        Qual o status do pedido #4821?
      </div>
      <div className="w-fit max-w-[85%] rounded-2xl rounded-bl-sm border border-line bg-bg/60 px-3 py-2 text-muted">
        <span className="text-mint">●</span> Saiu para entrega há 12 min. Previsão: 14h20.
        Quer que eu avise quando chegar?
      </div>
    </div>
  );
}

export function Services() {
  return (
    <section id="servicos" className="relative scroll-mt-24 py-24 md:py-32">
      <div className="container-x">
        <SectionHeading
          eyebrow="O que fazemos"
          title={
            <>
              Tudo que o seu produto digital precisa,{' '}
              <span className="text-muted">em um só lugar.</span>
            </>
          }
          description="Do site institucional ao sistema complexo com IA. Você fala com um time só, e a gente cuida de design, código, infraestrutura e evolução."
        />

        <Stagger className="grid auto-rows-fr grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <StaggerItem
              key={s.id}
              className={cn(
                s.span === 'wide' && 'lg:col-span-2',
                s.span === 'tall' && 'lg:row-span-2',
              )}>
              <ServiceCard s={s} index={i} />
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
