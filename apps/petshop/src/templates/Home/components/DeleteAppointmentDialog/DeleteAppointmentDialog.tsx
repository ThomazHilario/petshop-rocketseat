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

import { X } from 'lucide-react';

type DeleteAppointmentDialogProps = {
  handleDeleteAppointment: () => void;
};

export const DeleteAppointmentDialog = ({
  handleDeleteAppointment,
}: DeleteAppointmentDialogProps) => (
  <AlertDialog>
    <AlertDialogTrigger asChild>
      <Button className="p-0 border-0">
        <X className="text-red-400" size={16} />
      </Button>
    </AlertDialogTrigger>

    <AlertDialogContent className="flex flex-col gap-5">
      <AlertDialogTitle>Deseja realmente realizar a deleção ?</AlertDialogTitle>

      <AlertDialogDescription>
        Essa ação excluirá permanentemente este serviço, a alteração é
        totalmente irreversivel. Deseja continuar :
      </AlertDialogDescription>

      <div className="flex justify-end items-center gap-3 mt-auto">
        <AlertDialogCancel>Cancelar</AlertDialogCancel>
        <AlertDialogAction onClick={handleDeleteAppointment}>
          Deletar
        </AlertDialogAction>
      </div>
    </AlertDialogContent>
  </AlertDialog>
);
