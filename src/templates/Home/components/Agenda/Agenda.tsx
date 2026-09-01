'use client';

import { Text, Title } from '@/components/commons';
import { Datepicker } from '@/components/ui';
import { useDateFilterContext } from '../../Context';
import { FilteredAppointments } from '../../utils';

export const Agenda = () => {
  const { date, setDate } = useDateFilterContext();

  return (
    <div className="space-y-3 md:space-y-1 md:flex md:justify-between md:items-center">
      <section>
        <Title as="h1">Sua agenda</Title>

        <Text className="text-justify" variant="secondary" size="md">
          Aqui você pode ver todos os clientes e serviços agendados para hoje.
        </Text>
      </section>
      <div>
        <Datepicker selected={date} onDayClick={setDate} />
      </div>
    </div>
  );
};
