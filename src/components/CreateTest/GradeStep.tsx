import React, { Dispatch, FC, SetStateAction } from 'react';
import { SubmitHandler, useFieldArray, useForm } from 'react-hook-form';

import { Input } from 'components/FormField/Input';

import { ReactComponent as TrashSVG } from 'assets/trash.svg';
import { GradesFields } from './types';

interface Props {
  setCurrentStep: Dispatch<SetStateAction<number>>;
}

const INITIAL_VALUES = [
  {
    id: 1,
    placeholder: 'Мудрець',
  },
  {
    id: 2,
    placeholder: 'Знавець',
  },
  {
    id: 3,
    placeholder: 'Невдаха',
  },
];

const GradeStep: FC<Props> = ({ setCurrentStep }) => {
  const { register, control, handleSubmit } = useForm<GradesFields>({
    defaultValues: {
      estimates: INITIAL_VALUES,
    },
  });
  const { remove, fields, append } = useFieldArray({
    control,
    name: 'estimates',
  });

  const onSubmit: SubmitHandler<GradesFields> = (data) => {
    //future request
    console.log(
      Object.assign(
        [],
        data.estimates.map(({ id, name, result }) => ({
          id,
          name,
          result,
        }))
      )
    );
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
    <form id='example' onSubmit={handleSubmit(onSubmit)} className='h-full'>
      {fields.map(({ id, placeholder }, index) => (
        <div key={id} className='flex w-full'>
          <div className='w-full p-5 border-r-2 border-black flex justify-between'>
            <div className='w-full'>
              <Input
                name={`estimates.${index}.name`}
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
              name={`estimates.${index}.result.${0}`}
            />
            <span className='mx-2 text-lg'>до</span>
            <Input
              className='w-20'
              register={register}
              name={`estimates.${index}.result.${1}`}
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
