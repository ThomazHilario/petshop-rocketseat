'use client';
import * as DialogPrimitive from 'radix-ui/dialog';

type DialogCloseProps = DialogPrimitive.DialogCloseProps;

export const DialogClose = ({ ...props }: DialogCloseProps) => (
  <DialogPrimitive.Close {...props} />
);
