import React, { FC } from 'react';

import Button from 'components/Button/Button';

interface Props {
  currectQuestion: number;
  finalStep: number;
  prevQuestion: VoidFunction;
  nextQuestion: VoidFunction;
  backStep: VoidFunction;
  finishTest: VoidFunction;
}

const TestButtonsNav: FC<Props> = ({
  currectQuestion,
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
        onClick={1 <= currectQuestion ? prevQuestion : backStep}
      >
        Назад
      </Button>

      {finalStep - 1 > currectQuestion ? (
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

export default TestButtonsNav;
