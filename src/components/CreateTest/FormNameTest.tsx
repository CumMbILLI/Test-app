import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import Button from 'components/Button/Button';
import { Input } from 'components/FormField/Input';

interface NameTest {
  titleTest: string;
  countQuestions: string;
}

const FormNameTest = () => {
  const { register, handleSubmit } = useForm<NameTest>();

  const onSubmit: SubmitHandler<NameTest> = (data) => console.log(data);

  return (
    <div>
      <form className='grid gap-4' onSubmit={handleSubmit(onSubmit)}>
        <Input label='Назва тесту' name='titleTest' register={register} />
        <Input
          label='Кількість питань'
          name='countQuestions'
          register={register}
        />
        <Button className='mt-4' color='primary' type='submit'>
          Продвожити
        </Button>
      </form>
    </div>
  );
};

export default FormNameTest;
