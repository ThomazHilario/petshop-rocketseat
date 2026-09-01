'use client';

import { ReactNode } from 'react';

import {
  Controller,
  useFormContext,
  type FieldPath,
  type FieldValues,
} from 'react-hook-form';

type FormTextAreaFieldProps<T extends FieldValues> = {
  label: string;
  name: FieldPath<T>;
  placeholder: string;
  Icon?: ReactNode;
};

export const FormTextAreaField = <T extends FieldValues>({
  label,
  name,
  placeholder,
  Icon,
}: FormTextAreaFieldProps<T>) => {
  const { control } = useFormContext();

  return (
    <div className="flex flex-col gap-2">
      <label className="text-label-medium w-fit" htmlFor={name}>
        {label}
      </label>

      <div className="flex gap-2 items-center border-2 border-border-primary has-[textarea:focus-within]:outline-2 has-[textarea:focus-within]:-outline-offset-2 has-[textarea:focus-within]:outline-content-brand rounded-lg p-3">
        {Icon && Icon}

        <Controller
          control={control}
          name={name}
          render={({ field: { onChange, onBlur, value } }) => (
            <textarea
              id={name}
              className="flex-1 border-0 outline-0 resize-none"
              rows={3}
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
