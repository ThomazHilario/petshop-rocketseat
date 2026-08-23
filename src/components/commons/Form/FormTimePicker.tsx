'use client';

import {
  Controller,
  useController,
  useFormContext,
  type FieldPath,
  type FieldValues,
} from 'react-hook-form';

import { cn } from '@/utils';
import { ClockIcon } from '../Icons';

type ValuesProps = {
  label: string;
  value: string | number;
};

type FormTimePickerProps<T extends FieldValues> = {
  label: string;
  name: FieldPath<T>;
  values: ValuesProps[];
  className?: string;
  placeholder?: string;
};

export const FormTimePicker = <T extends FieldValues>({
  label,
  values,
  name,
  className,
  placeholder = 'Selecione a data',
}: FormTimePickerProps<T>) => {
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
          <div className="relative flex h-full w-full gap-2 items-center border-2 border-border-primary rounded-lg">
            <ClockIcon className="text-content-brand absolute left-2.5 top-1/2 -translate-y-1/2" />

            <select
              className="w-full h-full absolute px-9.5 cursor-pointer"
              id={name}
              onChange={onChange}
              onBlur={onBlur}
              value={value}
            >
              {values.map((option, index) => (
                <option key={index} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        )}
      />
    </div>
  );
};
