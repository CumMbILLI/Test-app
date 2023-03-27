import React, { FC, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { putTestAsync } from 'redux/currectTest/action';
import { useAppDispatch } from 'redux/hooks';
import { TestItem } from 'redux/types';
import { QuestionItem } from './Test';

interface Props {
  resultTest: number[];
  testItem: TestItem;
  questions: QuestionItem[];
}

const TestResult: FC<Props> = ({ testItem, questions, resultTest }) => {
  const dispatch = useAppDispatch();

  const [params] = useSearchParams();

  const testId = params.get('testId');

  const resultPercent = (resultTest.length / questions.length) * 100;

  const wrongAnswersCount = questions.length - resultTest.length;

  const userGradeTest = testItem?.testGrades.filter(
    ({ from, to }) =>
      resultPercent >= Number(from) && resultPercent <= Number(to)
  );

  useEffect(() => {
    const value = {
      ...testItem,
      completed: true,
      result: resultPercent,
    };

    if (testId) dispatch(putTestAsync(testId, value));
  }, [dispatch]);

  return (
    <div className='text-center'>
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
        <span>Ваш ранг: {userGradeTest?.[0].gradeName}</span>
      </div>

      <div className='text-base flex flex-col text-left border-t border-black mt-5 gap-2 py-2 px-4'>
        <span>Кількість питань: {questions.length}</span>
        <span>Кількість правильних відповідей: {resultTest.length}</span>
        <span>Кількість неправильних відповідей: {wrongAnswersCount}</span>
      </div>
    </div>
  );
};

export default TestResult;
