import { cn } from '@/utils';
import { ComponentProps } from 'react';

type SkeletonProps = ComponentProps<'div'>;

export const Skeleton = ({ className, ...props }: SkeletonProps) => (
  <div
    data-slot="skeleton"
    className={cn(
      'animate-pulse rounded-md bg-muted transition-all ease-in-out ',
      className,
    )}
    {...props}
  />
);
