const START_HOUR = 9;
const END_HOUR = 21;

export const APPOINTMENT_TIME_VALUES = Array.from(
  { length: END_HOUR - START_HOUR + 1 },
  (_, i) => {
    const hour = START_HOUR + i;

    return {
      label: `${String(hour).padStart(2, '0')}:00`,
      value: hour,
    };
  },
);
