import { cn } from '@/utils';
import * as AlertDialogPrimitive from 'radix-ui/alert-dialog';

import { AlertDialogOverlay } from './AlertDialogOverlay';

type AlertDialogContentProps = AlertDialogPrimitive.AlertDialogContentProps;

export const AlertDialogContent = ({
  className,
  ...props
}: AlertDialogContentProps) => (
  <AlertDialogPrimitive.Portal>
    <AlertDialogOverlay />
    <AlertDialogPrimitive.Content
      className={cn(
        'absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 h-60 p-5 w-full max-w-105 rounded-md bg-background-tertiary',
        className,
      )}
      {...props}
    />
  </AlertDialogPrimitive.Portal>
);
