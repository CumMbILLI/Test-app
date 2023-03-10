import React, { Dispatch, FC, SetStateAction } from 'react';
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
  required = false,
  className,
  setCurrentStep,
}) => {
  const dispatch = useAppDispatch();
  const test = useAppSelector((state) => state.testName);

  const { register, handleSubmit } = useForm<NameStepFields>({
    defaultValues: {
      testName: test.testName,
    },
  });

  const onSubmit: SubmitHandler<NameStepFields> = (data) => {
    dispatch(setTestName(data));
    setCurrentStep((prev) => ++prev);
  };

  return (
    <form id='example' className={className} onSubmit={handleSubmit(onSubmit)}>
      <Input
        label='Назва тесту'
        name='testName'
        register={register}
        required={required}
      />
    </form>
  );
};

export default NameStep;
