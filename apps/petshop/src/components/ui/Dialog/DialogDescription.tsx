import * as DialogPrimitive from 'radix-ui/dialog';
import { cn } from '@/utils';

type DialogDescriptionProps = DialogPrimitive.DialogDescriptionProps;

export const DialogDescription = ({
  className,
  ...props
}: DialogDescriptionProps) => (
  <DialogPrimitive.Description
    className={cn('text-content-secondary! text-paragraph-medium', className)}
    {...props}
  />
);
