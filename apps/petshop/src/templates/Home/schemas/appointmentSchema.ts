import z from 'zod';

export const AppointmentSchema = z.object({
  id: z.string().optional(),
  tutorName: z.string().min(1, 'Preencha este campo!'),
  petName: z.string().min(1, 'Preencha este campo!'),
  phone: z.string().min(1, 'Preencha este campo!'),
  service: z.string().min(1, 'Preencha este campo!'),
  date: z.date({ error: 'Selecione uma data!' }),
  time: z.string().min(1, 'Escolha um horario'),
});

export type AppointmentSchemaType = z.infer<typeof AppointmentSchema>;
