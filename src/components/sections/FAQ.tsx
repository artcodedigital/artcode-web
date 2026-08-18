'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Plus } from 'lucide-react';
import { FAQ as ITEMS } from '@/data/content';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';
import { cn } from '@/lib/utils';

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative scroll-mt-24 py-24 md:py-32">
      <div className="container-x grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <SectionHeading
          eyebrow="Perguntas frequentes"
          title={
            <>
              Dúvidas comuns,{' '}
              <span className="text-muted">respostas diretas.</span>
            </>
          }
          description="Não achou o que procurava? Manda uma mensagem — respondemos rápido."
          className="mb-0 lg:sticky lg:top-32 lg:self-start"
        />

        <div className="divide-y divide-line border-y border-line">
          {ITEMS.map((item, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={item.q} delay={i * 0.03}>
                <div>
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-${i}`}
                    className="flex w-full items-center justify-between gap-6 py-5 text-left transition-colors hover:text-violet-soft md:py-6">
                    <span className="display text-base font-semibold md:text-lg">{item.q}</span>
                    <span
                      className={cn(
                        'grid h-8 w-8 shrink-0 place-items-center rounded-full border border-line transition-all duration-300',
                        isOpen && 'rotate-45 border-violet-soft/60 bg-violet/20 text-violet-soft',
                      )}>
                      <Plus size={16} />
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={`faq-${i}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden">
                        <p className="max-w-[62ch] pb-6 text-sm leading-relaxed text-muted md:text-[0.95rem]">
                          {item.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
