'use client';

import Link from 'next/link';
import { useEffect, useRef } from 'react';
import { ArrowUp } from 'lucide-react';
import { CONTACT, NAV } from '@/data/content';
import { Logo } from '@/components/ui/Logo';
import { gsap } from '@/lib/gsap';

const Footer = () => {
  const year = new Date().getFullYear();
  const wordRef = useRef<HTMLDivElement>(null);
  const rootRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // The giant wordmark rises out of the bottom edge as the footer scrolls in.
      gsap.fromTo(
        wordRef.current,
        { yPercent: 35 },
        {
          yPercent: 0,
          ease: 'none',
          scrollTrigger: { trigger: rootRef.current, start: 'top bottom', end: 'bottom bottom', scrub: true },
        },
      );
    }, rootRef);
    return () => ctx.revert();
  }, []);

  return (
    <footer ref={rootRef} className="relative overflow-hidden border-t border-ink/10">
      <div className="container-x grid gap-12 py-16 md:grid-cols-[1.3fr_1fr_1fr] md:py-20">
        <div>
          <Link href="#top" aria-label="ArtCode — início">
            <Logo size={40} />
          </Link>
          <p className="mt-5 max-w-[34ch] text-sm leading-relaxed text-muted">
            Estúdio de software em Recife. Sites, apps, sistemas e IA — sob medida, do rascunho
            ao deploy.
          </p>
        </div>

        <div>
          <h4 className="label">Navegação</h4>
          <ul className="mt-5 space-y-2.5 text-sm">
            {[...NAV, { label: 'Contato', href: '#contato' }].map((n) => (
              <li key={n.href}>
                <Link href={n.href} className="link-u text-ink/80 hover:text-ink">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="label">Contato</h4>
          <ul className="mt-5 space-y-2.5 text-sm">
            <li>
              <Link href={CONTACT.whatsapp} target="_blank" rel="noopener noreferrer" className="link-u text-ink/80 hover:text-ink">
                {CONTACT.phoneDisplay}
              </Link>
            </li>
            <li>
              <Link href={`mailto:${CONTACT.email}`} className="link-u text-ink/80 hover:text-ink">
                {CONTACT.email}
              </Link>
            </li>
            <li>
              <Link href={CONTACT.linkedin} target="_blank" rel="noopener noreferrer" className="link-u text-ink/80 hover:text-ink">
                LinkedIn
              </Link>
            </li>
            <li className="text-muted">{CONTACT.city}</li>
          </ul>
        </div>
      </div>

      <div className="container-x flex items-center justify-between border-t border-ink/10 py-5 text-xs text-muted">
        <p>© {year} ArtCode Digital. Todos os direitos reservados.</p>
        <Link
          href="#top"
          aria-label="Voltar ao topo"
          className="grid h-9 w-9 place-items-center rounded-full border border-ink/15 transition-colors hover:border-ink hover:bg-ink hover:text-paper">
          <ArrowUp size={15} />
        </Link>
      </div>

      {/* Oversized wordmark, cropped by the viewport bottom. */}
      <div className="pointer-events-none select-none overflow-hidden" aria-hidden>
        <div
          ref={wordRef}
          className="display container-x -mb-[0.22em] text-[19vw] leading-[0.85] tracking-[-0.05em] text-ink/[0.06]">
          ArtCode<span className="text-violet/40">.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
