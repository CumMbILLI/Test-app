import React from 'react';
import { Path, UseFormRegister } from 'react-hook-form';

import RadioButton from 'components/FormField/RadioButton';
import { Input } from 'components/FormField/Input';

interface Props<T extends Record<string, any>> {
  name: Path<T>;
  register: UseFormRegister<T>;
  index: number;
  answers?: string[];
  errors?: any;
  defaultValueRadio: string;
}

const AnswerField = <T extends Record<string, any>>({
  name,
  register,
  index,
  answers,
  errors,
  defaultValueRadio,
}: Props<T>) => {
  return (
    <div className='flex flex-col gap-2'>
      {answers?.map((_, _index) => (
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
                errors?.questionsTest?.[index]?.answers?.[_index]?.message
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

export default AnswerField;
