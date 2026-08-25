export const setLocalStorage = (key: string, value: unknown) =>
  localStorage.setItem(key, JSON.stringify(value));

export const getLocalStorage = (key: string) => {
  const appointments = localStorage.getItem('appointments');

  if (appointments) {
    const parsed = JSON.parse(appointments);
    return parsed;
  }
};
