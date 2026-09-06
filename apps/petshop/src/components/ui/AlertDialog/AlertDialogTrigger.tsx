'use client';

import * as AlertDialogPrimitive from 'radix-ui/alert-dialog';

type AlertDialogTriggerProps = AlertDialogPrimitive.AlertDialogTriggerProps;

export const AlertDialogTrigger = ({
  children,
  ...props
}: AlertDialogTriggerProps) => (
  <AlertDialogPrimitive.Trigger data-slot="alert-dialog-trigger" {...props}>
    {children}
  </AlertDialogPrimitive.Trigger>
);
