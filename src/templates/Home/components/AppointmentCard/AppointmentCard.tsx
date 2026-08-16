import { Appointment } from '@/api';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui';
import { AppointmentCardItem } from './AppointmentCardItem';

type AppointmentCardProps = {
  appointments: Appointment[];
};

export const AppointmentCard = ({ appointments }: AppointmentCardProps) => (
  <Card>
    <CardHeader>
      <CardTitle>manha</CardTitle>
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
