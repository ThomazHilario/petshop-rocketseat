import { axios } from '@/config';
import {
  CreateAppointmentType,
  AppointmentResponseType,
  DeleteAppointmentResponseType,
  UpdateAppointmentType,
} from './types';

export const getAllAppointments =
  async (): Promise<AppointmentResponseType> => {
    const response = await axios.get<AppointmentResponseType>('/appointments');

    return response.data;
  };

export const postAppointment = async (appointment: CreateAppointmentType) => {
  const response = await axios.post('/appointments', appointment);

  return response.data;
};

export const updateAppointment = async (appointment: UpdateAppointmentType) => {
  const response = await axios.patch('/appointments', appointment);

  return response.data;
};

export const deleteAppointment = async (
  id: string,
): Promise<DeleteAppointmentResponseType> => {
  const response = await axios.delete(`/appointments/${id}`);

  return response.data;
};
