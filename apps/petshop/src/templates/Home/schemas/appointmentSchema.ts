import z from 'zod';

export const AppointmentSchema = z.object({
  tutorName: z.string(),
  petName: z.string(),
  phone: z.string(),
  service: z.string(),
  date: z.date(),
  time: z.string(),
});

export type AppointmentSchemaType = z.infer<typeof AppointmentSchema>;
