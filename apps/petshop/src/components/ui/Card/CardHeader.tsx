import { ComponentProps } from 'react';
import { cn } from '@/utils';

type CardHeaderProps = ComponentProps<'div'>;

export const CardHeader = ({
  children,
  className,
  ...props
}: CardHeaderProps) => (
  <div
    className={cn(
      'group/card-header @container/card-header grid auto-rows-min items-start gap-1 rounded-t-xl px-5 py-1 has-data-[slot=card-action]:grid-cols-[1fr_auto] has-data-[slot=card-description]:grid-rows-[auto_auto] [.border-b]:pb-(--card-spacing)',
      className,
    )}
    data-slot="card-header"
    {...props}
  >
    {children}
  </div>
);
