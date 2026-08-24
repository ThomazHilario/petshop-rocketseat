'use client';

import { Main } from '@/components/commons';

import { Agenda, Header } from '../components';
import { AppointmentCard } from '../components/AppointmentCard';
import { DialogAddAppointment } from '../components/DialogAddAppointment/DialogAddAppointment';

import { DateFilterProvider } from '@/templates/Home/Context';

export const HomePage = () => (
  <DateFilterProvider>
    <div className="bg-background-primary min-h-screen">
      <Header />

      <Main className="max-w-217.75 m-auto space-y-5">
        <Agenda />

        <section arial-label="Seção de agendamentos">
          <AppointmentCard
            appointments={[
              {
                date: new Date(),
                petName: 'marrudo',
                petOwner: 'Thomaz',
                service: 'vacinacao',
              },
            ]}
          />
        </section>

        <DialogAddAppointment />
      </Main>
    </div>
  </DateFilterProvider>
);
