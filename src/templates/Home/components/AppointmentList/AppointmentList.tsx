import { Appointment } from '@/api';
import { useDateFilterContext } from '../../Context';
import { appointmentGroups } from '../../utils';
import { AppointmentCard } from '../AppointmentCard';

const appointments: Appointment[] = [
  {
    tutorName: 'Mariana Silva',
    petName: 'Rex',
    service: 'Banho e Tosa',
    date: '2026-08-25T09:00:00-03:00',
  },
  {
    tutorName: 'João Pereira',
    petName: 'Luna',
    service: 'Consulta Veterinária',
    date: '2026-08-25T10:30:00-03:00',
  },
  {
    tutorName: 'Carla Souza',
    petName: 'Thor',
    service: 'Vacinação',
    date: '2026-08-26T14:00:00-03:00',
  },
  {
    tutorName: 'Ricardo Alves',
    petName: 'Mimi',
    service: 'Banho e Tosa',
    date: '2026-08-26T16:15:00-03:00',
  },
  {
    tutorName: 'Fernanda Costa',
    petName: 'Bidu',
    service: 'Exame de Sangue',
    date: '2026-08-27T08:45:00-03:00',
  },
  {
    tutorName: 'Paulo Henrique',
    petName: 'Nina',
    service: 'Cirurgia',
    date: '2026-08-27T11:00:00-03:00',
  },
  {
    tutorName: 'Beatriz Lima',
    petName: 'Max',
    service: 'Consulta Veterinária',
    date: '2026-08-28T13:30:00-03:00',
  },
  {
    tutorName: 'André Martins',
    petName: 'Bella',
    service: 'Vacinação',
    date: '2026-08-24T15:00:00-03:00',
  },
];

export const AppointmentList = () => {
  const { date } = useDateFilterContext();
  const appointmentsGroups = appointmentGroups(appointments, date);

  return (
    <>
      {appointmentsGroups.map((appointmentsGroup, index) => (
        <AppointmentCard
          key={`${appointmentsGroup.title}-${index}`}
          title={appointmentsGroup.title}
          appointments={appointmentsGroup.appointments}
        />
      ))}
    </>
  );
};
