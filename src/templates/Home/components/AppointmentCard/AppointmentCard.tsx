import { Appointment } from '@/api';
import { AppointmentCardItem } from './AppointmentCardItem';

type AppointmentCardProps = {
  appointments: Appointment[];
};

export const AppointmentCard = ({ appointments }: AppointmentCardProps) => (
  <div>
    <div></div>

    <div>
      <div>
        {appointments.map((appointment, index) => (
          <AppointmentCardItem key={index} appointment={appointment} />
        ))}
      </div>
    </div>
  </div>
);
