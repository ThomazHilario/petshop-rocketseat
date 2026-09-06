import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteAppointment } from '../endpoints';
import { toast } from 'sonner';

export const useDeleteAppointment = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteAppointment,
    mutationKey: ['delete-appointment'],
    onSuccess: () => {
      toast.success('Serviço deletado com sucesso!');
      queryClient.invalidateQueries({ queryKey: ['appointments'] });
    },
    onError: () => {
      toast.error(
        'Não foi possível deletar o serviço. Tente novamente mais tarde!',
      );
    },
  });
};
