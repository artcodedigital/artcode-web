import { cn } from '@/lib/utils';

type Props = {
  index: string;
  label: string;
  title: React.ReactNode;
  description?: string;
  className?: string;
  dark?: boolean;
};

/**
 * Editorial section opener: mono index + label on a hairline, then a big
 * headline. Children get `data-reveal` so SmoothScroll animates them in.
 */
export function SectionHeading({ index, label, title, description, className, dark }: Props) {
  return (
    <div className={cn('mb-14 md:mb-20', className)}>
      <div
        data-reveal
        className={cn(
          'label flex items-center gap-4 border-t pt-4',
          dark ? 'border-paper/15 text-paper/60' : 'border-ink/15',
        )}>
        <span className="tabular-nums">{index}</span>
        <span className={cn('h-px w-8', dark ? 'bg-paper/25' : 'bg-ink/25')} />
        <span>{label}</span>
      </div>
      <h2
        data-reveal
        className={cn(
          'display mt-8 max-w-[18ch] text-balance text-[2.5rem] leading-[0.98] sm:text-5xl md:text-6xl',
          dark ? 'text-paper' : 'text-ink',
        )}>
        {title}
      </h2>
      {description && (
        <p
          data-reveal
          className={cn(
            'mt-6 max-w-[54ch] text-pretty text-base leading-relaxed md:text-lg',
            dark ? 'text-paper/65' : 'text-muted',
          )}>
          {description}
        </p>
      )}
    </div>
  );
}
