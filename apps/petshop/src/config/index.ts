import { create } from 'axios';
import { env } from '@/utils';

export const axios = create({
  baseURL: env.PETSHOP_API_BASE_URL,
});

function generateOptions(initial = '09:00', fim = '21:00', interval = 30) {
  const hours = [];

  const [initialHour, initialMinute] = initial.split(':').map(Number);
  const [endHour, endMinute] = fim.split(':').map(Number);

  const initialMinutesTotal = initialHour * 60 + initialMinute;
  const endMinutesTotal = endHour * 60 + endMinute;

  for (
    let minutos = initialMinutesTotal;
    minutos <= endMinutesTotal;
    minutos += interval
  ) {
    const hour = Math.floor(minutos / 60);
    const minute = minutos % 60;

    const horaFormatada = String(hour).padStart(2, '0');
    const minutoFormatado = String(minute).padStart(2, '0');
    const value = `${horaFormatada}:${minutoFormatado}`;

    hours.push({
      label: value,
      value: value,
    });
  }

  return hours;
}

export const APPOINTMENTS_OPTIONS = generateOptions();
