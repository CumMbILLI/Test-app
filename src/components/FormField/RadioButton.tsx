import { QuestionsAll } from 'components/CreateTest/CreateQuestions';
import React, { useState } from 'react';
import {
  Path,
  useFieldArray,
  useForm,
  UseFormRegister,
  UseFormSetValue,
} from 'react-hook-form';

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
    <div>
      <input {...register(name)} type='radio' value={value} />
    </div>
  );
};

export default RadioButton;
