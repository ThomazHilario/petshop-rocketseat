import { cn } from '@/utils';
import * as PopoverPrimitive from 'radix-ui/popover';

type PopoverContentProps = PopoverPrimitive.PopoverContentProps;

export const PopoverContent = ({
  className,
  ...props
}: PopoverContentProps) => (
  <PopoverPrimitive.Content
    className={cn(
      'rounded-sm px-5 py-10 bg-background-secondary data-[state=open]:animate-in data-[state=open]:slide-in-from-bottom-0 data-[state=closed]:animate-out data-[state=closed]:slide-out-to-top-0',
      className,
    )}
    {...props}
  />
);
