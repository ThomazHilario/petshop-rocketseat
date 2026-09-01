'use client';

export const setLocalStorage = (key: string, value: unknown) =>
  localStorage.setItem(key, JSON.stringify(value));

export const getLocalStorage = (key: string) =>
  JSON.parse(localStorage.getItem(key)!);
