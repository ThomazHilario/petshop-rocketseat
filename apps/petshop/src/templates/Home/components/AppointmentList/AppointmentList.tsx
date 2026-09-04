import { Appointment, useGetAppointments } from '@/api';

import { AppointmentCard } from '../AppointmentCard';

import { useDateFilterContext } from '../../Context';
import { appointmentGroups } from '../../utils';

import { For } from '@/components/utils';

export const AppointmentList = () => {
  const { date } = useDateFilterContext();

  const { data, isLoading, isFetching } = useGetAppointments();

  const isLoadingAppointments = isLoading || isFetching;

  const appointments = data?.appointments || [];

  const appointmentsGroups = appointmentGroups(appointments, date!);

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
