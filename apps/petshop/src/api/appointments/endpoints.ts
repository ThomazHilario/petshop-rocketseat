'use server';

import { axios } from '@/config';
import { isAxiosError } from 'axios';

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
  try {
    const response = await axios.post('/appointments', appointment);

    return response.data;
  } catch (error) {
    if (isAxiosError(error)) {
      throw new Error(
        error.response?.data?.message ??
          'Não foi possível realizar o agendamento, por favor tente mais tarde!',
      );
    }
  }
};

export const updateAppointment = async (appointment: UpdateAppointmentType) => {
  try {
    const response = await axios.patch('/appointments', appointment);

    return response.data;
  } catch (error) {
    if (isAxiosError(error)) {
      throw new Error(
        error.response?.data?.message ??
          'Não foi possível realizar o agendamento, por favor tente mais tarde!',
      );
    }
  }
};

export const deleteAppointment = async (
  id: string,
): Promise<DeleteAppointmentResponseType> => {
  const response = await axios.delete(`/appointments/${id}`);

  return response.data;
};
