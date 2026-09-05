'use client';

import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { parseISO } from 'date-fns';

import { LoaderIcon, PenLineIcon } from 'lucide-react';

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

import { AppointmentSchema, AppointmentSchemaType } from '../../schemas';

import { APPOINTMENTS_OPTIONS } from '@/config';
import { UpdateAppointmentType, useUpdateAppointment } from '@/api';
import { dateFormat, timeFormat } from '../../utils';
import { useDisclosure } from '@/utils';

type EditAppointmentDialogProps = {
  data: UpdateAppointmentType;
};

const formatData = (data: UpdateAppointmentType): AppointmentSchemaType => ({
  ...data,
  date: parseISO(data.date),
  time: timeFormat(data.date),
});

export const EditAppointmentDialog = ({ data }: EditAppointmentDialogProps) => {
  const form = useForm<AppointmentSchemaType>({
    resolver: zodResolver(AppointmentSchema),
  });

  const { open, setOpen, handleClose } = useDisclosure();

  const { mutate: updateAppointment, isPending } = useUpdateAppointment();

  const onEditAppointment = (data: AppointmentSchemaType) => {
    updateAppointment(
      {
        id: data.id as string,
        tutorName: data.tutorName,
        petName: data.petName,
        phone: data.phone,
        service: data.service,
        date: dateFormat(data.date, data.time),
      },
      {
        onSuccess: () => handleClose(),
      },
    );
  };

  useEffect(() => {
    if (open) {
      form.reset(formatData(data));
    }
  }, [open, form, data]);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="p-0 border-0" title="Editar agendamento">
          <PenLineIcon className="text-content-tertiary/80" size={16} />
        </Button>
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
                placeholder="(00) 00000-0000"
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
                  'Editar agendamento'
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
