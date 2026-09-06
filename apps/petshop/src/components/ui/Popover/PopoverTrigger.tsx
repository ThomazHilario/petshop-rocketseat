import { cn } from '@/utils';
import * as PopoverPrimitive from 'radix-ui/popover';

type PopoverTriggerProps = PopoverPrimitive.PopoverTriggerProps;

export const PopoverTrigger = ({
  className,
  asChild,
  ...props
}: PopoverTriggerProps) => (
  <PopoverPrimitive.Trigger
    className={cn(
      !asChild && 'cursor-pointer py-3 px-6 text-center',
      className,
    )}
    asChild
    data-slot="popover-trigger"
    {...props}
  />
);
