import React, { FC, useEffect } from 'react';

import { putTestAsync } from 'redux/currectTest/action';
import { useAppDispatch } from 'redux/hooks';
import { TestItem } from 'redux/types';
import { QuestionItem } from '../types';
import DetailedStatistics from './DetailedStatistics';

interface Props {
  testId: string | null;
  resultTest: number;
  testItem: TestItem;
  questions: QuestionItem[];
}

const TestResult: FC<Props> = ({ testId, testItem, questions, resultTest }) => {
  const resultPercent = Math.round((resultTest / questions.length) * 100);

  const userGradeTest = testItem?.testGrades
    .map(({ from, to, gradeName }) => {
      if (resultPercent >= Number(from) && resultPercent <= Number(to)) {
        return gradeName;
      }
      return null;
    })
    .find((item) => item !== null);

  const dispatch = useAppDispatch();

  useEffect(() => {
    const value = {
      ...testItem,
      completed: true,
      result: resultPercent,
    };

    if (testId) dispatch(putTestAsync(testId, value));
  }, [dispatch]);

  return (
    <div className='mb-5'>
      <div className='grid gap-3 text-xl text-center'>
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

      <DetailedStatistics
        questions={questions}
        resultTest={resultTest}
        testId={testId}
      />
    </div>
  );
};

export default TestResult;
