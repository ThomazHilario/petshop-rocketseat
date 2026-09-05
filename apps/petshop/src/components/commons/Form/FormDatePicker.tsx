'use client';

import {
  Controller,
  useFormContext,
  type FieldPath,
  type FieldValues,
} from 'react-hook-form';

import { Datepicker } from '@/components/ui';

import { cn } from '@/utils';
import { FormFieldError } from './FormFieldError';

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

  return (
    <div className={cn('flex flex-col gap-2', className)}>
      <label className="text-label-medium" htmlFor={name}>
        {label}
      </label>

      <Controller
        control={control}
        name={name}
        render={({ field: { onChange, onBlur, value } }) => (
          <Datepicker
            selected={value}
            onDayBlur={onBlur}
            onSelected={onChange}
            disabled={{ before: new Date() }}
          />
        )}
      />

      <FormFieldError control={control} name={name} />
    </div>
  );
};
