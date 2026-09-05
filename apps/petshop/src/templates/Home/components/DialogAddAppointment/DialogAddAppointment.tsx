'use client';

import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { LoaderIcon } from 'lucide-react';

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
import { dateFormat } from '../../utils';
import { useCreateAppointment } from '@/api';
import { useDisclosure } from '@/utils';

const APPOINTMENT_DEFAULT_VALUES = {
  tutorName: '',
  petName: '',
  phone: '',
  service: '',
  date: undefined,
  time: '09:00',
};

export const DialogAddAppointment = () => {
  const form = useForm<AppointmentSchemaType>({
    resolver: zodResolver(AppointmentSchema),
    defaultValues: APPOINTMENT_DEFAULT_VALUES,
  });

  const { open, setOpen, handleClose } = useDisclosure();

  const { mutate: createAppointment, isPending } = useCreateAppointment();

  const onAddAppointment = (data: AppointmentSchemaType) => {
    createAppointment(
      {
        tutorName: data.tutorName,
        petName: data.petName,
        phone: data.phone,
        service: data.service,
        date: dateFormat(data.date, data.time),
      },
      {
        onSettled: () => {
          form.reset(APPOINTMENT_DEFAULT_VALUES);
          handleClose();
        },
      },
    );
  };

  useEffect(() => {
    if (!open) form.reset(APPOINTMENT_DEFAULT_VALUES);
  }, [open, form]);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger className="absolute bottom-10 right-10 bg-content-brand py-3 px-6 text-black! rounded-lg drop-shadow-md drop-shadow-content-brand/60">
        Novo Agendamento
      </DialogTrigger>

      <DialogContent className="min-h-fit space-y-7">
        <section className="space-y-2">
          <DialogTitle className="text-xl sm:text-[1.5rem]">
            Agende um atendimento
          </DialogTitle>

          <DialogDescription>
            Preencha os dados do cliente para realizar o agendamento:
          </DialogDescription>
        </section>

        <ScrollArea>
          <ScrollAreaViewport className="max-h-110 md:min-h-153 p-2">
            <Form className="space-y-4" form={form} onSubmit={onAddAppointment}>
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
                isMask
                mask="(00) 00000-0000"
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
                {isPending ? (
                  <LoaderIcon className="animate-spin" size={16} />
                ) : (
                  'Agendar'
                )}
              </Button>
            </Form>
          </ScrollAreaViewport>

          <ScrollAreaScrollbar orientation="vertical" />
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};
