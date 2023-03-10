import React from 'react';
import cn from 'classnames';
import { Path, UseFormRegister } from 'react-hook-form';

interface Props<T extends Record<string, any>> {
  name: Path<T>;
  register: UseFormRegister<T>;
  placeholder?: string;
  required?: boolean;
  className?: string;
  label?: string;
}

export const Input = <T extends Record<string, any>>({
  name,
  register,
  placeholder = '',
  required = false,
  className,
  label,
}: Props<T>) => {
  return (
    <div className='flex flex-col gap-2'>
      {label && <span className='text-lg text-left'>{label}</span>}
      <input
        {...register(name, { required })}
        className={cn(
          'border border-1 border-black p-2 pl-4 rounded',
          className
        )}
        placeholder={placeholder}
      />
    </div>
  );
};
