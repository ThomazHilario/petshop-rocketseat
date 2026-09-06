import { getHours, getMinutes } from 'date-fns';

export const timeFormat = (date: string) => {
  const hours = getHours(date);
  const minutes = String(getMinutes(date)).padStart(2, '0');

  return `${hours}:${minutes}`;
};
