'use client';

import { useState, type FormEvent } from 'react';
import { ArrowRight, Mail, MessageCircle, Phone } from 'lucide-react';
import Link from 'next/link';
import { CONTACT } from '@/data/content';
import { Reveal } from '@/components/ui/Reveal';
import { Magnetic } from '@/components/ui/Magnetic';

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

  return (
    <section id="contato" className="relative scroll-mt-24 py-24 md:py-32">
      <div className="container-x">
        <Reveal>
          <div className="noise relative overflow-hidden rounded-[2rem] border border-line bg-surface">
            {/* Background */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  'radial-gradient(70% 90% at 0% 0%, hsl(var(--violet) / .35), transparent 60%), radial-gradient(60% 80% at 100% 100%, hsl(var(--mint) / .18), transparent 60%)',
              }}
            />
            <div className="grid-bg absolute inset-0 opacity-50" aria-hidden />

            <div className="relative grid gap-12 p-8 md:p-12 lg:grid-cols-[1fr_1fr] lg:gap-16 lg:p-16">
              {/* Copy */}
              <div className="flex flex-col">
                <span className="eyebrow">Vamos conversar</span>
                <h2 className="display mt-4 text-balance text-4xl leading-[1.02] md:text-5xl lg:text-6xl">
                  Tem uma ideia? <br />
                  <span className="gradient-text">A gente tira do papel.</span>
                </h2>
                <p className="mt-6 max-w-[48ch] text-pretty text-muted md:text-lg">
                  Conte em poucas linhas o que você precisa. Em até 48h você recebe um retorno
                  com próximos passos e uma estimativa inicial — sem compromisso.
                </p>

                <ul className="mt-10 space-y-4 text-sm">
                  <li>
                    <Link
                      href={CONTACT.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-3 text-text">
                      <span className="grid h-10 w-10 place-items-center rounded-full border border-line bg-bg/50 text-mint transition-colors group-hover:border-mint/50">
                        <MessageCircle size={18} />
                      </span>
                      <span>
                        <span className="block text-xs text-muted">WhatsApp</span>
                        <span className="font-semibold">{CONTACT.phoneDisplay}</span>
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href={`mailto:${CONTACT.email}`} className="group inline-flex items-center gap-3 text-text">
                      <span className="grid h-10 w-10 place-items-center rounded-full border border-line bg-bg/50 text-violet-soft transition-colors group-hover:border-violet-soft/50">
                        <Mail size={18} />
                      </span>
                      <span>
                        <span className="block text-xs text-muted">E-mail</span>
                        <span className="font-semibold">{CONTACT.email}</span>
                      </span>
                    </Link>
                  </li>
                  <li className="inline-flex items-center gap-3 text-text">
                    <span className="grid h-10 w-10 place-items-center rounded-full border border-line bg-bg/50 text-amber">
                      <Phone size={18} />
                    </span>
                    <span>
                      <span className="block text-xs text-muted">Onde estamos</span>
                      <span className="font-semibold">{CONTACT.city}</span>
                    </span>
                  </li>
                </ul>
              </div>

              {/* Form */}
              <form onSubmit={onSubmit} className="glass flex flex-col gap-4 rounded-2xl p-6 md:p-8">
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Seu nome" name="name" placeholder="Maria Silva" required />
                  <Field label="Empresa (opcional)" name="company" placeholder="Nome da empresa" />
                </div>

                <fieldset>
                  <legend className="mb-2 text-xs font-medium text-muted">O que você precisa?</legend>
                  <div className="flex flex-wrap gap-2">
                    {TYPES.map((t) => (
                      <button
                        type="button"
                        key={t}
                        onClick={() => setType(t)}
                        aria-pressed={type === t}
                        className={
                          'rounded-full border px-3 py-1.5 text-xs font-medium transition-all ' +
                          (type === t
                            ? 'border-mint bg-mint/15 text-mint'
                            : 'border-line bg-bg/40 text-muted hover:border-violet-soft/40 hover:text-text')
                        }>
                        {t}
                      </button>
                    ))}
                  </div>
                </fieldset>

                <label className="flex flex-col gap-1.5">
                  <span className="text-xs font-medium text-muted">Conte um pouco sobre o projeto</span>
                  <textarea
                    name="message"
                    rows={4}
                    placeholder="Ex.: Preciso de um sistema para controlar pedidos e estoque, com app para os vendedores..."
                    className="resize-none rounded-xl border border-line bg-bg/50 px-4 py-3 text-sm text-text placeholder:text-muted/60 focus:border-violet-soft/60 focus:outline-none focus:ring-2 focus:ring-violet/30"
                  />
                </label>

                <Magnetic strength={0.15} className="mt-2">
                  <button type="submit" className="btn-primary w-full !py-3.5">
                    Enviar pelo WhatsApp <ArrowRight size={18} />
                  </button>
                </Magnetic>
                <p className="text-center text-[0.7rem] text-muted">
                  Abre uma conversa no WhatsApp com sua mensagem pronta. Nenhum dado é armazenado aqui.
                </p>
              </form>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  placeholder,
  required,
}: {
  label: string;
  name: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="text-xs font-medium text-muted">{label}</span>
      <input
        name={name}
        required={required}
        placeholder={placeholder}
        className="rounded-xl border border-line bg-bg/50 px-4 py-3 text-sm text-text placeholder:text-muted/60 focus:border-violet-soft/60 focus:outline-none focus:ring-2 focus:ring-violet/30"
      />
    </label>
  );
}
