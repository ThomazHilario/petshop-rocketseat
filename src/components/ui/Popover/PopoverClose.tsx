import { cn } from '@/utils';
import * as PopoverPrimitive from 'radix-ui/popover';

type PopoverCloseProps = PopoverPrimitive.PopoverCloseProps;

export const PopoverClose = ({
  className,
  asChild,
  ...props
}: PopoverCloseProps) => (
  <PopoverPrimitive.Close
    className={cn(
      !asChild && 'cursor-pointer py-3 px-6 text-center',
      className,
    )}
    {...props}
  />
);
