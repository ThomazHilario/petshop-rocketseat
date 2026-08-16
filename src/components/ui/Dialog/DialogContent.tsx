import { cn } from '@/utils';
import * as DialogPrimitive from 'radix-ui/dialog';

import { DialogOverlay } from './DialogOverlay';

type DialogContentProps = DialogPrimitive.DialogContentProps;

export const DialogContent = ({ className, ...props }: DialogContentProps) => (
  <DialogPrimitive.Portal>
    <DialogOverlay />
    <DialogPrimitive.Content
      className={cn(
        'absolute z-80 top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 p-5 bg-background-tertiary rounded-xl min-w-76',
        className,
      )}
      {...props}
    />
  </DialogPrimitive.Portal>
);
