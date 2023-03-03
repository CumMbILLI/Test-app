import React, { FC } from 'react';
import cn from 'classnames';
import { SubmitHandler, useForm } from 'react-hook-form';

import { Input } from 'components/FormField/Input';

interface FormField {
  nameTest: string;
}

interface Props {
  required?: boolean;
  className?: string;
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
}

export const NameStep: FC<Props> = ({
  required = false,
  className,
  setCurrentStep,
}) => {
  const { register, handleSubmit } = useForm<FormField>();

  const onSubmit: SubmitHandler<FormField> = (data) => {
    console.log(data);
    setCurrentStep((prev) => ++prev);
  };

  return (
    <form
      id='example'
      className={cn('w-[800px] h-[200px]', className)}
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
