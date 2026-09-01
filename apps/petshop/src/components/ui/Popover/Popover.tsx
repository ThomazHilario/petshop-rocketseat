import * as PopoverPrimitive from 'radix-ui/popover';

type PopoverProps = PopoverPrimitive.PopoverProps;

export const Popover = ({ children, ...props }: PopoverProps) => (
  <PopoverPrimitive.Root {...props}>{children}</PopoverPrimitive.Root>
);
