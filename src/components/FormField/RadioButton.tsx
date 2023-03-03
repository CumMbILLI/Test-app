import React from 'react';
import { Path, UseFormRegister } from 'react-hook-form';

interface Props<T extends Record<string, any>> {
  name: Path<T>;
  register: UseFormRegister<T>;
  required?: boolean;
  className?: string;
  value: number;
}

const RadioButton = <T extends Record<string, any>>({
  value,
  name,
  register,
  required,
  className,
}: Props<T>) => {
  return (
    <input
      className={className}
      {...register(name, { required })}
      type='radio'
      value={value}
    />
  );
};

export default RadioButton;
