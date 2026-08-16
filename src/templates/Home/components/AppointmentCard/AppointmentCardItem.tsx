import { Appointment } from '@/api';
import { Text } from '@/components/commons';

type AppointmentCardItemProps = {
  appointment: Appointment;
};

export const AppointmentCardItem = ({
  appointment,
}: AppointmentCardItemProps) => (
  <div className="flex gap-3 justify-between flex-wrap">
    <section className="flex gap-3 items-center">
      <Text size="md" variant="primary">
        09:00
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
          {appointment.petOwner}
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
      <button>Editar agendamento</button>
      <button>Excluir agendamento</button>
    </section>
  </div>
);
