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
        onClick={correctQuestion >= 1 ? prevQuestion : backStep}
      >
        Назад
      </Button>

      {finalStep > correctQuestion ? (
        <Button type='button' color='secondary' onClick={nextQuestion}>
          Впреред
        </Button>
      ) : (
        <Button onClick={finishTest} color='primary' type='button'>
          Завершити
        </Button>
      )}
    </div>
  );
};

export default TestNavigation;
