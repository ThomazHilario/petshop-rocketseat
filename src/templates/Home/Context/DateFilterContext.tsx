'use client';

import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from 'react';

type DateFilterProps = {
  date: Date;
  setDate: Dispatch<SetStateAction<Date>>;
};

type DateFilterProviderProps = {
  children: ReactNode;
};

const DateFilterContext = createContext<DateFilterProps | null>(null);

export const DateFilterProvider = ({ children }: DateFilterProviderProps) => {
  const [date, setDate] = useState<Date>(new Date());

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
