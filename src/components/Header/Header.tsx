'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { CONTACT, NAV } from '@/data/content';
import { Logo } from '@/components/ui/Logo';
import { cn } from '@/lib/utils';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('lenis-stopped', open);
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
      document.documentElement.classList.remove('lenis-stopped');
    };
  }, [open]);

  return (
    <>
      {/*
        No transform on this element, ever — a transformed ancestor stops the
        backdrop-filter below from sampling the page behind it.
      */}
      <header
        className={cn(
          'fixed inset-x-0 top-0 z-50 transition-[background-color,border-color] duration-500',
          scrolled
            ? 'border-b border-ink/10 bg-paper/80 backdrop-blur-md'
            : 'border-b border-transparent',
        )}>
        <div className="container-x flex h-[72px] items-center justify-between md:h-20">
          <Link href="#top" aria-label="ArtCode — início" className="relative z-[60]">
            <Logo />
          </Link>

          <nav className="label hidden items-center gap-7 md:flex" aria-label="Principal">
            {NAV.map((item) => (
              <Link key={item.href} href={item.href} className="link-u text-ink/70 transition-colors hover:text-ink">
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href={CONTACT.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="btn hidden !py-2.5 !pl-5 !pr-4 md:inline-flex">
              Fale conosco <ArrowUpRight size={16} />
            </Link>
            <button
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? 'Fechar menu' : 'Abrir menu'}
              aria-expanded={open}
              className="relative z-[60] grid h-11 w-11 place-items-center md:hidden">
              <span
                className={cn(
                  'absolute h-px w-6 transition-all duration-300',
                  open ? 'rotate-45 bg-ink' : '-translate-y-1.5 bg-ink',
                )}
              />
              <span
                className={cn(
                  'absolute h-px w-6 transition-all duration-300',
                  open ? '-rotate-45 bg-ink' : 'translate-y-1.5 bg-ink',
                )}
              />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <div
        aria-hidden={!open}
        className={cn(
          'fixed inset-0 z-40 bg-paper-2 text-ink transition-[clip-path] duration-700 ease-[cubic-bezier(.76,0,.24,1)] md:hidden',
          open ? '[clip-path:circle(150%_at_100%_0%)]' : 'pointer-events-none [clip-path:circle(0%_at_100%_0%)]',
        )}>
        <nav className="container-x flex h-full flex-col justify-center gap-1 pt-16" aria-label="Menu mobile">
          {NAV.map((item, i) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              style={{ transitionDelay: open ? `${0.25 + i * 0.05}s` : '0s' }}
              className={cn(
                'display flex items-baseline gap-4 border-b border-ink/10 py-4 text-4xl transition-all duration-500',
                open ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0',
              )}>
              <span className="font-mono text-xs text-muted">0{i + 1}</span>
              {item.label}
            </Link>
          ))}
          <Link
            href={CONTACT.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            style={{ transitionDelay: open ? '0.55s' : '0s' }}
            className={cn(
              'btn mt-8 transition-all duration-500',
              open ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0',
            )}>
            Falar no WhatsApp <ArrowUpRight size={16} />
          </Link>
        </nav>
      </div>
    </>
  );
};

export default Header;
