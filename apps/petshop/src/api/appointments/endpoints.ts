import { axios } from '@/config';
import { Appointment, AppointmentResponse } from './types';

export const getAllAppointments = async (): Promise<AppointmentResponse> => {
  const response = await axios.get<AppointmentResponse>('/appointments');

  return response.data;
};

export const postAppointment = async (appointment: Appointment) => {
  const response = await axios.post('/appointments', appointment);

  return response.data;
};
