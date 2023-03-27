import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from 'redux/hooks';
import { getTestByIdAsync } from 'redux/currectTest/action';

import TestInfo from 'components/PassingTest/TestInfo';
import Test from 'components/PassingTest/Test';

const HEADER = [
  {
    name: 'Назва тесту',
    field: 'nameTest',
    className: '!w-[300px]',
  },
  {
    name: 'Кількість питань',
    field: 'questionsLength',
    className: '!w-[150px]',
  },
  {
    name: 'Результат',
    field: 'result',
    className: '!w-[150px]',
  },
];

const PassingTest = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const dispatch = useAppDispatch();
  const { testItem } = useAppSelector((state) => state.testItem);

  const [params] = useSearchParams();

  const testId = params.get('testId');

  useEffect(() => {
    if (testId) dispatch(getTestByIdAsync(testId));
  }, [dispatch]);

  const handleClick = () => {
    setCurrentStep((prev) => ++prev);
  };

  if (!testItem) return null;

  return (
    <div className='flex flex-col items-center mt-5'>
      <div className='flex flex-col items-center'>
        {currentStep === 1 ? (
          <TestInfo
            handleClick={handleClick}
            headerTable={HEADER}
            testData={testItem}
          />
        ) : (
          <Test testItem={testItem?.[0]} />
        )}
      </div>
    </div>
  );
};

export default PassingTest;
