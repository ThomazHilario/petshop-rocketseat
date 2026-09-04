'use client';

import { cn } from '@/utils';
import * as AlertDialogPrimitive from 'radix-ui/alert-dialog';

type AlertDialogOverlayProps = AlertDialogPrimitive.AlertDialogOverlayProps;

export const AlertDialogOverlay = ({
  className,
  ...props
}: AlertDialogOverlayProps) => (
  <AlertDialogPrimitive.Overlay
    className={cn(
      'fixed inset-0 bg-background-tertiary/50 backdrop-blur-lg',
      className,
    )}
    data-slot="alert-dialog-overlay"
    {...props}
  />
);
