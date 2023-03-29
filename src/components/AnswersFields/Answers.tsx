import React from 'react';
import cn from 'classnames';
import { FieldValues, Path, UseFormRegister } from 'react-hook-form';

import RadioButton from 'components/FormField/RadioButton';
import { Input } from 'components/FormField/Input';

interface Props<T extends FieldValues> {
  name: Path<T>;
  register: UseFormRegister<T>;
  index: number;
  answers?: string[];
  errors?: any;
  defaultValueRadio?: string;
  className?: string;
}

const Answers = <T extends FieldValues>({
  name,
  register,
  index,
  answers,
  errors,
  defaultValueRadio,
  className,
}: Props<T>) => {
  return (
    <div className={cn('flex flex-col gap-2', className)}>
      {answers?.map((answerText, _index) => (
        <div className='flex w-full items-center' key={_index}>
          <div className='mr-3'>
            <RadioButton
              defaultValue={defaultValueRadio}
              register={register}
              name={`${name}.correctAnswer` as Path<T>}
              value={`${_index}`}
            />
          </div>

          <div className='w-full'>
            <Input
              isError={Boolean(
                errors?.testQuestions?.[index]?.answers?.[_index]?.message
              )}
              placeholder='Відповідь'
              register={register}
              name={`${name}.answers.${_index}` as Path<T>}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Answers;
