import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from 'redux/hooks';
import { getTestByIdAsync } from 'redux/currectTest/action';

import TestInfo from 'components/PassingTest/TestInfo';
import Test from 'components/PassingTest/Test';
import Loader from 'components/Loader/Loader';

const PassingTest = () => {
  const dispatch = useAppDispatch();
  const { testItem, loading } = useAppSelector((state) => state.testItem);

  const [params, setParams] = useSearchParams();

  const testId = params.get('testId');

  useEffect(() => {
    if (testId) dispatch(getTestByIdAsync(testId));
  }, [dispatch, testId]);

  const handleClick = () => {
    setParams(`testId=${params.get('testId')}&questionIdx=0`);
  };

  if (loading) return <Loader />;

  if (!testItem) return null;

  return (
    <div className='flex flex-col items-center mt-5'>
      <div className='flex flex-col items-center'>
        {!params.get('questionIdx') ? (
          <TestInfo handleClick={handleClick} testData={testItem} />
        ) : (
          <Test testItem={testItem?.[0]} />
        )}
      </div>
    </div>
  );
};

export default PassingTest;
