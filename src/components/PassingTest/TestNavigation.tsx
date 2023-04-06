import React, { FC } from 'react';

import Button from 'components/Button/Button';

interface Props {
  correctQuestion: number;
  finalStep: number;
  prevQuestion: VoidFunction;
  nextQuestion: VoidFunction;
  backStep: VoidFunction;
  finishTest: VoidFunction;
}

const TestNavigation: FC<Props> = ({
  correctQuestion,
  finalStep,
  prevQuestion,
  nextQuestion,
  backStep,
  finishTest,
}) => {
  return (
    <div className='flex gap-40'>
      <Button
        type='button'
        color='secondary'
        className='w-full'
        onClick={correctQuestion >= 1 ? prevQuestion : backStep}
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
