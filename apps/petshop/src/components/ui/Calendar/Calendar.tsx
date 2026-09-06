'use client';

import {
  DayPicker,
  DayPickerProps,
  getDefaultClassNames,
} from 'react-day-picker';

import { cn } from '@/utils';

type CalendarProps = DayPickerProps;

export const Calendar = ({ ...props }: CalendarProps) => {
  const defaultClassNames = getDefaultClassNames();

  return (
    <DayPicker
      classNames={{
        root: cn('w-auto h-auto', defaultClassNames.root),
        months: cn('relative flex flex-col gap-10', defaultClassNames.months),
        month: cn('text-white', defaultClassNames.month),
        caption_label: cn(
          'font-medium select-none',
          defaultClassNames.caption_label,
        ),
        caption_before_exit: 'hidden',
        caption_after_exit: 'hidden',
        month_caption: cn('mb-5'),
        nav: cn(
          'absolute inset-x-0 top-0 flex items-center gap-1 left-2/4 translate-x-2/4',
          defaultClassNames.nav,
        ),
        button_next: cn('fill-content-brand!', defaultClassNames.button_next),
        button_previous: cn(
          'fill-content-brand!',
          defaultClassNames.button_previous,
        ),
        month_grid:
          'relative flex flex-col gap-4 w-full h-full text-center overflow-hidden',
        day_button: 'h-8 w-8 cursor-pointer disabled:opacity-9',
        weekdays: 'flex-1',
        weekday: 'h-8 w-8',
        weeks: cn('relative', defaultClassNames.weeks),
        week: cn('relative', defaultClassNames.week),
      }}
      {...props}
    />
  );
};
