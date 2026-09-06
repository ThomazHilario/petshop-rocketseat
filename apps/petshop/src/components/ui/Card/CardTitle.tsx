import { ComponentProps } from 'react';
import { cn } from '@/utils';

type CardTitleProps = ComponentProps<'div'>;

export const CardTitle = ({
  children,
  className,
  ...props
}: CardTitleProps) => (
  <div
    className={cn(
      'text-label-medium group-data-[size=sm]/card:text-sm',
      className,
    )}
    data-slot="card-title"
    {...props}
  >
    {children}
  </div>
);
