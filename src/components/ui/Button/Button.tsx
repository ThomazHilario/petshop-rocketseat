import { cn } from '@/utils';
import { ComponentProps } from 'react';
import { tv, VariantProps } from 'tailwind-variants';

const buttonVariants = tv({
  base: 'cursor-pointer flex items-center justify-center',
  variants: {
    variant: {
      primary: 'text-white rounded-lg border-2 border-border-primary',
      brand:
        'bg-content-brand  text-black! rounded-lg drop-shadow-md drop-shadow-content-brand/60',
    },
    size: {
      sm: 'p-3',
      md: 'py-3 px-6',
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'sm',
  },
});

type ButtonProps = ComponentProps<'button'> &
  VariantProps<typeof buttonVariants>;

export const Button = ({ className, variant, size, ...props }: ButtonProps) => (
  <button
    className={cn(buttonVariants({ className, variant, size }))}
    {...props}
  />
);
