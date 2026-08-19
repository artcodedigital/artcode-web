import { cn } from '@/lib/utils';

/** Path of the ∞ mark, shared with the hero's oversized outline version. */
export const INFINITY_PATH =
  'M50 28C40 12 30 6 20 6C10 6 4 16 4 28C4 40 10 50 20 50C30 50 40 44 50 28C60 12 70 6 80 6C90 6 96 16 96 28C96 40 90 50 80 50C74 50 68 47 62 42';

export function Logo({
  className,
  withText = true,
  size = 34,
  tone = 'ink',
}: {
  className?: string;
  withText?: boolean;
  size?: number;
  tone?: 'ink' | 'paper';
}) {
  return (
    <span className={cn('inline-flex items-center gap-2', className)}>
      <svg
        width={size}
        height={size * 0.56}
        viewBox="0 0 100 56"
        fill="none"
        aria-hidden="true"
        className="shrink-0">
        <path
          d={INFINITY_PATH}
          stroke="hsl(var(--violet))"
          strokeWidth="11"
          strokeLinecap="round"
        />
      </svg>
      {withText && (
        <span
          className={cn(
            'display text-[1.3rem] leading-none tracking-[-0.04em]',
            tone === 'ink' ? 'text-ink' : 'text-paper',
          )}>
          Art<span className="text-violet">Code</span>.
        </span>
      )}
    </span>
  );
}
