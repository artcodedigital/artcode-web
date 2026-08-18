import { cn } from '@/lib/utils';
import { Reveal } from './Reveal';

type Props = {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  className,
}: Props) {
  return (
    <div
      className={cn(
        'mb-12 flex flex-col gap-4 md:mb-16',
        align === 'center' && 'items-center text-center',
        className,
      )}>
      <Reveal>
        <span className="eyebrow inline-flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-mint shadow-glow-mint" />
          {eyebrow}
        </span>
      </Reveal>
      <Reveal delay={0.05}>
        <h2 className="display max-w-[20ch] text-balance text-3xl leading-[1.05] sm:text-4xl md:text-5xl">
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={0.1}>
          <p className="max-w-[56ch] text-pretty text-base leading-relaxed text-muted md:text-lg">
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
