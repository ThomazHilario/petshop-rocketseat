import { Appointment, useGetAppointments } from '@/api';

import { AppointmentCard } from '../AppointmentCard';

import { useDateFilterContext } from '../../Context';
import { appointmentGroups } from '../../utils';

export const AppointmentList = () => {
  const { date } = useDateFilterContext();

  const { data } = useGetAppointments();

  const appointmentsGroups =
    (date && appointmentGroups(data?.appointments, date)) || [];

  return (
    <>
      {appointmentsGroups.map((appointmentsGroup, index) => (
        <AppointmentCard
          key={`${appointmentsGroup.title}-${index}`}
          title={appointmentsGroup.title}
          subTitle={appointmentsGroup.subTitle}
          Icon={appointmentsGroup.icon}
          appointments={appointmentsGroup.appointments}
        />
      ))}
    </>
  );
};
