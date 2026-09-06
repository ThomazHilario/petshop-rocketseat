import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogTitle,
  AlertDialogTrigger,
  Button,
} from '@/components/ui';
import { useDisclosure } from '@/utils';

import { LoaderIcon, X } from 'lucide-react';

type DeleteAppointmentDialogProps = {
  handleDeleteAppointment: (callback: () => void) => void;
  isPending: boolean;
};

export const DeleteAppointmentDialog = ({
  handleDeleteAppointment,
  isPending,
}: DeleteAppointmentDialogProps) => {
  const { open, handleOpen, handleClose } = useDisclosure();

  return (
    <AlertDialog open={open}>
      <AlertDialogTrigger asChild>
        <Button className="p-0 border-0" onClick={handleOpen}>
          <X className="text-red-400 p-1 h-7 w-7 rounded-sm border-2 border-red-400" />
        </Button>
      </AlertDialogTrigger>

      <AlertDialogContent className="flex flex-col gap-5">
        <AlertDialogTitle>
          Deseja realmente realizar a deleção ?
        </AlertDialogTitle>

        <AlertDialogDescription>
          Essa ação excluirá permanentemente este serviço, a alteração é
          totalmente irreversivel. Deseja continuar :
        </AlertDialogDescription>

        <div className="flex justify-end items-center gap-3 mt-auto">
          <AlertDialogCancel disabled={isPending} onClick={handleClose}>
            Cancelar
          </AlertDialogCancel>
          <AlertDialogAction
            disabled={isPending}
            onClick={() => handleDeleteAppointment(handleClose)}
          >
            {isPending ? (
              <LoaderIcon className="animate-spin" size={16} />
            ) : (
              'Deletar'
            )}
          </AlertDialogAction>
        </div>
      </AlertDialogContent>
    </AlertDialog>
  );
};
