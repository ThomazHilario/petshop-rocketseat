import * as ScrollAreaPrimitive from 'radix-ui/scroll-area';

type ScrollAreaProps = ScrollAreaPrimitive.ScrollAreaProps;

export const ScrollArea = ({ ...props }: ScrollAreaProps) => (
  <ScrollAreaPrimitive.Root {...props} />
);
