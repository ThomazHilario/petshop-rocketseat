'use client';

import {
  Controller,
  useController,
  useFormContext,
  type FieldPath,
  type FieldValues,
} from 'react-hook-form';

import {
  Calendar,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui';

import { CalendarIcon } from '../Icons';

import { formatDate } from 'date-fns';

type FormDatePickerProps<T extends FieldValues> = {
  label: string;
  name: FieldPath<T>;
  placeholder?: string;
};

export const FormDatePicker = <T extends FieldValues>({
  label,
  name,
  placeholder = 'Selecione a data',
}: FormDatePickerProps<T>) => {
  const { control } = useFormContext<T>();

  const { field } = useController({
    control,
    name,
  });

  return (
    <div className="flex flex-col gap-2">
      <label className="text-label-medium" htmlFor={name}>
        {label}
      </label>

      <Popover>
        <PopoverTrigger asChild>
          <div className="flex w-full gap-2 items-center border-2 border-border-primary rounded-lg p-3">
            <CalendarIcon className="text-content-brand" />
            {field.value ? formatDate(field.value, 'yyyy-MM-dd') : placeholder}
          </div>
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
