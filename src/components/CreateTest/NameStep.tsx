import React, { Dispatch, FC, SetStateAction } from 'react';
import cn from 'classnames';
import { SubmitHandler, useForm } from 'react-hook-form';

import { Input } from 'components/FormField/Input';

import { NameStepFields } from './types';

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
  const { register, handleSubmit } = useForm<NameStepFields>();

  const onSubmit: SubmitHandler<NameStepFields> = (data) => {
    //future request
    console.log(data);
    setCurrentStep((prev) => ++prev);
  };

  return (
    <form
      id='example'
      className={cn('', className)}
      onSubmit={handleSubmit(onSubmit)}
    >
      <Input
        label='Назва тесту'
        name='nameTest'
        register={register}
        required={required}
      />
    </form>
  );
};

export default NameStep;
