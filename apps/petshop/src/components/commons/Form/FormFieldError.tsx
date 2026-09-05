import {
  Control,
  FieldPath,
  FieldValues,
  useController,
} from 'react-hook-form';

type FormFieldErrorProps<T extends FieldValues> = {
  control: Control<T>;
  name: FieldPath<T>;
};

export const FormFieldError = <T extends FieldValues>({
  control,
  name,
}: FormFieldErrorProps<T>) => {
  const { fieldState } = useController({
    control,
    name,
  });

  return (
    <p className="text-paragraph-medium text-red-400">
      {fieldState.error?.message}
    </p>
  );
};
