import { useQuery } from '@tanstack/react-query';
import { getAllAppointments } from '../endpoints';

export const useGetAppointments = () =>
  useQuery({
    queryFn: getAllAppointments,
    queryKey: ['appointments'],
  });
