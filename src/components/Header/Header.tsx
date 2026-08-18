'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useScroll, useSpring } from 'motion/react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { CONTACT, NAV } from '@/data/content';
import { Logo } from '@/components/ui/Logo';
import { cn } from '@/lib/utils';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="fixed inset-x-0 top-0 z-50">
        <motion.div
          style={{ scaleX: progress }}
          className="absolute left-0 top-0 h-[2px] w-full origin-left bg-gradient-to-r from-violet via-violet-soft to-mint"
        />
        <div
          className={cn(
            'container-x mt-3 flex items-center justify-between rounded-full px-4 py-2.5 transition-all duration-500 md:mt-4 md:px-5',
            scrolled ? 'glass shadow-[0_10px_40px_-20px_rgba(0,0,0,.8)]' : 'border border-transparent',
          )}>
          <Link href="#top" className="group flex items-center" aria-label="ArtCode — início">
            <Logo className="transition-transform duration-500 group-hover:-rotate-2" />
          </Link>

          <nav className="hidden items-center gap-1 md:flex" aria-label="Principal">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="relative rounded-full px-3.5 py-2 text-sm font-medium text-muted transition-colors hover:text-text">
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Link
              href={CONTACT.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary hidden !py-2 !pl-4 !pr-3 md:inline-flex">
              Fale conosco
              <ArrowUpRight size={16} />
            </Link>
            <button
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? 'Fechar menu' : 'Abrir menu'}
              aria-expanded={open}
              className="grid h-10 w-10 place-items-center rounded-full border border-line bg-surface/60 text-text md:hidden">
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-bg/95 backdrop-blur-xl md:hidden">
            <motion.nav
              initial="hidden"
              animate="show"
              exit="hidden"
              variants={{
                hidden: {},
                show: { transition: { staggerChildren: 0.06, delayChildren: 0.1 } },
              }}
              className="container-x flex h-full flex-col justify-center gap-2 pt-20"
              aria-label="Menu mobile">
              {NAV.map((item) => (
                <motion.div
                  key={item.href}
                  variants={{
                    hidden: { opacity: 0, x: -24 },
                    show: { opacity: 1, x: 0 },
                  }}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="display block border-b border-line py-4 text-4xl text-text">
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 16 },
                  show: { opacity: 1, y: 0 },
                }}
                className="mt-8">
                <Link
                  href={CONTACT.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full">
                  Falar no WhatsApp <ArrowUpRight size={16} />
                </Link>
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
