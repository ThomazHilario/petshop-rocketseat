import { isAxiosError } from 'axios';
import { toast } from 'sonner';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { postAppointment } from '../endpoints';

export const useCreateAppointment = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: postAppointment,
    mutationKey: ['create-appointments'],
    onSuccess: () => {
      toast.success('Serviço agendado com sucesso!');
      queryClient.invalidateQueries({ queryKey: ['appointments'] });
    },
    onError: (error) => {
      if (isAxiosError(error)) {
        toast.error(error.response?.data.message);
        return;
      }

      toast.error(
        'Não foi possível criar o seu agendamento no momento. Tente novamente mais tarde!',
      );
    },
  });
};
