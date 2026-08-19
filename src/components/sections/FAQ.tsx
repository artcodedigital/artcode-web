'use client';

import { useState } from 'react';
import { Plus } from 'lucide-react';
import { FAQ as ITEMS } from '@/data/content';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { cn } from '@/lib/utils';

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative scroll-mt-20 py-24 md:py-32">
      <div className="container-x grid gap-12 lg:grid-cols-12 lg:gap-16">
        <SectionHeading
          index="06"
          label="Perguntas frequentes"
          title={
            <>
              Dúvidas comuns, <span className="accent text-violet">respostas diretas.</span>
            </>
          }
          description="Não achou o que procurava? Manda uma mensagem — respondemos rápido."
          className="mb-0 lg:col-span-5 lg:sticky lg:top-28 lg:self-start"
        />

        <div className="lg:col-span-7">
          {ITEMS.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.q} data-reveal className="border-t border-ink/10 last:border-b">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-${i}`}
                  className="flex w-full items-center justify-between gap-6 py-6 text-left">
                  <span className="display text-lg text-ink md:text-xl">{item.q}</span>
                  <span
                    className={cn(
                      'grid h-9 w-9 shrink-0 place-items-center rounded-full border border-ink/15 transition-all duration-300',
                      isOpen && 'rotate-45 bg-ink text-paper',
                    )}>
                    <Plus size={16} />
                  </span>
                </button>
                <div
                  id={`faq-${i}`}
                  className="grid transition-[grid-template-rows] duration-500 ease-[cubic-bezier(.22,1,.36,1)]"
                  style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}>
                  <div className="overflow-hidden">
                    <p className="max-w-[62ch] pb-7 text-[0.95rem] leading-relaxed text-muted md:text-base">
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
