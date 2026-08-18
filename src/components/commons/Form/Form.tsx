'use client';

import { ComponentProps, PropsWithChildren } from 'react';
import {
  FormProvider,
  SubmitHandler,
  UseFormReturn,
  type FieldValues,
} from 'react-hook-form';

type FormProps<T extends FieldValues> = ComponentProps<'form'> & {
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
