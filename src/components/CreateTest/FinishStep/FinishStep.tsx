import React from 'react';
import { useForm } from 'react-hook-form';
import { createTestAsync } from 'redux/createTest/action';
import { useAppDispatch, useAppSelector } from 'redux/hooks';

const FinishStep = () => {
  const dispatch = useAppDispatch();

  const steps = useAppSelector((state) => state.testName);

  const { handleSubmit } = useForm();

  const onSubmit = () => {
    const data = {
      nameTest: steps.testName,
      gradesTest: steps.gradesTest,
      questionsTest: steps.questionsTest,
      completed: false,
    };

    dispatch(createTestAsync(data));
  };

  return (
    <form
      className='text-xl mt-8'
      id='example'
      onSubmit={handleSubmit(onSubmit)}
    >
      <span>Бажаєте завершити створення тестування?</span>
    </form>
  );
};

export default FinishStep;
