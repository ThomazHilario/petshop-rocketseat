export type Appointment = {
  id: string;
  tutorName: string;
  petName: string;
  phone: string;
  service: string;
  date: string;
};

export type CreateAppointmentType = Omit<Appointment, 'id'>;

export type UpdateAppointmentType = Appointment & {
  id: string;
};

export type AppointmentResponseType = {
  appointments: Appointment[];
  total: number;
};

export type DeleteAppointmentResponseType = void;
