import { JSX } from 'react';

type ForProps<T> = {
  values: T[];
  children: (value: T, index: number, array: T[]) => JSX.Element;
};

export const For = <T,>({ values, children }: ForProps<T>) => {
  return <>{values.map(children)}</>;
};
