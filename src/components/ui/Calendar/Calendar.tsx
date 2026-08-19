'use client';

import { cn } from '@/utils';
import { DayPicker, getDefaultClassNames } from 'react-day-picker';

type CalendarProps = {
  selected: Date;
  onSelect: () => void;
};

export const Calendar = ({ selected, onSelect }: CalendarProps) => {
  const defaultClassNames = getDefaultClassNames();
  const captionLayout = 'label';

  return (
    <DayPicker
      animate
      classNames={{
        root: cn('w-100 h-40', defaultClassNames.root),
        months: cn('relative flex flex-col gap-10', defaultClassNames.months),
        month: cn('text-white'),
        caption_label: cn('font-medium select-none'),
        caption_before_exit: 'hidden',
        caption_after_exit: 'hidden',
        month_caption: cn(
          'flex h-(--cell-size) w-full items-center justify-center px-(--cell-size)',
        ),
        nav: cn(
          'absolute inset-x-0 top-0 flex items-center gap-1 left-89',
          defaultClassNames.nav,
        ),
        button_next: cn('fill-content-brand', defaultClassNames.button_next),
        button_previous: cn(
          'fill-content-brand',
          defaultClassNames.button_previous,
        ),
      }}
      selected={selected}
      onSelect={onSelect}
      mode="single"
    />
  );
};
