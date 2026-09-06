import { Appointment, useGetAppointments } from '@/api';

import { AppointmentCard } from '../AppointmentCard';

import { useDateFilterContext } from '../../Context';
import { appointmentGroups } from '../../utils';

import { For } from '@/components/utils';
import { useMemo } from 'react';

export const AppointmentList = () => {
  const { date } = useDateFilterContext();

  const { data, isLoading, isFetching } = useGetAppointments();

  const isLoadingAppointments = isLoading || isFetching;

  const appointments = useMemo(
    () => data?.appointments || [],
    [data?.appointments],
  );

  const sortedAppointments = appointments.sort((a, b) => {
    const dateA = new Date(a.date).getTime();
    const dateB = new Date(b.date).getTime();

    return dateA - dateB;
  });

  const appointmentsGroups = appointmentGroups(sortedAppointments, date!);

  return (
    <For values={appointmentsGroups}>
      {(appointmentsGroup, index) => (
        <AppointmentCard
          isLoading={isLoadingAppointments}
          key={`${appointmentsGroup.title}-${index}`}
          title={appointmentsGroup.title}
          subTitle={appointmentsGroup.subTitle}
          Icon={appointmentsGroup.icon}
          appointments={appointmentsGroup.appointments}
        />
      )}
    </For>
  );
};
