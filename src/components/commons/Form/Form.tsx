import { PropsWithChildren } from 'react';
import {
  FormProvider,
  SubmitHandler,
  UseFormReturn,
  type FieldValues,
} from 'react-hook-form';

type FormProps<T extends FieldValues> = PropsWithChildren<{
  className?: string;
  form: UseFormReturn<T>;
  onSubmit: SubmitHandler<T>;
}>;

export const Form = <T extends FieldValues>({
  children,
  form,
  onSubmit,
}: FormProps<T>) => (
  <FormProvider {...form}>
    <form onSubmit={form.handleSubmit(onSubmit)}>{children}</form>
  </FormProvider>
);
