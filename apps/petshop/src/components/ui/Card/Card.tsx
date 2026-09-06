import { ComponentProps } from 'react';
import { cn } from '@/utils';

type CardProps = ComponentProps<'div'>;

export const Card = ({ children, className, ...props }: CardProps) => (
  <div
    className={cn(
      'group/card bg-background-tertiary flex flex-col gap-2 overflow-hidden rounded-xl pt-1 pb-3 text-sm text-card-foreground ring-foreground/10 [--card-spacing:--spacing(4)] has-data-[slot=card-footer]:pb-0 has-[>img:first-child]:pt-0 data-[size=sm]:[--card-spacing:--spacing(3)] data-[size=sm]:has-data-[slot=card-footer]:pb-0 *:[img:first-child]:rounded-t-xl *:[img:last-child]:rounded-b-xl divide-y divide-solid divide-border-divisor',
      className,
    )}
    data-slot="card"
    {...props}
  >
    {children}
  </div>
);
