import { cn } from '@/utils';
import { ComponentProps } from 'react';

type ContainerProps = ComponentProps<'main'>;

export const Main = ({ children, className, ...props }: ContainerProps) => (
  <main className={cn('px-6 py-3', className)} {...props}>
    {children}
  </main>
);
