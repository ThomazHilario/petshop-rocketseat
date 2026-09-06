'use client';

import { cn } from '@/utils';
import * as AlertDialogPrimitive from 'radix-ui/alert-dialog';

type AlertDialogCancelProps = AlertDialogPrimitive.AlertDialogCancelProps;

export const AlertDialogCancel = ({
  className,
  ...props
}: AlertDialogCancelProps) => (
  <AlertDialogPrimitive.Cancel
    className={cn(
      'border-2 border-border-primary p-2 rounded-md cursor-pointer',
      className,
    )}
    data-slot="alert-dialog-close"
    {...props}
  />
);
