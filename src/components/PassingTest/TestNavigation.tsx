import React, { FC } from 'react';

import Button from 'components/Button/Button';

interface Props {
  correctQuestion: number;
  finalStep: number;
  prevQuestion: VoidFunction;
  nextQuestion: VoidFunction;
  finishTest: VoidFunction;
}

const TestNavigation: FC<Props> = ({
  correctQuestion,
  finalStep,
  prevQuestion,
  nextQuestion,

  finishTest,
}) => {
  return (
    <div className='flex gap-40'>
      <Button
        type='button'
        color='secondary'
        className='w-full'
        onClick={prevQuestion}
      >
        Назад
      </Button>

      {finalStep > correctQuestion ? (
        <Button
          type='button'
          color='secondary'
          className='w-full'
          onClick={nextQuestion}
        >
          Впреред
        </Button>
      ) : (
        <Button
          color='primary'
          type='button'
          className='w-full'
          onClick={finishTest}
        >
          Завершити
        </Button>
      )}
    </div>
  );
};

export default TestNavigation;
