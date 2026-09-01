import * as DialogPrimitive from 'radix-ui/dialog';

type DialogProps = DialogPrimitive.DialogProps;

export const Dialog = ({ ...props }: DialogProps) => (
  <DialogPrimitive.Root {...props} />
);
