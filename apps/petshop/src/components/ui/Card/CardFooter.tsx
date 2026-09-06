import { ComponentProps } from 'react';
import { cn } from '@/utils';

type CardFooterProps = ComponentProps<'div'>;

export const CardFooter = ({
  children,
  className,
  ...props
}: CardFooterProps) => (
  <div
    className={cn(
      'flex items-center rounded-b-xl border-t bg-muted/50 p-5',
      className,
    )}
    data-slot="card-footer"
    {...props}
  >
    {children}
  </div>
);
