import React, { FC, useEffect, useState } from 'react';
import classNames from 'classnames';

import { putTestAsync } from 'redux/currectTest/action';
import { useAppDispatch } from 'redux/hooks';
import { TestItem } from 'redux/types';
import { QuestionItem } from './Test';

interface Props {
  testId: string | null;
  resultTest: number[];
  testItem: TestItem;
  questions: QuestionItem[];
}

const TABLE_HEADER = [
  {
    name: '№',
    field: 'index',
  },
  {
    name: 'Питання',
    field: 'questionTitle',
  },
];

const TestResult: FC<Props> = ({ testId, testItem, questions, resultTest }) => {
  const [showDetailse, setShowDetailse] = useState(false);

  const dispatch = useAppDispatch();

  const resultPercent = Math.round(
    (resultTest.length / questions.length) * 100
  );

  const wrongAnswersCount = questions.length - resultTest.length;

  const userGradeTest = testItem?.testGrades
    .map(({ from, to, gradeName }) => {
      if (resultPercent >= Number(from) && resultPercent <= Number(to)) {
        return gradeName;
      }
      return null;
    })
    .find((item) => item !== null);

  useEffect(() => {
    const value = {
      ...testItem,
      completed: true,
      result: resultPercent,
    };

    if (testId) dispatch(putTestAsync(testId, value));
  }, [dispatch]);

  return (
    <div className='w-full'>
      <div className='grid gap-3 text-xl'>
        <h2 className='text-3xl'>Результат тесту</h2>
        <span>
          Ваш результат:{' '}
          <span
            className={resultPercent > 50 ? 'text-green-600' : 'text-red-600'}
          >
            {resultPercent}%
          </span>
        </span>
        {userGradeTest && <span>Ваш ранг: {userGradeTest}</span>}
      </div>

      <div className='text-base flex flex-col text-left border-t border-black mt-5 gap-2 py-2 px-4'>
        <span>Кількість питань: {questions.length}</span>
        <span>Кількість правильних відповідей: {resultTest.length}</span>
        <span>Кількість неправильних відповідей: {wrongAnswersCount}</span>
      </div>

      <button onClick={() => setShowDetailse((prev) => !prev)}>
        Детальніше
      </button>

      {showDetailse && (
        <div className='w-full bg-gray-100 grid gap-2'>
          {questions.map(
            ({ userAnswer, correctAnswer, questionTitle }, index) => (
              <div
                className={classNames('py-4 px-2 border border-red-500', {
                  '!border-green-500': userAnswer === correctAnswer,
                })}
              >
                <span className='mr-3'>{index + 1}.</span>
                <span>{questionTitle}</span>
              </div>
            )
          )}
        </div>
      )}
    </div>
  );
};

export default TestResult;
