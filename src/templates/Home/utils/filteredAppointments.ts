import { format } from 'date-fns';

type appointmentProps = {
  tutorName: string;
  petName: string;
  service: string;
  date: string;
};

export const FilteredAppointments = (
  appointments: appointmentProps[],
  dateToday: Date,
) => {
  const morning: appointmentProps[] = [];
  const afternoon: appointmentProps[] = [];
  const evening: appointmentProps[] = [];

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

  return {
    morning,
    afternoon,
    evening,
  };
};
