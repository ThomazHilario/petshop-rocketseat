import { Appointment } from '@/api';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui';
import { AppointmentCardItem } from './AppointmentCardItem';

type AppointmentCardProps = {
  title: string;
  appointments: Appointment[];
};

export const AppointmentCard = ({
  title,
  appointments,
}: AppointmentCardProps) => (
  <Card>
    <CardHeader>
      <CardTitle>{title}</CardTitle>
    </CardHeader>

    <CardContent>
      <div>
        {appointments.map((appointment, index) => (
          <AppointmentCardItem key={index} appointment={appointment} />
        ))}
      </div>
    </CardContent>
  </Card>
);
