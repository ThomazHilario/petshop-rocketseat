'use client';

import { ComponentProps } from 'react';
import {
  FormProvider,
  type SubmitHandler,
  type UseFormReturn,
  type FieldValues,
} from 'react-hook-form';

type FormProps<T extends FieldValues> = Omit<
  ComponentProps<'form'>,
  'onSubmit'
> & {
  className?: string;
  form: UseFormReturn<T>;
  onSubmit: SubmitHandler<T>;
};

export const Form = <T extends FieldValues>({
  children,
  form,
  onSubmit,
  ...props
}: FormProps<T>) => (
  <FormProvider {...form}>
    <form onSubmit={form.handleSubmit(onSubmit)} {...props}>
      {children}
    </form>
  </FormProvider>
);
