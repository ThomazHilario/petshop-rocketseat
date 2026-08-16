import * as DialogPrimitive from 'radix-ui/dialog';

type DialogOverlayProps = DialogPrimitive.DialogOverlayProps;

export const DialogOverlay = ({ className, ...props }: DialogOverlayProps) => (
  <DialogPrimitive.Overlay
    className="fixed inset-0 bg-black/50 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=open]:fade-in-0 data-[state=closed]:fade-out-0 z-60 duration-300 transition-all ease-out"
    {...props}
  />
);
