'use client';

import { Appointment } from '@/api';
import { Text } from '@/components/commons';
import { EditAppointmentDialog } from '../EditAppointmentDialog';
import { getHours, getMinutes } from 'date-fns';

type AppointmentCardItemProps = {
  appointment: Appointment;
};

export const AppointmentCardItem = ({
  appointment,
}: AppointmentCardItemProps) => {
  const hourFormated = `${getHours(appointment.date).toString().padStart(2, '0')}:${getMinutes(appointment.date).toString().padStart(2, '0')}`;

  return (
    <div className="flex gap-3 justify-between flex-wrap">
      <section className="flex gap-3 items-center">
        <Text size="md" variant="primary">
          {hourFormated}
        </Text>

        <div className="flex">
          <Text
            className="text-label-medium after:content-['/'] after:ml-2"
            size="md"
            variant="primary"
          >
            {appointment.petName}
          </Text>
          <Text className="before:ml-2" size="md" variant="secondary">
            {appointment.tutorName}
          </Text>
        </div>
      </section>

      <Text size="md" variant="secondary">
        {appointment.service}
      </Text>

      <section
        aria-label="Seção para editar ou excluir um agendamento"
        className="flex gap-2"
      >
        <EditAppointmentDialog data={appointment} />
        <button>Excluir agendamento</button>
      </section>
    </div>
  );
};
