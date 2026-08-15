import { Appointment } from '@/api';

type AppointmentCardItemProps = {
  appointment: Appointment;
};

export const AppointmentCardItem = ({
  appointment,
}: AppointmentCardItemProps) => (
  <div>
    <h3>{appointment.petName}</h3>
    <p>Owner: {appointment.petOwner}</p>
    <p>Service: {appointment.service}</p>
    <p>Date: {appointment.date.toLocaleDateString()}</p>
  </div>
);
