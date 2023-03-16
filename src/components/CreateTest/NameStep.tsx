import React, { Dispatch, FC, SetStateAction } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { SubmitHandler, useForm } from 'react-hook-form';

import { Input } from 'components/FormField/Input';

import { NameStepFields } from './types';
import { useAppDispatch, useAppSelector } from 'redux/hooks';
import { setTestName } from 'redux/createTest/action';

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
  const test = useAppSelector((state) => state.testName);

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
      testName: test.testName,
    },
  });

  const isError = Boolean(errors.testName?.message);

  const onSubmit: SubmitHandler<NameStepFields> = async (data) => {
    dispatch(setTestName(data));

    setCurrentStep((prev) => ++prev);
  };

  return (
    <form id='example' className={className} onSubmit={handleSubmit(onSubmit)}>
      <Input
        isError={isError}
        label='Назва тесту'
        name='testName'
        register={register}
        required={required}
      />
    </form>
  );
};

export default NameStep;
