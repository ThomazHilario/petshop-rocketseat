import { getLocalStorage, setLocalStorage } from '@/utils';
import { Appointment } from './types';

const LOCALSTORAGE_KEY = 'appointments';

export const getAllAppointments = () => {
  const response: Appointment[] = getLocalStorage(LOCALSTORAGE_KEY);

  setTimeout(() => response, 4);
};

export const postAppointment = (appointment: Appointment) => {
  const appointments: Appointment[] = getLocalStorage(LOCALSTORAGE_KEY);

  setLocalStorage(LOCALSTORAGE_KEY, [...appointments, appointment]);

  return true;
};
