import { ComponentProps } from 'react';
import { tv, VariantProps } from 'tailwind-variants';

const textVariants = tv({
  base: 'text-content-primary tracking-wider',
  variants: {
    variant: {
      primary: 'text-content-primary!',
      secondary: 'text-content-secondary!',
    },
    size: {
      sm: 'text-paragraph-small',
      md: 'text-paragraph-medium',
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'sm',
  },
});

type TextProps = ComponentProps<'p'> & VariantProps<typeof textVariants>;

export const Text = ({ children, variant, size, className }: TextProps) => (
  <p className={textVariants({ className, variant, size })}>{children}</p>
);
