import React, { Dispatch, FC, SetStateAction } from 'react';
import { SubmitHandler, useFieldArray, useForm } from 'react-hook-form';

import { Input } from 'components/FormField/Input';

import { ReactComponent as TrashSVG } from 'assets/trash.svg';
import { GradesFields } from './types';
import { useAppDispatch, useAppSelector } from 'redux/hooks';
import { setGradeTest } from 'redux/createTest/action';

interface Props {
  setCurrentStep: Dispatch<SetStateAction<number>>;
}

const GradeStep: FC<Props> = ({ setCurrentStep }) => {
  const dispatch = useAppDispatch();
  const test = useAppSelector((state) => state.testName);

  const { register, control, handleSubmit } = useForm<GradesFields>({
    defaultValues: {
      gradesTest: test.gradesTest,
    },
  });
  const { remove, fields, append } = useFieldArray({
    control,
    name: 'gradesTest',
  });

  const onSubmit: SubmitHandler<GradesFields> = (data) => {
    dispatch(setGradeTest(data));
    setCurrentStep((prev) => ++prev);
  };

  const isLengthCheck = (index: number) => 3 < index + 1;

  const createFieldForm = () =>
    append({
      id: fields.length + 1,
      name: '',
      result: [],
      placeholder: 'Назва',
    });

  const removeField = (_id: number) => {
    remove(_id);
  };

  return (
    <form id='example' onSubmit={handleSubmit(onSubmit)} className='mt-6'>
      {fields.map(({ id, placeholder }, index) => (
        <div key={id} className='flex w-full'>
          <div className='w-full p-5 border-r-2 border-black flex'>
            <div className='w-full'>
              <Input
                name={`gradesTest.${index}.name`}
                register={register}
                placeholder={placeholder}
              />
            </div>

            {isLengthCheck(index) && (
              <TrashSVG
                onClick={() => removeField(index)}
                className='w-6 ml-4 cursor-pointer'
              />
            )}
          </div>

          <div className='w-1/2 h-max p-5 flex items-center justify-center'>
            <span className='mx-2 text-lg'>від</span>
            <Input
              className='w-20'
              register={register}
              name={`gradesTest.${index}.result.${0}`}
            />
            <span className='mx-2 text-lg'>до</span>
            <Input
              className='w-20'
              register={register}
              name={`gradesTest.${index}.result.${1}`}
            />
          </div>
        </div>
      ))}

      <span
        onClick={createFieldForm}
        className='text-base bg-transparent duration-300 font-bold cursor-pointer text-blue-500/80 hover:text-blue-500/100'
      >
        + Створити
      </span>
    </form>
  );
};

export default GradeStep;
