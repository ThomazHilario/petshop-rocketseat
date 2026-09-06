'use client';

import { cn } from '@/utils';
import * as DialogPrimitive from 'radix-ui/dialog';

type DialogTriggerProps = DialogPrimitive.DialogTriggerProps;

export const DialogTrigger = ({ className, ...props }: DialogTriggerProps) => (
  <DialogPrimitive.Trigger
    className={cn('cursor-pointer text-label-medium', className)}
    {...props}
  />
);
