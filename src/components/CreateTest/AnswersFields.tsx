import CheckBox from 'components/CheckBox/CheckBox';
import { Input } from 'components/FormField/Input';
import RadioButton from 'components/FormField/RadioButton';
import React, { useState } from 'react';
import { Path, UseFormRegister } from 'react-hook-form';

interface Props<T extends Record<string, any>> {
  register: UseFormRegister<T>;
  index: number;
  _index: number;
  required?: boolean;
  className?: string;
}

const AnswerField = <T extends Record<string, any>>({
  register,
  index,
  _index,
  required,
  className,
}: Props<T>) => {
  const [multipleAnswers, setMultipleAnswers] = useState();

  return (
    <div className='flex w-full' key={_index}>
      {multipleAnswers ? (
        <CheckBox />
      ) : (
        <RadioButton
          className='mr-5'
          register={register}
          name={`question.${index}.correctAnswer` as Path<T>}
          value={_index}
          required={true}
        />
      )}
      <div className='w-full'>
        <Input
          placeholder='Відповідь'
          register={register}
          name={`question.${index}.answers.${_index}` as Path<T>}
          required={true}
        />
      </div>
    </div>
  );
};

export default AnswerField;
