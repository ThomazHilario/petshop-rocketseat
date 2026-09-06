'use client';

import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from 'react';

type DateFilterProps = {
  date: Date | undefined;
  setDate: Dispatch<SetStateAction<Date | undefined>>;
};

type DateFilterProviderProps = {
  children: ReactNode;
};

const DateFilterContext = createContext<DateFilterProps | null>(null);

export const DateFilterProvider = ({ children }: DateFilterProviderProps) => {
  const [date, setDate] = useState<Date>();

  return (
    <DateFilterContext.Provider value={{ date, setDate }}>
      {children}
    </DateFilterContext.Provider>
  );
};

export const useDateFilterContext = () => {
  const context = useContext(DateFilterContext);

  if (!context) {
    throw new Error('DateFilterContext not is exist!');
  }

  return context;
};
