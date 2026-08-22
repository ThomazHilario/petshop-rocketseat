import { cn } from '@/utils';
import * as PopoverPrimitive from 'radix-ui/popover';
import { PopoverArrow } from './PopoverArrow';

type PopoverContentProps = PopoverPrimitive.PopoverContentProps;

export const PopoverContent = ({
  className,
  children,
  ...props
}: PopoverContentProps) => (
  <PopoverPrimitive.Content
    className={cn(
      'transition-all rounded-sm px-5 py-5 bg-background-secondary data-[state=open]:animate-in data-[state=open]:slide-in-from-bottom-30 duration-400',
      className,
    )}
    sideOffset={10}
    {...props}
  >
    {children}
    <PopoverArrow className="fill-background-secondary" />
  </PopoverPrimitive.Content>
);
