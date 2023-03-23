import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import TestInfo from 'components/PassingTest/TestInfo';
import { useAppDispatch, useAppSelector } from 'redux/hooks';
import { getTestByIdAsync } from 'redux/currectTest/action';
import Test from 'components/PassingTest/Test';

const HEADER = [
  {
    name: 'Назва тесту',
    field: 'nameTest',
    className: '!w-[300px]',
  },
  {
    name: 'Кількість питань',
    field: 'quesionsLength',
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

  const [param] = useSearchParams();

  const testId = param.get('testId');

  useEffect(() => {
    dispatch(getTestByIdAsync(testId!));
  }, [dispatch, testId]);

  const handleClick = () => {
    setCurrentStep((prev) => ++prev);
  };

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
          <Test questionsTest={testItem?.[0].questionsTest} />
        )}
      </div>
    </div>
  );
};

export default PassingTest;
