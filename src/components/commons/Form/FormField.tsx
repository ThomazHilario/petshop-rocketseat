'use client';

import { ComponentType } from 'react';
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
  Icon?: ComponentType;
};

export const FormField = <T extends FieldValues>({
  label,
  name,
  placeholder,
  Icon,
}: FormFieldProps<T>) => {
  const { control } = useFormContext();

  return (
    <div className="flex flex-col gap-2">
      <label>{label}</label>

      <div className="flex items-center">
        {Icon && <Icon />}

        <Controller
          control={control}
          name={name}
          render={({ field: { onChange, onBlur, value } }) => (
            <input
              className="flex-1 p-3 rounded-lg"
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
