'use client';

import { Text, Title } from '@/components/commons';
import { Datepicker } from '@/components/ui';
import { useDateFilterContext } from '../../Context';
import { useEffect } from 'react';
import { format, isValid, parse } from 'date-fns';
import { useParams } from '@/utils';
import { ptBR } from 'date-fns/locale';

const DATE_FORMAT = 'dd-MM-yyyy';

export const Agenda = () => {
  const { date, setDate } = useDateFilterContext();
  const { param, setParam } = useParams('date');

  const handleDate = (newDate: Date) => {
    setDate(newDate);
    setParam('date', format(newDate, DATE_FORMAT, { locale: ptBR }));
  };

  useEffect(() => {
    if (!param) {
      handleDate(new Date());
      return;
    }

    const parsedDate = parse(param, DATE_FORMAT, new Date(), { locale: ptBR });

    if (!isValid(parsedDate)) {
      handleDate(new Date());
      return;
    }

    setDate(parsedDate);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="space-y-3 md:space-y-1 md:flex md:justify-between md:items-center">
      <section>
        <Title as="h1">Sua agenda</Title>

        <Text className="text-justify" variant="secondary" size="md">
          Aqui você pode ver todos os clientes e serviços agendados para hoje.
        </Text>
      </section>
      <div>
        <Datepicker selected={date} onDayClick={handleDate} />
      </div>
    </div>
  );
};
