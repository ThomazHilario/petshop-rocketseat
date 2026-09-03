import { axios } from '@/config';
import { Appointment } from './types';

export const getAllAppointments = async () => {
  const response = await axios.get('/appointments');

  return response.data;
};

export const postAppointment = async (appointment: Appointment) => {
  const response = await axios.post('/appointments', appointment);

  return response.data;
};
