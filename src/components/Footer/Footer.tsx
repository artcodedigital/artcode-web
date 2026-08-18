import Link from 'next/link';
import { Linkedin, Mail, MessageCircle, ArrowUp } from 'lucide-react';
import { CONTACT, NAV } from '@/data/content';
import { Logo } from '@/components/ui/Logo';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="relative overflow-hidden border-t border-line">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-64 bg-[radial-gradient(60%_100%_at_50%_100%,hsl(var(--violet)/.18),transparent_70%)]"
      />
      <div className="container-x relative grid gap-12 py-16 md:grid-cols-[1.4fr_1fr_1fr] md:py-20">
        <div>
          <Link href="#top" aria-label="ArtCode — início">
            <Logo size={40} />
          </Link>
          <p className="mt-5 max-w-[36ch] text-sm leading-relaxed text-muted">
            Sites, aplicativos e sistemas sob medida, com Inteligência Artificial integrada. Do
            design ao deploy.
          </p>
          <div className="mt-6 flex gap-2">
            {[
              { href: CONTACT.whatsapp, label: 'WhatsApp', Icon: MessageCircle },
              { href: `mailto:${CONTACT.email}`, label: 'E-mail', Icon: Mail },
              { href: CONTACT.linkedin, label: 'LinkedIn', Icon: Linkedin },
            ].map(({ href, label, Icon }) => (
              <Link
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                aria-label={label}
                className="grid h-10 w-10 place-items-center rounded-full border border-line text-muted transition-all hover:-translate-y-0.5 hover:border-violet-soft/50 hover:text-text">
                <Icon size={17} />
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-muted">Navegação</h4>
          <ul className="mt-5 space-y-3 text-sm">
            {[...NAV, { label: 'Contato', href: '#contato' }].map((n) => (
              <li key={n.href}>
                <Link href={n.href} className="text-text/80 transition-colors hover:text-mint">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-muted">Contato</h4>
          <ul className="mt-5 space-y-3 text-sm">
            <li>
              <Link href={CONTACT.whatsapp} target="_blank" rel="noopener noreferrer" className="text-text/80 transition-colors hover:text-mint">
                {CONTACT.phoneDisplay}
              </Link>
            </li>
            <li>
              <Link href={`mailto:${CONTACT.email}`} className="text-text/80 transition-colors hover:text-mint">
                {CONTACT.email}
              </Link>
            </li>
            <li className="text-muted">{CONTACT.city}</li>
          </ul>
        </div>
      </div>

      <div className="relative border-t border-line">
        <div className="container-x flex flex-col items-center justify-between gap-3 py-6 text-xs text-muted sm:flex-row">
          <p>© {year} ArtCode Digital. Todos os direitos reservados.</p>
          <div className="flex items-center gap-6">
            <p className="hidden sm:block">Feito com café e código em Recife.</p>
            <Link
              href="#top"
              aria-label="Voltar ao topo"
              className="grid h-9 w-9 place-items-center rounded-full border border-line transition-all hover:-translate-y-0.5 hover:border-violet-soft/50 hover:text-text">
              <ArrowUp size={15} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
