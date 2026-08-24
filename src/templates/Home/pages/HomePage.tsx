'use client';

import { Main } from '@/components/commons';

import { Agenda, AppointmentList, Header } from '../components';
import { AppointmentCard } from '../components/AppointmentCard';
import { DialogAddAppointment } from '../components/DialogAddAppointment/DialogAddAppointment';

import { DateFilterProvider } from '@/templates/Home/Context';

export const HomePage = () => (
  <DateFilterProvider>
    <div className="bg-background-primary min-h-screen">
      <Header />

      <Main className="max-w-217.75 m-auto space-y-5">
        <Agenda />

        <section className="space-y-4" arial-label="Seção de agendamentos">
          <AppointmentList />
        </section>

        <DialogAddAppointment />
      </Main>
    </div>
  </DateFilterProvider>
);
