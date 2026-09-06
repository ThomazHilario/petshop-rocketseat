import { ReactNode } from 'react';

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Skeleton,
} from '@/components/ui';
import { Appointment } from '@/api';

import { AppointmentCardItem } from './AppointmentCardItem';
import { Text } from '@/components/commons';
import { For } from '@/components/utils';
import { cn } from '@/utils';

type AppointmentCardProps = {
  title: string;
  subTitle: string;
  isLoading: boolean;
  Icon: ReactNode;
  appointments: Appointment[];
};

export const AppointmentCard = ({
  isLoading,
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
      <div
        className={cn(
          'space-y-3 divide-border-divisor divide-solid',
          !isLoading && 'divide-y-2',
        )}
      >
        {isLoading && (
          <For values={Array.from({ length: 3 })}>
            {(_, index) => (
              <Skeleton
                className="h-13 w-full"
                key={`appointmentItemSkeletom-${index}`}
              />
            )}
          </For>
        )}

        {!isLoading && (
          <For values={appointments}>
            {(appointment, index) => (
              <AppointmentCardItem key={index} appointment={appointment} />
            )}
          </For>
        )}

        {!isLoading && !appointments.length && (
          <p className="text-center my-2 text-paragraph-medium text-content-tertiary">
            Não há nenhum agendamento
          </p>
        )}
      </div>
    </CardContent>
  </Card>
);
