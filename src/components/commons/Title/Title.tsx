import { ComponentProps, createElement } from 'react';
import { tv, VariantProps } from 'tailwind-variants';

const TitleVariants = tv({
  base: 'text-white tracking-tight m-0 p-0',
  variants: {
    variant: {
      primary: 'text-content-brand',
    },
    size: {
      sm: 'text-md',
    },
  },
  defaultVariants: {
    size: 'sm',
  },
});

type TitleTags = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

type TitleProps = ComponentProps<TitleTags> &
  VariantProps<typeof TitleVariants> & {
    as: TitleTags;
  };

export const Title = ({
  as,
  className,
  variant,
  children,
  ...props
}: TitleProps) =>
  createElement(
    as,
    { className: TitleVariants({ className, variant }), ...props },
    children,
  );
