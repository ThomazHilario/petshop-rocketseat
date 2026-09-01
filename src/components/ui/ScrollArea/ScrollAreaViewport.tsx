import { cn } from '@/utils';
import * as ScrollAreaPrimitive from 'radix-ui/scroll-area';

type ScrollAreaViewportProps = ScrollAreaPrimitive.ScrollAreaViewportProps;

export const ScrollAreaViewport = ({
  className,
  ...props
}: ScrollAreaViewportProps) => (
  <ScrollAreaPrimitive.Viewport
    className={cn('transition-all', className)}
    {...props}
  />
);
