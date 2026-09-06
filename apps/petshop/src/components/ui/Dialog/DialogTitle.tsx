import * as DialogPrimitive from 'radix-ui/dialog';
import { cn } from '@/utils';

type DialogTitleProps = DialogPrimitive.DialogTitleProps;

export const DialogTitle = ({ className, ...props }: DialogTitleProps) => (
  <DialogPrimitive.Title
    className={cn('text-content-primary text-title', className)}
    {...props}
  />
);
