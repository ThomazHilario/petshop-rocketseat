import { cn } from '@/utils';
import * as PopoverPrimitive from 'radix-ui/popover';

type PopoverArrowProps = PopoverPrimitive.PopoverArrowProps;

export const PopoverArrow = ({
  className,
  asChild,
  ...props
}: PopoverArrowProps) => (
  <PopoverPrimitive.Arrow
    className={cn(className)}
    data-slot="popover-arrow"
    {...props}
  />
);
