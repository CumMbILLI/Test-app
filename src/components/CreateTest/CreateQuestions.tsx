import Button from 'components/Button/Button';
import { Input } from 'components/FormField/Input';
import RadioButton from 'components/FormField/RadioButton';
import React, { useEffect } from 'react';
import { SubmitHandler, useFieldArray, useForm } from 'react-hook-form';
import AnswersInputs from './AnswersInputs';

export interface QuestionTyped {
  id: number;
  image?: string;
  questionTitle: string;
}

export interface QuestionsAll {
  question: QuestionTyped[];
}

interface AnswerTyped {
  answer: string;
}

interface AnswerAll {
  answers: AnswerTyped[];
}

const INITIAL_VALUES = [
  {
    id: 1,
    image: '',
    questionTitle: '',
    correctAnswer: 0,
    answers: [''],
  },
];

const INITIAL_VALUES_2 = [{ answer: '' }, { answer: '' }];

const CreateQuestions = () => {
  const { register, control, handleSubmit } = useForm<QuestionsAll>({
    defaultValues: {
      question: INITIAL_VALUES,
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'question',
  });

  const {
    register: register2,
    control: control2,
    handleSubmit: handleSubmit2,
  } = useForm<AnswerAll>({
    defaultValues: {
      answers: INITIAL_VALUES_2,
    },
  });

  const {
    fields: fields2,
    append: append2,
    remove: remove2,
  } = useFieldArray({
    control: control2,
    name: 'answers',
  });

  const createAnswer = () => append2({ answer: '' });

  // const createQuestion = () =>
  //   append({
  //     id: fields.length + 1,
  //     image: '',
  //     correctAnswer: 0,
  //     questionTitle: '',
  //     answers: ['', ''],
  //   });

  const onSubmit: SubmitHandler<QuestionsAll> = (data) => console.log(data);

  const onSubmit2: SubmitHandler<AnswerAll> = (data) => console.log(data);

  const onHandleSubmit = (e: any) => {
    e.preventDefault();

    handleSubmit(onSubmit);
    handleSubmit2(onSubmit2);
  };

  return (
    <div className='bg-gray-300 mt-10'>
      <form onSubmit={onHandleSubmit}>
        {fields.map(({ id }, index) => (
          <div key={id}>
            <span className='flex justify-center'>Питання {index + 1}</span>
            <Input
              register={register}
              name={`question.${index}.questionTitle`}
            />
            <div className='grid gap-3 mt-5'></div>
          </div>
        ))}
        {fields2.map((_, index) => (
          <div>
            <Input register={register2} name={`answers.${index}.answer`} />
          </div>
        ))}
        <Button onClick={createAnswer} className='!w-[200px]' color='primary'>
          Створити
        </Button>
        <Button className='!w-[200px]' color='primary' type='submit'>
          Отправить
        </Button>
      </form>
    </div>
  );
};

export default CreateQuestions;
