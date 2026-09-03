import { toast } from 'sonner';
import { postAppointment } from '../endpoints';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export const useCreateAppointment = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: postAppointment,
    mutationKey: ['create-appointments'],
    onSuccess: () => {
      toast.success('Serviço agendado com sucesso!');
      queryClient.invalidateQueries({ queryKey: ['appointments'] });
    },
    onError: () => {
      toast.error(
        'Não foi possível realizar o agendamento, por favor tente mais tarde!',
      );
    },
  });
};
