import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from 'redux/hooks';
import { getTestByIdAsync } from 'redux/listTest/action';

const PassingTest = () => {
  const dispatch = useAppDispatch();
  const { testItem } = useAppSelector((state) => state.testItem);

  const [param] = useSearchParams();

  const testId = param.get('id');

  useEffect(() => {
    dispatch(getTestByIdAsync(testId!));
  }, [dispatch, testId]);

  return <div></div>;
};

export default PassingTest;
