'use client';

import { formatDate } from 'date-fns';

import { CalendarIcon } from '@/components/commons';

import { Popover, PopoverContent, PopoverTrigger } from '../Popover';
import { Button } from '../Button';
import { Calendar } from '../Calendar';
import { DayPickerProps } from 'react-day-picker';
import { Skeleton } from '../Skeleton';

type DatePickerProps = Omit<
  DayPickerProps,
  'selected' | 'onSelected' | 'mode'
> & {
  selected?: Date;
  onSelected?: () => any;
};

export const Datepicker = ({
  selected,
  onSelected,
  ...props
}: DatePickerProps) => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        {!selected ? (
          <Skeleton className="h-13 w-34" />
        ) : (
          <Button className="justify-start gap-2.5 py-0 h-13">
            <CalendarIcon className="text-content-brand" />
            {selected ? formatDate(selected, 'dd/MM/yyyy') : 'dd/mm/yyyy'}
          </Button>
        )}
      </PopoverTrigger>

      <PopoverContent>
        <Calendar
          selected={selected}
          onSelect={onSelected}
          mode="single"
          {...props}
        />
      </PopoverContent>
    </Popover>
  );
};
