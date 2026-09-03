export type Appointment = {
  tutorName: string;
  petName: string;
  phone: string;
  service: string;
  date: string;
};

export type AppointmentResponse = {
  appointments: Appointment[];
  total: number;
};
