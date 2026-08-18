import { cn } from '@/lib/utils';

/**
 * ArtCode brand mark: violet infinity loop + wordmark.
 * Rebuilt as SVG so it works on dark backgrounds (the PNG has navy text).
 */
export function Logo({
  className,
  withText = true,
  size = 34,
}: {
  className?: string;
  withText?: boolean;
  size?: number;
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
        <defs>
          <linearGradient id="ac-grad" x1="0" y1="0" x2="100" y2="56" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="hsl(258 100% 70%)" />
            <stop offset="1" stopColor="hsl(258 100% 56%)" />
          </linearGradient>
        </defs>
        <path
          d="M50 28C40 12 30 6 20 6C10 6 4 16 4 28C4 40 10 50 20 50C30 50 40 44 50 28C60 12 70 6 80 6C90 6 96 16 96 28C96 40 90 50 80 50C74 50 68 47 62 42"
          stroke="url(#ac-grad)"
          strokeWidth="11"
          strokeLinecap="round"
        />
      </svg>
      {withText && (
        <span className="display text-[1.35rem] leading-none tracking-[-0.04em] text-text">
          Art<span className="text-violet-soft">Code</span>
          <span className="text-mint">.</span>
        </span>
      )}
    </span>
  );
}
