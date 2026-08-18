'use client';

import { useForm } from 'react-hook-form';

import {
  Form,
  FormField,
  FormTextAreaField,
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
} from '@/components/ui';

export const DialogAddAppointment = () => {
  const form = useForm();

  const onAddAppointment = () => {
    console.log('oi');
  };

  return (
    <Dialog>
      <DialogTrigger className="absolute bottom-10 right-10 bg-content-brand py-3 px-6 text-black! rounded-lg drop-shadow-md drop-shadow-content-brand/60">
        Novo Agendamento
      </DialogTrigger>

      <DialogContent className="max-h-179 space-y-7">
        <section className="space-y-2">
          <DialogTitle className="text-xl sm:text-[1.5rem]">
            Agende um atendimento
          </DialogTitle>

          <DialogDescription>
            Preencha os dados do cliente para realizar o agendamento:
          </DialogDescription>
        </section>

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
            name="phone"
            Icon={<PhoneIcon className="text-content-brand" />}
          />

          <FormTextAreaField
            label="Descrição do serviço"
            placeholder="Banho e tosa"
            name="service"
          />

          <Button className="block ml-auto" variant="brand" type="submit">
            Agendar
          </Button>
        </Form>
      </DialogContent>
    </Dialog>
  );
};
