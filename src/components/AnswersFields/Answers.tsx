import React from 'react';
import cn from 'classnames';
import {
  FieldError,
  FieldValues,
  Merge,
  Path,
  UseFormRegister,
} from 'react-hook-form';

import RadioButton from 'components/FormField/RadioButton';
import { Input } from 'components/FormField/Input';

interface Props<T extends FieldValues> {
  name: Path<T>;
  register: UseFormRegister<T>;
  answers?: string[];
  errors?: Merge<FieldError, (FieldError | undefined)[]>;
  defaultRadioValue?: string;
  className?: string;
}

const Answers = <T extends FieldValues>({
  name,
  register,
  answers,
  errors,
  defaultRadioValue,
  className,
}: Props<T>) => {
  return (
    <div className={cn('flex flex-col gap-2', className)}>
      {answers?.map((_, index) => (
        <div className='flex w-full items-center' key={index}>
          <div className='mr-3'>
            <RadioButton
              defaultValue={defaultRadioValue}
              register={register}
              name={`${name}.correctAnswer` as Path<T>}
              value={`${index}`}
            />
          </div>

          <div className='w-full'>
            <Input
              isError={Boolean(errors?.[index]?.message)}
              placeholder='Відповідь'
              register={register}
              name={`${name}.answers.${index}` as Path<T>}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Answers;
