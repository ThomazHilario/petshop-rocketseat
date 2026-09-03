import { postAppointment } from '../endpoints';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export const useCreateAppointment = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: postAppointment,
    mutationKey: ['create-appointments'],
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['appointments'] });
    },
    onError: (error) => {
      console.log(error);
    },
  });
};
