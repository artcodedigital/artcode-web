'use client';

import { useRef, type MouseEvent, type ReactNode } from 'react';
import { cn } from '@/lib/utils';

type Props = {
  children: ReactNode;
  className?: string;
  as?: 'div' | 'article' | 'li';
};

/**
 * Card with a cursor-following border glow. Pure CSS variables — no re-renders.
 */
export function SpotlightCard({ children, className, as = 'div' }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const Tag = as as 'div';

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty('--mx', `${e.clientX - rect.left}px`);
    el.style.setProperty('--my', `${e.clientY - rect.top}px`);
  };

  return (
    <Tag
      ref={ref}
      onMouseMove={onMove}
      className={cn('card card-glow group', className)}>
      {children}
    </Tag>
  );
}
