import * as AlertDialogPrimitive from 'radix-ui/alert-dialog';

type AlertDialogDescriptionProps =
  AlertDialogPrimitive.AlertDialogDescriptionProps;

export const AlertDialogDescription = ({
  ...props
}: AlertDialogDescriptionProps) => (
  <AlertDialogPrimitive.Description {...props} />
);
