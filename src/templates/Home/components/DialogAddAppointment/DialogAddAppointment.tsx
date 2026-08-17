'use client';

import { useForm } from 'react-hook-form';

import { Form } from '@/components/commons';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui';

export const DialogAddAppointment = () => {
  const form = useForm();

  return (
    <Dialog>
      <DialogTrigger className="absolute bottom-10 right-10 bg-content-brand py-3 px-6 text-black! rounded-lg drop-shadow-md drop-shadow-content-brand/60">
        Novo Agendamento
      </DialogTrigger>

      <DialogContent className="max-h-179">
        <section className="space-y-2">
          <DialogTitle className="text-xl sm:text-[1.5rem]">
            Agende um atendimento
          </DialogTitle>

          <DialogDescription>
            Preencha os dados do cliente para realizar o agendamento:
          </DialogDescription>
        </section>

        <Form form={form} onSubmit={() => console.log('oi')}></Form>
      </DialogContent>
    </Dialog>
  );
};
