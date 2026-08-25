'use client';

import { useForm } from 'react-hook-form';
import { getHours, getMinutes } from 'date-fns';

import {
  Form,
  FormDatePicker,
  FormField,
  FormTextAreaField,
  FormTimePicker,
  PawIcon,
  PhoneIcon,
  UserIcon,
} from '@/components/commons';

import {
  Button,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
  ScrollArea,
  ScrollAreaScrollbar,
  ScrollAreaViewport,
} from '@/components/ui';
import { zodResolver } from '@hookform/resolvers/zod';

import { AppointmentSchema, AppointmentSchemaType } from '../../schemas';

import { APPOINTMENTS_OPTIONS } from '@/config';
import { Appointment } from '@/api';

type EditAppointmentDialogProps = {
  data: Appointment;
};

const formatData = (data: Appointment): AppointmentSchemaType => ({
  ...data,
  date: new Date(data.date),
  time: `${getHours(data.date)}:${getMinutes(data.date)}`,
});

export const EditAppointmentDialog = ({ data }: EditAppointmentDialogProps) => {
  const form = useForm<AppointmentSchemaType>({
    resolver: zodResolver(AppointmentSchema),
    defaultValues: formatData(data),
  });

  const onEditAppointment = (data: AppointmentSchemaType) => {
    console.log(`${getHours(data.date)}:${getMinutes(data.date)}`);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Editar</Button>
      </DialogTrigger>

      <DialogContent className="min-h-fit space-y-7">
        <section className="space-y-2">
          <DialogTitle className="text-xl sm:text-[1.5rem]">
            Editar informações do agendamento
          </DialogTitle>

          <DialogDescription>
            Atualize as informações do cliente para concluir a edição do
            agendamento
          </DialogDescription>
        </section>

        <ScrollArea>
          <ScrollAreaViewport className="max-h-110 md:min-h-153 p-2">
            <Form
              className="space-y-4"
              form={form}
              onSubmit={onEditAppointment}
            >
              <FormField
                label="Nome do tutor"
                placeholder="Helena Souza"
                name="tutorName"
                Icon={<UserIcon className="text-content-brand" />}
              />

              <FormField
                label="Nome do pet"
                placeholder="Cheddar"
                name="petName"
                Icon={<PawIcon className="text-content-brand" />}
              />

              <FormField
                label="Telefone"
                placeholder="(00) 0 0000-0000"
                name="phone"
                Icon={<PhoneIcon className="text-content-brand" />}
              />

              <FormTextAreaField
                label="Descrição do serviço"
                placeholder="Banho e tosa"
                name="service"
              />

              <div className="flex flex-col gap-4 md:flex-row">
                <FormDatePicker className="flex-1" label="Data" name="date" />

                <FormTimePicker
                  className="flex-1"
                  label="Hora"
                  name="time"
                  values={APPOINTMENTS_OPTIONS}
                />
              </div>

              <Button className="block ml-auto" variant="brand" type="submit">
                Agendar
              </Button>
            </Form>
          </ScrollAreaViewport>

          <ScrollAreaScrollbar orientation="vertical" />
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};
