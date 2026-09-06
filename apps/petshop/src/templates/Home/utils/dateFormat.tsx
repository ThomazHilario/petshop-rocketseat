import { set } from 'date-fns';

export const dateFormat = (date: Date, time: string) => {
  const [hours, minutes] = time.split(':');

  const dateInIsoString = set(date, {
    hours: Number(hours),
    minutes: Number(minutes),
    seconds: 0,
    milliseconds: 0,
  }).toISOString();

  return dateInIsoString;
};
