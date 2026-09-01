import { add } from 'date-fns';

export const dateFormat = (date: Date, time: string) => {
  const [hours, minutes] = time.split(':');

  const dateInIsoString = add(date, {
    hours: Number(hours),
    minutes: Number(minutes),
  }).toISOString();

  return dateInIsoString;
};
