import React from 'react';
import { Path, UseFormRegister } from 'react-hook-form';

interface Props<T extends Record<string, any>> {
  name: Path<T>;
  register: UseFormRegister<T>;
  required?: boolean;
  className?: string;
  value: string;
  defaultValue?: string;
}

const RadioButton = <T extends Record<string, any>>({
  value,
  name,
  register,
  required,
  className,
  defaultValue,
}: Props<T>) => {
  return (
    <input
      defaultChecked={defaultValue === value}
      className={className}
      {...register(name, { required })}
      type='radio'
      value={value}
    />
  );
};

export default RadioButton;
