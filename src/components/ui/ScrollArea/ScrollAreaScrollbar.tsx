import * as ScrollAreaPrimitive from 'radix-ui/scroll-area';

type ScrollAreaScrollbarProps = ScrollAreaPrimitive.ScrollAreaScrollbarProps;

export const ScrollAreaScrollbar = ({ ...props }: ScrollAreaScrollbarProps) => (
  <ScrollAreaPrimitive.ScrollAreaScrollbar {...props}>
    <ScrollAreaPrimitive.Thumb />
  </ScrollAreaPrimitive.ScrollAreaScrollbar>
);
