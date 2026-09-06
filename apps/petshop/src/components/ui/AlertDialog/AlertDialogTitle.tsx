import * as AlertDialogPrimitive from 'radix-ui/alert-dialog';

type AlertDialogTitleProps = AlertDialogPrimitive.AlertDialogTitleProps;

export const AlertDialogTitle = ({ ...props }: AlertDialogTitleProps) => (
  <AlertDialogPrimitive.Title {...props} />
);
