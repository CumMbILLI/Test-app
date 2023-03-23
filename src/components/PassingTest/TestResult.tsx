import React, { FC, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { putTestAsync } from 'redux/currectTest/action';
import { useAppDispatch, useAppSelector } from 'redux/hooks';

interface Question {
  id: number;
  userAnswer: string | null;
  image?: string;
  questionTitle: string;
  correctAnswer: string;
  answers: string[];
}

interface Props {
  resultTest: Question[];
  questions: Question[];
}

const TestResult: FC<Props> = ({ questions, resultTest }) => {
  const dispatch = useAppDispatch();
  const { testItem } = useAppSelector((state) => state.testItem);

  const [param] = useSearchParams();

  const testId = param.get('testId');

  const resultPrecent = (resultTest.length / questions.length) * 100;

  const wrongAnser = questions.length - resultTest.length;

  const userGradeTest = testItem?.[0].gradesTest.filter(
    ({ from, to }) =>
      resultPrecent >= Number(from) && resultPrecent <= Number(to)
  );

  console.log(userGradeTest);

  useEffect(() => {
    const value = {
      ...testItem?.[0],
      completed: true,
      result: resultPrecent,
    };

    dispatch(putTestAsync(testId!, value));
  }, [dispatch]);

  return (
    <div className='text-center'>
      <div className='grid gap-3 text-xl'>
        <h2 className='text-3xl'>Результат тесту</h2>
        <span>
          Ваш результат:{' '}
          <span
            className={resultPrecent > 50 ? 'text-green-600' : 'text-red-600'}
          >
            {resultPrecent}%
          </span>
        </span>
        <span>Ваш ранг: {userGradeTest?.[0].gradeName}</span>
      </div>

      <div className='text-base flex flex-col text-left border-t border-black mt-5 gap-2 py-2 px-4'>
        <span>Кількість питань: {questions.length}</span>
        <span>Кількість правильних відповідей: {resultTest.length}</span>
        <span>Кількість неправильних відповідей: {wrongAnser}</span>
      </div>
    </div>
  );
};

export default TestResult;
