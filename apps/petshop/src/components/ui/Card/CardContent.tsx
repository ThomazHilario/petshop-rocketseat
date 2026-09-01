import { ComponentProps } from 'react';
import { cn } from '@/utils';

type CardContentProps = ComponentProps<'div'>;

export const CardContent = ({
  children,
  className,
  ...props
}: CardContentProps) => (
  <div className={cn('px-5', className)} data-slot="card-content" {...props}>
    {children}
  </div>
);
