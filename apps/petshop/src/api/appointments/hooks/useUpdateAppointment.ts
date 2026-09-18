import { isAxiosError } from 'axios';
import { toast } from 'sonner';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateAppointment } from '../endpoints';

export const useUpdateAppointment = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ['update-appointment'],
    mutationFn: updateAppointment,
    onSuccess: () => {
      toast.success('Serviço atualizado com sucesso!');
      queryClient.invalidateQueries({ queryKey: ['appointments'] });
    },
    onError: (error) => {
      if (isAxiosError(error)) {
        toast.error(error.response?.data.message);
        return;
      }

      toast.error(
        'Não foi possível atualizar o seu agendamento no momento. Tente novamente mais tarde!',
      );
    },
  });
};
