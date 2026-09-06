import * as AlertDialogPrimitive from 'radix-ui/alert-dialog';

type AlertDialogProps = AlertDialogPrimitive.AlertDialogProps;

export const AlertDialog = ({ ...props }: AlertDialogProps) => (
  <AlertDialogPrimitive.Root {...props} />
);
