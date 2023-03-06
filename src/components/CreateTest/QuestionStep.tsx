import React, { Dispatch, FC, SetStateAction } from 'react';
import { SubmitHandler, useFieldArray, useForm } from 'react-hook-form';

import Upload from 'components/FormField/Upload';
import { Input } from 'components/FormField/Input';
import AnswersFields from './AnswersFields';
import { QuestionsStepFields } from './types';

import { ReactComponent as TrashSVG } from 'assets/trash.svg';

interface Props {
  setCurrentStep: Dispatch<SetStateAction<number>>;
}

const INITIAL_VALUES = [
  {
    id: 1,
    image: '',
    questionTitle: '',
    correctAnswer: '',
    answers: ['', '', '', ''],
  },
];

const QuestionStep: FC<Props> = ({ setCurrentStep }) => {
  const { register, control, handleSubmit, setValue } =
    useForm<QuestionsStepFields>({
      defaultValues: {
        question: INITIAL_VALUES,
      },
    });

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'question',
  });

  const createQuestion = () => {
    append({
      id: fields.length + 1,
      image: '',
      questionTitle: '',
      correctAnswer: '',
      answers: ['', '', '', ''],
    });
  };

  const removeQuestion = (index: number) => remove(index);

  const onSubmit: SubmitHandler<QuestionsStepFields> = (data) => {
    //future request
    console.log(data);
    setCurrentStep((prev) => ++prev);
  };

  return (
    <div className='bg-gray-300 mt-10 p-5'>
      <form
        id='example'
        className='grid gap-4'
        onSubmit={handleSubmit(onSubmit)}
      >
        {fields.map(({ id, answers }, index) => (
          <div key={id} className='border-2 px-5 '>
            <div className='flex text-xl mt-5 px-5'>
              <span className='w-full text-center'>Питання {index + 1}</span>
              {fields.length > 1 && (
                <TrashSVG
                  onClick={() => removeQuestion(index)}
                  className='w-6 cursor-pointer fill-red-500'
                />
              )}
            </div>
            <div className='flex justify-center my-5'>
              <Upload
                className='!w-72 !h-36'
                name={`question.${index}.image`}
                setValue={setValue}
              />
            </div>
            <Input
              placeholder='Питання'
              register={register}
              name={`question.${index}.questionTitle`}
            />
            <div className='grid gap-3 m-5'>
              <AnswersFields
                register={register}
                index={index}
                answers={answers}
              />
            </div>
          </div>
        ))}

        <div className='flex flex-col justify-center items-center gap-5'>
          <span
            onClick={createQuestion}
            className='text-base bg-transparent duration-300 font-bold cursor-pointer text-blue-500/80 hover:text-blue-500/100'
          >
            + Створити
          </span>
        </div>
      </form>
    </div>
  );
};

export default QuestionStep;
