'use client';

import { motion, type Variants } from 'motion/react';
import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

const variants: Variants = {
  hidden: { opacity: 0, y: 28, filter: 'blur(6px)' },
  show: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

type Props = {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: 'div' | 'section' | 'li' | 'span' | 'p' | 'h2' | 'h3';
  once?: boolean;
};

export function Reveal({
  children,
  className,
  delay = 0,
  as = 'div',
  once = true,
}: Props) {
  const Tag = motion[as];
  return (
    <Tag
      className={cn(className)}
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{ once, margin: '-10% 0px -10% 0px' }}
      transition={{ delay }}>
      {children}
    </Tag>
  );
}

export function Stagger({
  children,
  className,
  stagger = 0.08,
}: {
  children: ReactNode;
  className?: string;
  stagger?: number;
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-10% 0px -10% 0px' }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: stagger } },
      }}>
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div className={className} variants={variants}>
      {children}
    </motion.div>
  );
}
