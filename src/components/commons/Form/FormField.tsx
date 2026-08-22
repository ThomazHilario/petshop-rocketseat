'use client';

import { ReactNode } from 'react';

import {
  Controller,
  useFormContext,
  type FieldPath,
  type FieldValues,
} from 'react-hook-form';

type FormFieldProps<T extends FieldValues> = {
  label: string;
  name: FieldPath<T>;
  placeholder: string;
  Icon?: ReactNode;
};

export const FormField = <T extends FieldValues>({
  label,
  name,
  placeholder,
  Icon,
}: FormFieldProps<T>) => {
  const { control } = useFormContext<T>();

  return (
    <div className="flex flex-col gap-2">
      <label className="text-label-medium" htmlFor={name}>
        {label}
      </label>

      <div className="flex gap-2 items-center border-2 border-border-primary rounded-lg p-3">
        {Icon && Icon}

        <Controller
          control={control}
          name={name}
          render={({ field: { onChange, onBlur, value } }) => (
            <input
              id={name}
              className="flex-1 border-0 outline-0"
              placeholder={placeholder}
              onChange={onChange}
              onBlur={onBlur}
              value={value}
            />
          )}
        />
      </div>
    </div>
  );
};
