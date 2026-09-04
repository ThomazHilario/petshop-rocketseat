'use client';

import { getHours, getMinutes } from 'date-fns';

import { Text } from '@/components/commons';

import { Appointment, useDeleteAppointment } from '@/api';

import { EditAppointmentDialog } from '../EditAppointmentDialog';
import { DeleteAppointmentDialog } from '../DeleteAppointmentDialog';

type AppointmentCardItemProps = {
  appointment: Appointment;
};

export const AppointmentCardItem = ({
  appointment,
}: AppointmentCardItemProps) => {
  const hourFormated = `${getHours(appointment.date).toString().padStart(2, '0')}:${getMinutes(appointment.date).toString().padStart(2, '0')}`;

  const { mutate: deleteAppointment } = useDeleteAppointment();

  const handleDeleteAppointment = () => deleteAppointment(appointment.id);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-3">
      <section className="flex gap-3 items-center sm:order-1">
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
          <Text
            className="before:ml-2 line-clamp-1"
            size="md"
            variant="secondary"
            title={appointment.tutorName}
          >
            {appointment.tutorName}
          </Text>
        </div>
      </section>

      <Text
        className="line-clamp-1 sm:order-3 sm:col-span-2"
        size="md"
        variant="secondary"
      >
        {appointment.service}
      </Text>

      <section
        aria-label="Seção para editar ou excluir um agendamento"
        className="flex gap-3 sm:justify-end sm:order-2"
      >
        <EditAppointmentDialog data={appointment} />
        <DeleteAppointmentDialog
          handleDeleteAppointment={handleDeleteAppointment}
        />
      </section>
    </div>
  );
};
