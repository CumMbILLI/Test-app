import Button from 'components/Button/Button';
import { Input } from 'components/FormField/Input';
import RadioButton from 'components/FormField/RadioButton';
import React from 'react';
import { SubmitHandler, useFieldArray, useForm } from 'react-hook-form';

export interface QuestionTyped {
  id: number;
  image?: string;
  questionTitle: string;
}

export interface QuestionsAll {
  test: {
    question: QuestionTyped[];
    answer: {
      id: number;
      correntAnswer: number | number[];
      answer: string[];
    }[];
  };
}

const INITIAL_VALUES = {
  question: [
    {
      id: 1,
      image: '',
      questionTitle: '',
    },
  ],
  answers: [
    {
      id: 1,
      correctAnswer: 0,
      answers: ['', ''],
    },
  ],
};

const CreateQuestions = () => {
  const { register, control, handleSubmit } = useForm<QuestionsAll>({
    defaultValues: {
      test: INITIAL_VALUES,
    },
  });
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'test',
  });

  const createAnswerInput = () => console.log(append);

  //   const createQuestion = () =>
  //     append({
  //       id: fields.length + 1,
  //       image: '',
  //       correctAnswer: 0,
  //       questionTitle: '',
  //       answers: ['', ''],
  //     });

  const onSubmit: SubmitHandler<QuestionsAll> = (data) => console.log(data);

  console.log(fields);

  return (
    <div className='bg-gray-300 mt-10'>
      <form onSubmit={handleSubmit(onSubmit)}>
        {fields.map(({ answers, id }, index) => (
          <div key={id}>
            <span className='flex justify-center'>Питання {index + 1}</span>
            <Input
              register={register}
              name={`questions.${index}.questionTitle`}
            />
            <div className='grid gap-3 mt-5'>
              {answers.map((_, _index) => (
                <div key={_index + index} className='flex gap-3 items-center'>
                  <RadioButton
                    value={_index}
                    register={register}
                    name={`questions.${index}.correctAnswer`}
                  />
                  <Input
                    placeholder='Відповідь'
                    register={register}
                    name={`questions.${index}.answers.${_index}`}
                  />
                </div>
              ))}

              <Button
                onClick={createAnswerInput}
                className='w-[200px] ml-6'
                type='button'
                color='secondary'
              >
                Створити
              </Button>
            </div>
          </div>
        ))}
        <div>
          <div className='w-full flex items-center justify-center mt-10'>
            <Button className='w-[200px]' color='primary' type='submit'>
              Отправить
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateQuestions;
