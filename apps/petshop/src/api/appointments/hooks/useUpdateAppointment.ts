import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateAppointment } from '../endpoints';
import { toast } from 'sonner';

export const useUpdateAppointment = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ['update-appointment'],
    mutationFn: updateAppointment,
    onSuccess: () => {
      toast.success('Serviço atualizado com sucesso!');
      queryClient.invalidateQueries({ queryKey: ['appointments'] });
    },
    onError: () => {
      toast.error(
        'Não foi possível atualizar o sserviço. Tente novamente mais tarde!',
      );
    },
  });
};
