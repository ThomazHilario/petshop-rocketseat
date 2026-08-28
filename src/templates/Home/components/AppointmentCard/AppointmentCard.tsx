import { ReactNode } from 'react';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui';
import { Appointment } from '@/api';

import { AppointmentCardItem } from './AppointmentCardItem';
import { Text } from '@/components/commons';

type AppointmentCardProps = {
  title: string;
  subTitle: string;
  Icon: ReactNode;
  appointments: Appointment[];
};

export const AppointmentCard = ({
  title,
  subTitle,
  Icon,
  appointments,
}: AppointmentCardProps) => (
  <Card>
    <CardHeader className="flex justify-between items-center">
      <div className="flex items-center gap-3">
        {Icon}

        <CardTitle>{title}</CardTitle>
      </div>

      <Text className="text-content-secondary! text-label-large">
        {subTitle}
      </Text>
    </CardHeader>

    <CardContent>
      <div className="space-y-3 divide-y-2 divide-border-divisor divide-solid">
        {appointments.map((appointment, index) => (
          <AppointmentCardItem key={index} appointment={appointment} />
        ))}
      </div>
    </CardContent>
  </Card>
);
