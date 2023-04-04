import React, { Dispatch, FC, SetStateAction } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { SubmitHandler, useFieldArray, useForm } from 'react-hook-form';

import { Input } from 'components/FormField/Input';

import { ReactComponent as TrashSVG } from 'assets/trash.svg';
import { GradesFields } from './types';
import { useAppDispatch, useAppSelector } from 'redux/hooks';
import { setGradeTest } from 'redux/createTest/action';
import Button from 'components/Button/Button';

interface Props {
  setCurrentStep: Dispatch<SetStateAction<number>>;
}

const validationSchema = yup.object().shape({
  testGrades: yup.array().of(
    yup.object().shape({
      id: yup.number(),
      placeholder: yup.string(),
      gradeName: yup.string().required(),
      from: yup.number().min(0).max(100).required(),
      to: yup.number().min(0).max(100).required(),
    })
  ),
});

const GradeStep: FC<Props> = ({ setCurrentStep }) => {
  const dispatch = useAppDispatch();
  const { testGrades } = useAppSelector((state) => state.testCreate);

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<GradesFields>({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      testGrades,
    },
  });

  const { remove, fields, append } = useFieldArray({
    control,
    name: 'testGrades',
  });

  const onSubmit: SubmitHandler<GradesFields> = async (data) => {
    dispatch(setGradeTest(data));
    setCurrentStep((prev) => ++prev);
  };

  const createFieldForm = () => {
    const defaultGradeField = {
      id: fields.length + 1,
      gradeName: '',
      from: '',
      to: '',
      placeholder: 'Назва',
    };

    append(defaultGradeField);
  };

  const handleRemoveField = (_id: number) => () => {
    remove(_id);
  };

  return (
    <form id='createTest' onSubmit={handleSubmit(onSubmit)} className='mt-6'>
      {fields.map(({ id, placeholder }, index) => (
        <div key={id} className='flex w-full'>
          <div className='w-full p-5 border-r-2 border-black flex'>
            <div className='w-full'>
              <Input
                isError={Boolean(
                  errors.testGrades?.[index]?.gradeName?.message
                )}
                name={`testGrades.${index}.gradeName`}
                register={register}
                placeholder={placeholder}
              />
            </div>

            {3 < index + 1 && (
              <TrashSVG
                onClick={handleRemoveField(index)}
                className='w-6 ml-4 cursor-pointer'
              />
            )}
          </div>

          <div className='w-1/2 h-max p-5 flex items-center justify-center'>
            <span className='mx-2 text-lg'>від</span>
            <Input
              isError={Boolean(errors.testGrades?.[index]?.from?.message)}
              className='w-20'
              register={register}
              name={`testGrades.${index}.from`}
            />
            <span className='mx-2 text-lg'>до</span>
            <Input
              isError={Boolean(errors.testGrades?.[index]?.to?.message)}
              className='w-20'
              register={register}
              name={`testGrades.${index}.to`}
            />
          </div>
        </div>
      ))}

      <span
        onClick={createFieldForm}
        className='block text-base bg-transparent duration-300 font-bold cursor-pointer text-blue-500/80 hover:text-blue-500/100'
      >
        + Створити
      </span>

      <Button color='primary' type='submit' className='!w-64 h-12 mt-8'>
        Продовжити
      </Button>
    </form>
  );
};

export default GradeStep;
