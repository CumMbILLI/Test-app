import Button from 'components/Button/Button';
import { Input } from 'components/FormField/Input';
import React from 'react';
import {
  SubmitHandler,
  useFieldArray,
  useForm,
  UseFormSetValue,
} from 'react-hook-form';

interface AnswerField {
  answer: string;
}

interface Answers {
  testAnswers: AnswerField[];
}

interface Props<T extends Record<string, any>> {
  setValue: UseFormSetValue<T>;
}

const INITIAL_VALUES = [
  {
    answer: '',
  },
  {
    answer: '',
  },
];

const AnswersInputs = <T extends Record<string, any>>({
  setValue,
}: Props<T>) => {
  const { register, control } = useForm<Answers>({
    defaultValues: {
      testAnswers: INITIAL_VALUES,
    },
  });

  const { fields, append } = useFieldArray({
    control,
    name: 'testAnswers',
  });

  const createInput = () => append({ answer: '' });

  return (
    <div className='px-5'>
      {fields.map((_, index) => (
        <div key={index} className='flex gap-5 my-3'>
          <input type='radio' />
          <Input register={register} name={`testAnswers.${index}.answer`} />
        </div>
      ))}
      <Button onClick={createInput} className='ml-5' color='secondary'>
        Створити
      </Button>
    </div>
  );
};

export default AnswersInputs;
