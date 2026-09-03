import { AfternoonIcon, MoonIcon, SunIcon } from '@/components/commons';
import { Appointment } from '@/api';

import { FilteredAppointments } from './filteredAppointments';

export const appointmentGroups = (appointments: Appointment[], date: Date) => {
  const appointmentsFiltered = FilteredAppointments(appointments, date);

  if (!appointmentsFiltered) return;

  return [
    {
      title: 'Manhã',
      subTitle: '09h-12h',
      icon: <SunIcon className="relative -top-0.5 text-accent-blue" />,
      appointments: appointmentsFiltered.morning,
    },
    {
      title: 'Tarde',
      subTitle: '13h-18h',
      icon: (
        <AfternoonIcon className="relative -top-0.5 text-accent-orange-light" />
      ),
      appointments: appointmentsFiltered.afternoon,
    },
    {
      title: 'Noite',
      subTitle: '19h-21h',
      icon: <MoonIcon className="relative -top-0.5 text-accent-yellow" />,
      appointments: appointmentsFiltered.evening,
    },
  ];
};
