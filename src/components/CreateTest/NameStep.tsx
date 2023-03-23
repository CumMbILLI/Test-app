import React, { Dispatch, FC, SetStateAction } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { SubmitHandler, useForm } from 'react-hook-form';

import { Input } from 'components/FormField/Input';

import { NameStepFields } from './types';
import { useAppDispatch, useAppSelector } from 'redux/hooks';
import { setNameTest } from 'redux/createTest/action';
import Button from 'components/Button/Button';

interface Props {
  required?: boolean;
  className?: string;
  setCurrentStep: Dispatch<SetStateAction<number>>;
}

export const NameStep: FC<Props> = ({
  required = true,
  className,
  setCurrentStep,
}) => {
  const dispatch = useAppDispatch();
  const { testName } = useAppSelector((state) => state.testCreate);

  const validationSchema = yup.object().shape({
    testName: yup.string().required(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<NameStepFields>({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      testName: testName,
    },
  });

  const isError = Boolean(errors.testName?.message);

  const onSubmit: SubmitHandler<NameStepFields> = async (data) => {
    dispatch(setNameTest(data));

    setCurrentStep((prev) => ++prev);
  };

  return (
    <form
      id='createTest'
      className={className}
      onSubmit={handleSubmit(onSubmit)}
    >
      <Input
        isError={isError}
        label='Назва тесту'
        name='testName'
        register={register}
        required={required}
      />

      <Button color='primary' type='submit' className='!w-64 h-12 mt-8'>
        Продовжити
      </Button>
    </form>
  );
};

export default NameStep;
