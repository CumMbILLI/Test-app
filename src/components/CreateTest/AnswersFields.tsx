import React, { useState } from 'react';
import { Path, UseFormRegister } from 'react-hook-form';

import CheckBox from 'components/CheckBox/CheckBox';
import RadioButton from 'components/FormField/RadioButton';
import { Input } from 'components/FormField/Input';

interface Props<T extends Record<string, any>> {
  register: UseFormRegister<T>;
  index: number;
  answers?: string[];
}

const AnswerField = <T extends Record<string, any>>({
  register,
  index,
  answers,
}: Props<T>) => {
  const [isMultiAnswer, setIsMultiAnswer] = useState(false);

  const multipleAnswers = () => setIsMultiAnswer((prev) => !prev);

  return (
    <div className='flex flex-col gap-2'>
      {answers?.map((_, _index) => (
        <div className='flex w-full items-center' key={_index}>
          <div className='mr-3'>
            {isMultiAnswer ? (
              <CheckBox
                value={_index}
                register={register}
                name={`question.${index}.correctAnswer.${_index}` as Path<T>}
              />
            ) : (
              <RadioButton
                register={register}
                name={`question.${index}.correctAnswer` as Path<T>}
                value={_index as number}
                required={true}
              />
            )}
          </div>

          <div className='w-full'>
            <Input
              placeholder='Відповідь'
              register={register}
              name={`question.${index}.answers.${_index}` as Path<T>}
              required={true}
            />
          </div>
        </div>
      ))}
      <CheckBox onChange={multipleAnswers} label='Декілька відповідей.' />
    </div>
  );
};

export default AnswerField;
