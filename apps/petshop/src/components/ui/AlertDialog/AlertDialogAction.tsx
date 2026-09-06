'use client';

import { cn } from '@/utils';
import * as AlertDialogPrimitive from 'radix-ui/alert-dialog';

type AlertDialogActionProps = AlertDialogPrimitive.AlertDialogActionProps;

export const AlertDialogAction = ({
  className,
  ...props
}: AlertDialogActionProps) => (
  <AlertDialogPrimitive.Action
    className={cn(
      'bg-background-brand text-background-primary p-2 rounded-md cursor-pointer',
      className,
    )}
    data-slot="alert-dialog-action"
    {...props}
  />
);
