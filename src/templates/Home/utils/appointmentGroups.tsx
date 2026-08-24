import { FilteredAppointments } from './filteredAppointments';

export const appointmentGroups = (appointments, date) => {
  const appointmentsFiltered = FilteredAppointments(appointments, date);

  return [
    {
      title: 'Manhã',
      subTitle: '09h-12h',
      icon: '',
      appointments: appointmentsFiltered.morning,
    },
    {
      title: 'Tarde',
      subTitle: '13h-18h',
      icon: '',
      appointments: appointmentsFiltered.afternoon,
    },
    {
      title: 'Noite',
      subTitle: '19h-21h',
      icon: '',
      appointments: appointmentsFiltered.evening,
    },
  ];
};
