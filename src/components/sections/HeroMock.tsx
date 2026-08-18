'use client';

import { useEffect, useState, type CSSProperties } from 'react';
import { Bot, CheckCircle2, Rocket, Smartphone, Globe, Database } from 'lucide-react';

const LINES = [
  { t: '$ artcode init "seu-projeto"', c: 'text-text' },
  { t: '✓ Descoberta concluída — escopo definido', c: 'text-mint' },
  { t: '✓ Protótipo aprovado no Figma', c: 'text-mint' },
  { t: '→ Construindo web + app + API...', c: 'text-violet-soft' },
  { t: '✓ Integração com IA conectada', c: 'text-mint' },
  { t: '✓ Testes passaram (142/142)', c: 'text-mint' },
  { t: '🚀 Deploy em produção — 100/100 Lighthouse', c: 'text-amber' },
];

function useTypewriter(lines: typeof LINES) {
  const [shown, setShown] = useState<{ t: string; c: string; done: boolean }[]>([]);

  useEffect(() => {
    let cancelled = false;
    let li = 0;
    let ci = 0;
    let buffer: typeof shown = [];

    const tick = () => {
      if (cancelled) return;
      if (li >= lines.length) {
        // pause then restart
        setTimeout(() => {
          if (cancelled) return;
          buffer = [];
          li = 0;
          ci = 0;
          setShown([]);
          setTimeout(tick, 400);
        }, 4200);
        return;
      }
      const line = lines[li];
      ci++;
      const partial = line.t.slice(0, ci);
      buffer = [...buffer.slice(0, li), { t: partial, c: line.c, done: ci >= line.t.length }];
      setShown(buffer);
      if (ci >= line.t.length) {
        li++;
        ci = 0;
        setTimeout(tick, li === 1 ? 500 : 420);
      } else {
        setTimeout(tick, li === 0 ? 45 : 14);
      }
    };
    const start = setTimeout(tick, 900);
    return () => {
      cancelled = true;
      clearTimeout(start);
    };
  }, [lines]);

  return shown;
}

const floatCard =
  'glass absolute flex items-center gap-3 rounded-2xl px-4 py-3 text-sm shadow-[0_20px_60px_-20px_rgba(0,0,0,.8)]';

export function HeroMock() {
  const lines = useTypewriter(LINES);

  return (
    <div className="relative mx-auto w-full max-w-[560px]" style={{ transformStyle: 'preserve-3d' }}>
      {/* Glow behind */}
      <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-gradient-to-br from-violet/40 via-transparent to-mint/25 blur-3xl" />

      {/* Main window */}
      <div className="glass overflow-hidden rounded-2xl">
        <div className="flex items-center gap-2 border-b border-line px-4 py-3">
          <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
          <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
          <span className="h-3 w-3 rounded-full bg-[#28c840]" />
          <span className="ml-3 font-mono text-[0.7rem] text-muted">artcode — pipeline de entrega</span>
          <span className="ml-auto flex items-center gap-1.5 font-mono text-[0.65rem] text-mint">
            <span className="relative flex h-2 w-2">
              <span className="animate-pulse-ring absolute inline-flex h-full w-full rounded-full bg-mint" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-mint" />
            </span>
            live
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-[1fr_170px]">
          {/* Terminal */}
          <div className="min-h-[268px] p-5 font-mono text-[0.78rem] leading-[1.9]">
            {lines.map((l, i) => (
              <div key={i} className={l.c}>
                {l.t}
                {i === lines.length - 1 && !l.done && (
                  <span className="animate-blink ml-0.5 inline-block h-[1em] w-[0.55em] translate-y-[2px] bg-mint/80 align-middle" />
                )}
              </div>
            ))}
            {lines.length === 0 && (
              <span className="animate-blink inline-block h-[1em] w-[0.55em] bg-mint/80" />
            )}
          </div>

          {/* Side stats */}
          <div className="hidden flex-col gap-3 border-l border-line p-4 sm:flex">
            {[
              { label: 'Uptime', value: '99.98%', bar: 99 },
              { label: 'Performance', value: '100', bar: 100 },
              { label: 'Acessibilidade', value: '100', bar: 100 },
              { label: 'SEO', value: '98', bar: 98 },
            ].map((s, i) => (
              <div key={s.label}>
                <div className="flex justify-between font-mono text-[0.62rem] uppercase tracking-wider text-muted">
                  <span>{s.label}</span>
                  <span className="text-text">{s.value}</span>
                </div>
                <div className="mt-1.5 h-1 overflow-hidden rounded-full bg-line">
                  <div
                    style={{ width: `${s.bar}%`, animationDelay: `${1.2 + i * 0.15}s` }}
                    className="anim-grow h-full rounded-full bg-gradient-to-r from-violet to-mint"
                  />
                </div>
              </div>
            ))}
            <div className="mt-auto rounded-xl border border-line bg-bg/40 p-3">
              <div className="flex items-center gap-2 text-xs text-text">
                <Bot size={14} className="text-violet-soft" />
                Assistente IA
              </div>
              <p className="mt-1 text-[0.68rem] leading-snug text-muted">
                “Resumi 340 tickets e priorizei 12 para hoje.”
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Floating cards */}
      <div
        style={{ transform: 'translateZ(60px)', '--enter-delay': '1.4s', '--float-delay': '0s' } as CSSProperties}
        className={`${floatCard} anim-card -left-6 -top-7 hidden md:flex lg:-left-12`}>
        <span className="grid h-9 w-9 place-items-center rounded-xl bg-violet/20 text-violet-soft">
          <Globe size={18} />
        </span>
        <div>
          <div className="text-xs text-muted">Site institucional</div>
          <div className="font-semibold">Publicado</div>
        </div>
        <CheckCircle2 size={16} className="ml-1 text-mint" />
      </div>

      <div
        style={{ transform: 'translateZ(80px)', '--enter-delay': '1.6s', '--float-delay': '1.5s' } as CSSProperties}
        className={`${floatCard} anim-card -right-6 bottom-20 hidden md:flex lg:-right-12`}>
        <span className="grid h-9 w-9 place-items-center rounded-xl bg-mint/15 text-mint">
          <Smartphone size={18} />
        </span>
        <div>
          <div className="text-xs text-muted">App iOS + Android</div>
          <div className="font-semibold">Nas lojas</div>
        </div>
      </div>

      <div
        style={{ transform: 'translateZ(50px)', '--enter-delay': '1.8s', '--float-delay': '3s' } as CSSProperties}
        className={`${floatCard} anim-card -bottom-7 left-6 hidden md:flex`}>
        <span className="grid h-9 w-9 place-items-center rounded-xl bg-amber/15 text-amber">
          <Database size={18} />
        </span>
        <div>
          <div className="text-xs text-muted">Sistema interno</div>
          <div className="font-semibold">+2.1k usuários</div>
        </div>
        <Rocket size={16} className="ml-1 text-violet-soft" />
      </div>
    </div>
  );
}
