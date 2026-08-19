'use client';

import { useState, type FormEvent } from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { CONTACT } from '@/data/content';
import { INFINITY_PATH } from '@/components/ui/Logo';
import { cn } from '@/lib/utils';

const TYPES = ['Site / Landing page', 'Aplicativo', 'Sistema sob medida', 'Integração com IA', 'Outro'];

export function Contact() {
  const [type, setType] = useState(TYPES[0]);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const name = String(fd.get('name') || '').trim();
    const company = String(fd.get('company') || '').trim();
    const message = String(fd.get('message') || '').trim();
    const text = [
      `Olá, ArtCode! Meu nome é ${name}${company ? ` (${company})` : ''}.`,
      `Tenho interesse em: ${type}.`,
      message ? `\n${message}` : '',
    ]
      .filter(Boolean)
      .join('\n');
    window.open(CONTACT.whatsappWithMessage(text), '_blank', 'noopener,noreferrer');
  };

  const field =
    'w-full border-b border-ink/25 bg-transparent py-3 text-base text-ink placeholder:text-ink/35 focus:border-ink focus:outline-none transition-colors';

  return (
    <section id="contato" className="relative scroll-mt-20 overflow-hidden border-t border-ink/10 bg-paper-2">
      <svg
        viewBox="0 0 100 56"
        fill="none"
        aria-hidden
        className="pointer-events-none absolute -bottom-[10vw] -left-[12vw] w-[60vw] opacity-[0.25]">
        <path d={INFINITY_PATH} stroke="hsl(var(--violet))" strokeWidth="1.5" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
      </svg>

      <div className="container-x relative grid gap-14 py-24 lg:grid-cols-12 lg:gap-16 lg:py-36">
        <div className="lg:col-span-6">
          <div data-reveal className="label flex items-center gap-4 border-t border-ink/15 pt-4">
            <span>07</span>
            <span className="h-px w-8 bg-ink/25" />
            <span>Vamos conversar</span>
          </div>
          <h2 data-reveal className="display mt-8 text-balance text-[2.8rem] leading-[0.98] sm:text-6xl lg:text-7xl">
            Tem uma ideia? A gente tira <span className="accent text-violet">do papel.</span>
          </h2>
          <p data-reveal className="mt-7 max-w-[46ch] text-pretty text-muted md:text-lg">
            Conte em poucas linhas o que você precisa. Em até 48h você recebe um retorno com
            próximos passos e uma estimativa inicial — sem compromisso.
          </p>

          <ul data-reveal className="mt-12 grid gap-5 text-sm sm:grid-cols-2">
            <li>
              <span className="label ">WhatsApp</span>
              <Link href={CONTACT.whatsapp} target="_blank" rel="noopener noreferrer" className="link-u mt-1 block text-lg text-ink">
                {CONTACT.phoneDisplay}
              </Link>
            </li>
            <li>
              <span className="label ">E-mail</span>
              <Link href={`mailto:${CONTACT.email}`} className="link-u mt-1 block text-lg text-ink">
                {CONTACT.email}
              </Link>
            </li>
            <li>
              <span className="label ">LinkedIn</span>
              <Link href={CONTACT.linkedin} target="_blank" rel="noopener noreferrer" className="link-u mt-1 block text-lg text-ink">
                /artcodesolutions
              </Link>
            </li>
            <li>
              <span className="label ">Onde estamos</span>
              <span className="mt-1 block text-lg text-ink/80">{CONTACT.city}</span>
            </li>
          </ul>
        </div>

        <form data-reveal onSubmit={onSubmit} className="flex flex-col gap-7 lg:col-span-5 lg:col-start-8">
          <div className="grid gap-7 sm:grid-cols-2">
            <label className="block">
              <span className="label ">Seu nome</span>
              <input name="name" required placeholder="Maria Silva" className={field} />
            </label>
            <label className="block">
              <span className="label ">Empresa (opcional)</span>
              <input name="company" placeholder="Nome da empresa" className={field} />
            </label>
          </div>

          <fieldset>
            <legend className="label mb-3 ">O que você precisa?</legend>
            <div className="flex flex-wrap gap-2">
              {TYPES.map((t) => (
                <button
                  type="button"
                  key={t}
                  onClick={() => setType(t)}
                  aria-pressed={type === t}
                  className={cn(
                    'rounded-full border px-3.5 py-1.5 text-xs font-medium transition-colors',
                    type === t
                      ? 'border-ink bg-ink text-paper'
                      : 'border-ink/25 text-ink/70 hover:border-ink/60 hover:text-ink',
                  )}>
                  {t}
                </button>
              ))}
            </div>
          </fieldset>

          <label className="block">
            <span className="label ">Conte um pouco sobre o projeto</span>
            <textarea
              name="message"
              rows={3}
              placeholder="Ex.: Preciso de um sistema para controlar pedidos e estoque, com app para os vendedores..."
              className={cn(field, 'resize-none')}
            />
          </label>

          <div>
            <button type="submit" className="btn w-full sm:w-auto">
              Enviar pelo WhatsApp <ArrowUpRight size={16} />
            </button>
            <p className="mt-3 text-xs text-muted">
              Abre uma conversa no WhatsApp com a mensagem pronta. Nenhum dado é armazenado aqui.
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}
