import { format } from 'date-fns';

import { Appointment } from '@/api';

export const FilteredAppointments = (
  appointments: Appointment[],
  dateToday: Date,
) => {
  const morning: Appointment[] = [];
  const afternoon: Appointment[] = [];
  const evening: Appointment[] = [];

  if (appointments.length > 0) {
    appointments.forEach((appointment) => {
      const appointmentDate = format(appointment.date, 'dd/MM/yyyy');

      if (appointmentDate === format(dateToday, 'dd/MM/yyyy')) {
        const appointmentTime = new Date(appointment.date).getHours();

        if (appointmentTime >= 9 && appointmentTime <= 12) {
          morning.push(appointment);
          return;
        }

        if (appointmentTime >= 13 && appointmentTime <= 18) {
          afternoon.push(appointment);
          return;
        }

        if (appointmentTime >= 19 && appointmentTime <= 21) {
          evening.push(appointment);
          return;
        }
      }
    });
  }

  return {
    morning,
    afternoon,
    evening,
  };
};
