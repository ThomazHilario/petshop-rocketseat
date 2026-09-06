import { ComponentProps, createElement } from 'react';
import { tv, VariantProps } from 'tailwind-variants';

const TitleVariants = tv({
  base: 'text-content-primary tracking-tight m-0 p-0 font-semibold',
  variants: {
    variant: {
      primary: 'text-content-brand',
    },
    size: {
      sm: 'text-2xl',
      md: 'text-3xl',
      lg: 'text-4xl',
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
  size,
  children,
  ...props
}: TitleProps) =>
  createElement(
    as,
    { className: TitleVariants({ className, variant, size }), ...props },
    children,
  );
