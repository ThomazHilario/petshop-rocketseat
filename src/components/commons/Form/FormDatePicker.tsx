'use client';

import {
  Controller,
  useController,
  useFormContext,
  type FieldPath,
  type FieldValues,
} from 'react-hook-form';

import {
  Button,
  Calendar,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui';

import { CalendarIcon } from '../Icons';

import { formatDate } from 'date-fns';
import { cn } from '@/utils';

type FormDatePickerProps<T extends FieldValues> = {
  label: string;
  name: FieldPath<T>;
  className?: string;
  placeholder?: string;
};

export const FormDatePicker = <T extends FieldValues>({
  label,
  name,
  className,
  placeholder = 'Selecione a data',
}: FormDatePickerProps<T>) => {
  const { control } = useFormContext<T>();

  const { field } = useController({
    control,
    name,
  });

  return (
    <div className={cn('flex flex-col gap-2', className)}>
      <label className="text-label-medium" htmlFor={name}>
        {label}
      </label>

      <Popover>
        <PopoverTrigger asChild>
          <Button className="justify-start gap-2.5">
            <CalendarIcon className="text-content-brand" />
            {field.value ? formatDate(field.value, 'yyyy-MM-dd') : placeholder}
          </Button>
        </PopoverTrigger>

        <PopoverContent>
          <Controller
            control={control}
            name={name}
            render={({ field: { onChange, onBlur, value } }) => (
              <Calendar
                selected={value}
                onSelect={onChange}
                onDayBlur={onBlur}
              />
            )}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
};
