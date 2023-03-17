import React, { Dispatch, FC, SetStateAction } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { SubmitHandler, useFieldArray, useForm } from 'react-hook-form';

import Upload from 'components/FormField/Upload';
import { Input } from 'components/FormField/Input';
import AnswersFields from './AnswersFields';
import { QuestionsStepFields } from './types';

import { ReactComponent as TrashSVG } from 'assets/trash.svg';
import { useAppDispatch, useAppSelector } from 'redux/hooks';
import { setQuestionsTest } from 'redux/createTest/action';
import Button from 'components/Button/Button';

interface Props {
  setCurrentStep: Dispatch<SetStateAction<number>>;
}

const QuestionStep: FC<Props> = ({ setCurrentStep }) => {
  const dispatch = useAppDispatch();
  const { questionsTest } = useAppSelector((state) => state.testCreate);

  const validationSchema = yup.object().shape({
    questionsTest: yup.array().of(
      yup.object().shape({
        id: yup.number(),
        image: yup.string(),
        questionTitle: yup.string().required(),
        correctAnswer: yup.string().required(),
        answers: yup.array().of(yup.string().required()),
      })
    ),
  });

  const {
    register,
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<QuestionsStepFields>({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      questionsTest: questionsTest,
    },
  });

  const onSubmit: SubmitHandler<QuestionsStepFields> = async (data) => {
    dispatch(setQuestionsTest(data));
    setCurrentStep((prev) => ++prev);
  };

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'questionsTest',
  });

  const defaultQuestionField = {
    id: fields.length + 1,
    image: '',
    questionTitle: '',
    correctAnswer: '0',
    answers: ['', '', '', ''],
  };

  const createQuestion = () => append(defaultQuestionField);

  const handleRemoveQuestion = (_id: number) => () => remove(_id);

  return (
    <form id='createTest' onSubmit={handleSubmit(onSubmit)}>
      <div className='bg-gray-200 mt-10 p-5 grid gap-4'>
        {fields.map(({ id, answers, image, correctAnswer }, index) => (
          <div key={id} className='border-2 border-gray-100 px-5 '>
            <div className='flex text-xl mt-5 px-5'>
              <span className='w-full text-center'>Питання {index + 1}</span>
              {fields.length > 1 && (
                <TrashSVG
                  onClick={handleRemoveQuestion(index)}
                  className='w-6 cursor-pointer fill-red-500'
                />
              )}
            </div>
            <div className='flex justify-center my-5'>
              <Upload
                imageString={image}
                className='!w-72 !h-40'
                name={`questionsTest.${index}.image`}
                setValue={setValue}
              />
            </div>
            <Input
              isError={Boolean(
                errors?.questionsTest?.[index]?.questionTitle?.message
              )}
              placeholder='Питання'
              register={register}
              name={`questionsTest.${index}.questionTitle`}
            />
            <div className='grid gap-3 m-5'>
              <AnswersFields
                defaultValueRadio={correctAnswer}
                name={`questionsTest.${index}`}
                index={index}
                register={register}
                answers={answers}
                errors={errors}
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
      </div>
      <Button color='primary' type='submit' className='!w-64 h-12 mt-8'>
        Продовжити
      </Button>
    </form>
  );
};

export default QuestionStep;
