'use client';

import { formatDate } from 'date-fns';

import { CalendarIcon } from '@/components/commons';

import { Button } from '../Button';
import { Calendar } from '../Calendar';
import { Popover, PopoverContent, PopoverTrigger } from '../Popover';

type DatePickerProps = {
  selected: Date;
  onSelect: () => void;
};

export const DatePicker = ({ selected, onSelect }: DatePickerProps) => (
  <Popover>
    <PopoverTrigger asChild>
      <CalendarIcon className="bg-content-brand" />
      {selected ? formatDate(selected, 'yyyy-MM-dd') : 'Selecione a data'}
    </PopoverTrigger>

    <PopoverContent>
      <Calendar selected={selected} onSelect={onSelect} />
    </PopoverContent>
  </Popover>
);
